import { Component, OnInit } from '@angular/core';
import { trigger, state, transition, animate, style } from '@angular/animations';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import * as $ from 'jquery';

import { FileUploader } from 'ng2-file-upload';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-userpage',
  templateUrl: './userpage.page.html',
  styleUrls: ['./userpage.page.scss'],
  animations: [
    trigger('fade', [
      transition('void => *', [
        style({opacity: 0 }),
        animate(500, style({opacity: 1 }))
      ])
    ])
  ]
})
export class UserpagePage implements OnInit {

prodURL = 'http://127.0.0.1:5000/product/';
// tslint:disable-next-line: max-line-length
public uploader: FileUploader = new FileUploader({ url: this.prodURL, removeAfterUpload: true });

username: string;
products = [];
filestring: string;
productObject: object = {};
localUrl;
value: any;
files: any;
filepath: string;
theInput;

constructor(private api: ApiService, private route: Router, private http: HttpClient) {
  this.ngOnInit();
  this.route.routeReuseStrategy.shouldReuseRoute = () => {
    return false;
 };
}

  compressImage(src, newX, newY) {
    return ((res, rej) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        const elem = document.createElement('canvas');
        elem.width = newX;
        elem.height = newY;
        const ctx = elem.getContext('2d');
        ctx.drawImage(img, 0, 0, newX, newY);
        const data = ctx.canvas.toDataURL();
        res(data);
      };
      img.onerror = error => rej(error);
    });
  }

 showPreviewImage(event: any) {
     if (event.target.files && event.target.files[0]) {
         const reader = new FileReader();
         // tslint:disable-next-line: no-shadowed-variable
         reader.onload = (event: any) => {
             this.localUrl = event.target.result;
             localStorage.setItem('image/64', this.localUrl);
             this.theInput = document.getElementById('product_img');
             this.theInput.value = localStorage.getItem('image/64');
         };
         reader.readAsDataURL(event.target.files[0]);
     }
 }

addNewProduct = (product) => {
  this.productObject = {
    brand_name: product.brand_name,
    category: product.category,
    product_name: product.product_name,
    product_img: product.product_img,
    product_desc: product.product_desc,
    product_quantity: product.product_quantity,
    product_srp: product.product_srp,
    product_cost: product.product_cost
  };
  this.api.addtodoAPI(this.productObject).subscribe( res => {
        console.log(res);
        this.route.navigated = false;
        this.route.navigate(['/products']);
      },
      err => console.log(err)
    );
}

  ngOnInit() {
    this.username = localStorage.getItem('username');
  }

}
