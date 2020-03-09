import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  tokenvalue: string;
  uri = 'http://127.0.0.1:5000';
  loginUri = 'http://127.0.0.1:5000/login';
  productUri = 'http://127.0.0.1:5000/product';
  httpHeaders = new HttpHeaders();
  userID;

  constructor(private http: HttpClient, private router: Router) { }

  getallUsers(): Observable<any> {
    return this.http.get(this.uri + '/user', {headers: this.httpHeaders});
  }

  getallProducts(): Observable<any> {
    return this.http.get(this.uri + '/product',
    {headers: this.httpHeaders});
  }

  getallUserProducts(): Observable<any> {
    return this.http.get(this.uri + '/userproduct',
    {headers: this.httpHeaders});
  }

  // tslint:disable-next-line: variable-name
  getoneUserProduct(): Observable<any> {
    // return this.http.get(`${this.uri + '/oneuserproduct'}/${userID}`);
    return this.http.get(this.uri + '/oneuserproduct');
    // {headers: this.httpHeaders});
  }

  adduserAPI(userData): Observable<any> {
    return this.http.post('http://127.0.0.1:5000/user', userData);
  }

  addtodoAPI(productData): Observable<any> {
    return this.http.post('http://127.0.0.1:5000/product', productData);
  }

  login(user): Observable<any> {
    return this.http.post<any>(this.loginUri, user);
  }

  loggedIn() {
    return !!sessionStorage.getItem('token');
  }

  getToken() {
    return sessionStorage.getItem('token');
  }

  // tslint:disable-next-line: variable-name
  updateProductAPI(product_desc, product_quantity, product_srp, product_cost, id) {
    const obj = {
      id,
      product_desc,
      product_quantity,
      product_srp,
      product_cost
    };
    this.http.put(`${this.uri}/userproduct/${id}`, obj)
    .subscribe(value => {
      const submit = value;
      console.log(value);
    });
  }
}
