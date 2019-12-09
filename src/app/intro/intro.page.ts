import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage {

  slides = [{
    alt: "Logo de spotify",
    img: "assets/img/spotify.png",
    title: "Escucha tu musica",
    subtitle:"Desde cualquier lugar",
    description: "Miles de canciones a tu alcance desde tu celular, encuentra a tu cantante favorito en spotify",
    icon:"play"
  },{
    alt: "Logo de spotify",
    img: "assets/img/spotify.png",
    title: "Escucha tu musica",
    subtitle:"Desde cualquier lugar",
    description: "Miles de canciones a tu alcance desde tu celular, encuentra a tu cantante favorito en spotify",
    icon:"play"
  },{
    alt: "Logo de spotify",
    img: "assets/img/spotify.png",
    title: "Escucha tu musica",
    subtitle:"Desde cualquier lugar",
    description: "Miles de canciones a tu alcance desde tu celular, encuentra a tu cantante favorito en spotify",
    icon:"play"
  }];

  constructor(private router: Router,
    private storage: Storage) { }

  finish() {
    this.storage.set("isIntroShowed", true);
    this.router.navigateByUrl("/login");
  }


}
