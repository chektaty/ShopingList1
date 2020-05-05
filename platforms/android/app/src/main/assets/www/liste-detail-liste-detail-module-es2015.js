(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["liste-detail-liste-detail-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/liste-detail/liste-detail.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/liste-detail/liste-detail.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>{{mytitle}}</ion-title>\n    <ion-buttons slot=\"start\">\n        <ion-back-button defaultHref=\"/intro\"></ion-back-button>\n    </ion-buttons>\n      <ion-buttons slot=\"end\">\n        <ion-button  (click)=\"showListe()\">\n            <ion-icon id=\"cart-btn\"  slot=\"icon-only\" name=\"people-sharp\" ></ion-icon> \n            <ion-badge id=\"cart-badge\">{{mycount}}</ion-badge>\n        </ion-button>\n        <ion-button>\n            <ion-icon slot=\"icon-only\" name=\"ellipsis-vertical\" ></ion-icon> \n        </ion-button>\n          \n      </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content padding>\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content\n      pullingIcon=\"arrow-dropdown\"\n      pullingText=\"Pull to refresh\"\n      refreshingSpinner=\"circles\"\n      refreshingText=\"chargement...\">\n    </ion-refresher-content>\n  </ion-refresher>\n\n<ion-list>\n    <ion-card *ngFor=\"let list of mylisteproject\">\n        <ion-item-sliding>\n        <ion-item shape=\"round\"  lines=\"none\">\n            <ion-checkbox shape=\"round\" (ionChange)=\"changeCheckState(list)\" color=\"success\" [(ngModel)]=\"list.checked\" slot=\"start\"></ion-checkbox>\n            <!--h2 *ngIf=\"!list.checked\"    <h2 *ngIf=\"list.checked\" style=\"text-decoration:line-through;\">{{ }} </p> </h2>-->\n             <ion-label>\n            {{ list.nom}}\n            \n          </ion-label>\n        </ion-item>\n      \n      <ion-item-options side=\"end\">\n          <ion-item-option color=\"danger\" (click)=\"deleteliste(list)\">\n            <ion-icon name=\"trash\" slot=\"icon-only\"></ion-icon>\n          </ion-item-option>\n        </ion-item-options>\n      </ion-item-sliding>\n      </ion-card>\n</ion-list>\n\n    <ion-card *ngIf=\"addTask\" >\n      <ion-item lines=\"none\"> \n        <ion-input [(ngModel)]=\"name\" placeholder=\"Entrer une tache \" required=\"true\"></ion-input>\n        <ion-button shape=\"round\" slot=\"end\" (click)=\"createArcticle()\">\n          <ion-icon slot=\"icon-only\" name=\"add\" ></ion-icon>    \n        </ion-button>\n        <ion-button  slot=\"end\" (click)=\"createArcticle()\">\n          <ion-icon slot=\"icon-only\" name=\"mic\" ></ion-icon>    \n        </ion-button>\n      </ion-item>\n  </ion-card>\n  <ion-card>\n  <ion-item lines=\"none\"> \n    <ion-button *ngIf=\"!addTask\" (click)=\"showForm()\" expand=\"block\" class=\"add-button\">\n        <ion-icon shape=\"round\"  name=\"add\" slot=\"start\"></ion-icon>\n        Ajouter une tâche\n      </ion-button>\n      \n      <ion-button *ngIf=\"addTask\" (click)=\"showForm()\" expand=\"block\" class=\"add-button\">\n        <ion-icon shape=\"round\" name=\"close\" slot=\"start\"></ion-icon>\n        Annuler\n      </ion-button>\n    </ion-item>\n  </ion-card>\n</ion-content>");

/***/ }),

/***/ "./src/app/liste-detail/liste-detail-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/liste-detail/liste-detail-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: ListeDetailPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListeDetailPageRoutingModule", function() { return ListeDetailPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _liste_detail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./liste-detail.page */ "./src/app/liste-detail/liste-detail.page.ts");




