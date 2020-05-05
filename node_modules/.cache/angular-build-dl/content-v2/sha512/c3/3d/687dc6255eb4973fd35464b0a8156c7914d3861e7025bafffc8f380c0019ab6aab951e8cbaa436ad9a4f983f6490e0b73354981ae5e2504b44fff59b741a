(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["intro-intro-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/intro/intro.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/intro/intro.page.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n      <ion-menu-button slot=\"start\"></ion-menu-button>\n      <ion-title>Mes listes</ion-title>\n      \n    </ion-toolbar>\n  </ion-header>\n  \n  <ion-content padding >\n   \n      <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n          <ion-refresher-content\n            pullingIcon=\"arrow-dropdown\"\n            pullingText=\"Pull to refresh\"\n            refreshingSpinner=\"circles\"\n            refreshingText=\"chargement...\">\n          </ion-refresher-content>\n        </ion-refresher>\n  \n    <ion-fab vertical=\"bottom\" horizontal=\"end\" (click)=\"presentPrompt()\"  slot=\"fixed\">\n      <ion-fab-button color=\"primary\">\n        <ion-icon name=\"add\"></ion-icon>\n      </ion-fab-button>\n    </ion-fab>\n    \n  \n    <div >\n      \n            \n      <ion-list>\n        <ion-card *ngFor=\"let item of listeAll\" >\n            <ion-item-sliding>\n            <ion-item   lines=\"none\">\n                 <ion-label>\n                    <ion-label button (click)=\"showListe(item.id_liste)\">\n                        {{item.name}} \n                    </ion-label>\n              </ion-label>\n            </ion-item>\n          \n          <ion-item-options side=\"end\">\n              <ion-item-option color=\"success\" (click)=\"presentActionSheet(item.id_liste,item.id)\" >\n                  <ion-icon name=\"information-circle-sharp\" slot=\"icon-only\"></ion-icon>\n              </ion-item-option>\n              <ion-item-option color=\"danger\" >\n                <ion-icon name=\"trash\" slot=\"icon-only\"></ion-icon>\n              </ion-item-option>\n              \n            </ion-item-options>\n          </ion-item-sliding>\n          \n          </ion-card>\n    </ion-list>\n    </div>\n    \n    \n  \n  \n  \n  </ion-content>\n  ");

/***/ }),

/***/ "./src/app/intro/intro-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/intro/intro-routing.module.ts ***!
  \***********************************************/
/*! exports provided: IntroPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroPageRoutingModule", function() { return IntroPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _intro_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./intro.page */ "./src/app/intro/intro.page.ts");




const routes = [
    {
        path: '',
        component: _intro_page__WEBPACK_IMPORTED_MODULE_3__["IntroPage"]
    }
];
let IntroPageRoutingModule = class IntroPageRoutingModule {
};
IntroPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], IntroPageRoutingModule);



/***/ }),

/***/ "./src/app/intro/intro.module.ts":
/*!***************************************!*\
  !*** ./src/app/intro/intro.module.ts ***!
  \***************************************/
/*! exports provided: IntroPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroPageModule", function() { return IntroPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _intro_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./intro-routing.module */ "./src/app/intro/intro-routing.module.ts");
/* harmony import */ var _intro_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./intro.page */ "./src/app/intro/intro.page.ts");







let IntroPageModule = class IntroPageModule {
};
IntroPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _intro_routing_module__WEBPACK_IMPORTED_MODULE_5__["IntroPageRoutingModule"]
        ],
        declarations: [_intro_page__WEBPACK_IMPORTED_MODULE_6__["IntroPage"]]
    })
], IntroPageModule);



/***/ }),

/***/ "./src/app/intro/intro.page.scss":
/*!***************************************!*\
  !*** ./src/app/intro/intro.page.scss ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ludHJvL2ludHJvLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/intro/intro.page.ts":
/*!*************************************!*\
  !*** ./src/app/intro/intro.page.ts ***!
  \*************************************/
/*! exports provided: IntroPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroPage", function() { return IntroPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _services_servie_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/servie-api.service */ "./src/app/services/servie-api.service.ts");
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/native-storage/ngx */ "./node_modules/@ionic-native/native-storage/ngx/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");









