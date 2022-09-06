import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  hide:boolean = false;
  title = 'front1';
  onclick():void{
    this.hide = true;
  }
  test(){
    alert("clicked");
  }
}
