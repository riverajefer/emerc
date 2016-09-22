"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var ionic_angular_1 = require('ionic-angular');
var home_1 = require('../home/home');
var LoginPage = (function () {
    function LoginPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.login = {};
    }
    LoginPage.prototype.goToOtherPage = function () {
        this.navCtrl.setRoot(home_1.HomePage, {
            login: this.login
        });
    };
    LoginPage.prototype.loginSubmit = function () {
        console.log(this.login);
        /*
            Aca la idea es que valide con un servicio (Provider) el user and pw
    
        */
        this.navCtrl.setRoot(home_1.HomePage, {
            login: this.login
        });
    };
    LoginPage = __decorate([
        core_1.Component({
            templateUrl: 'build/pages/login/login.html',
        }), 
        __metadata('design:paramtypes', [ionic_angular_1.NavController])
    ], LoginPage);
    return LoginPage;
}());
exports.LoginPage = LoginPage;
