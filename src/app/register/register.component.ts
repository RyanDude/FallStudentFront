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
  url:string = '';
  name = new FormControl('');
  password = new FormControl('');
  user_role?:any;
  roles:string[] = ['STUDENT','MENTOR','ADMIN'];
  constructor(private http:HttpClient, private router:Router) { }
  ngOnInit(): void {
  }
  submit():void{
    const headers = { 'content-type': 'application/json'};
    const body= {
      'name':this.name.value,
      'password':this.password.value,
    };

    if(this.user_role == 'STUDENT'){this.url = 'http://18.234.133.209:8080/studentreg';}
    else if(this.user_role == 'MENTOR'){this.url = 'http://18.234.133.209:8080/mentorreg';}
    else if(this.user_role == 'ADMIN'){this.url = 'http://18.234.133.209:8080/adminreg';}

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
