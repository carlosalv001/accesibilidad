import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AcercaComponent} from '../acerca/acerca.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor( private router: Router) { }

  ngOnInit(): void {
  }

}
