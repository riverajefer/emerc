import { Component } from '@angular/core';
import { NavController, Page, AlertController } from 'ionic-angular';

import { HomePage } from '../home/home';


@Component({
  templateUrl: 'build/pages/login/login.html',
})
export class LoginPage {

	homePage:HomePage;
	login = {
		username: "",
		password: ""

	};


  constructor(private navCtrl: NavController, public alertCtrl: AlertController) {

  	//this.validateLogin();

  }




  loginSubmit(){

  	console.log(this.login);
  	console.log(this.login.username);

  	if(this.login.username == "rivera" && this.login.password =="123"){

		this.navCtrl.setRoot(HomePage, {
			login: this.login
		}); 

  	}else{

  		//alert("Datos incorrectos")
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

  	/*Aca la idea es que valide con un servicio (Provider) el user and pw*/





  }

}

