import {Component, OnInit} from '@angular/core';
import { IpServicService } from './ip-servic.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  ip?:string;
  ngOnInit(): void{
    this.service.getClientIPAddress().subscribe((response)=>{
      console.log(response.body);
      this.ip = response.body.ip;
    });
  }
  constructor(private service:IpServicService) {

  }
  hide:boolean = false;
  title = 'front1';
  onclick():void{
    this.hide = true;
  }
  test(){
    alert("clicked");
  }
}
