(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-toolbar color=\"primary\" class=\"cabecalho\">\r\n  <ion-buttons slot=\"start\">\r\n    <ion-back-button defaultHref=\"/folder/mapa\"></ion-back-button>\r\n  </ion-buttons>\r\n  <ion-title>Perfil</ion-title>\r\n</ion-toolbar>  \r\n<div >\r\n<div  id =\"avatar\" class=\"ion-padding-top ion-text-center\">\r\n<img src=\"https://www.gravatar.com/avatar?d=mm&s=140\" alt=\"avatar\" (click)=\"photoService.addNewToGallery()\">\r\n</div>\r\n<div>\r\n  <ion-grid>\r\n    <ion-row>\r\n    <ion-col size=\"6\" *ngFor=\"let photo of photoService.photos; index as position\">\r\n      <ion-img src=\"{{ photo.base64 ? photo.base64 : photo.webviewPath }}\" (click)=\"showActionSheet(photo, position)\"></ion-img>\r\n    </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n  </div>\r\n</div>\r\n\r\n    <ion-content class=\"ion-padding\">\r\n      <ion-item class=\"ion-align-items-center\">\r\n        <h2><ion-label stacked class=\"ion-align-items-center\">Tchulengo Jr.</ion-label></h2>\r\n      </ion-item>\r\n\r\n      <ion-list>\r\n \r\n  \r\n      <ion-item><ion-icon name=\"mail-outline\" ></ion-icon>\r\n        <ion-input name=\"email\" placeholder=\"example@ionic.com\"></ion-input>\r\n      </ion-item>\r\n  \r\n  \r\n      <ion-item class=\"ion-align-items-center\">\r\n        <ion-icon name=\"call-outline\"></ion-icon>\r\n        <ion-input type=\"tel\" name=\"phone\" placeholder=\"+55(00)0000-0000\"></ion-input>\r\n      </ion-item>\r\n  \r\n    \r\n    </ion-list>\r\n  \r\n\r\n  \r\n  </ion-content>\r\n");

/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");







let HomePageModule = class HomePageModule {
};
HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                {
                    path: '',
                    component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
                }
            ])
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container {\n  position: absolute;\n  left: 0;\n  right: 0;\n  width: 75%;\n  margin: 0 auto;\n  z-index: 2;\n}\n.container.top {\n  top: 5%;\n}\n.container.bottom {\n  bottom: 30%;\n}\n.container.bottom span {\n  color: white;\n}\nimg {\n  max-width: 360px;\n  border-radius: 50%;\n}\n.cabecalho {\n  border-bottom-left-radius: 20px;\n  border-bottom-right-radius: 20px;\n  height: 60px;\n}\n.search {\n  background-color: #4287F5;\n  background-attachment: fixed;\n  margin-top: 10px;\n  font-size: 40px;\n}\nh1 {\n  font-size: 15px;\n  font-family: Arial, Helvetica, sans-serif;\n  font-weight: bold;\n  text-align: center;\n  margin-top: 15px;\n  margin-bottom: 20px;\n}\n.texto {\n  margin-left: 60px;\n  text-align: left;\n  font-weight: bold;\n  font-size: 15px;\n}\n.botao {\n  margin-top: 20px;\n  margin-left: 240px;\n  margin-right: 20px;\n  border-radius: 30px;\n  background-color: #3979DE;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9DOlxcVXNlcnNcXGZlcm5hXFxPbmVEcml2ZVxcRG9jdW1lbnRvc1xcR2l0SHViXFxwZXJmaWwvc3JjXFxhcHBcXGhvbWVcXGhvbWUucGFnZS5zY3NzIiwic3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtBQ0NGO0FEQ0U7RUFDSSxPQUFBO0FDQ047QURDRTtFQUNJLFdBQUE7QUNDTjtBRENNO0VBQ0ksWUFBQTtBQ0NWO0FER0E7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0FDQUo7QURJQTtFQUNJLCtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxZQUFBO0FDREo7QURLQTtFQUNJLHlCQUFBO0VBQ0EsNEJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNGSjtBREtBO0VBQ0ksZUFBQTtFQUNBLHlDQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNGSjtBREtBO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQ0ZKO0FES0E7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0FDRkoiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgd2lkdGg6IDc1JTtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICB6LWluZGV4OiAyO1xyXG5cclxuICAmLnRvcCB7XHJcbiAgICAgIHRvcDogNSU7XHJcbiAgfVxyXG4gICYuYm90dG9tIHtcclxuICAgICAgYm90dG9tOiAzMCU7XHJcblxyXG4gICAgICBzcGFuIHtcclxuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgfVxyXG4gIH1cclxufVxyXG5pbWcge1xyXG4gICAgbWF4LXdpZHRoOiAzNjBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuXHJcbn1cclxuXHJcbi5jYWJlY2FsaG97XHJcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAyMHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICBcclxufVxyXG5cclxuLnNlYXJjaHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0Mjg3RjU7XHJcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIGZvbnQtc2l6ZTogNDBweDtcclxufVxyXG5cclxuaDF7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbi50ZXh0b3tcclxuICAgIG1hcmdpbi1sZWZ0OiA2MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG59XHJcblxyXG4uYm90YW97XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDI0MHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzOTc5REU7XHJcbn1cclxuXHJcblxyXG5cclxuIiwiLmNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHdpZHRoOiA3NSU7XG4gIG1hcmdpbjogMCBhdXRvO1xuICB6LWluZGV4OiAyO1xufVxuLmNvbnRhaW5lci50b3Age1xuICB0b3A6IDUlO1xufVxuLmNvbnRhaW5lci5ib3R0b20ge1xuICBib3R0b206IDMwJTtcbn1cbi5jb250YWluZXIuYm90dG9tIHNwYW4ge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbmltZyB7XG4gIG1heC13aWR0aDogMzYwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLmNhYmVjYWxobyB7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDIwcHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAyMHB4O1xuICBoZWlnaHQ6IDYwcHg7XG59XG5cbi5zZWFyY2gge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDI4N0Y1O1xuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBmb250LXNpemU6IDQwcHg7XG59XG5cbmgxIHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLnRleHRvIHtcbiAgbWFyZ2luLWxlZnQ6IDYwcHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDE1cHg7XG59XG5cbi5ib3RhbyB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIG1hcmdpbi1sZWZ0OiAyNDBweDtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzk3OURFO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_photo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/photo.service */ "./src/app/services/photo.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");




let HomePage = class HomePage {
    constructor(photoService, actionSheetController) {
        this.photoService = photoService;
        this.actionSheetController = actionSheetController;
    }
    ngOnInit() {
        this.photoService.loadSaved();
    }
    showActionSheet(photo, position) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const actionSheet = yield this.actionSheetController.create({
                header: 'Photos',
                buttons: [{
                        text: 'Delete',
                        role: 'destructive',
                        icon: 'trash',
                        handler: () => {
                            this.photoService.deletePicture(photo, position);
                        }
                    }, {
                        text: 'Cancel',
                        icon: 'close',
                        role: 'cancel',
                        handler: () => {
                            // Nothing to do, action sheet is automatically closed
                        }
                    }]
            });
            yield actionSheet.present();
        });
    }
};
HomePage.ctorParameters = () => [
    { type: _services_photo_service__WEBPACK_IMPORTED_MODULE_2__["PhotoService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"] }
];
HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_photo_service__WEBPACK_IMPORTED_MODULE_2__["PhotoService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"]])
], HomePage);



/***/ })

}]);
//# sourceMappingURL=home-home-module-es2015.js.map