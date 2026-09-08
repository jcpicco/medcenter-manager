(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [
    {
        path: '',
        pathMatch: 'full',
        loadChildren: () => Promise.all(/*! import() | home-home-module */[__webpack_require__.e("default~home-home-module~patients-patients-module"), __webpack_require__.e("home-home-module")]).then(__webpack_require__.bind(null, /*! ./home/home.module */ "./src/app/home/home.module.ts")).then(m => m.HomeModule),
    },
    {
        path: 'patients',
        loadChildren: () => Promise.all(/*! import() | patients-patients-module */[__webpack_require__.e("default~home-home-module~patients-patients-module"), __webpack_require__.e("patients-patients-module")]).then(__webpack_require__.bind(null, /*! ./patients/patients.module */ "./src/app/patients/patients.module.ts")).then(m => m.PatientsModule),
    },
    {
        path: 'documentation',
        loadChildren: () => __webpack_require__.e(/*! import() | documentation-documentation-module */ "documentation-documentation-module").then(__webpack_require__.bind(null, /*! ./documentation/documentation.module */ "./src/app/documentation/documentation.module.ts")).then(m => m.DocumentationModule),
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AppComponent {
    constructor() {
        this.isDarkMode = false;
    }
    ngOnInit() {
        // Check localStorage
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme === 'dark') {
            this.isDarkMode = true;
        }
        else if (!storedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            // Respect system preference if not set
            this.isDarkMode = true;
        }
        this.updateBodyClass();
    }
    toggleDarkMode() {
        this.isDarkMode = !this.isDarkMode;
        localStorage.setItem('theme', this.isDarkMode ? 'dark' : 'light');
        this.updateBodyClass();
    }
    updateBodyClass() {
        if (this.isDarkMode) {
            document.body.classList.add('dark-mode');
        }
        else {
            document.body.classList.remove('dark-mode');
        }
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 2, consts: [[1, "theme-toggle-btn", 3, "title", "click"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_0_listener() { return ctx.toggleDarkMode(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", ctx.isDarkMode ? "Cambiar a modo claro" : "Cambiar a modo oscuro");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.isDarkMode ? "\u2600\uFE0F" : "\uD83C\uDF19", "\n");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: [".theme-toggle-btn[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 20px;\n  right: 20px;\n  line-height: 1;\n  width: 45px;\n  height: 45px;\n  border-radius: 50%;\n  background-color: var(--color-bg-primary);\n  border: 1px solid var(--color-border);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n  color: var(--color-text-primary);\n  font-size: 24px;\n  cursor: pointer;\n  z-index: 1100;\n  \n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);\n  padding: 0;\n}\n.theme-toggle-btn[_ngcontent-%COMP%]:hover {\n  transform: scale(1.1) rotate(15deg);\n  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);\n}\n.theme-toggle-btn[_ngcontent-%COMP%]:active {\n  transform: scale(0.95);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxKdWFubWFcXERvY3VtZW50c1xcZ2l0XFxtZWRjZW50ZXItbWFuYWdlclxcd2ViL3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EseUNBQUE7RUFDQSxxQ0FBQTtFQUNBLDBDQUFBO0VBQ0EsZ0NBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSwyQ0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsNERBQUE7RUFDQSxVQUFBO0FDQ0o7QURDSTtFQUNJLG1DQUFBO0VBQ0EseUNBQUE7QUNDUjtBREVJO0VBQ0ksc0JBQUE7QUNBUiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aGVtZS10b2dnbGUtYnRuIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGJvdHRvbTogMjBweDtcclxuICAgIHJpZ2h0OiAyMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgICB3aWR0aDogNDVweDtcclxuICAgIGhlaWdodDogNDVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWJnLXByaW1hcnkpO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY29sb3ItYm9yZGVyKTtcclxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDEycHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcclxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0LXByaW1hcnkpO1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgei1pbmRleDogMTEwMDtcclxuICAgIC8qIEFib3ZlIG1vZGFscyBpZiBwb3NzaWJsZSwgb3IganVzdCBoaWdoICovXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMS4yNzUpO1xyXG4gICAgcGFkZGluZzogMDtcclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSkgcm90YXRlKDE1ZGVnKTtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDZweCAxNnB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAgIH1cclxuXHJcbiAgICAmOmFjdGl2ZSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcclxuICAgIH1cclxufSIsIi50aGVtZS10b2dnbGUtYnRuIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDIwcHg7XG4gIHJpZ2h0OiAyMHB4O1xuICBsaW5lLWhlaWdodDogMTtcbiAgd2lkdGg6IDQ1cHg7XG4gIGhlaWdodDogNDVweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1iZy1wcmltYXJ5KTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY29sb3ItYm9yZGVyKTtcbiAgYm94LXNoYWRvdzogMCA0cHggMTJweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xuICBjb2xvcjogdmFyKC0tY29sb3ItdGV4dC1wcmltYXJ5KTtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHotaW5kZXg6IDExMDA7XG4gIC8qIEFib3ZlIG1vZGFscyBpZiBwb3NzaWJsZSwgb3IganVzdCBoaWdoICovXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxLjI3NSk7XG4gIHBhZGRpbmc6IDA7XG59XG4udGhlbWUtdG9nZ2xlLWJ0bjpob3ZlciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKSByb3RhdGUoMTVkZWcpO1xuICBib3gtc2hhZG93OiAwIDZweCAxNnB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cbi50aGVtZS10b2dnbGUtYnRuOmFjdGl2ZSB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMC45NSk7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss'],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");







class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"]],
                imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"]],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _services_patient_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/patient.service */ "./src/app/services/patient.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






function DashboardComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u23F3 Conectando al backend... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DashboardComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r417 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r417.error, " ");
} }
function DashboardComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u2705 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Backend conectado exitosamente!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r418 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r418.patients.length, " pacientes encontrados en la base de datos");
} }
function DashboardComponent_section_46_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "DNI:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Email:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const patient_r422 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", patient_r422.firstName, " ", patient_r422.lastName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", patient_r422.dni, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", patient_r422.email, "");
} }
function DashboardComponent_section_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Pacientes Registrados");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DashboardComponent_section_46_div_4_Template, 11, 4, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r419 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r419.patients);
} }
function DashboardComponent_section_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u00BFC\u00F3mo Iniciar el Backend?");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Abre otra terminal y ejecuta:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " cd ~/Documents/git/medcenter-manager-app");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " ./gradlew bootRun ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "El backend estar\u00E1 disponible en: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "http://localhost:8080");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class DashboardComponent {
    constructor(patientService) {
        this.patientService = patientService;
        this.patients = [];
        this.loading = false;
        this.error = null;
        this.backendConnected = false;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    ngOnInit() {
        this.checkBackendConnection();
    }
    checkBackendConnection() {
        this.loading = true;
        console.log('🔍 Intentando conectar al backend...');
        this.patientService.getAllPatients()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroy$))
            .subscribe((data) => {
            this.patients = data;
            this.backendConnected = true;
            this.loading = false;
            console.log('✅ Backend conectado. Pacientes:', data);
        }, (error) => {
            this.backendConnected = false;
            this.loading = false;
            console.error('❌ Error conectando al backend:', error);
            // Mensajes de error más específicos
            if (error.status === 0) {
                this.error = '❌ No se puede conectar al backend. Por favor verifica que:\n\n' +
                    '1. Docker esté corriendo: docker ps\n' +
                    '2. El contenedor medcenter-manager-api esté activo\n' +
                    '3. El puerto 8080 esté expuesto\n\n' +
                    'O ejecuta: docker-compose up en la carpeta medcenter-manager-app';
            }
            else if (error.status === 403 || error.status === 401) {
                this.error = `❌ Error de autenticación (${error.status})`;
            }
            else if (error.status >= 500) {
                this.error = `❌ Error del servidor (${error.status}): ${error.message}`;
            }
            else {
                this.error = `❌ Error: ${error.message || 'Desconocido'}`;
            }
        });
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_patient_service__WEBPACK_IMPORTED_MODULE_3__["PatientService"])); };
DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], decls: 68, vars: 5, consts: [[1, "container"], [1, "header"], [1, "subtitle"], [1, "status-section"], ["class", "loading", 4, "ngIf"], ["class", "error-box", 4, "ngIf"], ["class", "success-box", 4, "ngIf"], [1, "services-section"], [1, "services-grid"], [1, "service-card"], ["class", "patients-section", 4, "ngIf"], ["class", "instructions-section", 4, "ngIf"], [1, "docs-section"], ["href", "../../START_HERE.md", "target", "_blank"], ["href", "../../QUICK_START.md", "target", "_blank"], ["href", "../../SERVICIOS_README.md", "target", "_blank"], ["href", "../../FAQ_SERVICIOS.md", "target", "_blank"], [1, "loading"], [1, "error-box"], [1, "success-box"], [1, "patients-section"], [1, "patient-list"], ["class", "patient-card", 4, "ngFor", "ngForOf"], [1, "patient-card"], [1, "instructions-section"]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "header", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\uD83C\uDFE5 Sistema de Gesti\u00F3n M\u00E9dica");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Conectado a medcenter-manager-app Backend");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "section", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Estado del Sistema");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, DashboardComponent_div_9_Template, 2, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, DashboardComponent_div_10_Template, 2, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, DashboardComponent_div_11_Template, 6, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "section", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Servicios Disponibles");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "\uD83D\uDC65 Pacientes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "7 m\u00E9todos CRUD");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "\uD83D\uDCCB Registros M\u00E9dicos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "5 m\u00E9todos CRUD");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "\uD83E\uDE7A Diagn\u00F3sticos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "5 m\u00E9todos CRUD");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "\uD83D\uDCDD Notas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "5 m\u00E9todos CRUD");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "\uD83D\uDCC2 Registros Previos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "5 m\u00E9todos CRUD");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "\uD83D\uDCC1 Archivos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "2 m\u00E9todos (upload/delete)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, DashboardComponent_section_46_Template, 5, 1, "section", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, DashboardComponent_section_47_Template, 13, 0, "section", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "section", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "\uD83D\uDCDA Documentaci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "START_HERE.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, " - Comienza aqu\u00ED");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "QUICK_START.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, " - Inicio r\u00E1pido");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "SERVICIOS_README.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, " - Gu\u00EDa de servicios");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "FAQ_SERVICIOS.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, " - Preguntas frecuentes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.error);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.backendConnected && !ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.backendConnected && ctx.patients.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.backendConnected);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: [".container[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n  margin: 0 auto;\n  max-width: 1200px;\n  min-height: 100vh;\n  padding: 20px;\n}\n\n.header[_ngcontent-%COMP%] {\n  color: white;\n  margin-bottom: 40px;\n  padding: 30px 0;\n  text-align: center;\n}\n\n.header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 2.5em;\n  margin: 0;\n  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);\n}\n\n.header[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\n  font-size: 1.1em;\n  margin-top: 10px;\n  opacity: 0.9;\n}\n\nsection[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 10px;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);\n  margin-bottom: 30px;\n  padding: 30px;\n}\n\nsection[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  border-bottom: 3px solid #667eea;\n  color: #667eea;\n  margin-top: 0;\n  padding-bottom: 10px;\n}\n\n.loading[_ngcontent-%COMP%] {\n  color: #667eea;\n  font-weight: bold;\n  padding: 20px;\n  text-align: center;\n}\n\n.error-box[_ngcontent-%COMP%] {\n  background: #f8d7da;\n  border: 1px solid #f5c6cb;\n  border-radius: 5px;\n  color: #721c24;\n  margin: 15px 0;\n  padding: 15px;\n}\n\n.success-box[_ngcontent-%COMP%] {\n  background: #d4edda;\n  border: 1px solid #c3e6cb;\n  border-radius: 5px;\n  color: #155724;\n  margin: 15px 0;\n  padding: 15px;\n}\n\n.success-box[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 1.1em;\n}\n\n.success-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 10px 0 0;\n}\n\n.services-grid[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 20px;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  margin-top: 20px;\n}\n\n.service-card[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n  border-radius: 8px;\n  box-shadow: 0 5px 15px rgba(102, 126, 234, 0.3);\n  color: white;\n  padding: 20px;\n  text-align: center;\n  transition: transform 0.3s ease;\n}\n\n.service-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-5px);\n}\n\n.service-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.3em;\n  margin: 0 0 10px;\n}\n\n.service-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  opacity: 0.9;\n}\n\n.patient-list[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 20px;\n  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n  margin-top: 20px;\n}\n\n.patient-card[_ngcontent-%COMP%] {\n  background: #f9f9f9;\n  border: 2px solid #667eea;\n  border-radius: 8px;\n  padding: 15px;\n  transition: all 0.3s ease;\n}\n\n.patient-card[_ngcontent-%COMP%]:hover {\n  border-color: #764ba2;\n  box-shadow: 0 5px 15px rgba(102, 126, 234, 0.2);\n}\n\n.patient-card[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: #667eea;\n  margin: 0 0 10px;\n}\n\n.patient-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #333;\n  margin: 5px 0;\n}\n\n.instructions-section[_ngcontent-%COMP%] {\n  background: #fff3cd;\n  border-left: 5px solid #ffc107;\n}\n\n.instructions-section[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  background: #333;\n  border-radius: 5px;\n  color: #0f0;\n  display: block;\n  font-family: \"Courier New\", monospace;\n  margin: 15px 0;\n  overflow-x: auto;\n  padding: 15px;\n}\n\n.docs-section[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n}\n\n.docs-section[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin: 10px 0;\n}\n\n.docs-section[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #667eea;\n  font-weight: bold;\n  text-decoration: none;\n}\n\n.docs-section[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n\n@media (max-width: 768px) {\n  .container[_ngcontent-%COMP%] {\n    padding: 10px;\n  }\n\n  .header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 1.8em;\n  }\n\n  section[_ngcontent-%COMP%] {\n    padding: 20px;\n  }\n\n  .services-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n\n  .patient-list[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL0M6XFxVc2Vyc1xcSnVhbm1hXFxEb2N1bWVudHNcXGdpdFxcbWVkY2VudGVyLW1hbmFnZXJcXHdlYi9zcmNcXGFwcFxcZGFzaGJvYXJkXFxkYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw2REFBQTtFQUNBLDREQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURDRTtFQUNFLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLDJDQUFBO0FDQ0o7O0FERUU7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQ0FKOztBRElBO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLDBDQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0FDREY7O0FER0U7RUFDRSxnQ0FBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0Esb0JBQUE7QUNESjs7QURLQTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQ0ZGOztBREtBO0VBQ0UsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0FDRkY7O0FES0E7RUFDRSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7QUNGRjs7QURJRTtFQUNFLGdCQUFBO0FDRko7O0FES0U7RUFDRSxnQkFBQTtBQ0hKOztBRE9BO0VBQ0UsYUFBQTtFQUNBLFNBQUE7RUFDQSwyREFBQTtFQUNBLGdCQUFBO0FDSkY7O0FET0E7RUFDRSw2REFBQTtFQUNBLGtCQUFBO0VBQ0EsK0NBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsK0JBQUE7QUNKRjs7QURNRTtFQUNFLDJCQUFBO0FDSko7O0FET0U7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0FDTEo7O0FEUUU7RUFDRSxTQUFBO0VBQ0EsWUFBQTtBQ05KOztBRFVBO0VBQ0UsYUFBQTtFQUNBLFNBQUE7RUFDQSw0REFBQTtFQUNBLGdCQUFBO0FDUEY7O0FEVUE7RUFDRSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7QUNQRjs7QURTRTtFQUNFLHFCQUFBO0VBQ0EsK0NBQUE7QUNQSjs7QURVRTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtBQ1JKOztBRFdFO0VBQ0UsV0FBQTtFQUNBLGFBQUE7QUNUSjs7QURhQTtFQUNFLG1CQUFBO0VBQ0EsOEJBQUE7QUNWRjs7QURZRTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLHFDQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtBQ1ZKOztBRGVFO0VBQ0UsZ0JBQUE7RUFDQSxVQUFBO0FDWko7O0FEY0k7RUFDRSxjQUFBO0FDWk47O0FEY007RUFDRSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtBQ1pSOztBRGNRO0VBQ0UsMEJBQUE7QUNaVjs7QURtQkE7RUFDRTtJQUNFLGFBQUE7RUNoQkY7O0VEbUJBO0lBQ0UsZ0JBQUE7RUNoQkY7O0VEbUJBO0lBQ0UsYUFBQTtFQ2hCRjs7RURtQkE7SUFDRSwwQkFBQTtFQ2hCRjs7RURtQkE7SUFDRSwwQkFBQTtFQ2hCRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM2NjdlZWEgMCUsICM3NjRiYTIgMTAwJSk7XHJcbiAgZm9udC1mYW1pbHk6IFwiU2Vnb2UgVUlcIiwgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgbWF4LXdpZHRoOiAxMjAwcHg7XHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgcGFkZGluZzogMjBweDtcclxufVxyXG5cclxuLmhlYWRlciB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbiAgcGFkZGluZzogMzBweCAwO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgaDEge1xyXG4gICAgZm9udC1zaXplOiAyLjVlbTtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHRleHQtc2hhZG93OiAycHggMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbiAgfVxyXG5cclxuICAuc3VidGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAxLjFlbTtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBvcGFjaXR5OiAwLjk7XHJcbiAgfVxyXG59XHJcblxyXG5zZWN0aW9uIHtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGJveC1zaGFkb3c6IDAgMTBweCAzMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gIHBhZGRpbmc6IDMwcHg7XHJcblxyXG4gIGgyIHtcclxuICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjNjY3ZWVhO1xyXG4gICAgY29sb3I6ICM2NjdlZWE7XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4ubG9hZGluZyB7XHJcbiAgY29sb3I6ICM2NjdlZWE7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5lcnJvci1ib3gge1xyXG4gIGJhY2tncm91bmQ6ICNmOGQ3ZGE7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2Y1YzZjYjtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgY29sb3I6ICM3MjFjMjQ7XHJcbiAgbWFyZ2luOiAxNXB4IDA7XHJcbiAgcGFkZGluZzogMTVweDtcclxufVxyXG5cclxuLnN1Y2Nlc3MtYm94IHtcclxuICBiYWNrZ3JvdW5kOiAjZDRlZGRhO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjM2U2Y2I7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGNvbG9yOiAjMTU1NzI0O1xyXG4gIG1hcmdpbjogMTVweCAwO1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcblxyXG4gIHN0cm9uZyB7XHJcbiAgICBmb250LXNpemU6IDEuMWVtO1xyXG4gIH1cclxuXHJcbiAgcCB7XHJcbiAgICBtYXJnaW46IDEwcHggMCAwO1xyXG4gIH1cclxufVxyXG5cclxuLnNlcnZpY2VzLWdyaWQge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ2FwOiAyMHB4O1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjUwcHgsIDFmcikpO1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuXHJcbi5zZXJ2aWNlLWNhcmQge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM2NjdlZWEgMCUsICM3NjRiYTIgMTAwJSk7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIGJveC1zaGFkb3c6IDAgNXB4IDE1cHggcmdiYSgxMDIsIDEyNiwgMjM0LCAwLjMpO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlO1xyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNXB4KTtcclxuICB9XHJcblxyXG4gIGgzIHtcclxuICAgIGZvbnQtc2l6ZTogMS4zZW07XHJcbiAgICBtYXJnaW46IDAgMCAxMHB4O1xyXG4gIH1cclxuXHJcbiAgcCB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBvcGFjaXR5OiAwLjk7XHJcbiAgfVxyXG59XHJcblxyXG4ucGF0aWVudC1saXN0IHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdhcDogMjBweDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgzMDBweCwgMWZyKSk7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG5cclxuLnBhdGllbnQtY2FyZCB7XHJcbiAgYmFja2dyb3VuZDogI2Y5ZjlmOTtcclxuICBib3JkZXI6IDJweCBzb2xpZCAjNjY3ZWVhO1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjNzY0YmEyO1xyXG4gICAgYm94LXNoYWRvdzogMCA1cHggMTVweCByZ2JhKDEwMiwgMTI2LCAyMzQsIDAuMik7XHJcbiAgfVxyXG5cclxuICBoNCB7XHJcbiAgICBjb2xvcjogIzY2N2VlYTtcclxuICAgIG1hcmdpbjogMCAwIDEwcHg7XHJcbiAgfVxyXG5cclxuICBwIHtcclxuICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgbWFyZ2luOiA1cHggMDtcclxuICB9XHJcbn1cclxuXHJcbi5pbnN0cnVjdGlvbnMtc2VjdGlvbiB7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjNjZDtcclxuICBib3JkZXItbGVmdDogNXB4IHNvbGlkICNmZmMxMDc7XHJcblxyXG4gIGNvZGUge1xyXG4gICAgYmFja2dyb3VuZDogIzMzMztcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGNvbG9yOiAjMGYwO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBmb250LWZhbWlseTogXCJDb3VyaWVyIE5ld1wiLCBtb25vc3BhY2U7XHJcbiAgICBtYXJnaW46IDE1cHggMDtcclxuICAgIG92ZXJmbG93LXg6IGF1dG87XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gIH1cclxufVxyXG5cclxuLmRvY3Mtc2VjdGlvbiB7XHJcbiAgdWwge1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIHBhZGRpbmc6IDA7XHJcblxyXG4gICAgbGkge1xyXG4gICAgICBtYXJnaW46IDEwcHggMDtcclxuXHJcbiAgICAgIGEge1xyXG4gICAgICAgIGNvbG9yOiAjNjY3ZWVhO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuXHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIC5jb250YWluZXIge1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICB9XHJcblxyXG4gIC5oZWFkZXIgaDEge1xyXG4gICAgZm9udC1zaXplOiAxLjhlbTtcclxuICB9XHJcblxyXG4gIHNlY3Rpb24ge1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICB9XHJcblxyXG4gIC5zZXJ2aWNlcy1ncmlkIHtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xyXG4gIH1cclxuXHJcbiAgLnBhdGllbnQtbGlzdCB7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuICB9XHJcbn1cclxuIiwiLmNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM2NjdlZWEgMCUsICM3NjRiYTIgMTAwJSk7XG4gIGZvbnQtZmFtaWx5OiBcIlNlZ29lIFVJXCIsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWF4LXdpZHRoOiAxMjAwcHg7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBwYWRkaW5nOiAyMHB4O1xufVxuXG4uaGVhZGVyIHtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xuICBwYWRkaW5nOiAzMHB4IDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5oZWFkZXIgaDEge1xuICBmb250LXNpemU6IDIuNWVtO1xuICBtYXJnaW46IDA7XG4gIHRleHQtc2hhZG93OiAycHggMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG59XG4uaGVhZGVyIC5zdWJ0aXRsZSB7XG4gIGZvbnQtc2l6ZTogMS4xZW07XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIG9wYWNpdHk6IDAuOTtcbn1cblxuc2VjdGlvbiB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3gtc2hhZG93OiAwIDEwcHggMzBweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gIHBhZGRpbmc6IDMwcHg7XG59XG5zZWN0aW9uIGgyIHtcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICM2NjdlZWE7XG4gIGNvbG9yOiAjNjY3ZWVhO1xuICBtYXJnaW4tdG9wOiAwO1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbn1cblxuLmxvYWRpbmcge1xuICBjb2xvcjogIzY2N2VlYTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmVycm9yLWJveCB7XG4gIGJhY2tncm91bmQ6ICNmOGQ3ZGE7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmNWM2Y2I7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgY29sb3I6ICM3MjFjMjQ7XG4gIG1hcmdpbjogMTVweCAwO1xuICBwYWRkaW5nOiAxNXB4O1xufVxuXG4uc3VjY2Vzcy1ib3gge1xuICBiYWNrZ3JvdW5kOiAjZDRlZGRhO1xuICBib3JkZXI6IDFweCBzb2xpZCAjYzNlNmNiO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGNvbG9yOiAjMTU1NzI0O1xuICBtYXJnaW46IDE1cHggMDtcbiAgcGFkZGluZzogMTVweDtcbn1cbi5zdWNjZXNzLWJveCBzdHJvbmcge1xuICBmb250LXNpemU6IDEuMWVtO1xufVxuLnN1Y2Nlc3MtYm94IHAge1xuICBtYXJnaW46IDEwcHggMCAwO1xufVxuXG4uc2VydmljZXMtZ3JpZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdhcDogMjBweDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyNTBweCwgMWZyKSk7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi5zZXJ2aWNlLWNhcmQge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjNjY3ZWVhIDAlLCAjNzY0YmEyIDEwMCUpO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGJveC1zaGFkb3c6IDAgNXB4IDE1cHggcmdiYSgxMDIsIDEyNiwgMjM0LCAwLjMpO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZTtcbn1cbi5zZXJ2aWNlLWNhcmQ6aG92ZXIge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTVweCk7XG59XG4uc2VydmljZS1jYXJkIGgzIHtcbiAgZm9udC1zaXplOiAxLjNlbTtcbiAgbWFyZ2luOiAwIDAgMTBweDtcbn1cbi5zZXJ2aWNlLWNhcmQgcCB7XG4gIG1hcmdpbjogMDtcbiAgb3BhY2l0eTogMC45O1xufVxuXG4ucGF0aWVudC1saXN0IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ2FwOiAyMHB4O1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgzMDBweCwgMWZyKSk7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi5wYXRpZW50LWNhcmQge1xuICBiYWNrZ3JvdW5kOiAjZjlmOWY5O1xuICBib3JkZXI6IDJweCBzb2xpZCAjNjY3ZWVhO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG59XG4ucGF0aWVudC1jYXJkOmhvdmVyIHtcbiAgYm9yZGVyLWNvbG9yOiAjNzY0YmEyO1xuICBib3gtc2hhZG93OiAwIDVweCAxNXB4IHJnYmEoMTAyLCAxMjYsIDIzNCwgMC4yKTtcbn1cbi5wYXRpZW50LWNhcmQgaDQge1xuICBjb2xvcjogIzY2N2VlYTtcbiAgbWFyZ2luOiAwIDAgMTBweDtcbn1cbi5wYXRpZW50LWNhcmQgcCB7XG4gIGNvbG9yOiAjMzMzO1xuICBtYXJnaW46IDVweCAwO1xufVxuXG4uaW5zdHJ1Y3Rpb25zLXNlY3Rpb24ge1xuICBiYWNrZ3JvdW5kOiAjZmZmM2NkO1xuICBib3JkZXItbGVmdDogNXB4IHNvbGlkICNmZmMxMDc7XG59XG4uaW5zdHJ1Y3Rpb25zLXNlY3Rpb24gY29kZSB7XG4gIGJhY2tncm91bmQ6ICMzMzM7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgY29sb3I6ICMwZjA7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LWZhbWlseTogXCJDb3VyaWVyIE5ld1wiLCBtb25vc3BhY2U7XG4gIG1hcmdpbjogMTVweCAwO1xuICBvdmVyZmxvdy14OiBhdXRvO1xuICBwYWRkaW5nOiAxNXB4O1xufVxuXG4uZG9jcy1zZWN0aW9uIHVsIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgcGFkZGluZzogMDtcbn1cbi5kb2NzLXNlY3Rpb24gdWwgbGkge1xuICBtYXJnaW46IDEwcHggMDtcbn1cbi5kb2NzLXNlY3Rpb24gdWwgbGkgYSB7XG4gIGNvbG9yOiAjNjY3ZWVhO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuLmRvY3Mtc2VjdGlvbiB1bCBsaSBhOmhvdmVyIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICB9XG5cbiAgLmhlYWRlciBoMSB7XG4gICAgZm9udC1zaXplOiAxLjhlbTtcbiAgfVxuXG4gIHNlY3Rpb24ge1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gIH1cblxuICAuc2VydmljZXMtZ3JpZCB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gIH1cblxuICAucGF0aWVudC1saXN0IHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgfVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-dashboard',
                templateUrl: './dashboard.component.html',
                styleUrls: ['./dashboard.component.scss']
            }]
    }], function () { return [{ type: _services_patient_service__WEBPACK_IMPORTED_MODULE_3__["PatientService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/patient.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/patient.service.ts ***!
  \*********************************************/
/*! exports provided: PatientService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientService", function() { return PatientService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




class PatientService {
    constructor(http) {
        this.http = http;
        this.apiUrl = `${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl}/patients`;
    }
    /**
     * Obtener todos los pacientes
     */
    getAllPatients() {
        return this.http.get(this.apiUrl);
    }
    /**
     * Obtener un paciente por ID
     */
    getPatientById(patientId) {
        return this.http.get(`${this.apiUrl}/${patientId}`);
    }
    /**
     * Crear un nuevo paciente
     */
    createPatient(patient) {
        return this.http.post(this.apiUrl, patient);
    }
    /**
     * Actualizar un paciente
     */
    updatePatient(patientId, patient) {
        return this.http.patch(`${this.apiUrl}/${patientId}`, patient);
    }
    /**
     * Eliminar un paciente
     */
    deletePatient(patientId) {
        return this.http.delete(`${this.apiUrl}/${patientId}`);
    }
    /**
     * Obtener todos los registros médicos de un paciente
     */
    getMedicalRecordsByPatientId(patientId) {
        return this.http.get(`${this.apiUrl}/${patientId}/medical-records`);
    }
    /**
     * Obtener todos los registros previos de un paciente
     */
    getPreviousRecordsByPatientId(patientId) {
        return this.http.get(`${this.apiUrl}/${patientId}/previous-records`);
    }
}
PatientService.ɵfac = function PatientService_Factory(t) { return new (t || PatientService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
PatientService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PatientService, factory: PatientService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PatientService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    apiUrl: "http://localhost:8080/api",
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Juanma\Documents\git\medcenter-manager\web\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map