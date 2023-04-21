import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
@Component({
  selector: 'app-zoom-range',
  templateUrl: './zoom-range.component.html',
  styles: [
    `
      .mapa-container {
        height: 100%;
        width: 100%;
      }
      .row {
        background-color: white;
        border-radius: 15px;
        position: fixed;
        left: 50px;
        padding: 10px;
        bottom: 50px;
        z-index: 999;
        background-color: #ffffff9c;
        backdrop-filter: blur(3px);
        -webkit-backdrop-filter: blur(3px);
      }
    `,
  ],
})
export class ZoomRangeComponent implements OnInit {
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
