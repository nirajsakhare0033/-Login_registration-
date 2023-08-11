import { Component } from '@angular/core';
import { User } from 'src/app/model/User';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  registeruserDetails: User[] = [];
  name: string = "";
  city: string = "";
  email: string = "";
  password: string = "";

  newRedisterUser:User=new User();

  btnRegisterUser(){
    this.newRedisterUser.name=this.name;
    this.newRedisterUser.city=this.city;
    this.newRedisterUser.email=this.email;
    this.newRedisterUser.password=this.password;

    this.registeruserDetails.push(this.newRedisterUser);

    console.log(this.registeruserDetails);
    alert("Name= "+this.name+" "+"email= "+this.email)
    this.newRedisterUser=new User();

  }

  


}
