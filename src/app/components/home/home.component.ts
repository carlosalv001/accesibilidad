import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  breakpoint;
  row;
  constructor() { }
  onResize(event) {
    this.breakpoint = (event.target.innerWidth <= 710) ? 1 : 2;
    this.row = (window.innerWidth <= 450) ? "2:3" : "1:1";
  }
  ngOnInit() {
    
    this.breakpoint = (window.innerWidth <= 710) ? 1 : 2;  
    this.row = (window.innerWidth <= 450) ? "2:3" : "1:1";
  }
}
