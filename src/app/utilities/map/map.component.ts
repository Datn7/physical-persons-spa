import { EventEmitter, Input } from '@angular/core';
import { Component, OnInit, Output } from '@angular/core';
import { latLng, LeafletMouseEvent, marker, Marker, tileLayer } from 'leaflet';
import { coordinatesMap } from './coordinate';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    this.layers = this.initialCoordinates.map((value) =>
      marker([value.latitude, value.longitude])
    );
  }

  @Output() onSelectedLocation = new EventEmitter<coordinatesMap>();

  @Input() initialCoordinates: coordinatesMap[] = [];

  options = {
    layers: [
      tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution: 'Angular Movies',
      }),
    ],
    zoom: 15,
    center: latLng(41.69792645285347, 44.88155364990235),
  };

  layers: Marker<any>[] = [];

  handleMapClick(event: LeafletMouseEvent) {
    const latitude = event.latlng.lat;
    const longitude = event.latlng.lng;
    console.log({ latitude, longitude });
    this.layers = [];
    this.layers.push(marker([latitude, longitude]));
    this.onSelectedLocation.emit({ latitude, longitude });
  }
}