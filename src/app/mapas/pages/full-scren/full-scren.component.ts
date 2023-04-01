import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
@Component({
  selector: 'app-full-scren',
  templateUrl: './full-scren.component.html',
  styles: [
    `
      #mapa {
        height: 100%;
        width: 100%;
      }
    `,
  ],
})
export class FullScrenComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    var map = new mapboxgl.Map({
      container: 'mapa',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-76.3873522392868, -13.077623610426357],
      zoom: 17,
    });
  }
}
