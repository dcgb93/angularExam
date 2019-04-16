import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'basicApp';
  count: number = 0;
  increment() {
    this.count++;
    if(this.count % 2 == 0){
      document.getElementById("zero").style.fontSize = "xx-large";
    } else
    document.getElementById("zero").style.fontSize = "small";
  }
}
