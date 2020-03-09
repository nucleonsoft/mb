import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-userstore',
  templateUrl: './userstore.page.html',
  styleUrls: ['./userstore.page.scss'],
})
export class UserstorePage implements OnInit {

  constructor(private api: ApiService, public router: ActivatedRoute) { }
  userproducts = [];

  ngOnInit() {
    this.getUserProducts();
  }

  // tslint:disable-next-line: variable-name
  getUserProducts = () => {
    this.api.getoneUserProduct().subscribe(
      data => {
        this.userproducts = data;
      },
      error => {
        console.log(error);
      }
    );
  }

}
