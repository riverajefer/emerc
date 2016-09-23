import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/cotizador/cotizador.html',
})
export class CotizadorPage {

	cantMember:number;
	add:boolean;
	sub:boolean;

  constructor(private navCtrl: NavController) {
  	this.cantMember = 1;
  	this.add = true;
  	this.sub = true;
  }

  AddMember(){
  	this.cantMember++;
  	this.sub = true;

  	if(this.cantMember>4){
  		this.add = false;
  	}
  }

  SubMember(){
  	this.cantMember--;
  	this.add = true;

  	if(this.cantMember < 2){
  		this.sub = false;
  	}
  }
}
