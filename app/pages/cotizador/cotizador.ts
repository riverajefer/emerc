import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';

import { TabsPage } from '../tabs/tabs';


@Component({
  templateUrl: 'build/pages/cotizador/cotizador.html',
})
export class CotizadorPage {

	cantMember:number;
	add:boolean;
	sub:boolean;
	validate:boolean;
	ModelCampania:any;
	campanias: Array<{id: number, title:string}>;

   constructor(private navCtrl: NavController) {
	  	this.cantMember = 1;
	  	this.add = true;
	  	this.sub = true;
	  	this.validate = true;

	  	this.campanias = [
	  			{id:1, title: "Campaña 1"},
	  			{id:2, title: "Campaña 2"},
	  			{id:3, title: "Campaña 3"},
	  			{id:4, title: "Campaña 4"},
	  	  	];
		this.ModelCampania = {id:1, title: "Campaña 1"}
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

  cotizadorSubmit(){
  	console.log("miembros", this.cantMember);
  	console.log("campaña", this.ModelCampania);
  	this.navCtrl.push(TabsPage);
  }

}
