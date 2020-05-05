function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["inscription-inscription-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/inscription/inscription.page.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/inscription/inscription.page.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppInscriptionInscriptionPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content >\n  <div class=\"padd\">\n    <div class=\"logo\">\n        <ion-icon color=\"light\" name=\"create-outline\"></ion-icon>\n\n    </div>\n    <ion-item lines=\"none\">\n        <ion-label class=\"ion-text-center\" fill=\"clear\" color=\"light\" >Inscrivez-vous à votre compte </ion-label>       \n    </ion-item>\n\n    <form [formGroup]=\"registrationForm\" (ngSubmit)=\"submit()\">\n            <ion-item>\n              <ion-label position=\"floating\">Email</ion-label>\n              <ion-input inputmode=\"email\"  formControlName=\"email\"></ion-input>\n            </ion-item>\n            <div *ngFor=\"let error of errorMessages.email\">\n              <ng-container *ngIf=\"email.hasError(error.type) && (email.dirty || email.touched)\">\n                <small class=\"error-message\">{{error.message}}</small>\n              </ng-container>\n            </div>\n            <ion-item>\n                <ion-label position=\"floating\">password</ion-label>\n                <ion-input  type=\"password\"inputmode=\"password\" formControlName=\"password\"></ion-input>\n            </ion-item>\n              <div *ngFor=\"let error of errorMessages.password\">\n                <ng-container *ngIf=\"password.hasError(error.type) && (password.dirty || password.touched)\">\n                  <small class=\"error-message\">{{error.message}}</small>\n                </ng-container>\n              </div>\n          <br>\n          <ion-button color=\"light\" fill=\"outline\" [disabled]=\"!registrationForm.valid\" shape=\"round\"  type=\"submit\" expand=\"block\">\n              Valider <ion-icon slot=\"end\"> </ion-icon>\n          </ion-button>\n         <br>\n        </form>\n     \n              <div class=\"BEnd\"> \n                  <ion-item  lines=\"none\">\n                      <ion-button routerLink=\"/home\"  fill=\"clear\"  >Revenir à la connexion</ion-button>\n                  </ion-item>\n              </div>\n        </div>\n  \n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/inscription/inscription-routing.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/inscription/inscription-routing.module.ts ***!
    \***********************************************************/

  /*! exports provided: InscriptionPageRoutingModule */

  /***/
  function srcAppInscriptionInscriptionRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InscriptionPageRoutingModule", function () {
      return InscriptionPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _inscription_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./inscription.page */
    "./src/app/inscription/inscription.page.ts");

    var routes = [{
      path: '',
      component: _inscription_page__WEBPACK_IMPORTED_MODULE_3__["InscriptionPage"]
    }];

    var InscriptionPageRoutingModule = function InscriptionPageRoutingModule() {
      _classCallCheck(this, InscriptionPageRoutingModule);
    };

    InscriptionPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], InscriptionPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/inscription/inscription.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/inscription/inscription.module.ts ***!
    \***************************************************/

  /*! exports provided: InscriptionPageModule */

  /***/
  function srcAppInscriptionInscriptionModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InscriptionPageModule", function () {
      return InscriptionPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _inscription_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./inscription-routing.module */
    "./src/app/inscription/inscription-routing.module.ts");
    /* harmony import */


    var _inscription_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./inscription.page */
    "./src/app/inscription/inscription.page.ts");

    var InscriptionPageModule = function InscriptionPageModule() {
      _classCallCheck(this, InscriptionPageModule);
    };

    InscriptionPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _inscription_routing_module__WEBPACK_IMPORTED_MODULE_5__["InscriptionPageRoutingModule"]],
      declarations: [_inscription_page__WEBPACK_IMPORTED_MODULE_6__["InscriptionPage"]]
    })], InscriptionPageModule);
    /***/
  },

  /***/
  "./src/app/inscription/inscription.page.scss":
  /*!***************************************************!*\
    !*** ./src/app/inscription/inscription.page.scss ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppInscriptionInscriptionPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content {\n  --ion-background-color:linear-gradient(#89f7fe,#66a6ff);\n}\n\nion-item {\n  --ion-background-color:transparent!important;\n}\n\n.padd {\n  padding: 5%;\n}\n\n.redIocne {\n  --ion-background-color: #cd201f;\n}\n\n.logo {\n  height: 150px;\n  position: relative;\n}\n\n.logo ion-icon {\n  position: absolute;\n  font-size: 5em;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jaGVrLXRhdHkvRG9jdW1lbnRzL0lvbmljL2FsbGVyL1Nob3BwaW5nTGlzdC9zcmMvYXBwL2luc2NyaXB0aW9uL2luc2NyaXB0aW9uLnBhZ2Uuc2NzcyIsInNyYy9hcHAvaW5zY3JpcHRpb24vaW5zY3JpcHRpb24ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksdURBQUE7QUNESjs7QURHRTtFQUNFLDRDQUFBO0FDQUo7O0FER0U7RUFDRSxXQUFBO0FDQUo7O0FER0U7RUFDRSwrQkFBQTtBQ0FKOztBREVFO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FEQ0U7RUFDRSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC9pbnNjcmlwdGlvbi9pbnNjcmlwdGlvbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuaW9uLWNvbnRlbnQge1xuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6bGluZWFyLWdyYWRpZW50KCM4OWY3ZmUsIzY2YTZmZik7XG4gIH1cbiAgaW9uLWl0ZW17XG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudCFpbXBvcnRhbnQ7XG4gIFxuICB9XG4gIC5wYWRke1xuICAgIHBhZGRpbmc6IDUlO1xuICAgIFxuICB9XG4gIC5yZWRJb2NuZXtcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjY2QyMDFmOyBcbiAgfVxuICAubG9nb3tcbiAgICBoZWlnaHQ6IDE1MHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuICAubG9nbyBpb24taWNvbntcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgZm9udC1zaXplOiA1ZW07XG4gICAgdG9wOjUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlICk7XG4gIFxuICB9IiwiaW9uLWNvbnRlbnQge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOmxpbmVhci1ncmFkaWVudCgjODlmN2ZlLCM2NmE2ZmYpO1xufVxuXG5pb24taXRlbSB7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQhaW1wb3J0YW50O1xufVxuXG4ucGFkZCB7XG4gIHBhZGRpbmc6IDUlO1xufVxuXG4ucmVkSW9jbmUge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjY2QyMDFmO1xufVxuXG4ubG9nbyB7XG4gIGhlaWdodDogMTUwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmxvZ28gaW9uLWljb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGZvbnQtc2l6ZTogNWVtO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/inscription/inscription.page.ts":
  /*!*************************************************!*\
    !*** ./src/app/inscription/inscription.page.ts ***!
    \*************************************************/

  /*! exports provided: InscriptionPage */

  /***/
  function srcAppInscriptionInscriptionPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InscriptionPage", function () {
      return InscriptionPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic-native/native-storage/ngx */
    "./node_modules/@ionic-native/native-storage/ngx/index.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _services_servie_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/servie-api.service */
    "./src/app/services/servie-api.service.ts");
    /* harmony import */


    var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/alert.service */
    "./src/app/services/alert.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");

    var InscriptionPage = /*#__PURE__*/function () {
      function InscriptionPage(nativeStorage, formBuilder, apiService, alertService, navCtrl) {
        _classCallCheck(this, InscriptionPage);

        this.nativeStorage = nativeStorage;
        this.formBuilder = formBuilder;
        this.apiService = apiService;
        this.alertService = alertService;
        this.navCtrl = navCtrl;
        this.errorMessages = {
          password: [{
            type: 'required',
            message: 'password is required'
          }, {
            type: 'maxlength',
            message: 'password cant be longer than 100 characters'
          }],
          email: [{
            type: 'required',
            message: 'Email is required'
          }, {
            type: 'pattern',
            message: 'Please enter a valid email address'
          }]
        };
        this.registrationForm = this.formBuilder.group({
          password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(100)]],
          email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$')]]
        });
      }

      _createClass(InscriptionPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "submit",
        value: function submit() {
          var _this = this;

          var email = this.registrationForm.value.email;
          var password = this.registrationForm.value.password;
          this.apiService.register(email, password).subscribe(function (data) {
            _this.alertService.presentToast("Welcome");
          }, function (error) {
            var text = error.error.message;

            _this.alertService.presentToast(text);

            console.log(error.error.message);
          }, function () {
            // aller vers la passage suivante  sans retour 
            _this.navCtrl.navigateRoot("/intro");
          });
        }
      }, {
        key: "password",
        get: function get() {
          return this.registrationForm.get("password");
        }
      }, {
        key: "email",
        get: function get() {
          return this.registrationForm.get('email');
        }
      }]);

      return InscriptionPage;
    }();

    InscriptionPage.ctorParameters = function () {
      return [{
        type: _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_2__["NativeStorage"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }, {
        type: _services_servie_api_service__WEBPACK_IMPORTED_MODULE_4__["ServieApiService"]
      }, {
        type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"]
      }];
    };

    InscriptionPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-inscription',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./inscription.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/inscription/inscription.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./inscription.page.scss */
      "./src/app/inscription/inscription.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_2__["NativeStorage"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _services_servie_api_service__WEBPACK_IMPORTED_MODULE_4__["ServieApiService"], src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"]])], InscriptionPage);
    /***/
  }
}]);
//# sourceMappingURL=inscription-inscription-module-es5.js.map