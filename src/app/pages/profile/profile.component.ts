import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  visible: boolean = false;
  email: string = '';
  projectProposal: string = '';

  constructor(private http: HttpClient) { }

  ngOnInit(): void { }

  showDialog() {
    this.visible = true;
  }

  enviarDatos() {
    const data = {
      email: this.email,
      projectProposal: this.projectProposal // Asegúrate de usar el nombre correcto aquí
    };

    this.http.post('http://localhost:8080/contacts', data).subscribe(
      (response) => {
        console.log('Datos enviados con éxito:', response);
        this.visible = false; // Cerrar el diálogo

      },
      (error) => {
        console.error('Error al enviar datos:', error);
        // Aquí puedes manejar errores, como mostrar un mensaje de error al usuario
      }
    );
  }
}
