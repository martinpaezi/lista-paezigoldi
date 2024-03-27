import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'practica2';

  mostrarLista = true;

  estudiantes = [
    {
      nombre: "Obi-wan",
      nota:8,
      aprobado: true,
  },
  {
    nombre:"Ahsoka Tano",
    nota: 5,
    aprobado: false,
  },
  {
    nombre: "Anakin",
    nota:4,
    aprobado: false,
  },
  {
    nombre: "Yoda",
    nota: 10,
    aprobado: true,
  }
  ]
}
