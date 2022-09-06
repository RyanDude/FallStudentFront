import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.test();
  }
  test(){
    this.http.get('http://localhost:8080/hi',{ observe: 'response', withCredentials: true})
      .subscribe(data=>{console.log(data);alert("it works!")});
  }
}
