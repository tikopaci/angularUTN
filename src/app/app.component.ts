import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'clase1';
  usuarios: Array<{id: number, username: string, edad: number}> = [
    {
      id: 1,
      username: 'chelma',
      edad: 30
    },
    {
      id: 2,
      username: 'manique',
      edad: 13
    },
    {
      id: 3,
      username: 'cholo',
      edad: 34
    }
  ];

  usuarioBusqueda: string = '';
  usuariosEncontrados: Array<{id: number, username: string, edad: number}> = this.usuarios;

  handlerInput(e: any) {
    this.usuarioBusqueda = e.target.value;
    console.log(this.usuarioBusqueda);
  }

  submitButton() {
    this.usuariosEncontrados = this.usuarios.filter((usuario) => 
      usuario.username === this.usuarioBusqueda
    );
  }
}
