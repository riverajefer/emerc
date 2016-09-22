import { Component, ViewChild } from '@angular/core';
import { NavController,  Platform, Nav, NavParams } from 'ionic-angular';

import { SeleccionarPage } from '../seleccionar/seleccionar';
import { AcercaPage } from '../acerca/acerca';


@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  @ViewChild(Nav) nav: Nav;
  rootPage: any = SeleccionarPage;

  pages: Array<{title: string, component: any}>;

  public login:any;

  constructor(params: NavParams) {
    this.pages = [
      { title: 'Seleccionar', component: SeleccionarPage },
      { title: 'Acerca', component: AcercaPage },
    ];

    this.login = params.get("login")
    console.log(this.login);
  }

  openPage(page) {
    this.nav.setRoot(page.component);
  }  

}
