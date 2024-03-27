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
      libre: false,
      promocion: true,
  },
  {
    nombre:"Ahsoka Tano",
    nota: 5,
    aprobado: false,
    libre: true,
    promocion: false,
  },
  {
    nombre: "Anakin",
    nota:4,
    aprobado: false,
    libre: false,
    promocion: false,
  },
  {
    nombre: "Yoda",
    nota: 10,
    aprobado: true,
    libre: true,
    promocion: false,

  },
  {
    nombre: "Luke Skywalker",
    nota: 7,
    aprobado: true,
    libre: false,
    promocion: true,

  },
  {
    nombre: "Leia Organa",
    nota: 9,
    aprobado: true,
    libre: false,
    promocion: true,
  },
  {
    nombre: "Han Solo",
    nota: 6,
    aprobado: false,
    libre: true,
    promocion: false,

  },
  {
    nombre: "Padmé Amidala",
    nota: 8,
    aprobado: true,
    libre: true,
    promocion: false,
  }
]

}
