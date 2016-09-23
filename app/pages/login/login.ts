import { Component } from '@angular/core';
import { NavController, Page, AlertController } from 'ionic-angular';

import { HomePage } from '../home/home';
import { CotizadorPage } from '../cotizador/cotizador';


@Component({
  templateUrl: 'build/pages/login/login.html',
})
export class LoginPage {

	login:{	username?: string, password?:string} = {};
  submitted = false;

  constructor(private navCtrl: NavController, public alertCtrl: AlertController) {
        this.login = {
          username: "rivera",
          password: "123"
        }; 
  }


  loginSubmit(form){

    this.submitted = true;
    if(form.valid){

      if(this.login.username == "rivera" && this.login.password =="123"){

      this.navCtrl.setRoot(HomePage, {
        login: this.login
      }); 

      }else{

        let alert = this.alertCtrl.create({
          title: 'Error !',
          subTitle: 'Datos de acceso incorrectos',
          buttons: ['OK']
        });
        alert.present(); 
        this.login = {
          username: "",
          password: ""

        };  

      }

    }

  	/*Aca la idea es que valide con un servicio (Provider) el user and pw*/

  }

}

