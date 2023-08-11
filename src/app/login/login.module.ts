import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginuserComponent } from './loginuser/loginuser.component';
import { RegisterComponent } from './register/register.component';
import { PasswordComponent } from './password/password.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [LoginuserComponent, RegisterComponent, PasswordComponent],
  imports: [
    CommonModule, 
    FormsModule],
  exports: [LoginuserComponent,
     RegisterComponent,
      PasswordComponent],
})
export class LoginModule {}
