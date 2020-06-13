import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-preguntas',
  templateUrl: './preguntas.component.html',
  styleUrls: ['./preguntas.component.css']
})
export class PreguntasComponent implements OnInit {

  constructor() { }
  breakpoint: any;
  row;
  ngOnInit() {
    
    this.breakpoint = (window.innerWidth <= 710) ? 1 : 2;  
    this.row = (window.innerWidth <= 710) ? "2:2.5" : "1:1";
    /*if(window.innerWidth <= 550) {
        this.breakpoint = 1;
    } else if(window.innerWidth <= 750 ){
        this.breakpoint = 2;
    } else{ 
      this.breakpoint = 3;
    }*/
}

onResize(event) {
  this.breakpoint = (event.target.innerWidth <= 710) ? 1 : 2;
  this.row = (window.innerWidth <= 710) ? "2:2.5" : "1:1";
/*
  if(event.target.innerWidth <= 550) {
    this.breakpoint = 1;
} else if(event.target.innerWidth <= 750 ){
    this.breakpoint = 2;
} else{
  this.breakpoint = 3;
}*/
}
}
