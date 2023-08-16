import { Component, AfterViewInit, OnInit } from '@angular/core';
import * as Leaflet from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']

})

export class MapComponent implements OnInit {

  constructor() { }

  private readonly cartoTileLayerUrl = 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png';
  private readonly popupMessage = "I'm based out of Columbus, Ohio!";
  private readonly attributionText = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>';

  mapOptions: Leaflet.MapOptions = {};
  map!: Leaflet.Map;

  ngOnInit() {
    this.initializeMapOptions();
  }

  onMapReady(map: Leaflet.Map) {
    this.map = map;
    this.addLocationMarker();
  }

  private initializeMapOptions() {
    this.mapOptions = {
      center: Leaflet.latLng(40.04358, -83.12465),
      zoom: 5,
      layers: [
        Leaflet.tileLayer(
          this.cartoTileLayerUrl, {
          subdomains: 'abcd',
          attribution: this.attributionText,
          maxZoom: 20,
        })
      ],
    };
  }

  private addLocationMarker() {
    const marker = new Leaflet.Marker([40.04358, -83.02465])
      .setIcon(
        Leaflet.icon({
          iconSize: [50, 50],
          iconAnchor: [25, 25],
          popupAnchor: [0, -25],
          iconUrl: 'assets/map/icons8-map-marker-50.png'
        })).bindPopup(this.popupMessage);
    marker.addTo(this.map).openPopup();
  }

}
