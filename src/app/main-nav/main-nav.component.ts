import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent {
  row
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

    ngOnInit() {
     
      this.row = (window.innerWidth <= 510) ? "1:0.4": "1:0.05" ;  
      /*if(window.innerWidth <= 550) {
          this.breakpoint = 1;
      } else if(window.innerWidth <= 750 ){
          this.breakpoint = 2;
      } else{
        this.breakpoint = 3;
      }*/
  }
   
 onResize(event) {
  this.row = (event.target.innerWidth <= 510) ? "1:0.4": "1:0.05" ;
 }

  constructor(private breakpointObserver: BreakpointObserver) {}

  decir(){
    console.log("totis");
    console.log(document.getElementById("texto"));
   speechSynthesis.speak(new SpeechSynthesisUtterance(document.getElementById("texto").innerHTML));
 }

}
