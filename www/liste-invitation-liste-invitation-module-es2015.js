(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["liste-invitation-liste-invitation-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/liste-invitation/liste-invitation.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/liste-invitation/liste-invitation.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Liste Invitation</ion-title>\n    <ion-buttons slot=\"start\">\n        <ion-back-button defaultHref=\"/intro\"></ion-back-button>\n    </ion-buttons>\n      \n  </ion-toolbar>\n</ion-header>\n<ion-content padding>\n\n  <ion-list>\n    <ion-card *ngFor=\"let list of mylisteAmie\">  \n        <ion-item shape=\"round\"  lines=\"none\">\n           <ion-label>\n            {{ list.email}}\n          </ion-label>\n          <ion-button color=\"danger\" shape=\"round\" slot=\"end\" (click)=\"deleteInvitation(list)\">\n            <ion-icon slot=\"icon-only\" name=\"remove-circle-sharp\" ></ion-icon>    \n        </ion-button>\n        \n        </ion-item>\n      </ion-card>\n</ion-list> \n\n\n  \n</ion-content>");

/***/ }),

/***/ "./src/app/liste-invitation/liste-invitation-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/liste-invitation/liste-invitation-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: ListeInvitationPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListeInvitationPageRoutingModule", function() { return ListeInvitationPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _liste_invitation_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./liste-invitation.page */ "./src/app/liste-invitation/liste-invitation.page.ts");




const routes = [
    {
        path: '',
        component: _liste_invitation_page__WEBPACK_IMPORTED_MODULE_3__["ListeInvitationPage"]
    }
];
let ListeInvitationPageRoutingModule = class ListeInvitationPageRoutingModule {
};
ListeInvitationPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ListeInvitationPageRoutingModule);



/***/ }),

/***/ "./src/app/liste-invitation/liste-invitation.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/liste-invitation/liste-invitation.module.ts ***!
  \*************************************************************/
/*! exports provided: ListeInvitationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListeInvitationPageModule", function() { return ListeInvitationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _liste_invitation_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./liste-invitation-routing.module */ "./src/app/liste-invitation/liste-invitation-routing.module.ts");
/* harmony import */ var _liste_invitation_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./liste-invitation.page */ "./src/app/liste-invitation/liste-invitation.page.ts");







let ListeInvitationPageModule = class ListeInvitationPageModule {
};
ListeInvitationPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _liste_invitation_routing_module__WEBPACK_IMPORTED_MODULE_5__["ListeInvitationPageRoutingModule"]
        ],
        declarations: [_liste_invitation_page__WEBPACK_IMPORTED_MODULE_6__["ListeInvitationPage"]]
    })
], ListeInvitationPageModule);



/***/ }),

/***/ "./src/app/liste-invitation/liste-invitation.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/liste-invitation/liste-invitation.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xpc3RlLWludml0YXRpb24vbGlzdGUtaW52aXRhdGlvbi5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/liste-invitation/liste-invitation.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/liste-invitation/liste-invitation.page.ts ***!
  \***********************************************************/
/*! exports provided: ListeInvitationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListeInvitationPage", function() { return ListeInvitationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/native-storage/ngx */ "./node_modules/@ionic-native/native-storage/ngx/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");








let ListeInvitationPage = class ListeInvitationPage {
    constructor(activatedRoute, http, loadingCtrl, plt, storage, alertService, cd) {
        this.activatedRoute = activatedRoute;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.plt = plt;
        this.storage = storage;
        this.alertService = alertService;
        this.cd = cd;
        this.mylisteAmie = [];
        this.myId = null;
        this.loading();
    }
    ngOnInit() {
        this.myId = this.activatedRoute.snapshot.paramMap.get('id');
        console.log("Id ", this.myId);
        this.viewListe();
        this.loading();
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
            this.viewListe();
        });
    }
    viewListe() {
        let base_path = 'https://api.axelib.io/0.1/query/list_invitation_user/0';
        let body = "1=" + this.myId;
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]()
            .set("Content-Type", "x-www-form-urlencoded")
            .set("ProjectID", "6lQwueo");
        return this.http.post(base_path, body, { headers }).subscribe(data => {
            this.mylisteAmie = data["data"];
        });
    }
    deleteInvitation(list) {
        let base_path = 'https://api.axelib.io/0.1/delete/invitation/';
        //tramission des données
        let body = "id=" + list.id;
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]()
            .set("Content-Type", "x-www-form-urlencoded")
            .set("ProjectID", "6lQwueo");
        return this.http.post(base_path + list.id, body, { headers }).subscribe(data => {
            console.log("delete", data);
            this.loading();
        });
    }
};
ListeInvitationPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"] },
    { type: _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_3__["NativeStorage"] },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__["AlertService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
];
ListeInvitationPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-liste-invitation',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./liste-invitation.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/liste-invitation/liste-invitation.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./liste-invitation.page.scss */ "./src/app/liste-invitation/liste-invitation.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"], _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_3__["NativeStorage"], src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__["AlertService"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
], ListeInvitationPage);



/***/ })

}]);
//# sourceMappingURL=liste-invitation-liste-invitation-module-es2015.js.map