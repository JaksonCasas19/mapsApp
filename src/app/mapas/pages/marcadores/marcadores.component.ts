import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
interface MarcadorColor {
  color: string;
  marker: mapboxgl.Marker;
}
@Component({
  selector: 'app-marcadores',
  templateUrl: './marcadores.component.html',
  styles: [
    `
      .mapa-container {
        height: 100%;
        width: 100%;
      }
      .list-group {
        position: fixed;
        top: 20px;
        right: 20px;
        z-index: 99;
      }
      li {
        cursor: pointer;
      }
      .status-picker {
        width: 10px;
        height: 10px;
        border-radius: 50%;
        align-self: center;
      }
      .marker-title {
        margin-left: 5px;
      }
    `,
  ],
})
export class MarcadoresComponent implements AfterViewInit {
  mapa!: mapboxgl.Map;
  zoomLevel: number = 15;
  center: [number, number] = [-76.3873522392868, -13.077623610426357];

  //Arreglo de marcadores
  marcadores: MarcadorColor[] = [];
  @ViewChild('mapa') divMapa!: ElementRef;
  constructor() {}

  ngAfterViewInit(): void {
    this.mapa = new mapboxgl.Map({
      container: this.divMapa.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: this.center,
      zoom: this.zoomLevel,
    });
    const markerHtml: HTMLElement = document.createElement('div');
    markerHtml.innerHTML = 'Hola Mundo';
    //Agregar marcador
    new mapboxgl.Marker({
      element: markerHtml,
    })
      .setLngLat(this.center)
      .addTo(this.mapa);
  }
  irMarcador(eve: mapboxgl.Marker): void {
    const { lng, lat } = eve.getLngLat();
    console.log(lng, lat);
    this.mapa.flyTo({
      center: [lng, lat],
    });
  }
  agregarMarcador(): void {
    //Para obtener colores random
    const color = '#xxxxxx'.replace(/x/g, (y) =>
      ((Math.random() * 16) | 0).toString(16)
    );
    const nuevoMarcador = new mapboxgl.Marker({
      draggable: true,
      color,
    })
      .setLngLat(this.center)
      .addTo(this.mapa);
    this.marcadores.push({
      color,
      marker: nuevoMarcador,
    });
  }
  guardarMarcadoresLocalStorage(): void {}

  leerLocalStorage(): void {}
}
