import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserSignUpComponent } from './user-sign-up/user-sign-up.component';
import { UserSignInComponent } from './user-sign-in/user-sign-in.component';
import { FormsModule } from '@angular/forms';
import { MyDatePickerModule } from 'mydatepicker'; // import datetime control
import { UserService } from '../Service/user.service'; // import service



@NgModule({
  imports: [
    CommonModule, FormsModule, MyDatePickerModule
  ],
  declarations: [UserSignUpComponent, UserSignInComponent],
  exports: [UserSignUpComponent, UserSignInComponent],
  providers: [UserService],
})
export class UserModule { }
