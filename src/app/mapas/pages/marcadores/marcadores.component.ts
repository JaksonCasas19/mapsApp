import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
@Component({
  selector: 'app-marcadores',
  templateUrl: './marcadores.component.html',
  styles: [
    `
      .mapa-container {
        height: 100%;
        width: 100%;
      }
    `,
  ],
})
export class MarcadoresComponent implements AfterViewInit {
  mapa!: mapboxgl.Map;
  zoomLevel: number = 15;
  center: [number, number] = [-76.3873522392868, -13.077623610426357];
  @ViewChild('mapa') divMapa!: ElementRef;
  constructor() {}

  ngAfterViewInit(): void {
    this.mapa = new mapboxgl.Map({
      container: this.divMapa.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: this.center,
      zoom: this.zoomLevel,
    });

    //Agregar marcador
    const marker = new mapboxgl.Marker()
      .setLngLat(this.center)
      .addTo(this.mapa);
  }
}
