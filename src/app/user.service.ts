import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  url = 'http://localhost:3000/user';
  constructor(private http: HttpClient) { }
  addData(firstname,lastname,phone,email) {
      const obj = {firstname,lastname,phone,email};
      this
          .http
          .post(`${this.url}/add`, obj)
          .subscribe(res => console.log(res));
  }
    
  getData() {
    return(
    this
        .http
        .get(`${this.url}`)
    );
  }
  delData(id) {
      return this.http.get(`${this.url}/delete/${id}`).subscribe();
  }


    up_data(firstname,lastname,phone,email, id) {

      const obj = {
          firstname: firstname,
          lastname: lastname,
          phone: phone,
          email:email
        };
      this
        .http
        .post(`${this.url}/update/${id}`, obj)
        .subscribe(res => console.log(firstname));
    }
}


