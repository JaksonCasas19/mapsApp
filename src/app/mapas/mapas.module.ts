import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapasRoutingModule } from './mapas-routing.module';
import { MiniMapaComponent } from './components/mini-mapa/mini-mapa.component';
import { FullScrenComponent } from './pages/full-scren/full-scren.component';
import { ZoomRangeComponent } from './pages/zoom-range/zoom-range.component';
import { PropiedadesComponent } from './pages/propiedades/propiedades.component';
import { MarcadoresComponent } from './pages/marcadores/marcadores.component';


@NgModule({
  declarations: [
    MiniMapaComponent,
    FullScrenComponent,
    ZoomRangeComponent,
    PropiedadesComponent,
    MarcadoresComponent
  ],
  imports: [
    CommonModule,
    MapasRoutingModule
  ]
})
export class MapasModule { }
