import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EjemploComponenteComponent } from './component/ejemplo-componente/ejemplo-componente.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ApiDemoComponent } from './component/api-demo/api-demo.component';
import { FormularioComponent } from './component/formulario/formulario.component';

@Component({
  selector: 'app-root',
  imports: [EjemploComponenteComponent,FormsModule,CommonModule, ApiDemoComponent,FormularioComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'proyecto-angular-basico';
}
