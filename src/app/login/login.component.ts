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
  url:string = 'http://localhost:8080/auth/login';
  username = new FormControl('');
  password = new FormControl('');
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
        console.log(response);
        this.router.navigate(['/profile']);
      },
      error: (e) =>
      {
        alert('username or password incorrect, pls try it again');
      }
    });
  }
}
