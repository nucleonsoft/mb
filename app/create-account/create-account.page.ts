import { Component, OnInit } from '@angular/core';
import { FileChooser } from '@ionic-native/file-chooser/ngx';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.page.html',
  styleUrls: ['./create-account.page.scss'],
  providers: [ApiService]
})
export class CreateAccountPage implements OnInit {

  constructor(private http: HttpClientModule, private router: Router, private api: ApiService) { }
  confirmationMessage = 'New User has been added!';
  isAdded = false;

 userObject: object = {};
  addNewUser = (user) => {
    this.userObject = {
      username: user.username,
      name: user.name,
      email: user.email,
      mobile: user.mobile,
      user_password: user.user_password
    };
    /*this.http.post('http://127.0.0.1:5000/user', this.userObject).subscribe((res: Response) => {
      this.isAdded = true;*/

    this.api.adduserAPI(this.userObject).subscribe( res => {
          console.log(res);
          this.router.navigate(['/home']);
        },
        err => console.log(err)
      );
    }

  ngOnInit() {
  }

}
