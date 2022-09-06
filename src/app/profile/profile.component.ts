import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  url:string = 'http://localhost:8080/student/info';
  email = new FormControl;
  selectedGender?:string;
  likedGender:string[] = ['Male', 'Female','Both'];
  selectedLikedGender?:string;
  positions:string[] = ['Lecturer or Assistant Professor','Senior Assistant Professor',
    'Associate Professor','Senior Associate professor',
    'Professor'];
  likedPos?:string[];
  name = new FormControl('');
  pid = new FormControl('');
  genders:string[] = ['Male', 'Female'];
  constructor(private http:HttpClient, private router:Router) { }

  ngOnInit(): void {
    this.getInfo();
  }
  getInfo():void{
    this.http.get(this.url,{observe: 'response', withCredentials: true}).subscribe(
      {
        next:(response)=>{
          console.log(response);
        },
        error:(e)=>{
          alert(e);
        }
      }
    );
  }

  selectGender(g:string){
    this.selectedGender = g;
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
    this.http.post('http://localhost:8080/student/update', body, {'headers':headers,observe: 'response', withCredentials: true}).subscribe(
      {
        next:(response)=>{console.log(response)},
        error:(e)=>{alert(e);}
      }
    );
  }

}
