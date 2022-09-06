import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  url:string = 'http://localhost:8080/studentreg';
  name = new FormControl('');
  password = new FormControl('');
  constructor(private http:HttpClient, private router:Router) { }
  ngOnInit(): void {
  }
  submit():void{
    const headers = { 'content-type': 'application/json'};
    const body= {
      'name':this.name.value,
      'password':this.password.value
    };

    this.http.post<any>(this.url, JSON.stringify(body), {'headers':headers}).subscribe(response=>{
      console.log(response.statusCode);
      if(response.statusCode == 200){
        alert("register successfully!");
        this.router.navigate(['/login']);
      }
      else {
        alert("username has been registered, pls try other username you want");
      }
    });
  }
}
