import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmergenciasComponent } from './../phones/emergencias.component';
import { SameComponent } from './../phones/same.component';
import { LineaSocialComponent } from './../phones//lineaSocial.component';
import { AtencionCiudadanaComponent } from './../phones/atencionCiudadana.component';

import { TerminosComponent } from './../about/terms/terminos.component';
import { PrivacidadComponent } from './../about/privacy/privacidad.component';
import { SobreEstaWebComponent } from './../about/aboutUs/sobreEstaWeb.component';
import { SiteMapComponent } from './../about/siteMap/siteMap.component';
const routes: Routes = [
  { path: 'emergencias', component: EmergenciasComponent },
  { path: 'same', component: SameComponent },
  { path: 'lineaSocial', component: LineaSocialComponent },
  { path: 'atencionCiudadana', component: AtencionCiudadanaComponent },
  
  { path: 'terminos', component: TerminosComponent },
  { path: 'privacidad', component: PrivacidadComponent },
  { path: 'sobreEstaWeb', component: SobreEstaWebComponent },
  { path: 'siteMap', component: SiteMapComponent }
  
  
  
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class FooterRoutingModule { }
