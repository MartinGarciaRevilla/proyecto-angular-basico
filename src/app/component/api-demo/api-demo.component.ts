import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';


@Component({
  selector: 'app-api-demo',
  standalone: true,
  imports: [CommonModule],
  styleUrl: './api-demo.component.css',
  template:
   `
    <h2>Lista de Usuarios</h2>
    <button (click)="loadUsers()">Cargar Usuarios</button>
    <ul>
      <li *ngFor="let user of users">{{ user.name }} - {{ user.email }}</li>
    </ul>
  `
})
export class ApiDemoComponent implements OnInit {
  users: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.apiService.getUsers().subscribe(data => {
      this.users = data;
    });
  }
}
