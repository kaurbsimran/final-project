import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  firstname;
  lastname;
  phone;
  email;

  constructor(private us:UserService) { }

  ngOnInit() {
  }
  addData(){
    this.us.addData(this.firstname,this.lastname,this.phone,this.email);
  }
}
