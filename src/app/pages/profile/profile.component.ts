import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  visibleProfile: boolean = false;
  visible: boolean = false;
  email: string = '';
  projectProposal: string = '';

  selectedProfile: any = null;
  showRepos: boolean = false;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getProfileById(1);
  }

  enviarDatos() {
    const data = {
      email: this.email,
      projectProposal: this.projectProposal
    };

    this.http.post('http://localhost:8080/contacts', data).subscribe(
      (response) => {
        console.log('Datos enviados con éxito:', response);
        this.visible = false; 
      },
      (error) => {
        console.error('Error al enviar datos:', error);
      }
    );
  }

  showDialogProfile() {
    this.visibleProfile = true;
  }

  showDialog() {
    this.visible = true;
  }

  getProfileById(id: number) {
    this.http.get(`http://localhost:8080/profile/${id}`).subscribe(
      (response: any) => {
        this.selectedProfile = {
          ...response,
          dateOfBirth: this.formatDateForInput(response.dateOfBirth)
        };
        console.log('Perfil recibido:', this.selectedProfile);
      },
      (error) => {
        console.error('Error al obtener el perfil:', error);
      }
    );
  }

  formatDateForInput(dateString: string): string {
    const date = new Date(dateString);
    return date.toISOString().split('T')[0];
  }

  formatDateForDisplay(dateString: string): string {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, '0');
    const monthNames = [
      'ENERO', 'FEBRERO', 'MARZO', 'ABRIL', 'MAYO', 'JUNIO', 
      'JULIO', 'AGOSTO', 'SEPTIEMBRE', 'OCTUBRE', 'NOVIEMBRE', 'DICIEMBRE'
    ];
    const month = monthNames[date.getMonth()];
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }

  editProfile() {
    this.showDialogProfile();
  }

  saveProfile() {
    if (this.selectedProfile) {
      this.http.put(`http://localhost:8080/profile/${this.selectedProfile.id}`, this.selectedProfile).subscribe(
        (response) => {
          this.getProfileById(1);
          this.visibleProfile = false;
        },
        (error) => {
          console.error('Error al actualizar el perfil:', error);
        }
      );
    }
  }

  toggleRepos() {
    this.showRepos = !this.showRepos;
  }
  
}
