import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-facts',
  templateUrl: './facts.component.html',
  styleUrls: ['./facts.component.css']
})

export class FactsComponent implements OnInit {
  resume: any = null;
  constructor(private http: HttpClient) {}
  ngOnInit() {
    this.http.get('https://catfact.ninja/fact')
      .subscribe(res => {
        this.resume = res;
        console.log(res)
      });
  }

}

