import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';


@Component({
  selector: 'app-api-demo',
  standalone: true,
  imports: [CommonModule],
  styleUrl: './api-demo.component.css',
  templateUrl: './api-demo.component.html'
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
