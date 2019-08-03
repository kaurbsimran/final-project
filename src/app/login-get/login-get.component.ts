import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login-get',
  templateUrl: './login-get.component.html',
  styleUrls: ['./login-get.component.css']
})
export class LoginGetComponent implements OnInit {

  arr;
  // name;
  constructor(private us:UserService) { }

  ngOnInit() {
    this.getData();
  }
  getData() {
    this.us.getData().subscribe(data => { this.arr = data; });
}
delData(id) {
  this.us.delData(id);
}

}



