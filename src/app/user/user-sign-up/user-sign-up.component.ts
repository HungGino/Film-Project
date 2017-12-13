import { Component, OnInit } from '@angular/core';
import { User } from '../../Models/user'; //import class User
import { UserService } from '../../Service/user.service'; //import service

@Component({
  selector: 'app-user-sign-up',
  templateUrl: './user-sign-up.component.html',
  styleUrls: ['./user-sign-up.component.css']
})
export class UserSignUpComponent implements OnInit {

  /*Danh sách nhóm
  public Groups:Array<any> = [  
  {Id:'GP01',Name:'Nhóm 1'},
  {Id:'GP02',Name:'Nhóm 2'},
  {Id:'GP03',Name:'Nhóm 3'},
  {Id:'GP04',Name:'Nhóm 4'},
  {Id:'GP05',Name:'Nhóm 5'},
  {Id:'GP06',Name:'Nhóm 6'},
  {Id:'GP07',Name:'Nhóm 7'},
  {Id:'GP08',Name:'Nhóm 8'},
  {Id:'GP09',Name:'Nhóm 9'},
  {Id:'GP010',Name:'Nhóm 10'}]*/

private userRegister:User;

constructor(private userService:UserService) { }

RegisterUser(user:any){
  // Nhóm 04
  user.GroupID ='GP04';
  this.userService.TaoTaiKhoan(user).subscribe((result:any) => {
    this.userRegister = result;
    console.log(result);
    }, 
    error => {
    this.userRegister = error;
    }); 
}

  ngOnInit() {
  }

}
