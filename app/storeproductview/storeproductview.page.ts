import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-storeproductview',
  templateUrl: './storeproductview.page.html',
  styleUrls: ['./storeproductview.page.scss'],
})
export class StoreproductviewPage implements OnInit {

  public productId;
  public productCat;
  public prodBrand;
  public productName;
  public productImg;
  public productDesc;
  public productQuantity;
  public productSrp;
  public productCost;
  public productUser;
  public currentUser;
  user;

  constructor(private router: ActivatedRoute, private route: Router) { }

  // :category/:brand_name/:product_name/:product_img/:product_desc/:product_quantity/:product_srp/:user_id

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

    // tslint:disable-next-line: radix
    const pCost = parseInt(this.router.snapshot.paramMap.get('product_cost'));
    this.productCost = pCost;

    // tslint:disable-next-line: radix
    const pUser = this.router.snapshot.paramMap.get('user_id');
    this.productUser = pUser;

    this.currentUser = localStorage.getItem('username');
  }

  onSelect() {
    // tslint:disable-next-line: max-line-length
    this.route.navigate(['/userstore', this.productUser]);
  }

}
