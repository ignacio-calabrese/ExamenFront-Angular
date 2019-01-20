import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FooterRoutingModule } from './footer-routing.module';
import { FooterComponent } from './footer.component';
import { SiteMapModule } from './../about/siteMap/siteMap.module';
import { SiteMapComponent } from './../about/siteMap/siteMap.component';

const routes: Routes = [];

@NgModule({
  declarations: [
    SiteMapComponent
  ],
  imports: [
    BrowserModule,
    FooterRoutingModule,SiteMapModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [FooterComponent]
})
export class FooterModule { }
