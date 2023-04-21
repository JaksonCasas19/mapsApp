import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  ViewChild,
} from '@angular/core';
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
export class ZoomRangeComponent implements AfterViewInit, OnDestroy {
  mapa!: mapboxgl.Map;
  zoomLevel: number = 10;
  center: [number, number] = [-76.3873522392868, -13.077623610426357];
  @ViewChild('mapa') divMapa!: ElementRef;
  constructor() {
    console.log('contructor', this.divMapa);
  }

  ngOnDestroy(): void {
    /*Para detener el listen cuando se cambia a otro componente */
    console.log('Destroy!');
    this.mapa.off('zoom', () => {});
    this.mapa.off('zoomend', () => {});
    this.mapa.off('move', () => {});
  }

  ngAfterViewInit(): void {
    console.log('AfterViewInit', this.divMapa);
    this.mapa = new mapboxgl.Map({
      container: this.divMapa.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: this.center,
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
    //Movimiento del mapa
    this.mapa.on('move', (event) => {
      const target = event.target;
      const { lng, lat } = target.getCenter();
      this.center = [lng, lat];
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
