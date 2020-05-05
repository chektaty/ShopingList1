function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["listeproject-listeproject-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/listeproject/listeproject.page.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/listeproject/listeproject.page.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppListeprojectListeprojectPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>listes partagées</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/intro\"></ion-back-button>\n  </ion-buttons>   \n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding >\n \n    <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n        <ion-refresher-content\n          pullingIcon=\"arrow-dropdown\"\n          pullingText=\"Pull to refresh\"\n          refreshingSpinner=\"circles\"\n          refreshingText=\"chargement...\">\n        </ion-refresher-content>\n      </ion-refresher>\n\n  <div >\n            \n    <ion-list>\n      <ion-card *ngFor=\"let item of listeAll\" >\n          <ion-item-sliding>\n          <ion-item   lines=\"none\">\n               <ion-label>\n                  <ion-label button (click)=\"showListe(item.id_liste)\">\n                      {{item.name}} \n                  </ion-label>\n            </ion-label>\n          </ion-item>\n        \n        <ion-item-options side=\"end\">\n           \n            <ion-item-option color=\"danger\" >\n              <ion-icon name=\"trash\" slot=\"icon-only\"></ion-icon>\n            </ion-item-option>\n            \n          </ion-item-options>\n        </ion-item-sliding>\n        \n        </ion-card>\n  </ion-list>\n  </div>\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/listeproject/listeproject-routing.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/listeproject/listeproject-routing.module.ts ***!
    \*************************************************************/

  /*! exports provided: ListeprojectPageRoutingModule */

  /***/
  function srcAppListeprojectListeprojectRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ListeprojectPageRoutingModule", function () {
      return ListeprojectPageRoutingModule;
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


    var _listeproject_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./listeproject.page */
    "./src/app/listeproject/listeproject.page.ts");

    var routes = [{
      path: '',
      component: _listeproject_page__WEBPACK_IMPORTED_MODULE_3__["ListeprojectPage"]
    }];

    var ListeprojectPageRoutingModule = function ListeprojectPageRoutingModule() {
      _classCallCheck(this, ListeprojectPageRoutingModule);
    };

    ListeprojectPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ListeprojectPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/listeproject/listeproject.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/listeproject/listeproject.module.ts ***!
    \*****************************************************/

  /*! exports provided: ListeprojectPageModule */

  /***/
  function srcAppListeprojectListeprojectModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ListeprojectPageModule", function () {
      return ListeprojectPageModule;
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


    var _listeproject_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./listeproject-routing.module */
    "./src/app/listeproject/listeproject-routing.module.ts");
    /* harmony import */


    var _listeproject_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./listeproject.page */
    "./src/app/listeproject/listeproject.page.ts");

    var ListeprojectPageModule = function ListeprojectPageModule() {
      _classCallCheck(this, ListeprojectPageModule);
    };

    ListeprojectPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _listeproject_routing_module__WEBPACK_IMPORTED_MODULE_5__["ListeprojectPageRoutingModule"]],
      declarations: [_listeproject_page__WEBPACK_IMPORTED_MODULE_6__["ListeprojectPage"]]
    })], ListeprojectPageModule);
    /***/
  },

  /***/
  "./src/app/listeproject/listeproject.page.scss":
  /*!*****************************************************!*\
    !*** ./src/app/listeproject/listeproject.page.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppListeprojectListeprojectPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xpc3RlcHJvamVjdC9saXN0ZXByb2plY3QucGFnZS5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/listeproject/listeproject.page.ts":
  /*!***************************************************!*\
    !*** ./src/app/listeproject/listeproject.page.ts ***!
    \***************************************************/

  /*! exports provided: ListeprojectPage */

  /***/
  function srcAppListeprojectListeprojectPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ListeprojectPage", function () {
      return ListeprojectPage;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _services_servie_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/servie-api.service */
    "./src/app/services/servie-api.service.ts");
    /* harmony import */


    var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/alert.service */
    "./src/app/services/alert.service.ts");
    /* harmony import */


    var _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/native-storage/ngx */
    "./node_modules/@ionic-native/native-storage/ngx/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var ListeprojectPage = /*#__PURE__*/function () {
      function ListeprojectPage(navCtrl, alertCtrl, apiService, alertService, storage, loadingCtrl, http, actionSheetController) {
        _classCallCheck(this, ListeprojectPage);

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

      _createClass(ListeprojectPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.viewListe();
        }
      }, {
        key: "viewListe",
        value: function viewListe() {
          var _this = this;

          var idUser;
          var body;
          var base_path = 'https://api.axelib.io/0.1/';
          this.storage.getItem('myitem').then(function (data) {
            idUser = data.id, console.log("myitem", data);
            console.log(" id", idUser); //tramission des données  

            body = "1=" + idUser; //headers 

            console.error("my body", body);
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpHeaders"]().set("Content-Type", "x-www-form-urlencoded").set("ProjectID", "6lQwueo"); //tramission des données  

            body = "1=" + idUser;
            return _this.http.post(base_path + 'query/liste_invitation/0', body, {
              headers: headers
            }).subscribe(function (data) {
              _this.liste = data["data"];
              _this.listeAll = data["data"];
              console.log(_this.listeAll);
            });
          }, function (error) {
            return console.error("erro my Item", error);
          });
        }
      }, {
        key: "doRefresh",
        value: function doRefresh(event) {
          var _this2 = this;

          setTimeout(function () {
            event.target.complete();

            _this2.viewListe();
          }, 500);
        }
      }, {
        key: "loading",
        value: function loading() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var loading;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    this.viewListe();
                    _context.next = 3;
                    return this.loadingCtrl.create({
                      message: 'Loading ... ',
                      duration: 500
                    });

                  case 3:
                    loading = _context.sent;
                    loading.present();
                    this.viewListe();
                    setTimeout(function () {
                      loading.dismiss();
                    }, 500);
                    this.viewListe();

                  case 8:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "showListe",
        value: function showListe(id) {
          this.navCtrl.navigateForward('/liste-detail/' + id);
        }
      }]);

      return ListeprojectPage;
    }();

    ListeprojectPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
      }, {
        type: _services_servie_api_service__WEBPACK_IMPORTED_MODULE_3__["ServieApiService"]
      }, {
        type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"]
      }, {
        type: _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_5__["NativeStorage"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"]
      }];
    };

    ListeprojectPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-listeproject',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./listeproject.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/listeproject/listeproject.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./listeproject.page.scss */
      "./src/app/listeproject/listeproject.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _services_servie_api_service__WEBPACK_IMPORTED_MODULE_3__["ServieApiService"], src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"], _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_5__["NativeStorage"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"]])], ListeprojectPage);
    /***/
  }
}]);
//# sourceMappingURL=listeproject-listeproject-module-es5.js.map