const routes = [
    {
        path: '',
        component: _liste_detail_page__WEBPACK_IMPORTED_MODULE_3__["ListeDetailPage"]
    }
];
let ListeDetailPageRoutingModule = class ListeDetailPageRoutingModule {
};
ListeDetailPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ListeDetailPageRoutingModule);



/***/ }),

/***/ "./src/app/liste-detail/liste-detail.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/liste-detail/liste-detail.module.ts ***!
  \*****************************************************/
/*! exports provided: ListeDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListeDetailPageModule", function() { return ListeDetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _liste_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./liste-detail-routing.module */ "./src/app/liste-detail/liste-detail-routing.module.ts");
/* harmony import */ var _liste_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./liste-detail.page */ "./src/app/liste-detail/liste-detail.page.ts");







let ListeDetailPageModule = class ListeDetailPageModule {
};
ListeDetailPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _liste_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__["ListeDetailPageRoutingModule"]
        ],
        declarations: [_liste_detail_page__WEBPACK_IMPORTED_MODULE_6__["ListeDetailPage"]]
    })
], ListeDetailPageModule);



/***/ }),

/***/ "./src/app/liste-detail/liste-detail.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/liste-detail/liste-detail.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".add-button {\n  --background: #383a3e;\n  position: absolute;\n  bottom: 5px;\n  width: 96%;\n  --color: #ffffff;\n  margin-left: 2%;\n}\n\n#cart-btn {\n  position: relative;\n  top: 10px;\n}\n\n#cart-badge {\n  position: absolute;\n  top: 0px;\n  right: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jaGVrLXRhdHkvRG9jdW1lbnRzL0lvbmljL2FsbGVyL1Nob3BwaW5nTGlzdC9zcmMvYXBwL2xpc3RlLWRldGFpbC9saXN0ZS1kZXRhaWwucGFnZS5zY3NzIiwic3JjL2FwcC9saXN0ZS1kZXRhaWwvbGlzdGUtZGV0YWlsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ0NKOztBRENBO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0FDRUo7O0FEQ0M7RUFDRyxrQkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC9saXN0ZS1kZXRhaWwvbGlzdGUtZGV0YWlsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hZGQtYnV0dG9uIHtcbiAgICAtLWJhY2tncm91bmQ6ICMzODNhM2U7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogNXB4O1xuICAgIHdpZHRoOiA5NiU7XG4gICAgLS1jb2xvcjogI2ZmZmZmZjtcbiAgICBtYXJnaW4tbGVmdDogMiU7XG59XG4jY2FydC1idG4ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IDEwcHg7XG4gfVxuIFxuICNjYXJ0LWJhZGdlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwcHg7XG4gICAgcmlnaHQ6IDBweDtcbiB9IiwiLmFkZC1idXR0b24ge1xuICAtLWJhY2tncm91bmQ6ICMzODNhM2U7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiA1cHg7XG4gIHdpZHRoOiA5NiU7XG4gIC0tY29sb3I6ICNmZmZmZmY7XG4gIG1hcmdpbi1sZWZ0OiAyJTtcbn1cblxuI2NhcnQtYnRuIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDEwcHg7XG59XG5cbiNjYXJ0LWJhZGdlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDBweDtcbiAgcmlnaHQ6IDBweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/liste-detail/liste-detail.page.ts":
/*!***************************************************!*\
  !*** ./src/app/liste-detail/liste-detail.page.ts ***!
  \***************************************************/
/*! exports provided: ListeDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListeDetailPage", function() { return ListeDetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/native-storage/ngx */ "./node_modules/@ionic-native/native-storage/ngx/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");







