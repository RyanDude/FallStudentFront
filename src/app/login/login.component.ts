import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  url:string = 'http://18.234.133.209:8080/auth/login';
  username = new FormControl('');
  password = new FormControl('');
  role:any = "";
  constructor(private http:HttpClient, private router:Router) { }

  ngOnInit(): void {
  }
  submit():void {
    const headers = { 'content-type': 'application/json'};
    const body= {
      'username':this.username.value,
      'password':this.password.value
    };
    this.http.post<any>(this.url, body, { headers: headers, observe: 'response', withCredentials: true}).subscribe({
      next: (response) =>
      {
        this.role = response.headers.get("Authorization");
        console.log(this.role);
        if(this.role == 'ROLE_STUDENT'){
          this.router.navigate(['/profile']);
        }else if(this.role == 'ROLE_MENTOR'){
          this.router.navigate(['/mentor']);
        }
        else if(this.role == 'ROLE_ADMIN'){
          this.router.navigate(['/profile']);
        }

      },
      error: (e) =>
      {
        alert('username or password incorrect, pls try it again');
      }
    });


  }
}
