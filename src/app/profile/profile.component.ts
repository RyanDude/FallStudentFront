import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  url:string = 'http://18.234.133.209:8080/student/info';
  email = new FormControl;
  selectedGender?:string;
  likedGender:string[] = ['Male', 'Female','Both'];
  selectedLikedGender?:string;
  positions:string[] = ['Lecturer or Assistant Professor','Senior Assistant Professor',
    'Associate Professor','Senior Associate professor',
    'Professor'];
  likedPos?:string;
  name = new FormControl('');
  pid = new FormControl('');
  genders:string[] = ['Male', 'Female'];
  constructor(private http:HttpClient, private router:Router) { }

  ngOnInit(): void {
    this.getInfo();
  }
  getInfo():void{
    this.http.get<any>(this.url,{observe: 'response', withCredentials: true}).subscribe(
      {
        next:(response:HttpResponse<any>)=>{
          console.log(response);
          console.log(response.body.email);
          this.email = new FormControl(response.body.email);
          this.pid = new FormControl(response.body.pid);
          this.name = new FormControl(response.body.name);
          this.likedPos = response.body.likedPos;
          this.selectedLikedGender = response.body.likedGender;
          this.selectedGender = response.body.gender;
        },
        error:(e)=>{
          alert(e);
        }
      }
    );
  }

  update():void{
    const headers = { 'content-type': 'application/json'};
    const body = {
      'email':this.email.value,
      'pid':this.pid.value,
      'name':this.name.value,
      'gender':this.selectedGender,
      'likedGender': this.selectedLikedGender,
      'likedPos':this.likedPos
    };
    console.log(body);
    this.http.post('http://18.234.133.209:8080/student/update', body, {'headers':headers,observe: 'response', withCredentials: true}).subscribe(
      {
        next:(response)=>{console.log(response)},
        error:(e)=>{alert(e);}
      }
    );
  }

}
