import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; // Import the FormsModule




import { ProfileComponent } from './pages/profile/profile.component';
import { ProyectsComponent } from './pages/proyects/proyects.component';
import { NotfoundComponent } from './pages/notfound/notfound.component'; 
import { AppRoutingModule } from './app-routing.module'; 

//primeNg
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';



@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    ProyectsComponent,
    NotfoundComponent 
  ],
  imports: [
    BrowserModule,
    DialogModule,
    ButtonModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
