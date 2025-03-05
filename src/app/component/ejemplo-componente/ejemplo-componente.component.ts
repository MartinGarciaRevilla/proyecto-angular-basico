import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ejemplo-componente',
  imports: [CommonModule,FormsModule],
  templateUrl: './ejemplo-componente.component.html',
  styleUrl: './ejemplo-componente.component.css'
})
export class EjemploComponenteComponent {
  mensaje: string = "¡Hola desde el componente!";
}
