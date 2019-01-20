import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SiteMapRoutingModule } from './siteMap-routing.module';
import { SiteMapComponent } from './siteMap.component';

import { HomeComponent } from './../../home/home.component';
import { InscriptosComponent } from './../../inscriptos/inscriptos.component';
import { ExpoCoderComponent } from './../../expo-coder/expo-coder.component';

import { EmergenciasComponent } from './../../phones/emergencias.component';
import { SameComponent } from './../../phones/same.component';
import { LineaSocialComponent } from './../../phones/lineaSocial.component';
import { AtencionCiudadanaComponent } from './../../phones/atencionCiudadana.component';

import { TerminosComponent } from './../terms/terminos.component';
import { PrivacidadComponent } from './../privacy/privacidad.component';
import { SobreEstaWebComponent } from './../aboutUs/sobreEstaWeb.component';

const routes: Routes = [];

@NgModule({
  declarations: [
    HomeComponent,
    InscriptosComponent,
    ExpoCoderComponent,
    EmergenciasComponent,
    SameComponent,
    LineaSocialComponent,
    AtencionCiudadanaComponent,
    TerminosComponent,
    PrivacidadComponent,
    SobreEstaWebComponent
  ],
  imports: [
    BrowserModule,
    SiteMapRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [SiteMapComponent]
})
export class SiteMapModule { }
