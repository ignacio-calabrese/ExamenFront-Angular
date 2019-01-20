import { Component, OnInit } from '@angular/core';

@Component({
  template: '<div class="center2 back"><h3>Atención Ciudadana</h3><div class="row"><h4><i class="material-icons">call</i>&nbsp;147</h4></div></div>',  
  styles: [
    '.back { margin-bottom: 100px; background-color: white;}',
    '.center2 {padding: 100px 0; padding-left: 50px; padding-right: 150px;}'
  ],
})
export class AtencionCiudadanaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
