import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UserService } from '../../Service/user.service'; // import service
import { UserLogin } from '../../Models/user-login'; // import class UserLogin

import { Router } from '@angular/router';

// Khai báo jquery
declare var jquery:any;
declare var $:any;

@Component({
  selector: 'app-user-sign-in',
  templateUrl: './user-sign-in.component.html',
  styleUrls: ['./user-sign-in.component.css']
})
export class UserSignInComponent implements OnInit {

  public userStatus:boolean;
  @Output () ktdangnhap = new EventEmitter();
  // Hàm hiển thị đăng kí
  SignUp(){
    this.userStatus = false;
    // Đẩy giá trị biến userStatus ra component cha    
    this.ktdangnhap.emit(this.userStatus);
  }
  
 
  private UserLogin:UserLogin;

  
  @Output () tinhtrangdangnhap = new EventEmitter();

  constructor(private userService:UserService, private router:Router) { }
  
  Login(usLogin:UserLogin){
    usLogin.GroupID = 'GP04';  
    console.log(usLogin);
    this.userService.DangNhap(usLogin);
    setTimeout(() => {
      if (this.userService.KiemTraDangNhap() == true){
        console.log('Đăng nhập thành công');
        this.router.navigate(['']);

        $('#myModal').modal('hide');
      }
      else{
        console.log('Tên đăng nhập hoặc mật khẩu không đúng');
     
      }
    }, 200);
  
  }

  ngOnInit() {
  }

}
