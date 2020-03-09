import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.page.html',
  styleUrls: ['./editproduct.page.scss'],
})
export class EditproductPage implements OnInit {

  // tslint:disable-next-line: variable-name
  product_desc; product_quantity; product_srp; product_cost; id: number;

  constructor(private api: ApiService, private route: ActivatedRoute) { }

  // tslint:disable-next-line: variable-name
  updateProduct(product_desc, product_quantity, product_srp, product_cost, id) {
    product_desc = this.product_desc,
    product_quantity = this.product_quantity;
    product_srp = this.product_srp;
    product_cost = this.product_cost;

    this.route.paramMap.subscribe(params => {
    this.api.updateProductAPI(product_desc, product_quantity, product_srp, product_cost, params.get('id'));
    });
  }

  ngOnInit() {
        // tslint:disable-next-line: deprecation
        this.route.paramMap.subscribe(
          (params) => {
            console.log(params.get('id'));
        });
  }
}
