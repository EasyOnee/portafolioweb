import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-proyects',
  templateUrl: './proyects.component.html',
  styleUrls: ['./proyects.component.css']
})
export class ProyectsComponent implements OnInit {
  repos: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getRepos();
  }

  getRepos() {
    this.http.get('https://api.github.com/users/EasyOnee/repos').subscribe(
      (response: any) => {
        this.repos = response;
      },
      (error) => {
        console.error('Error al obtener los repositorios de GitHub:', error);
      }
    );
  }
}