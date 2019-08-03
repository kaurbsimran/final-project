import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  obj: any;
  firstname;
  lastname;
  phone;
  email;  
  updateId: string;
  constructor(private route: ActivatedRoute,
    private router: Router,
    private us: UserService) {
    this.updateId = route.snapshot.params['id'];
  }

  ngOnInit() {
    // this.obj = this.us.editData(this.updateId);
  }

  up_data() {
    // this.updateId=this.updateId.substr(1);
    this.route.params.subscribe(params => {
      this.us.up_data(this.firstname, this.lastname, this.phone, this.email, this.updateId);
      this.router.navigate(['login-get']);
      console.log(this.firstname)
    });


  }
}
