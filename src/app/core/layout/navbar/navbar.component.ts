import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  items: Array<{links: string, title: string}> = [
    { links: '/productos', title: 'Productos' },
    { links: '/personajes', title: 'Personajes' }
  ];

  constructor() { 
    console.log("Me ejecuto unicamente cuando se instancia el componente");
  }

  ngOnInit(): void {
    console.log("Me ejecuto cada vez que abro el componente");
  }

}
