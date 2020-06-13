import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acerca',
  templateUrl: './acerca.component.html',
  styleUrls: ['./acerca.component.css']
})
export class AcercaComponent implements OnInit {

  constructor() {
    console.log("HOla");
   }
   breakpoint: any;
   ngOnInit() {
     
     this.breakpoint = (window.innerWidth <= 510) ? 1 : 2;  
     /*if(window.innerWidth <= 550) {
         this.breakpoint = 1;
     } else if(window.innerWidth <= 750 ){
         this.breakpoint = 2;
     } else{
       this.breakpoint = 3;
     }*/
 }
 
 onResize(event) {
   this.breakpoint = (event.target.innerWidth <= 510) ? 1 : 2;
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