let ListeDetailPage = class ListeDetailPage {
    constructor(activatedRoute, http, loadingCtrl, plt, storage, cd, navCtrl) {
        this.activatedRoute = activatedRoute;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.plt = plt;
        this.storage = storage;
        this.cd = cd;
        this.navCtrl = navCtrl;
        this.myId = null;
        this.mytitle = null;
        this.mycount = null;
        this.mylisteproject = [];
        this.loading1();
        this.listArticle();
    }
    ngOnInit() {
        this.myId = this.activatedRoute.snapshot.paramMap.get('id');
        console.log("Id ", this.myId);
        this.showtitle(this.myId);
        this.listArticle();
        this.showUser();
    }
    showForm() {
        this.addTask = !this.addTask;
        this.name = '';
    }
    loading() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let loading = yield this.loadingCtrl.create({
                message: 'Loading ... ',
                duration: 300
            });
            loading.present();
            setTimeout(() => {
                loading.dismiss();
            }, 300);
            this.listArticle();
        });
    }
    doRefresh(event) {
        setTimeout(() => {
            event.target.complete();
            this.listArticle();
        }, 1000);
    }
    loading1() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let loading = yield this.loadingCtrl.create({
                message: 'Loading ... ',
                duration: 500
            });
            loading.present();
            setTimeout(() => {
                loading.dismiss();
            }, 500);
            this.listArticle();
        });
    }
    showtitle(id) {
        let base_path = 'https://api.axelib.io/0.1/get/liste/';
        //tramission des données  
        const body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set("orderBy", "id:desc");
        //headers 
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
            .set("Content-Type", "x-www-form-urlencoded")
            .set("ProjectID", "6lQwueo");
        return this.http.post(base_path + id, body, { headers }).subscribe(data => {
            this.mytitle = data["data"]["name"];
            console.log(this.mytitle);
        });
    }
    createArcticle() {
        let base_path = 'https://api.axelib.io/0.1/post/article';
        //tramission des données
        let body = "id_liste=" + this.myId + "&nom=" + this.name;
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
            .set("Content-Type", "x-www-form-urlencoded")
            .set("ProjectID", "6lQwueo");
        return this.http.post(base_path, body, { headers }).subscribe(data => {
            console.log("create ", data);
            this.showForm();
            this.loading();
        });
    }
    changeCheckState(list) {
        console.log('checked: ' + list.checked);
        let base_path = 'https://api.axelib.io/0.1/update/article/';
        //tramission des données
        let body = "checked=" + list.checked;
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
            .set("Content-Type", "x-www-form-urlencoded")
            .set("ProjectID", "6lQwueo");
        return this.http.post(base_path + list.id, body, { headers }).subscribe(data => {
            console.log("checkListe", data);
        });
    }
    deleteliste(list) {
        let base_path = 'https://api.axelib.io/0.1/delete/article/';
        //tramission des données
        let body = "id=" + list.id;
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
            .set("Content-Type", "x-www-form-urlencoded")
            .set("ProjectID", "6lQwueo");
        return this.http.post(base_path + list.id, body, { headers }).subscribe(data => {
            console.log("delete", data);
            this.loading();
        });
    }
    listArticle() {
        let base_path = 'https://api.axelib.io/0.1/list/article/all';
        //"id" : "like:sun"
        //tramission des données
        let body = "orderBy=id:desc" + "&id_liste=like:" + this.myId;
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
            .set("Content-Type", "x-www-form-urlencoded")
            .set("ProjectID", "6lQwueo");
        return this.http.post(base_path, body, { headers }).subscribe(data => {
            this.mylisteproject = data["data"];
            console.log("liste", this.mylisteproject);
        });
    }
    showUser() {
        let base_path = 'https://api.axelib.io/0.1/query/listusercount/0';
        //tramission des données
        let body = "1=" + this.myId;
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
            .set("Content-Type", "x-www-form-urlencoded")
            .set("ProjectID", "6lQwueo");
        return this.http.post(base_path, body, { headers }).subscribe(data => {
            this.mycount = data["data"][0]["COUNT(*)"];
            console.log("reponse", this.mycount);
        });
    }
    showListe() {
        this.navCtrl.navigateForward('/liste-invitation/' + this.myId);
    }
};
ListeDetailPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] },
    { type: _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_4__["NativeStorage"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] }
];
ListeDetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-liste-detail',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./liste-detail.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/liste-detail/liste-detail.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./liste-detail.page.scss */ "./src/app/liste-detail/liste-detail.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"], _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_4__["NativeStorage"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]])
], ListeDetailPage);



/***/ })

}]);
//# sourceMappingURL=liste-detail-liste-detail-module-es2015.js.map