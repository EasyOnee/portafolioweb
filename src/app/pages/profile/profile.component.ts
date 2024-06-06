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
  profiles: any[] = [];
  selectedProfile: any = null;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getProfiles(); // Obtener perfiles al iniciar el componente
  }

  enviarDatos() {
    const data = {
      email: this.email,
      projectProposal: this.projectProposal
    };
  }
  showDialogProfile() {
    this.visibleProfile = true;
  }
  
  showDialog() {
    this.visible = true;
  }

  getProfiles() {
    this.http.get('http://localhost:8080/profile').subscribe(
      (response: any) => {
        this.profiles = response.map((profile: any) => {
          profile.dateOfBirth = this.formatDateForInput(profile.dateOfBirth);
          return profile;
        });
      },
      (error) => {
        console.error('Error al obtener perfiles:', error);
      }
    );
  }

  formatDateForInput(dateString: string): string {
    const date = new Date(dateString);
    return date.toISOString().split('T')[0]; // Formato YYYY-MM-DD
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

  editProfile(profile: any) {
    this.selectedProfile = { ...profile }; // Clona el perfil para editar
    this.visibleProfile = true; // Muestra el diálogo de edición
  }

  saveProfile() {
    if (this.selectedProfile) {
      this.http.put(`http://localhost:8080/profile/${this.selectedProfile.id}`, this.selectedProfile).subscribe(
        (response) => {
          this.getProfiles(); // Actualizar la lista de perfiles
          this.visibleProfile = false; // Cerrar el diálogo
        },
        (error) => {
          console.error('Error al actualizar el perfil:', error);
          // Aquí puedes manejar errores, como mostrar un mensaje de error al usuario
        }
      );
    }
  }
  
}
