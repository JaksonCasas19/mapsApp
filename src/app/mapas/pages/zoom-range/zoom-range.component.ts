import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
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
        width: 400px;
        background-color: #ffffff9c;
        backdrop-filter: blur(3px);
        -webkit-backdrop-filter: blur(3px);
      }
    `,
  ],
})
export class ZoomRangeComponent implements AfterViewInit {
  mapa!: mapboxgl.Map;
  zoomLevel: number = 10;
  @ViewChild('mapa') divMapa!: ElementRef;
  constructor() {
    console.log('contructor', this.divMapa);
  }

  ngAfterViewInit(): void {
    console.log('AfterViewInit', this.divMapa);
    this.mapa = new mapboxgl.Map({
      container: this.divMapa.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-76.3873522392868, -13.077623610426357],
      zoom: this.zoomLevel,
    });

    //Detectar cuando el zoom cambia
    this.mapa.on('zoom', (ev) => {
      this.zoomLevel = this.mapa.getZoom();
    });
    this.mapa.on('zoomend', (ev) => {
      if (this.mapa.getZoom() > 18) {
        this.mapa.zoomTo(18);
      }
    });
  }
  zoomOut(): void {
    this.mapa.zoomOut();
  }
  zoomIn(): void {
    this.mapa.zoomIn();
  }
  zoomCambio(value: string): void {
    this.mapa.zoomTo(Number(value));
  }
}
