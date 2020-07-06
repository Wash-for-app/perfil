function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sessao-fotos-sessao-fotos-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/sessao-fotos/sessao-fotos.page.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sessao-fotos/sessao-fotos.page.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSessaoFotosSessaoFotosPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-toolbar color=\"primary\" class=\"cabecalho\">\r\n  <ion-buttons slot=\"start\">\r\n    <ion-back-button defaultHref=\"/folder/mapa\"></ion-back-button>\r\n  </ion-buttons>\r\n  <ion-title>Sessão de Fotos</ion-title>\r\n</ion-toolbar>  \r\n\r\n<ion-content>\r\n  <ion-header collapse=\"condense\">\r\n    <ion-toolbar>\r\n      <ion-title size=\"large\">Sessão de Fotos</ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n\r\n  <ion-grid>\r\n    <ion-row>\r\n    <ion-col size=\"6\" *ngFor=\"let photo of photoService.photos; index as position\">\r\n      <ion-img src=\"{{ photo.base64 ? photo.base64 : photo.webviewPath }}\" (click)=\"showActionSheet(photo, position)\"></ion-img>\r\n    </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n  <ion-fab vertical=\"bottom\" horizontal=\"center\" slot=\"fixed\">\r\n    <ion-fab-button (click)=\"photoService.addNewToGallery()\">\r\n      <ion-icon name=\"camera\"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab>\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/sessao-fotos/sessao-fotos.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/sessao-fotos/sessao-fotos.module.ts ***!
    \*****************************************************/

  /*! exports provided: SessaoFotosPageModule */

  /***/
  function srcAppSessaoFotosSessaoFotosModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SessaoFotosPageModule", function () {
      return SessaoFotosPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _sessao_fotos_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./sessao-fotos.page */
    "./src/app/sessao-fotos/sessao-fotos.page.ts");

    var SessaoFotosPageModule = function SessaoFotosPageModule() {
      _classCallCheck(this, SessaoFotosPageModule);
    };

    SessaoFotosPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
      imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{
        path: '',
        component: _sessao_fotos_page__WEBPACK_IMPORTED_MODULE_6__["SessaoFotosPage"]
      }])],
      declarations: [_sessao_fotos_page__WEBPACK_IMPORTED_MODULE_6__["SessaoFotosPage"]]
    })], SessaoFotosPageModule);
    /***/
  },

  /***/
  "./src/app/sessao-fotos/sessao-fotos.page.scss":
  /*!*****************************************************!*\
    !*** ./src/app/sessao-fotos/sessao-fotos.page.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSessaoFotosSessaoFotosPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content ion-toolbar {\n  --background: translucent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2Vzc2FvLWZvdG9zL0M6XFxVc2Vyc1xcZmVybmFcXE9uZURyaXZlXFxEb2N1bWVudG9zXFxHaXRIdWJcXHBlcmZpbC9zcmNcXGFwcFxcc2Vzc2FvLWZvdG9zXFxzZXNzYW8tZm90b3MucGFnZS5zY3NzIiwic3JjL2FwcC9zZXNzYW8tZm90b3Mvc2Vzc2FvLWZvdG9zLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9zZXNzYW8tZm90b3Mvc2Vzc2FvLWZvdG9zLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IGlvbi10b29sYmFyIHtcclxuICAgIC0tYmFja2dyb3VuZDogdHJhbnNsdWNlbnQ7XHJcbiAgXHJcbiAgfVxyXG4gICIsImlvbi1jb250ZW50IGlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc2x1Y2VudDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/sessao-fotos/sessao-fotos.page.ts":
  /*!***************************************************!*\
    !*** ./src/app/sessao-fotos/sessao-fotos.page.ts ***!
    \***************************************************/

  /*! exports provided: SessaoFotosPage */

  /***/
  function srcAppSessaoFotosSessaoFotosPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SessaoFotosPage", function () {
      return SessaoFotosPage;
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


    var _services_photo_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/photo.service */
    "./src/app/services/photo.service.ts");

    var SessaoFotosPage = /*#__PURE__*/function () {
      function SessaoFotosPage(photoService, actionSheetController) {
        _classCallCheck(this, SessaoFotosPage);

        this.photoService = photoService;
        this.actionSheetController = actionSheetController;
      }

      _createClass(SessaoFotosPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.photoService.loadSaved();
        }
      }, {
        key: "showActionSheet",
        value: function showActionSheet(photo, position) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this = this;

            var actionSheet;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.actionSheetController.create({
                      header: 'Photos',
                      buttons: [{
                        text: 'Delete',
                        role: 'destructive',
                        icon: 'trash',
                        handler: function handler() {
                          _this.photoService.deletePicture(photo, position);
                        }
                      }, {
                        text: 'Cancel',
                        icon: 'close',
                        role: 'cancel',
                        handler: function handler() {// Nothing to do, action sheet is automatically closed
                        }
                      }]
                    });

                  case 2:
                    actionSheet = _context.sent;
                    _context.next = 5;
                    return actionSheet.present();

                  case 5:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }]);

      return SessaoFotosPage;
    }();

    SessaoFotosPage.ctorParameters = function () {
      return [{
        type: _services_photo_service__WEBPACK_IMPORTED_MODULE_3__["PhotoService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"]
      }];
    };

    SessaoFotosPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'sessao-fotos',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./sessao-fotos.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/sessao-fotos/sessao-fotos.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./sessao-fotos.page.scss */
      "./src/app/sessao-fotos/sessao-fotos.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_photo_service__WEBPACK_IMPORTED_MODULE_3__["PhotoService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"]])], SessaoFotosPage);
    /***/
  }
}]);
//# sourceMappingURL=sessao-fotos-sessao-fotos-module-es5.js.map