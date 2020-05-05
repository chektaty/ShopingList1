(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["forgotpassword-forgotpassword-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/forgotpassword/forgotpassword.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/forgotpassword/forgotpassword.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content >\n  <div class=\"padd\">\n    <div class=\"logo\">\n        <ion-icon color=\"light\" name=\"create-outline\"></ion-icon>\n\n    </div>\n          <ion-item lines=\"none\">\n              <ion-text color=\"light\"  class=\"ion-text-center\"  fill=\"clear\" >Vous n'arrivez pas a vous connecter ?</ion-text>\n          </ion-item>\n          <ion-item>\n            <ion-input type=\"email\" color=\"light\" placeholder=\"Adresse email\"></ion-input>\n          </ion-item>\n          \n              <ion-button expand=\"block\" shape=\"round\" >Lien de récuperation</ion-button> <br>\n          \n              <div class=\"BEnd\"> \n                  <ion-item  lines=\"none\">\n                      <ion-button routerLink=\"/home\"  fill=\"clear\"  >Revenir à la connexion</ion-button>\n                  </ion-item>\n              </div>\n\n        </div>\n  \n</ion-content>\n");

/***/ }),

/***/ "./src/app/forgotpassword/forgotpassword-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/forgotpassword/forgotpassword-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: ForgotpasswordPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotpasswordPageRoutingModule", function() { return ForgotpasswordPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _forgotpassword_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./forgotpassword.page */ "./src/app/forgotpassword/forgotpassword.page.ts");




const routes = [
    {
        path: '',
        component: _forgotpassword_page__WEBPACK_IMPORTED_MODULE_3__["ForgotpasswordPage"]
    }
];
let ForgotpasswordPageRoutingModule = class ForgotpasswordPageRoutingModule {
};
ForgotpasswordPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ForgotpasswordPageRoutingModule);



/***/ }),

/***/ "./src/app/forgotpassword/forgotpassword.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/forgotpassword/forgotpassword.module.ts ***!
  \*********************************************************/
/*! exports provided: ForgotpasswordPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotpasswordPageModule", function() { return ForgotpasswordPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _forgotpassword_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./forgotpassword-routing.module */ "./src/app/forgotpassword/forgotpassword-routing.module.ts");
/* harmony import */ var _forgotpassword_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./forgotpassword.page */ "./src/app/forgotpassword/forgotpassword.page.ts");







let ForgotpasswordPageModule = class ForgotpasswordPageModule {
};
ForgotpasswordPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _forgotpassword_routing_module__WEBPACK_IMPORTED_MODULE_5__["ForgotpasswordPageRoutingModule"]
        ],
        declarations: [_forgotpassword_page__WEBPACK_IMPORTED_MODULE_6__["ForgotpasswordPage"]]
    })
], ForgotpasswordPageModule);



/***/ }),

/***/ "./src/app/forgotpassword/forgotpassword.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/forgotpassword/forgotpassword.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --ion-background-color:linear-gradient(#89f7fe,#66a6ff);\n}\n\nion-item {\n  --ion-background-color:transparent!important;\n}\n\n.padd {\n  padding: 5%;\n}\n\n.redIocne {\n  --ion-background-color: #cd201f;\n}\n\n.logo {\n  height: 150px;\n  position: relative;\n}\n\n.logo ion-icon {\n  position: absolute;\n  font-size: 5em;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.BEnd {\n  padding-top: 10%;\n  top: 50%;\n  left: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jaGVrLXRhdHkvRG9jdW1lbnRzL0lvbmljL2FsbGVyL1Nob3BwaW5nTGlzdC9zcmMvYXBwL2ZvcmdvdHBhc3N3b3JkL2ZvcmdvdHBhc3N3b3JkLnBhZ2Uuc2NzcyIsInNyYy9hcHAvZm9yZ290cGFzc3dvcmQvZm9yZ290cGFzc3dvcmQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksdURBQUE7QUNBSjs7QURFRTtFQUNFLDRDQUFBO0FDQ0o7O0FERUU7RUFDRSxXQUFBO0FDQ0o7O0FERUU7RUFDRSwrQkFBQTtBQ0NKOztBRENFO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0FDRUo7O0FEQUU7RUFDRSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0FDR0o7O0FEQUU7RUFDRSxnQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0FDR0oiLCJmaWxlIjoic3JjL2FwcC9mb3Jnb3RwYXNzd29yZC9mb3Jnb3RwYXNzd29yZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbmlvbi1jb250ZW50IHtcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOmxpbmVhci1ncmFkaWVudCgjODlmN2ZlLCM2NmE2ZmYpO1xuICB9XG4gIGlvbi1pdGVte1xuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQhaW1wb3J0YW50O1xuICBcbiAgfVxuICAucGFkZHtcbiAgICBwYWRkaW5nOiA1JTtcbiAgICBcbiAgfVxuICAucmVkSW9jbmV7XG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogI2NkMjAxZjsgXG4gIH1cbiAgLmxvZ297XG4gICAgaGVpZ2h0OiAxNTBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cbiAgLmxvZ28gaW9uLWljb257XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGZvbnQtc2l6ZTogNWVtO1xuICAgIHRvcDo1MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSApO1xuICBcbiAgfVxuICAuQkVuZHtcbiAgICBwYWRkaW5nLXRvcDogMTAlO1xuICAgIHRvcDo1MCU7XG4gICAgbGVmdDogNTAlO1xuICB9IiwiaW9uLWNvbnRlbnQge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOmxpbmVhci1ncmFkaWVudCgjODlmN2ZlLCM2NmE2ZmYpO1xufVxuXG5pb24taXRlbSB7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQhaW1wb3J0YW50O1xufVxuXG4ucGFkZCB7XG4gIHBhZGRpbmc6IDUlO1xufVxuXG4ucmVkSW9jbmUge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjY2QyMDFmO1xufVxuXG4ubG9nbyB7XG4gIGhlaWdodDogMTUwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmxvZ28gaW9uLWljb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGZvbnQtc2l6ZTogNWVtO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cblxuLkJFbmQge1xuICBwYWRkaW5nLXRvcDogMTAlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/forgotpassword/forgotpassword.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/forgotpassword/forgotpassword.page.ts ***!
  \*******************************************************/
/*! exports provided: ForgotpasswordPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotpasswordPage", function() { return ForgotpasswordPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ForgotpasswordPage = class ForgotpasswordPage {
    constructor() { }
    ngOnInit() {
    }
};
ForgotpasswordPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-forgotpassword',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./forgotpassword.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/forgotpassword/forgotpassword.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./forgotpassword.page.scss */ "./src/app/forgotpassword/forgotpassword.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ForgotpasswordPage);



/***/ })

}]);
//# sourceMappingURL=forgotpassword-forgotpassword-module-es2015.js.map