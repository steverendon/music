import { Component, OnInit } from '@angular/core';
import { Plugins } from "@capacitor/core";

const {Geolocation} = Plugins;

@Component({
  selector: 'app-sport',
  templateUrl: './sport.page.html',
  styleUrls: ['./sport.page.scss'],
})
export class SportPage {

  currentCenter: any;
  coordinates: any[] = [];
  defaultZoom = 14;

  constructor() { }

  async getCurrentPosition() {
    const coordinates = await Geolocation.getCurrentPosition();
    this.currentCenter = {
      lat: coordinates.coords.latitude,
      lng: coordinates.coords.longitude
    }
  }

  ionViewDidEnter() {
    this.getCurrentPosition();
    this.watchPosition();
  }

  watchPosition() {
    Geolocation.watchPosition({}, position => {
      this.currentCenter = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      }
      this.coordinates.push({
        lat: position.coords.latitude,
        lng: position.coords.longitude
      });
    });
  }

}
