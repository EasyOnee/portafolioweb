import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { ProfileComponent } from './pages/profile/profile.component';
import { ProyectsComponent } from './pages/proyects/proyects.component';
import { NotfoundComponent } from './pages/notfound/notfound.component'; // Importar el componente Notfound
import { AppRoutingModule } from './app-routing.module'; // Importa el módulo de enrutamiento

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    ProyectsComponent,
    NotfoundComponent // Declarar el componente Notfound
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
