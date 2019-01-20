import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UsersService } from './users.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FooterModule } from './footer/footer.module';

import { HomeComponent } from './home/home.component';
import { InscriptosComponent } from './inscriptos/inscriptos.component';
import { ExpoCoderComponent } from './expo-coder/expo-coder.component';
import {SiteMapModule } from './about/siteMap/siteMap.module';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'inscriptos', component: InscriptosComponent },
  { path: 'expo-coder', component: ExpoCoderComponent },
  { path: '*', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FooterModule,SiteMapModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    UsersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
