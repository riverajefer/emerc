import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { HomePage } from '../home/home';
import { LoginPage } from '../login/login';
import { AcercaPage } from '../acerca/acerca';
import { TabcreditoPage } from '../tabcredito/tabcredito';
import { TabcuentaPage } from '../tabcuenta/tabcuenta';
import { TabfacturaPage } from '../tabfactura/tabfactura';


@Component({
  templateUrl: 'build/pages/tabs/tabs.html',
})
export class TabsPage {

  public tab1Root: any;
  public tab2Root: any;
  public tab3Root: any;

  constructor(private navCtrl: NavController) {

    this.tab1Root = TabcreditoPage;
    this.tab2Root = TabcuentaPage;
    this.tab3Root = TabfacturaPage;

  }

}
