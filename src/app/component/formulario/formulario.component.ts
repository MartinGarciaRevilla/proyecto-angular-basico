import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  template: 
  `
  <h2>Formulario Reactivo</h2>
  <form [formGroup]="formulario" (ngSubmit)="enviarFormulario()">
    <label>Nombre:</label>
    <input formControlName="nombre" />
    <div *ngIf="formulario.get('nombre')?.invalid && formulario.get('nombre')?.touched">
      <small>El nombre es obligatorio y debe tener al menos 3 caracteres.</small>
    </div>

    <label>Email:</label>
    <input formControlName="email" type="email" />
    <div *ngIf="formulario.get('email')?.invalid && formulario.get('email')?.touched">
      <small>Introduce un email válido.</small>
    </div>

    <button type="submit" [disabled]="formulario.invalid">Enviar</button>
  </form>
`,
  styleUrl: './formulario.component.css',
})
export class FormularioComponent {
  formulario: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formulario = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  enviarFormulario() {
    if (this.formulario.valid) {
      console.log('Datos enviados:', this.formulario.value);
    }
  }
}
