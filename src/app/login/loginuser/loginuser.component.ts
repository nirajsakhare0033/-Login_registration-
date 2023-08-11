import { Component } from '@angular/core';
import { User } from 'src/app/model/User';
import { RegisterComponent } from '../register/register.component';

@Component({
  selector: 'app-loginuser',
  templateUrl: './loginuser.component.html',
  styleUrls: ['./loginuser.component.css'],
})
export class LoginuserComponent {

  
  loginUserDetail:User[]=[];
  name: string = '';
  password: string = '';
  newLoginUserDetails:User=new User();

  //registers: RegisterComponent = new RegisterComponent();

  btnLogin() {
    
    this.newLoginUserDetails.name=this.name
    this.newLoginUserDetails.password=this.password
    this.loginUserDetail.push(this.newLoginUserDetails)
    console.log(this.loginUserDetail);
    this.newLoginUserDetails = new User();
    //console.log(this.registers)
    
  }
}

