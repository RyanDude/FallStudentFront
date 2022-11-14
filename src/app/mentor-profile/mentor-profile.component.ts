import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mentor-profile',
  templateUrl: './mentor-profile.component.html',
  styleUrls: ['./mentor-profile.component.css']
})
export class MentorProfileComponent implements OnInit {
  genders:string[] = ['Male', 'Female'];
  titles:string[] = ['Lecturer or Assistant Professor','Senior Assistant Professor',
    'Associate Professor','Senior Associate professor',
    'Professor'];
  races:string[] = ['White',
    'Black or African American',
    'American Indian or Alaska Native',
    'Asian',
    'Native Hawaiian or Other Pacific Islander'];

  name = new FormControl('');
  email = new FormControl('');
  current_employer = new FormControl('');
  gender?:string;
  title?:string;
  race?:string;
  constructor(private http:HttpClient, private router:Router) { }

  ngOnInit(): void {
    this.http.get<any>("http://18.234.133.209:8080/mentor/profile", {observe: 'response', withCredentials: true}).subscribe(
      {
        next:(response)=>{
          console.log(response);
          this.name = new FormControl(response.body.inner.name);
          this.email = new FormControl(response.body.inner.email);
          this.current_employer = new FormControl(response.body.inner.current_employer);
          this.gender = response.body.inner.gender;
          this.title = response.body.inner.title;
          this.race = response.body.inner.race;
        },
        error:(e)=>{alert(e);}
      }
    );
  }

  update(){
    const headers = { 'content-type': 'application/json'};
    const body = {
      "name": this.name.value,
      "email": this.email.value,
      "current_employer": this.current_employer.value,
      "gender": this.gender,
      "title": this.title,
      "race": this.race,
    };
    this.http.post("http://18.234.133.209:8080/mentor/update", body, {'headers':headers,observe: 'response', withCredentials: true}).subscribe({
      next:(response)=>{
        console.log(response);
      },
      error:(e)=>{}
    });
  }

}
