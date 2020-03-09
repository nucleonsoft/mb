import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-userdb',
  templateUrl: './userdb.page.html',
  styleUrls: ['./userdb.page.scss'],
  providers: [ApiService]
})
export class UserdbPage implements OnInit {

  users = [];
  constructor(private api: ApiService, private http: HttpClient, private router: Router) {
    this.getUsers();
   }

   getUsers = () => {
    this.api.getallUsers().subscribe(
      data => {
       this.users = data;
      },
      error => {
        console.log(error);
      }
    );
  }

  deleteUser = (id) => {
    this.http.delete('http://127.0.0.1:5000/user/' + id, ).subscribe(data => {
     console.log('Deleted', data);
     this.getUsers();
   });
 }

  ngOnInit() {
  }

}
