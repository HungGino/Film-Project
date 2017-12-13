import { Component, OnInit, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { Router } from '@angular/router';
import { UserSignUpComponent } from '../../user/user-sign-up/user-sign-up.component';
import { UserSignInComponent } from '../../user/user-sign-in/user-sign-in.component';
// Khai báo jquery
declare var jquery:any;
declare var $:any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  private userStatus:boolean;
  private loginStatus:boolean;

  constructor(private router:Router) { }
  // Router về trang chủ
  RouterHome(){
    this.router.navigate(['']);
  }
  // Hàm hiển thị đăng nhập
  SignIn(){
    this.userStatus = true;
  }
  // Hàm lấy giá trị biến userStatus từ UserSignInComponent
  checkSignUp(value){
    this.userStatus = value;
  }

  
  
  ngOnInit() {
  }

}

