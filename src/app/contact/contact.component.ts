import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  firstname;
  lastname;
  phone;
  email;

  constructor(private us:UserService) { }

  ngOnInit() {
  }
  // addData(){
  //   this.us.addData(this.firstname,this.lastname,this.phone,this.email);
  // }

}
