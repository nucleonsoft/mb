import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ProductsPage } from '../products/products.page';
import { ProfilePage } from '../profile/profile.page';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-viewproduct',
  templateUrl: './viewproduct.page.html',
  styleUrls: ['./viewproduct.page.scss'],
})
export class ViewproductPage implements OnInit {

  public productId;
  public productCat;
  public prodBrand;
  public productName;
  public productImg;
  public productDesc;
  public productQuantity;
  public productSrp;

  userproducts = {};

  constructor(private api: ApiService, private route: Router, private router: ActivatedRoute, private http: HttpClient) {
   }

   deleteProduct = (id) => {
    this.http.delete('http://127.0.0.1:5000/userproduct/' + id, ).subscribe(data => {
     console.log('Deleted', data);
     this.route.navigate(['/profile']);
   });
 }

   // :category/:brand_name/:product_name/:product_img/:product_desc/:product_quantity/:product_srp

   ngOnInit() {
    // tslint:disable-next-line: radix
    const pId = parseInt(this.router.snapshot.paramMap.get('id'));
    this.productId = pId;

    // tslint:disable-next-line: radix
    const pCat = this.router.snapshot.paramMap.get('category');
    this.productCat = pCat;

    // tslint:disable-next-line: radix
    const pBrand = this.router.snapshot.paramMap.get('brand_name');
    this.prodBrand = pBrand;

    // tslint:disable-next-line: radix
    const pName = this.router.snapshot.paramMap.get('product_name');
    this.productName = pName;

    // tslint:disable-next-line: radix
    const pImg = this.router.snapshot.paramMap.get('product_img');
    this.productImg = pImg;

    // tslint:disable-next-line: radix
    const pDesc = this.router.snapshot.paramMap.get('product_desc');
    this.productDesc = pDesc;

    // tslint:disable-next-line: radix
    const pQ = parseInt(this.router.snapshot.paramMap.get('product_quantity'));
    this.productQuantity = pQ;

    // tslint:disable-next-line: radix
    const pSrp = parseInt(this.router.snapshot.paramMap.get('product_srp'));
    this.productSrp = pSrp;
   }
}
