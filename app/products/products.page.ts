import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {

  searchText: string;
  products = [];
  id: any;
  currentUser: string;
  public username;


  constructor(private api: ApiService, private route: Router, private router: ActivatedRoute) {
    this.getProducts();
    this.ngOnInit();
}

  ngOnInit() {
    this.getProducts();
    this.route.navigated = false;
  }

  getProducts = () => {
    this.api.getallProducts().subscribe(
      data => {
        this.products = data;
      },
      error => {
        console.log(error);
      }
    );
  }

  getCurrentUser() {
    // tslint:disable-next-line: radix
    const pUser = parseInt(this.router.snapshot.paramMap.get('id'));
    this.username = pUser;
    this.currentUser = localStorage.getItem('username');
    console.log(this.currentUser);
  }

  onSelect(product) {
    // tslint:disable-next-line: max-line-length
    this.route.navigate(['/storeproductview', product.id, product.category, product.brand_name, product.product_name, product.product_img,
   product.product_desc, product.product_quantity, product.product_srp, product.product_cost, product.user_id]);
  }

}
