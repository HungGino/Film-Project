import { Injectable } from '@angular/core';
import { User } from '../Models/user'; //import class user
import { UserLogin } from '../Models/user-login'; // import class user-login
import { Observable } from 'rxjs/Observable';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map'
import { log } from 'util';

@Injectable()
export class UserService {
  //Link trỏ đến api backend  
  private apiUrl = 'http://sv.myclass.vn/api/user/registeruser';
  constructor(private _http: Http) { }
  public TaoTaiKhoan(user: User): Observable<any> {
    //Để post được json lên server phải có header và body : tùy backend quy định khác nhau
    let header = new Headers();
    header.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    //Body là nội dung tham số gửi lên server ở đây là chuỗi json với tên tham số là data (server quy định)
    let body = `data=${JSON.stringify(user)}`;
    var obServe = this._http.post(this.apiUrl, body, { headers: header }).map((result: Response) => result.json());
    return obServe;
  }

  private apiLogin = 'http://sv.myclass.vn/api/user/login';
  public DangNhap(userLogin: UserLogin) {
    //Để post được json lên server phải có header và body : tùy backend quy định khác nhau
    let header = new Headers();
    header.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    let body = `data=${JSON.stringify(userLogin)}`;
    //Gọi service đăng nhập 
    let userResult: UserLogin = new UserLogin();
    let obServe = this._http.post(this.apiLogin, body, { headers: header }).map((result: Response) => result.json());
    obServe.subscribe((result: any) => {
      //Lấy về kết quả => kiểm tra kết quả
      let kq = result;
      if (kq == 'The account or password is incorrect') {
        kq = null;
      }
      else {
        //Đăng nhập thành công thì lấy thông tin lưu vào localstorage
        userResult.UserName = kq.UserName;
        userResult.FullName = kq.FullName;
        userResult.Email = kq.Email;
        userResult.Status = kq.Status;
        userResult.GroupID = kq.GroupID;
        //Xóa local đăng nhập rồi xét lại
        localStorage.removeItem('localUser');
        localStorage.setItem('localUser', JSON.stringify(userResult));
      }
    });
  }
  //Kiểm tra đăng nhập
  public KiemTraDangNhap(): boolean {
    //Kiểm tra localstorage có item localuser chưa có => đã đăng nhập và ngược lại
    let user = localStorage.getItem("localUser");
    if (user != null) {
      return true;
    }
    return false;
  }
  //Lấy thông tin đăng nhập
  public LayThongTinDangNhap(): UserLogin {
    if (this.KiemTraDangNhap()) {
      let user: UserLogin = JSON.parse(localStorage.getItem("localUser"));
      return user;
    }
    return null;
  }
  //Đăng xuất
  public DangXuat(): void {
    localStorage.removeItem('localUser');
  }







}


//     private serializeObj(obj) {
//       var result = [];
//       for (var property in obj)
//           result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
//       return result.join("&");
//   }
