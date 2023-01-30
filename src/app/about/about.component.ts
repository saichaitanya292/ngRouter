import { Component, OnInit } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';
import { timer } from 'rxjs';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  clickObservable: Observable<Event> = fromEvent(document,'click');



  constructor() { }
  ngOnInit(): void {
    this.subscribeToObservable();
    this.subscribeToObservablenum();
  }
  private subscribeToObservable() {
      this.clickObservable.subscribe(() => { 
      console.log(`The dom has been clicked!`);
    })

  }

  private subscribeToObservablenum() {
    const source = timer(1000, 2000);
    source.subscribe(val => console.log(val));
  
}


  public nearmealerthome(event:any)
  {
    alert(event.target.value)
  }



}