let IntroPage = class IntroPage {
    constructor(navCtrl, alertCtrl, apiService, alertService, storage, loadingCtrl, http, actionSheetController) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.apiService = apiService;
        this.alertService = alertService;
        this.storage = storage;
        this.loadingCtrl = loadingCtrl;
        this.http = http;
        this.actionSheetController = actionSheetController;
        this.liste = {};
        this.liste_response = {};
        this.listeAll = [];
        this.listeArticle = [];
        this.viewListe();
    }
    ngOnInit() {
        this.viewListe();
    }
    doRefresh(event) {
        setTimeout(() => {
            event.target.complete();
            this.viewListe();
        }, 1000);
    }
    addList() {
        this.navCtrl.navigateForward("/add-liste");
    }
    loading() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.viewListe();
            let loading = yield this.loadingCtrl.create({
                message: 'Loading ... ',
                duration: 1000
            });
            loading.present();
            this.viewListe();
            setTimeout(() => {
                loading.dismiss();
            }, 1000);
            this.viewListe();
        });
    }
    presentPrompt() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let b;
            let id;
            // id user dss
            this.storage.getItem('myitem')
                .then(data => {
                id = data["id"];
            }, error => console.error(error));
            let alert = yield this.alertCtrl.create({
                // title: 'Confirm purchase',
                header: 'Créer une nouvelle liste',
                inputs: [
                    {
                        name: 'name',
                        type: 'text',
                        placeholder: 'Nouvelle liste '
                    },
                ],
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        handler: data => {
                            console.log('Cancel clicked');
                            this.viewListe();
                        }
                    },
                    {
                        text: 'Valider',
                        handler: data => {
                            // validation 
                            this.apiService.createliste(data.name).subscribe(da => {
                                let id1 = da["id"];
                                this.apiService.createlistead(id1, id).subscribe(da => {
                                    console.log("chekina", da);
                                    this.viewListe();
                                }, error => {
                                    // this.alertService.presentToast(error);
                                    console.log("error", error);
                                }, () => {
                                    //  this.alertService.presentToast("liste ajouter");             
                                });
                            }, error => {
                                this.alertService.presentToast(error);
                            }, () => {
                                this.alertService.presentToast(" Ajouté avec succes ");
                                this.viewListe();
                            });
                            this.loading();
                        }
                    }
                ]
            });
            (yield alert).present();
        });
    }
    viewListe() {
        let idUser;
        let body;
        let base_path = 'https://api.axelib.io/0.1/';
        this.storage.getItem('myitem')
            .then(data => {
            idUser = data.id,
                console.log("myitem", data);
            console.log(" id", idUser);
            //tramission des données  
            body = "1=" + idUser;
            //headers 
            console.error("my body", body);
            const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpHeaders"]()
                .set("Content-Type", "x-www-form-urlencoded")
                .set("ProjectID", "6lQwueo");
            //tramission des données  
            body = "1=" + idUser;
            return this.http.post(base_path + 'query/liste_projet/0', body, { headers }).subscribe(data => {
                this.liste = data["data"];
                this.listeAll = data["data"];
                console.log(this.listeAll);
            });
        }, error => console.error("erro my Item", error));
    }
    viewListe1() {
        let idUser;
        let body;
        let base_path = 'https://api.axelib.io/0.1/list/liste/all';
        this.storage.getItem('myitem')
            .then(data => {
            idUser = data.id,
                console.log("myitem", data);
            console.log(" id", idUser);
            //tramission des données  
            // body =  "1="+idUser;
            body = "orderBy=id:desc";
            //headers 
            console.error("my body", body);
            const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpHeaders"]()
                .set("Content-Type", "x-www-form-urlencoded")
                .set("ProjectID", "6lQwueo");
            //tramission des données  
            body = "1=" + idUser;
            return this.http.post(base_path, body, { headers }).subscribe(data => {
                this.liste = data["data"];
                this.listeAll = data["data"];
                console.log(data);
            });
        }, error => console.error("erro my Item", error));
    }
    goTo(route) {
        this.navCtrl.navigateForward(`/${route}`);
    }
    showListe(id) {
        this.navCtrl.navigateForward('/liste-detail/' + id);
    }
    // delete 
    // this.nativeStorage.remove('AccepterPart');
    // delete article liste 
    deletelisteId(id) {
        let base_path = 'https://api.axelib.io/0.1/delete/article/';
        //tramission des données
        let body = "id=" + id;
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpHeaders"]()
            .set("Content-Type", "x-www-form-urlencoded")
            .set("ProjectID", "6lQwueo");
        return this.http.post(base_path + id, body, { headers }).subscribe(data => {
            console.log("delete", data);
            this.loading();
        });
    }
    // delete liste 
    deleteliste(id) {
        let base_path = 'https://api.axelib.io/0.1/delete/liste/';
        //tramission des données
        let body = "id=" + id;
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpHeaders"]()
            .set("Content-Type", "x-www-form-urlencoded")
            .set("ProjectID", "6lQwueo");
        return this.http.post(base_path + id, body, { headers }).subscribe(data => {
            console.log("delete", data);
            this.loading();
        });
    }
    // delete listeUser 
    deletelink(id) {
        let base_path = 'https://api.axelib.io/0.1/delete/link_listeuser/';
        //tramission des données
        let body = "id=" + id;
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpHeaders"]()
            .set("Content-Type", "x-www-form-urlencoded")
            .set("ProjectID", "6lQwueo");
        return this.http.post(base_path + id, body, { headers }).subscribe(data => {
            console.log("delete", data);
            this.loading();
        });
    }
    // listeidArticle
    listeidArticle(id, idlink) {
        let base_path = 'https://api.axelib.io/0.1/list/article/all';
        //"id" : "like:sun"
        //tramission des données
        let body = "orderBy=id:desc" + "&id_liste=like:" + id;
        let mylisteproject;
        let liste = [];
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpHeaders"]()
            .set("Content-Type", "x-www-form-urlencoded")
            .set("ProjectID", "6lQwueo");
        this.http.post(base_path, body, { headers }).subscribe(data => {
            mylisteproject = data["data"];
            let a = [];
            a = data["data"];
            if (a.length == 0) {
                // delete liste 
                this.deleteInvitation(id);
                this.deleteliste(idlink);
                // delete link
                this.deletelink(id);
            }
            else {
                a.forEach(element => {
                    // delete article 
                    this.deletelisteId(element["id"]);
                    console.log(element["id"]);
                });
                // delete liste 
                this.deleteInvitation(id);
                this.deleteliste(id);
                // delete link
                this.deletelink(idlink);
                console.log(mylisteproject);
            }
        });
        this.loading();
        return mylisteproject;
    }
    //
    presentActionSheet(idliste, idlink) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let a = [];
            const actionSheet = yield this.actionSheetController.create({
                buttons: [{
                        text: 'Delete',
                        role: 'destructive',
                        icon: 'trash',
                        handler: () => {
                            console.log('Delete clicked', idliste);
                            this.listeidArticle(idliste, idlink);
                            console.log('Delete clicked');
                            //  console.log('Delete clicked',this.listeidArticle(idliste));
                        }
                    }, {
                        text: 'Share',
                        icon: 'share',
                        handler: () => {
                            console.log('Share clicked');
                            this.addfreinds(idliste);
                        }
                    }, {
                        text: 'Favorite',
                        icon: 'heart',
                        handler: () => {
                            console.log('Favorite clicked');
                        }
                    }, {
                        text: 'Cancel',
                        role: 'cancel',
                        icon: 'close',
                        handler: () => {
                            console.log('Cancel clicked');
                        }
                    }]
            });
            yield actionSheet.present();
        });
    }
    addfreinds(id) {
        this.navCtrl.navigateForward('/search/' + id);
    }
    deleteInvitation(id) {
        let base_path = 'https://api.axelib.io/0.1/delete/invitation/';
        //tramission des données
        let body = "id=" + id;
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpHeaders"]()
            .set("Content-Type", "x-www-form-urlencoded")
            .set("ProjectID", "6lQwueo");
        return this.http.post(base_path + id, body, { headers }).subscribe(data => {
            console.log("delete", data);
            this.loading();
        });
    }
};
IntroPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _services_servie_api_service__WEBPACK_IMPORTED_MODULE_3__["ServieApiService"] },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"] },
    { type: _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_5__["NativeStorage"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"] }
];
IntroPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-intro',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./intro.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/intro/intro.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./intro.page.scss */ "./src/app/intro/intro.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
        _services_servie_api_service__WEBPACK_IMPORTED_MODULE_3__["ServieApiService"], src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"], _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_5__["NativeStorage"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"]])
], IntroPage);



/***/ })

}]);
//# sourceMappingURL=intro-intro-module-es2015.js.map