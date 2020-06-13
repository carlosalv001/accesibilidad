import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'weight'];
  dataSource = ELEMENT_DATA;
  constructor() { }
  breakpoint: any;
  ngOnInit(): void {
    this.breakpoint = (window.innerWidth <= 510) ? 1 : 2;  
  }
  onResize(event) {
    this.breakpoint = (event.target.innerWidth <= 510) ? 1 : 2;
  }
}

export interface PeriodicElement {
  name: string;
  position: string;
  weight: number;

}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: "Miguel", name: 'González Salas', weight: 1.0079 },
  {position: "Juan Carlos", name: 'Alvarez Martinez', weight: 4.0026 },
  {position: "Hilda Anette", name: 'Avila Silva', weight: 6.941},
  {position: "José de Jesús", name: 'Padilla Guzmán', weight: 9.0122},
];
