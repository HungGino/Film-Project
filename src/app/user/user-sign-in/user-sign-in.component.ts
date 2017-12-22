import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UserService } from '../../Service/user.service'; // import service
import { UserLogin } from '../../Models/user-login'; // import class UserLogin

import { Router } from '@angular/router';

// Khai báo jquery
declare let $: any;
declare let swal: any;

@Component({
  selector: 'app-user-sign-in',
  templateUrl: './user-sign-in.component.html',
  styleUrls: ['./user-sign-in.component.css']
})
export class UserSignInComponent implements OnInit {
  private UserLogin: UserLogin;
  private kqdangnhap: boolean;
  public userStatus: boolean;
  @Output() ktdangnhap = new EventEmitter();
  @Output() tinhtrangdangnhap = new EventEmitter();

  // Hàm hiển thị đăng kí
  SignUp() {
    this.userStatus = false;
    // Đẩy giá trị biến userStatus ra component cha
    this.ktdangnhap.emit(this.userStatus);
  }

  constructor(private userService: UserService, private router: Router) { }

  Login(usLogin: UserLogin) {
    usLogin.GroupID = 'GP03';
    console.log(usLogin);
    this.userService.DangNhap(usLogin);
    setTimeout(() => {
      if (this.userService.KiemTraDangNhap() === true) {
        console.log('Đăng nhập thành công');
        swal({
          position: 'center-center',
          type: 'success',
          title: 'Đăng nhập thành công',
          showConfirmButton: true,
          timer: 1500
        });
        $('#myModal').modal('hide');
        // Đẩy giá trị kqdangnhap ra component cha để xét hiển thị
        this.kqdangnhap = true;
        this.tinhtrangdangnhap.emit(this.kqdangnhap);
      } else {
        // Đẩy giá trị kqdangnhap ra component cha để xét hiển thị
        this.kqdangnhap = false;
        this.tinhtrangdangnhap.emit(this.kqdangnhap);
        console.log('Tên đăng nhập hoặc mật khẩu không đúng');
        swal({
          position: 'center-center',
          type: 'error',
          title: 'Tên đăng nhập hoặc mật khẩu không đúng',
          showConfirmButton: true,
          timer: 1500
        });
      }
    }, 200);

  }

  ngOnInit() {
  }

}
