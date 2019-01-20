import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './../../home/home.component';
import { InscriptosComponent } from './../../inscriptos/inscriptos.component';
import { ExpoCoderComponent } from './../../expo-coder/expo-coder.component';

import { EmergenciasComponent } from './../../phones/emergencias.component';
import { SameComponent } from './../../phones/same.component';
import { LineaSocialComponent } from './../../phones//lineaSocial.component';
import { AtencionCiudadanaComponent } from './../../phones/atencionCiudadana.component';

import { TerminosComponent } from './../terms/terminos.component';
import { PrivacidadComponent } from './../privacy/privacidad.component';
import { SobreEstaWebComponent } from './../aboutUs/sobreEstaWeb.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'inscriptos', component: InscriptosComponent },
  { path: 'expo-coder', component: ExpoCoderComponent },
  { path: 'emergencias', component: EmergenciasComponent },
  { path: 'same', component: SameComponent },
  { path: 'lineaSocial', component: LineaSocialComponent },
  { path: 'atencionCiudadana', component: AtencionCiudadanaComponent },
  
  { path: 'terminos', component: TerminosComponent },
  { path: 'privacidad', component: PrivacidadComponent },
  { path: 'sobreEstaWeb', component: SobreEstaWebComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class SiteMapRoutingModule { }
