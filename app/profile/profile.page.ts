import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ProductsPage } from '../products/products.page';
import { merge } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor(private api: ApiService, private route: Router, private http: HttpClient, private activatedRoute: ActivatedRoute) { }

  username: string;
  email: string;
  mobile: string;
  name: string;
  userproducts = [];
  searchText: string;
  refresh;
  uri = 'http://127.0.0.1:5000';


  ngOnInit() {
    this.getUserProducts();
    this.name = localStorage.getItem('name');
    this.username = localStorage.getItem('username');
    this.email = localStorage.getItem('email');
    this.mobile = localStorage.getItem('mobile');
    this.route.navigated = false;
}

  getUserProducts = () => {
    this.api.getallUserProducts().subscribe(
      data => {
        this.userproducts = data;
      },
      error => {
        console.log(error);
      }
    );
  }

  doRefresh(refresh) {
    this.ngOnInit();
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      refresh.target.complete();
    }, 2000);
  }

  deleteProduct = (id) => {
    this.http.delete('http://127.0.0.1:5000/userproduct/' + id, ).subscribe(data => {
     console.log('Deleted', data);
     this.getUserProducts();
   });
 }

 // :category/:brand_name/:product_name/:product_img/:product_desc/:product_quantity/:product_srp/:product_cost'
 onSelect(product) {
   // tslint:disable-next-line: max-line-length
   this.route.navigate(['/viewproduct', product.id, product.category, product.brand_name, product.product_name, product.product_img,
  product.product_desc, product.product_quantity, product.product_srp]);
 }

}
