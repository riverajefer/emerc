import { Component, ViewChild } from '@angular/core';
import { NavController,  Platform, Nav, NavParams } from 'ionic-angular';

import { SeleccionarPage } from '../seleccionar/seleccionar';
import { AcercaPage } from '../acerca/acerca';
import { CotizadorPage } from '../cotizador/cotizador';


@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  @ViewChild(Nav) nav: Nav;
  rootPage: any = CotizadorPage;

  pages: Array<{title: string, component: any}>;

  public login:any;

  constructor(params: NavParams) {
    this.pages = [
      { title: 'Cotizador', component: SeleccionarPage },
      { title: 'Item 1 ', component: AcercaPage },
      { title: 'Salir', component: CotizadorPage },
    ];

    this.login = params.get("login")
    console.log(this.login);
  }

  openPage(page) {
    this.nav.setRoot(page.component);
  }  

}
