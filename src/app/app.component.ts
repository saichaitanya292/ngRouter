import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'App';
  public nearmealert()
  {
    alert("showphotos near me")
  }
  public nearmealerthome()
  {
    alert("Thanks for visiting photos of your area")
  }
}

