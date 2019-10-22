(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _error_page_error_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./error-page/error-page.component */ "./src/app/error-page/error-page.component.ts");
/* harmony import */ var _auth_signin_signin_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth/signin/signin.component */ "./src/app/auth/signin/signin.component.ts");
/* harmony import */ var _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth/signup/signup.component */ "./src/app/auth/signup/signup.component.ts");






var routes = [
    { path: "signin", component: _auth_signin_signin_component__WEBPACK_IMPORTED_MODULE_4__["SigninComponent"] },
    { path: "signup", component: _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_5__["SignupComponent"] },
    {
        path: "not-found",
        component: _error_page_error_page_component__WEBPACK_IMPORTED_MODULE_3__["ErrorPageComponent"],
        data: { message: "Page not found!" }
    },
    { path: "**", redirectTo: "/not-found" }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"container\">\n  <router-outlet></router-outlet>\n</div>\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_2__);



var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.loadedFeature = 'employment';
    }
    AppComponent.prototype.ngOnInit = function () {
        firebase__WEBPACK_IMPORTED_MODULE_2__["initializeApp"]({
            apiKey: "AIzaSyBFQGehUfwPdboaQ2lV666INtHTYXEq1fQ",
            authDomain: "employees-database-3cdd1.firebaseapp.com"
        });
    };
    AppComponent.prototype.onNavigate = function (feature) {
        this.loadedFeature = feature;
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: debug, metaReducers, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "debug", function() { return debug; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "metaReducers", function() { return metaReducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _error_page_error_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./error-page/error-page.component */ "./src/app/error-page/error-page.component.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _auth_auth_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./auth/auth.module */ "./src/app/auth/auth.module.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _employment_employment_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./employment/employment.module */ "./src/app/employment/employment.module.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngrx/store-devtools */ "./node_modules/@ngrx/store-devtools/fesm5/store-devtools.js");
/* harmony import */ var _ngrx_router_store__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngrx/router-store */ "./node_modules/@ngrx/router-store/fesm5/router-store.js");
/* harmony import */ var _store_effects_auth_effects__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./store/effects/auth.effects */ "./src/app/store/effects/auth.effects.ts");
/* harmony import */ var _store_reducers_app_reducers__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./store/reducers/app.reducers */ "./src/app/store/reducers/app.reducers.ts");
/* harmony import */ var _store_effects_employment_effects__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./store/effects/employment.effects */ "./src/app/store/effects/employment.effects.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var apollo_angular_cache_ngrx__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! apollo-angular-cache-ngrx */ "./node_modules/apollo-angular-cache-ngrx/index.js");
/* harmony import */ var _graphql_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./graphql.module */ "./src/app/graphql.module.ts");
/* harmony import */ var _graphql_graphql_crud_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./graphql/graphql-crud.service */ "./src/app/graphql/graphql-crud.service.ts");






















function debug(reducer) {
    return function (state, action) {
        // console.log('state', state);
        // console.log('action', action);
        return reducer(state, action);
    };
}
var metaReducers = [debug];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"], _error_page_error_page_component__WEBPACK_IMPORTED_MODULE_6__["ErrorPageComponent"]],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _employment_employment_module__WEBPACK_IMPORTED_MODULE_10__["EmploymentModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _auth_auth_module__WEBPACK_IMPORTED_MODULE_8__["AuthModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatDialogModule"],
                _graphql_module__WEBPACK_IMPORTED_MODULE_20__["GraphQLModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_11__["StoreModule"].forRoot(_store_reducers_app_reducers__WEBPACK_IMPORTED_MODULE_16__["REDUCERS_TOKEN"], { metaReducers: metaReducers }),
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_12__["EffectsModule"].forRoot([_store_effects_auth_effects__WEBPACK_IMPORTED_MODULE_15__["AuthEffects"], _store_effects_employment_effects__WEBPACK_IMPORTED_MODULE_17__["EmploymentEffects"]]),
                !_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].production ? _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_13__["StoreDevtoolsModule"].instrument() : [],
                _ngrx_router_store__WEBPACK_IMPORTED_MODULE_14__["StoreRouterConnectingModule"],
                apollo_angular_cache_ngrx__WEBPACK_IMPORTED_MODULE_19__["NgrxCacheModule"]
            ],
            providers: [
                _graphql_graphql_crud_service__WEBPACK_IMPORTED_MODULE_21__["GraphqlCrudService"],
                _store_reducers_app_reducers__WEBPACK_IMPORTED_MODULE_16__["reducerProvider"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth/auth-guard.service.ts":
/*!********************************************!*\
  !*** ./src/app/auth/auth-guard.service.ts ***!
  \********************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var AuthGuard = /** @class */ (function () {
    function AuthGuard(store, router) {
        this.store = store;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        var _this = this;
        return this.store.select('auth')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (authState) {
            if (authState.authenticated) {
                return authState.authenticated;
            }
            else {
                _this.router.navigate(["/"]);
            }
        }));
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/auth/auth.module.ts":
/*!*************************************!*\
  !*** ./src/app/auth/auth.module.ts ***!
  \*************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _signin_signin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signin/signin.component */ "./src/app/auth/signin/signin.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/auth/signup/signup.component.ts");






var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _signin_signin_component__WEBPACK_IMPORTED_MODULE_3__["SigninComponent"],
                _signup_signup_component__WEBPACK_IMPORTED_MODULE_5__["SignupComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
            ]
        })
    ], AuthModule);
    return AuthModule;
}());



/***/ }),

/***/ "./src/app/auth/signin/signin.component.css":
/*!**************************************************!*\
  !*** ./src/app/auth/signin/signin.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input.ng-invalid.ng-touched{\n  border: 1px solid red;\n}\n\ninput.ng-invalid.ng-dirty{\n  border: 1px solid red;\n}\n\n.fa:hover{\n  color:black;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9zaWduaW4vc2lnbmluLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBQ0E7RUFDRSxXQUFXO0FBQ2IiLCJmaWxlIjoic3JjL2FwcC9hdXRoL3NpZ25pbi9zaWduaW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImlucHV0Lm5nLWludmFsaWQubmctdG91Y2hlZHtcbiAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xufVxuXG5pbnB1dC5uZy1pbnZhbGlkLm5nLWRpcnR5e1xuICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XG59XG4uZmE6aG92ZXJ7XG4gIGNvbG9yOmJsYWNrO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/auth/signin/signin.component.html":
/*!***************************************************!*\
  !*** ./src/app/auth/signin/signin.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col\">\n      <h2 class=\"bd-title\">Sign In</h2>\n    </div>\n    <div class=\"col text-right\">\n      <button\n      class=\"btn btn-link btn-sm\"\n      style=\"cursor: pointer; color:#7b7b7b; padding:0em;\"\n      (click)=\"onCloseDialog()\"\n      >\n      <i class=\"fa fa-window-close fa-2x\"></i>\n    </button>\n    </div>\n  </div>\n  <br>\n  <span class=\"text-danger text-center\" *ngIf=\"(authState | async).failAuth\" >\n      Incorrect Email or Password\n  </span>\n  <br>\n  <div class=\"row\">\n    <div class=\"col-xs-12 col-sm-12 col-md-12\">\n      <form (ngSubmit)=\"onSignIn(f)\" #f=\"ngForm\">\n        <div class=\"form-group\">\n          <label for=\"email\">Email</label>\n          <input\n            type=\"email\"\n            id=\"email\"\n            class=\"form-control\"\n            ngModel name=\"email\"\n            pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$\"\n            required #email=\"ngModel\"\n          />\n          <span class=\"text-muted\" *ngIf=\"!email.valid && email.touched\" >\n            <small>\n              Please enter a valid email\n            </small>\n          </span>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"password\">Password</label>\n          <input\n            type=\"password\"\n            id=\"password\"\n            name=\"password\"\n            ngModel\n            class=\"form-control\"\n            required #password=\"ngModel\"\n          />\n          <span class=\"text-muted\" *ngIf=\"!password.valid && password.touched\" >\n            <small>\n                Please enter your password\n            </small>\n          </span>\n        </div>\n        <button class=\"btn btn-dark\" [disabled]=\"f.invalid\">Sing In</button>\n      </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/auth/signin/signin.component.ts":
/*!*************************************************!*\
  !*** ./src/app/auth/signin/signin.component.ts ***!
  \*************************************************/
/*! exports provided: SigninComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninComponent", function() { return SigninComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _store_actions_auth_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../store/actions/auth.actions */ "./src/app/store/actions/auth.actions.ts");






var SigninComponent = /** @class */ (function () {
    function SigninComponent(store, dialogRef) {
        this.store = store;
        this.dialogRef = dialogRef;
    }
    SigninComponent.prototype.ngOnInit = function () {
        this.authState = this.store.select('auth');
    };
    SigninComponent.prototype.onSignIn = function (form) {
        var _this = this;
        var email = form.value.email;
        var password = form.value.password;
        this.store.dispatch(new _store_actions_auth_actions__WEBPACK_IMPORTED_MODULE_5__["TrySignin"]({ username: email, password: password }));
        this.store.select('auth').subscribe(function (auth) {
            if (auth.authenticated) {
                _this.onCloseDialog();
            }
            else {
                _this.signinForm.reset();
            }
        });
    };
    SigninComponent.prototype.onCloseDialog = function () {
        this.dialogRef.close();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('f'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"])
    ], SigninComponent.prototype, "signinForm", void 0);
    SigninComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-signin',
            template: __webpack_require__(/*! ./signin.component.html */ "./src/app/auth/signin/signin.component.html"),
            styles: [__webpack_require__(/*! ./signin.component.css */ "./src/app/auth/signin/signin.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]])
    ], SigninComponent);
    return SigninComponent;
}());



/***/ }),

/***/ "./src/app/auth/signup/signup.component.css":
/*!**************************************************!*\
  !*** ./src/app/auth/signup/signup.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input.ng-invalid.ng-touched {\n  border: 1px solid red;\n}\n\ninput.ng-invalid.ng-dirty {\n  border: 1px solid red;\n}\n\n.fa:hover {\n  color: black;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBQ0E7RUFDRSxZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9hdXRoL3NpZ251cC9zaWdudXAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImlucHV0Lm5nLWludmFsaWQubmctdG91Y2hlZCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcbn1cblxuaW5wdXQubmctaW52YWxpZC5uZy1kaXJ0eSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcbn1cbi5mYTpob3ZlciB7XG4gIGNvbG9yOiBibGFjaztcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/auth/signup/signup.component.html":
/*!***************************************************!*\
  !*** ./src/app/auth/signup/signup.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col\">\n      <h2 class=\"bd-title\">Sign Up</h2>\n    </div>\n    <div class=\"col text-right\">\n      <button\n        class=\"btn btn-link btn-sm\"\n        style=\"cursor: pointer; color:#7b7b7b; padding:0em;\"\n        (click)=\"onCloseDialog()\"\n      >\n        <i class=\"fa fa-window-close fa-2x\"></i>\n      </button>\n    </div>\n  </div>\n  <span class=\"text-muted\">And sign in to view admin operations</span>\n  <br />\n  <span class=\"text-danger text-center\" *ngIf=\"(authState | async).failAuth\">\n    Incorrect Email or Password\n  </span>\n  <br />\n  <div class=\"row\">\n    <div class=\"col-xs-12 col-sm-12 col-md-12\">\n      <form (ngSubmit)=\"onSignUp(f)\" #f=\"ngForm\">\n        <div class=\"form-group\">\n          <label for=\"email\">Email</label>\n          <input\n            type=\"email\"\n            id=\"email\"\n            class=\"form-control\"\n            ngModel\n            name=\"email\"\n            pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$\"\n            required\n            #email=\"ngModel\"\n          />\n          <span class=\"text-muted\" *ngIf=\"!email.valid && email.touched\">\n            <small>\n              Please enter a valid email\n            </small>\n          </span>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"password\">Password</label>\n          <input\n            type=\"password\"\n            id=\"password\"\n            name=\"password\"\n            ngModel\n            class=\"form-control\"\n            required\n            #password=\"ngModel\"\n          />\n          <span class=\"text-muted\" *ngIf=\"!password.valid && password.touched\">\n            <small>\n              Please enter your password\n            </small>\n          </span>\n        </div>\n        <button class=\"btn btn-dark\" [disabled]=\"f.invalid\">Sing Up</button>\n      </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/auth/signup/signup.component.ts":
/*!*************************************************!*\
  !*** ./src/app/auth/signup/signup.component.ts ***!
  \*************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _store_actions_auth_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../store/actions/auth.actions */ "./src/app/store/actions/auth.actions.ts");






var SignupComponent = /** @class */ (function () {
    function SignupComponent(store, dialogRef) {
        this.store = store;
        this.dialogRef = dialogRef;
    }
    SignupComponent.prototype.ngOnInit = function () {
        this.authState = this.store.select("auth");
    };
    SignupComponent.prototype.onSignUp = function (form) {
        var email = form.value.email;
        var password = form.value.password;
        this.store.dispatch(new _store_actions_auth_actions__WEBPACK_IMPORTED_MODULE_5__["TrySignup"]({ username: email, password: password }));
        console.log("i am close");
        this.onCloseDialog();
    };
    SignupComponent.prototype.onCloseDialog = function () {
        this.dialogRef.close();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])("f"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"])
    ], SignupComponent.prototype, "signupForm", void 0);
    SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: "app-signup",
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/auth/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/auth/signup/signup.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/employment/employment-edit/employment-edit.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/employment/employment-edit/employment-edit.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fa:hover{\n  color:black;\n\n}\ninput.ng-invalid.ng-touched{\n  border: 1px solid red;\n}\ninput.ng-invalid.ng-dirty{\n  border: 1px solid red;\n}\nselect.ng-invalid.ng-touched{\n  border: 1px solid red;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW1wbG95bWVudC9lbXBsb3ltZW50LWVkaXQvZW1wbG95bWVudC1lZGl0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXOztBQUViO0FBQ0E7RUFDRSxxQkFBcUI7QUFDdkI7QUFFQTtFQUNFLHFCQUFxQjtBQUN2QjtBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvZW1wbG95bWVudC9lbXBsb3ltZW50LWVkaXQvZW1wbG95bWVudC1lZGl0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmE6aG92ZXJ7XG4gIGNvbG9yOmJsYWNrO1xuXG59XG5pbnB1dC5uZy1pbnZhbGlkLm5nLXRvdWNoZWR7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcbn1cblxuaW5wdXQubmctaW52YWxpZC5uZy1kaXJ0eXtcbiAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xufVxuXG5zZWxlY3QubmctaW52YWxpZC5uZy10b3VjaGVke1xuICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/employment/employment-edit/employment-edit.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/employment/employment-edit/employment-edit.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col\">\n      <h2 class=\"bd-title\">Setup</h2>\n    </div>\n    <div class=\"col text-right\">\n      <button\n        class=\"btn btn-link btn-sm\"\n        style=\"cursor: pointer; color:#7b7b7b; padding:0em;\"\n        (click)=\"onCloseDialog()\"\n      >\n        <i class=\"fa fa-window-close fa-2x\"></i>\n      </button>\n    </div>\n  </div>\n  <br />\n  <form [formGroup]=\"registerForm\" (ngSubmit)=\"onSubmit()\" autocomplete=\"off\">\n    <div class=\"row\">\n      <div class=\"col\">\n        <div class=\"container\">\n          <div class=\"row\">\n            <label for=\"name\">Name:</label>\n            <input\n              type=\"text\"\n              id=\"name\"\n              class=\"form-control\"\n              formControlName=\"name\"\n            />\n            <span\n              *ngIf=\"\n                !registerForm.get('name').valid &&\n                registerForm.get('name').touched\n              \"\n              class=\"text-muted\"\n            >\n              <small *ngIf=\"registerForm.get('name').errors['required']\">\n                This Field is Required\n              </small>\n            </span>\n          </div>\n          <div class=\"row\">\n            <label for=\"lastname\">Lastname:</label>\n            <input\n              type=\"text\"\n              id=\"lastname\"\n              class=\"form-control\"\n              formControlName=\"lastname\"\n            />\n            <span\n              *ngIf=\"\n                !registerForm.get('lastname').valid &&\n                registerForm.get('lastname').touched\n              \"\n              class=\"text-muted\"\n            >\n              <small *ngIf=\"registerForm.get('lastname').errors['required']\">\n                This Field is Required\n              </small>\n            </span>\n          </div>\n\n          <div class=\"row\">\n            <label for=\"cinumber\">DNI:</label>\n            <input\n              type=\"number\"\n              id=\"cinumber\"\n              class=\"form-control\"\n              formControlName=\"cinumber\"\n            />\n            <span\n              *ngIf=\"\n                !registerForm.get('cinumber').valid &&\n                registerForm.get('cinumber').touched\n              \"\n              class=\"text-muted\"\n            >\n              <small *ngIf=\"registerForm.get('cinumber').errors['CIrepeated']\">\n                This DNI is Repeated\n              </small>\n              <small *ngIf=\"registerForm.get('cinumber').errors['required']\">\n                This Field is Required\n              </small>\n            </span>\n          </div>\n          <div class=\"row\">\n            <label for=\"birthdate\">Birthdate:</label>\n            <input\n              type=\"date\"\n              id=\"birthdate\"\n              class=\"form-control\"\n              formControlName=\"birthdate\"\n              data-date-format=\"dd/mm/yyyy\"\n              min=\"1960-01-01\"\n            />\n            <span\n              *ngIf=\"\n                !registerForm.get('birthdate').valid &&\n                registerForm.get('birthdate').touched\n              \"\n              class=\"text-muted\"\n            >\n              <small *ngIf=\"registerForm.get('birthdate').errors['required']\">\n                This Field is Required\n              </small>\n            </span>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"col\">\n        <div class=\"container\">\n          <div class=\"row\">\n            <label for=\"address\">Address:</label>\n            <input\n              type=\"text\"\n              id=\"address\"\n              class=\"form-control\"\n              formControlName=\"address\"\n            />\n            <span\n              *ngIf=\"\n                !registerForm.get('address').valid &&\n                registerForm.get('address').touched\n              \"\n              class=\"text-muted\"\n            >\n              <small *ngIf=\"registerForm.get('address').errors['required']\">\n                This Field is Required\n              </small>\n            </span>\n          </div>\n          <div class=\"row\">\n            <label for=\"phone\">Phone:</label>\n            <input\n              type=\"number\"\n              id=\"phone\"\n              class=\"form-control\"\n              formControlName=\"phone\"\n            />\n            <span\n              *ngIf=\"\n                !registerForm.get('phone').valid &&\n                registerForm.get('phone').touched\n              \"\n              class=\"text-muted\"\n            >\n              <small *ngIf=\"registerForm.get('phone').errors['required']\">\n                This Field is Required\n              </small>\n            </span>\n          </div>\n          <div class=\"row\">\n            <label for=\"role\">Role:</label>\n            <select id=\"role\" class=\"form-control\" formControlName=\"role\">\n              <option value=\"Designer\">Designer</option>\n              <option value=\"Programmer\">Programmer</option>\n            </select>\n            <span\n              *ngIf=\"\n                !registerForm.get('role').valid &&\n                registerForm.get('role').touched\n              \"\n              class=\"text-muted\"\n            >\n              <small *ngIf=\"registerForm.get('role').errors['required']\">\n                This Field is Required\n              </small>\n            </span>\n          </div>\n          <div class=\"row\">\n            <label for=\"profession\">Profession:</label>\n            <input\n              type=\"text\"\n              id=\"profession\"\n              class=\"form-control\"\n              formControlName=\"profession\"\n            />\n            <span\n              *ngIf=\"\n                !registerForm.get('profession').valid &&\n                registerForm.get('profession').touched\n              \"\n              class=\"text-muted\"\n            >\n              <small *ngIf=\"registerForm.get('profession').errors['required']\">\n                This Field is Required\n              </small>\n            </span>\n          </div>\n        </div>\n      </div>\n    </div>\n    <br />\n    <div class=\"row\">\n      <div class=\"btn-group col-xs-12 col-sm-12 \">\n        <button\n          class=\"btn btn-dark\"\n          type=\"submit\"\n          [disabled]=\"!registerForm.valid\"\n        >\n          {{ editMode ? \"Update\" : \"Add\" }}\n        </button>\n        <button class=\"btn btn-primary\" type=\"button\" (click)=\"onClear()\">\n          Clear\n        </button>\n      </div>\n    </div>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/employment/employment-edit/employment-edit.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/employment/employment-edit/employment-edit.component.ts ***!
  \*************************************************************************/
/*! exports provided: EmploymentEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmploymentEditComponent", function() { return EmploymentEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _shared_employee_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/employee.model */ "./src/app/shared/employee.model.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _store_selectors_employment_selectors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../store/selectors/employment.selectors */ "./src/app/store/selectors/employment.selectors.ts");
/* harmony import */ var _store_actions_employment_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../store/actions/employment.actions */ "./src/app/store/actions/employment.actions.ts");








var EmploymentEditComponent = /** @class */ (function () {
    function EmploymentEditComponent(store, dialogRef) {
        this.store = store;
        this.dialogRef = dialogRef;
        this.editMode = false;
    }
    EmploymentEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.registerForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("[a-zA-Z ]*")
            ]),
            lastname: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("[a-zA-Z ]*")
            ]),
            cinumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("^[1-9]+[0-9]*$"),
                this.forbbidenCIs.bind(this)
            ]),
            birthdate: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            ]),
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            ]),
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("^[1-9]+[0-9]*$"),
            ]),
            role: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            profession: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("[a-zA-Z ]*")
            ]),
        });
        this.store.select("employment").subscribe(function (data) {
            if (data.editedEmployeeIndex > -1) {
                _this.editedUser = data.editedEmployee;
                _this.editMode = true;
                var month = _this.editedUser.birthdate.split("/", 3)[1];
                var year = _this.editedUser.birthdate.split("/", 3)[2];
                var day = _this.editedUser.birthdate.split("/", 3)[0];
                var birthdateFixed = year + "-" + day + "-" + month;
                _this.registerForm.setValue({
                    name: _this.editedUser.name,
                    lastname: _this.editedUser.lastname,
                    cinumber: _this.editedUser.cinumber,
                    birthdate: birthdateFixed,
                    address: _this.editedUser.address,
                    phone: _this.editedUser.phone,
                    role: _this.editedUser.role,
                    profession: _this.editedUser.profession
                });
                _this.idForm = _this.editedUser.id;
            }
            else {
                _this.editMode = false;
                _this.idForm = '';
            }
        });
    };
    EmploymentEditComponent.prototype.onSubmit = function () {
        var nameForm = this.registerForm.value.name;
        var lastnameForm = this.registerForm.value.lastname;
        var cinumberForm = this.registerForm.value.cinumber.toString();
        var month = this.registerForm.value.birthdate.split("-", 3)[1];
        var day = this.registerForm.value.birthdate.split("-", 3)[2];
        var year = this.registerForm.value.birthdate.split("-", 3)[0];
        var birthdateForm = month + "/" + day + "/" + year;
        var addressForm = this.registerForm.value.address;
        var phoneForm = this.registerForm.value.phone.toString();
        var roleForm = this.registerForm.value.role;
        var professionForm = this.registerForm.value.profession;
        var newEmployee = new _shared_employee_model__WEBPACK_IMPORTED_MODULE_4__["Employee"](this.idForm, nameForm, lastnameForm, cinumberForm, birthdateForm, addressForm, phoneForm, roleForm, professionForm);
        if (this.editMode) {
            this.store.dispatch(new _store_actions_employment_actions__WEBPACK_IMPORTED_MODULE_7__["UpdateEmployee"]({ employee: newEmployee }));
        }
        else {
            this.store.dispatch(new _store_actions_employment_actions__WEBPACK_IMPORTED_MODULE_7__["AddEmployee"]({ employee: newEmployee }));
        }
        this.dialogRef.close();
        this.onClear();
    };
    EmploymentEditComponent.prototype.onClear = function () {
        this.registerForm.reset();
    };
    EmploymentEditComponent.prototype.onCloseDialog = function () {
        this.store.dispatch(new _store_actions_employment_actions__WEBPACK_IMPORTED_MODULE_7__["StopEdit"]);
        this.dialogRef.close();
        this.editMode = false;
    };
    EmploymentEditComponent.prototype.forbbidenCIs = function (control) {
        var _this = this;
        this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["select"])(_store_selectors_employment_selectors__WEBPACK_IMPORTED_MODULE_6__["employeesCI"])).subscribe(function (data) { return _this.ciNumbers = data; });
        if (this.ciNumbers.indexOf(control.value) !== -1) {
            return { CIrepeated: true };
        }
        return null;
    };
    EmploymentEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-employment-edit",
            template: __webpack_require__(/*! ./employment-edit.component.html */ "./src/app/employment/employment-edit/employment-edit.component.html"),
            styles: [__webpack_require__(/*! ./employment-edit.component.css */ "./src/app/employment/employment-edit/employment-edit.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"]])
    ], EmploymentEditComponent);
    return EmploymentEditComponent;
}());



/***/ }),

/***/ "./src/app/employment/employment-list/employment-list.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/employment/employment-list/employment-list.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fa:hover{\n  color:black;\n\n}\n.col-md-auto, .col{\n  margin: 0.2em;\n}\ndiv{\n  font-family: 'Times New Roman';\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW1wbG95bWVudC9lbXBsb3ltZW50LWxpc3QvZW1wbG95bWVudC1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXOztBQUViO0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7QUFDQTtFQUNFLDhCQUE4QjtBQUNoQyIsImZpbGUiOiJzcmMvYXBwL2VtcGxveW1lbnQvZW1wbG95bWVudC1saXN0L2VtcGxveW1lbnQtbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZhOmhvdmVye1xuICBjb2xvcjpibGFjaztcblxufVxuLmNvbC1tZC1hdXRvLCAuY29se1xuICBtYXJnaW46IDAuMmVtO1xufVxuZGl2e1xuICBmb250LWZhbWlseTogJ1RpbWVzIE5ldyBSb21hbic7XG59XG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/employment/employment-list/employment-list.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/employment/employment-list/employment-list.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <br />\n  <div class=\"row\">\n    <div class=\"col\">\n      <h3 class=\"bd-title\">\n        Employees\n      </h3>\n    </div>\n    <div class=\"col-md-auto\">\n      <div class=\"input-group md-form form-sm form-2 pl-0\">\n        <input\n          class=\"form-control\"\n          type=\"text\"\n          placeholder=\"Search\"\n          aria-label=\"Search\"\n          (input)=\"searchEmployee($event)\"\n        />\n        <div class=\"input-group-append\">\n          <span class=\"input-group-text lime lighten-2\"\n            ><i class=\"fa fa-search text-grey\" aria-hidden=\"true\"></i\n          ></span>\n        </div>\n      </div>\n    </div>\n    <div *ngIf=\"(authState | async).authenticated\" class=\"col-md-auto\">\n      <button class=\"btn btn-dark\" (click)=\"onCreate()\">\n        + Add Employee\n      </button>\n    </div>\n  </div>\n  <br />\n  <br />\n  <div class=\"container\">\n    <div class=\"table-responsive\">\n      <table class=\"table table-borderless table-hover\">\n        <thead>\n          <th scope=\"col\" class=\"text-nowrap\">NAMES</th>\n          <th scope=\"col\">DNI</th>\n          <th scope=\"col\">BIRTHDATE</th>\n          <th scope=\"col\">ADDRESS</th>\n          <th scope=\"col\">PHONE</th>\n          <th scope=\"col\">ROLE</th>\n          <th scope=\"col\">PROFESSION</th>\n          <ng-template [ngIf]=\"(authState | async).authenticated\">\n            <th scope=\"col\" class=\"text-center\">MANAGE</th>\n          </ng-template>\n        </thead>\n        <tbody>\n          <tr\n            style=\"cursor: pointer;\"\n            *ngFor=\"let employee of employmentState | async; let i = index\"\n          >\n            <td class=\"text-nowrap\">\n              {{ employee.name }} {{ employee.lastname }}\n            </td>\n            <td class=\"text-nowrap\">\n              {{ employee.cinumber }}\n            </td>\n            <td>\n              {{ employee.birthdate }}\n            </td>\n            <td>\n              {{ employee.address }}\n            </td>\n            <td>\n              {{ employee.phone }}\n            </td>\n            <td>\n              {{ employee.role }}\n            </td>\n            <td>\n              {{ employee.profession }}\n            </td>\n            <ng-template [ngIf]=\"(authState | async).authenticated\">\n              <td class=\"text-nowrap\">\n                <button\n                  class=\"btn btn-link btn-sm\"\n                  style=\"cursor: pointer; color:#7b7b7b;\"\n                  (click)=\"onEdit(i, employee.id)\"\n                >\n                  <i class=\"fa fa-edit fa-2x\"></i>\n                </button>\n                <button\n                  class=\"btn btn-link btn-sm\"\n                  style=\"cursor: pointer; color:#7b7b7b;\"\n                  (click)=\"onDelete(i, employee.id)\"\n                >\n                  <i class=\"fa fa-trash fa-2x\"></i>\n                </button>\n              </td>\n            </ng-template>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/employment/employment-list/employment-list.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/employment/employment-list/employment-list.component.ts ***!
  \*************************************************************************/
/*! exports provided: EmploymentListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmploymentListComponent", function() { return EmploymentListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _employment_edit_employment_edit_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../employment-edit/employment-edit.component */ "./src/app/employment/employment-edit/employment-edit.component.ts");
/* harmony import */ var _warning_warning_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../warning/warning.component */ "./src/app/employment/warning/warning.component.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var src_app_store_selectors_employment_selectors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/store/selectors/employment.selectors */ "./src/app/store/selectors/employment.selectors.ts");
/* harmony import */ var _store_actions_employment_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../store/actions/employment.actions */ "./src/app/store/actions/employment.actions.ts");








var EmploymentListComponent = /** @class */ (function () {
    function EmploymentListComponent(store, dialog) {
        this.store = store;
        this.dialog = dialog;
    }
    EmploymentListComponent.prototype.ngOnInit = function () {
        this.authState = this.store.select('auth');
        this.store.dispatch(new _store_actions_employment_actions__WEBPACK_IMPORTED_MODULE_7__["FetchEmployees"]());
        this.employmentState = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["select"])(src_app_store_selectors_employment_selectors__WEBPACK_IMPORTED_MODULE_6__["employeesList"]));
    };
    EmploymentListComponent.prototype.searchEmployee = function ($event) {
        this.keyword = $event.target.value;
        if (this.keyword !== '') {
            this.employmentState = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["select"])(src_app_store_selectors_employment_selectors__WEBPACK_IMPORTED_MODULE_6__["filterEmployees"], { keyword: $event.target.value }));
        }
        else if (this.keyword === '') {
            this.ngOnInit();
        }
    };
    EmploymentListComponent.prototype.onCreate = function () {
        var _this = this;
        var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogConfig"]();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.width = "600px";
        var dialogRef = this.dialog.open(_employment_edit_employment_edit_component__WEBPACK_IMPORTED_MODULE_3__["EmploymentEditComponent"], dialogConfig);
        dialogRef.afterClosed().subscribe(function () {
            _this.employmentState = _this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["select"])(src_app_store_selectors_employment_selectors__WEBPACK_IMPORTED_MODULE_6__["filterEmployees"], { keyword: _this.keyword }));
        });
    };
    EmploymentListComponent.prototype.onEdit = function (index, id) {
        var _this = this;
        this.store.dispatch(new _store_actions_employment_actions__WEBPACK_IMPORTED_MODULE_7__["StartEdit"]({ index: index, id: id }));
        var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogConfig"]();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.width = "600px";
        var dialogRef = this.dialog.open(_employment_edit_employment_edit_component__WEBPACK_IMPORTED_MODULE_3__["EmploymentEditComponent"], dialogConfig);
        dialogRef.afterClosed().subscribe(function () {
            _this.employmentState = _this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["select"])(src_app_store_selectors_employment_selectors__WEBPACK_IMPORTED_MODULE_6__["filterEmployees"], { keyword: _this.keyword }));
        });
    };
    EmploymentListComponent.prototype.onDelete = function (index, id) {
        var _this = this;
        var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogConfig"]();
        dialogConfig.data = { index: index, id: id };
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.width = "400px";
        var dialogRef = this.dialog.open(_warning_warning_component__WEBPACK_IMPORTED_MODULE_4__["WarningComponent"], dialogConfig);
        dialogRef.afterClosed().subscribe(function () {
            _this.employmentState = _this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["select"])(src_app_store_selectors_employment_selectors__WEBPACK_IMPORTED_MODULE_6__["filterEmployees"], { keyword: _this.keyword }));
        });
    };
    EmploymentListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-employment-list",
            template: __webpack_require__(/*! ./employment-list.component.html */ "./src/app/employment/employment-list/employment-list.component.html"),
            styles: [__webpack_require__(/*! ./employment-list.component.css */ "./src/app/employment/employment-list/employment-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
    ], EmploymentListComponent);
    return EmploymentListComponent;
}());



/***/ }),

/***/ "./src/app/employment/employment-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/employment/employment-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: EmploymentRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmploymentRoutingModule", function() { return EmploymentRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _employment_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./employment.component */ "./src/app/employment/employment.component.ts");
/* harmony import */ var _employment_edit_employment_edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./employment-edit/employment-edit.component */ "./src/app/employment/employment-edit/employment-edit.component.ts");
/* harmony import */ var _employment_list_employment_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./employment-list/employment-list.component */ "./src/app/employment/employment-list/employment-list.component.ts");
/* harmony import */ var _auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../auth/auth-guard.service */ "./src/app/auth/auth-guard.service.ts");
/* harmony import */ var _warning_warning_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./warning/warning.component */ "./src/app/employment/warning/warning.component.ts");








var employmentRoutes = [
    { path: '', component: _employment_component__WEBPACK_IMPORTED_MODULE_3__["EmploymentComponent"] },
    { path: 'list', component: _employment_list_employment_list_component__WEBPACK_IMPORTED_MODULE_5__["EmploymentListComponent"] },
    { path: 'edit', component: _employment_edit_employment_edit_component__WEBPACK_IMPORTED_MODULE_4__["EmploymentEditComponent"], canActivate: [_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]] },
    { path: 'warning', component: _warning_warning_component__WEBPACK_IMPORTED_MODULE_7__["WarningComponent"], canActivate: [_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]] }
];
var EmploymentRoutingModule = /** @class */ (function () {
    function EmploymentRoutingModule() {
    }
    EmploymentRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(employmentRoutes)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
            providers: [
                _auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]
            ]
        })
    ], EmploymentRoutingModule);
    return EmploymentRoutingModule;
}());



/***/ }),

/***/ "./src/app/employment/employment.component.css":
/*!*****************************************************!*\
  !*** ./src/app/employment/employment.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VtcGxveW1lbnQvZW1wbG95bWVudC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/employment/employment.component.html":
/*!******************************************************!*\
  !*** ./src/app/employment/employment.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-employment-list></app-employment-list>\n<!-- <button (click)=\"addEmployeeTest()\">add</button> -->\n"

/***/ }),

/***/ "./src/app/employment/employment.component.ts":
/*!****************************************************!*\
  !*** ./src/app/employment/employment.component.ts ***!
  \****************************************************/
/*! exports provided: EmploymentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmploymentComponent", function() { return EmploymentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _graphql_graphql_crud_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../graphql/graphql-crud.service */ "./src/app/graphql/graphql-crud.service.ts");



var EmploymentComponent = /** @class */ (function () {
    // newEmployee =
    // new Employee("Mauricio", "Cabrera", "4851356","06/28/1992", "45 St. Lanza, Sopocachi, LP", "61530245", "Programmer", "Systems Engineering");
    // new Employee("Luciana", "Diaz", "6524553","01/21/1988", "655 St. Carlos Medinacelli, San Miguel, LP", "79615302", "Programmer", "Systems Engineering"),
    function EmploymentComponent(graphqlCrudService) {
        this.graphqlCrudService = graphqlCrudService;
    }
    EmploymentComponent.prototype.ngOnInit = function () { };
    EmploymentComponent.prototype.addEmployeeTest = function () {
        // this.graphqlCrudService.addEmployee(this.newEmployee);
    };
    EmploymentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-employment",
            template: __webpack_require__(/*! ./employment.component.html */ "./src/app/employment/employment.component.html"),
            styles: [__webpack_require__(/*! ./employment.component.css */ "./src/app/employment/employment.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_graphql_graphql_crud_service__WEBPACK_IMPORTED_MODULE_2__["GraphqlCrudService"]])
    ], EmploymentComponent);
    return EmploymentComponent;
}());



/***/ }),

/***/ "./src/app/employment/employment.module.ts":
/*!*************************************************!*\
  !*** ./src/app/employment/employment.module.ts ***!
  \*************************************************/
/*! exports provided: EmploymentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmploymentModule", function() { return EmploymentModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _employment_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./employment.component */ "./src/app/employment/employment.component.ts");
/* harmony import */ var _employment_list_employment_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./employment-list/employment-list.component */ "./src/app/employment/employment-list/employment-list.component.ts");
/* harmony import */ var _employment_edit_employment_edit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./employment-edit/employment-edit.component */ "./src/app/employment/employment-edit/employment-edit.component.ts");
/* harmony import */ var _employment_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./employment-routing.module */ "./src/app/employment/employment-routing.module.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _warning_warning_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./warning/warning.component */ "./src/app/employment/warning/warning.component.ts");










var EmploymentModule = /** @class */ (function () {
    function EmploymentModule() {
    }
    EmploymentModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _employment_edit_employment_edit_component__WEBPACK_IMPORTED_MODULE_6__["EmploymentEditComponent"],
                _employment_list_employment_list_component__WEBPACK_IMPORTED_MODULE_5__["EmploymentListComponent"],
                _employment_component__WEBPACK_IMPORTED_MODULE_4__["EmploymentComponent"],
                _warning_warning_component__WEBPACK_IMPORTED_MODULE_9__["WarningComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _employment_routing_module__WEBPACK_IMPORTED_MODULE_7__["EmploymentRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"]
            ],
            providers: []
        })
    ], EmploymentModule);
    return EmploymentModule;
}());



/***/ }),

/***/ "./src/app/employment/warning/warning.component.css":
/*!**********************************************************!*\
  !*** ./src/app/employment/warning/warning.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VtcGxveW1lbnQvd2FybmluZy93YXJuaW5nLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/employment/warning/warning.component.html":
/*!***********************************************************!*\
  !*** ./src/app/employment/warning/warning.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <h4>Are you sure you want to delete this record?</h4>\n  </div>\n  <br>\n  <div class=\"row\">\n      <div class=\"col text-center\">\n        <button class=\"btn btn-dark btn-block\" (click)=\"onDelete()\">OK</button>\n      </div>\n      <div class=\"col\"></div>\n      <div class=\"col text-center\">\n        <button class=\"btn btn-outline-secondary btn-block\" (click)=\"closeDialog()\">Cancel</button>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/employment/warning/warning.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/employment/warning/warning.component.ts ***!
  \*********************************************************/
/*! exports provided: WarningComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WarningComponent", function() { return WarningComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _store_actions_employment_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store/actions/employment.actions */ "./src/app/store/actions/employment.actions.ts");





var WarningComponent = /** @class */ (function () {
    function WarningComponent(store, dialogRef, data) {
        this.store = store;
        this.dialogRef = dialogRef;
        this.data = data;
    }
    WarningComponent.prototype.ngOnInit = function () { };
    WarningComponent.prototype.closeDialog = function () {
        this.dialogRef.close();
    };
    WarningComponent.prototype.onDelete = function () {
        this.store.dispatch(new _store_actions_employment_actions__WEBPACK_IMPORTED_MODULE_4__["DeleteEmployee"]({
            index: this.data.index,
            id: this.data.id
        }));
        this.dialogRef.close();
    };
    WarningComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: "app-warning",
            template: __webpack_require__(/*! ./warning.component.html */ "./src/app/employment/warning/warning.component.html"),
            styles: [__webpack_require__(/*! ./warning.component.css */ "./src/app/employment/warning/warning.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object])
    ], WarningComponent);
    return WarningComponent;
}());



/***/ }),

/***/ "./src/app/error-page/error-page.component.css":
/*!*****************************************************!*\
  !*** ./src/app/error-page/error-page.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Vycm9yLXBhZ2UvZXJyb3ItcGFnZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/error-page/error-page.component.html":
/*!******************************************************!*\
  !*** ./src/app/error-page/error-page.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4>{{ errorMessage }}</h4>\n"

/***/ }),

/***/ "./src/app/error-page/error-page.component.ts":
/*!****************************************************!*\
  !*** ./src/app/error-page/error-page.component.ts ***!
  \****************************************************/
/*! exports provided: ErrorPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorPageComponent", function() { return ErrorPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var ErrorPageComponent = /** @class */ (function () {
    function ErrorPageComponent(route) {
        this.route = route;
    }
    ErrorPageComponent.prototype.ngOnInit = function () {
        this.errorMessage = this.route.snapshot.data["message"];
    };
    ErrorPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-error-page',
            template: __webpack_require__(/*! ./error-page.component.html */ "./src/app/error-page/error-page.component.html"),
            styles: [__webpack_require__(/*! ./error-page.component.css */ "./src/app/error-page/error-page.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], ErrorPageComponent);
    return ErrorPageComponent;
}());



/***/ }),

/***/ "./src/app/graphql.module.ts":
/*!***********************************!*\
  !*** ./src/app/graphql.module.ts ***!
  \***********************************/
/*! exports provided: createApollo, GraphQLModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createApollo", function() { return createApollo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraphQLModule", function() { return GraphQLModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! apollo-cache-inmemory */ "./node_modules/apollo-cache-inmemory/lib/bundle.esm.js");
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! apollo-angular */ "./node_modules/apollo-angular/fesm5/ng.apollo.js");
/* harmony import */ var apollo_angular_link_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! apollo-angular-link-http */ "./node_modules/apollo-angular-link-http/fesm5/ng.apolloLink.http.js");
/* harmony import */ var apollo_angular_cache_ngrx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! apollo-angular-cache-ngrx */ "./node_modules/apollo-angular-cache-ngrx/index.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");







var uri = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].uri;
function createApollo(httpLink) {
    return {
        link: httpLink.create({ uri: uri }),
        cache: new apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_2__["InMemoryCache"]()
    };
}
var GraphQLModule = /** @class */ (function () {
    function GraphQLModule(apollo, httpLink, ngrxCache) {
        // create Apollo
        apollo.create({
            link: httpLink.create({ uri: uri }),
            cache: ngrxCache.create(),
            defaultOptions: {
                watchQuery: {
                    fetchPolicy: "network-only",
                    errorPolicy: "ignore"
                },
                query: {
                    fetchPolicy: "network-only",
                    errorPolicy: "all"
                }
            }
        });
    }
    GraphQLModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            exports: [apollo_angular__WEBPACK_IMPORTED_MODULE_3__["ApolloModule"], apollo_angular_link_http__WEBPACK_IMPORTED_MODULE_4__["HttpLinkModule"]]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [apollo_angular__WEBPACK_IMPORTED_MODULE_3__["Apollo"], apollo_angular_link_http__WEBPACK_IMPORTED_MODULE_4__["HttpLink"], apollo_angular_cache_ngrx__WEBPACK_IMPORTED_MODULE_5__["NgrxCache"]])
    ], GraphQLModule);
    return GraphQLModule;
}());



/***/ }),

/***/ "./src/app/graphql/graphql-crud.service.ts":
/*!*************************************************!*\
  !*** ./src/app/graphql/graphql-crud.service.ts ***!
  \*************************************************/
/*! exports provided: GraphqlCrudService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraphqlCrudService", function() { return GraphqlCrudService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! apollo-angular */ "./node_modules/apollo-angular/fesm5/ng.apollo.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _queries__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./queries */ "./src/app/graphql/queries.ts");
/* harmony import */ var _mutations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mutations */ "./src/app/graphql/mutations.ts");





var GraphqlCrudService = /** @class */ (function () {
    function GraphqlCrudService(apollo) {
        this.apollo = apollo;
    }
    GraphqlCrudService.prototype.getEmployees = function () {
        return this.apollo.query({
            query: _queries__WEBPACK_IMPORTED_MODULE_3__["getEmployeesState"],
            fetchPolicy: 'network-only'
        });
    };
    GraphqlCrudService.prototype.getEmployeeCI = function (cinumber) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                return [2 /*return*/, this.apollo.watchQuery({
                        query: _queries__WEBPACK_IMPORTED_MODULE_3__["getEmployee"],
                        variables: {
                            cinumb: cinumber
                        },
                    })
                        .valueChanges.subscribe(function (result) {
                        console.log(result);
                    })];
            });
        });
    };
    GraphqlCrudService.prototype.addEmployee = function (employee) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                return [2 /*return*/, this.apollo.mutate({
                        mutation: _mutations__WEBPACK_IMPORTED_MODULE_4__["addEmployee"],
                        variables: {
                            name: employee.name,
                            lastname: employee.lastname,
                            cinumber: employee.cinumber,
                            birthdate: employee.birthdate,
                            address: employee.address,
                            phone: employee.phone,
                            role: employee.role,
                            profession: employee.profession
                        }
                    }).subscribe(function (_a) {
                        // console.log('got data', data.addEmployee);
                        var data = _a.data;
                    }, function (error) {
                        console.log('there was an error sending the query', error);
                    })];
            });
        });
    };
    GraphqlCrudService.prototype.updateEmployee = function (employee) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                return [2 /*return*/, this.apollo.mutate({
                        mutation: _mutations__WEBPACK_IMPORTED_MODULE_4__["updateEmployee"],
                        variables: {
                            id: employee.id,
                            name: employee.name,
                            lastname: employee.lastname,
                            cinumber: employee.cinumber,
                            birthdate: employee.birthdate,
                            address: employee.address,
                            phone: employee.phone,
                            role: employee.role,
                            profession: employee.profession
                        }
                    }).subscribe(function (_a) {
                        var data = _a.data;
                        // console.log('got data', data.updateEmployee);
                    }, function (error) {
                        console.log('there was an error sending the query', error);
                    })];
            });
        });
    };
    GraphqlCrudService.prototype.deleteEmployee = function (id) {
        return this.apollo.mutate({
            mutation: _mutations__WEBPACK_IMPORTED_MODULE_4__["deleteEmployee"],
            variables: {
                id: id,
            }
        });
    };
    GraphqlCrudService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [apollo_angular__WEBPACK_IMPORTED_MODULE_1__["Apollo"]])
    ], GraphqlCrudService);
    return GraphqlCrudService;
}());



/***/ }),

/***/ "./src/app/graphql/mutations.ts":
/*!**************************************!*\
  !*** ./src/app/graphql/mutations.ts ***!
  \**************************************/
/*! exports provided: addEmployee, updateEmployee, deleteEmployee */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addEmployee", function() { return addEmployee; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateEmployee", function() { return updateEmployee; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteEmployee", function() { return deleteEmployee; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_1__);


var addEmployee = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(templateObject_1 || (templateObject_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["\nmutation addEmployee(\n  $name: String!\n  $lastname: String!\n  $cinumber: String!\n  $birthdate: String!\n  $address: String!\n  $phone: String!\n  $role: String!\n  $profession: String!\n  ) {\n  addEmployee(\n    name: $name\n    lastname: $lastname\n    cinumber: $cinumber\n    birthdate: $birthdate\n    address: $address\n    phone: $phone\n    role: $role\n    profession: $profession\n  ) {\n    name\n    lastname\n    cinumber\n    birthdate\n    address\n    phone\n    role\n    profession\n  }\n}\n"], ["\nmutation addEmployee(\n  $name: String!\n  $lastname: String!\n  $cinumber: String!\n  $birthdate: String!\n  $address: String!\n  $phone: String!\n  $role: String!\n  $profession: String!\n  ) {\n  addEmployee(\n    name: $name\n    lastname: $lastname\n    cinumber: $cinumber\n    birthdate: $birthdate\n    address: $address\n    phone: $phone\n    role: $role\n    profession: $profession\n  ) {\n    name\n    lastname\n    cinumber\n    birthdate\n    address\n    phone\n    role\n    profession\n  }\n}\n"])));
var updateEmployee = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(templateObject_2 || (templateObject_2 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["\n  mutation updateEmployee (\n      $id: String!\n      $name: String\n      $lastname: String\n      $cinumber: String!\n      $birthdate: String\n      $address: String\n      $phone: String\n      $role: String\n      $profession: String\n  )  {\n    updateEmployee(\n      id: $id\n      name: $name\n      lastname: $lastname\n      cinumber: $cinumber\n      birthdate:$birthdate\n      address: $address\n      phone: $phone\n      role: $role\n      profession: $profession\n    ) {\n      name\n      lastname\n      cinumber\n      birthdate\n      address\n      phone\n      role\n      profession\n    }\n  }\n"], ["\n  mutation updateEmployee (\n      $id: String!\n      $name: String\n      $lastname: String\n      $cinumber: String!\n      $birthdate: String\n      $address: String\n      $phone: String\n      $role: String\n      $profession: String\n  )  {\n    updateEmployee(\n      id: $id\n      name: $name\n      lastname: $lastname\n      cinumber: $cinumber\n      birthdate:$birthdate\n      address: $address\n      phone: $phone\n      role: $role\n      profession: $profession\n    ) {\n      name\n      lastname\n      cinumber\n      birthdate\n      address\n      phone\n      role\n      profession\n    }\n  }\n"])));
var deleteEmployee = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(templateObject_3 || (templateObject_3 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["\n  mutation deleteEmployee($id: String!){\n    deleteEmployee(id: $id){\n      id\n    }\n  }\n"], ["\n  mutation deleteEmployee($id: String!){\n    deleteEmployee(id: $id){\n      id\n    }\n  }\n"])));
var templateObject_1, templateObject_2, templateObject_3;


/***/ }),

/***/ "./src/app/graphql/queries.ts":
/*!************************************!*\
  !*** ./src/app/graphql/queries.ts ***!
  \************************************/
/*! exports provided: getEmployeesState, getEmployee */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEmployeesState", function() { return getEmployeesState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEmployee", function() { return getEmployee; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_1__);


var getEmployeesState = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(templateObject_1 || (templateObject_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["\n  query getEmployeesState {\n    getEmployees {\n      id\n      name\n      lastname\n      cinumber\n      birthdate\n      address\n      phone\n      role\n      profession\n    }\n  }\n"], ["\n  query getEmployeesState {\n    getEmployees {\n      id\n      name\n      lastname\n      cinumber\n      birthdate\n      address\n      phone\n      role\n      profession\n    }\n  }\n"])));
var getEmployee = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(templateObject_2 || (templateObject_2 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["\n  query getEmployee($cinumb: String!) {\n    getEmployee (cinumber: $cinumb){\n      name\n      lastname\n      cinumber\n      birthdate\n      address\n      phone\n      role\n      profession\n    }\n  }\n"], ["\n  query getEmployee($cinumb: String!) {\n    getEmployee (cinumber: $cinumb){\n      name\n      lastname\n      cinumber\n      birthdate\n      address\n      phone\n      role\n      profession\n    }\n  }\n"])));
var templateObject_1, templateObject_2;


/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand navbar-light\">\n  <a class=\"navbar-brand\" routerLink=\"\">Company Logo</a>\n  <div class=\"collapse navbar-collapse\">\n    <ul class=\"navbar-nav mr-auto\"></ul>\n    <ul class=\"navbar-nav navbar-right\">\n      <ng-template [ngIf]=\"!(authState | async).authenticated\">\n        <li class=\"nav-item\" routerLinkActive=\"router-link-active\">\n          <button (click)=\"signup()\" class=\"btn btn-sm mr-2 btn-secondary\">\n            Sign Up\n          </button>\n          <button (click)=\"login()\" class=\"btn btn-sm btn-outline-secondary\">\n            Sign In\n          </button>\n        </li>\n      </ng-template>\n      <ng-template [ngIf]=\"(authState | async).authenticated\">\n        <button\n          routerLinkActive=\"router-link-active\"\n          class=\"btn btn-sm align-middle btn-outline-secondary\"\n          (click)=\"onLogout()\"\n        >\n          Logout\n        </button>\n      </ng-template>\n    </ul>\n  </div>\n</nav>\n<br />\n<nav class=\"navbar navbar-expand navbar-light\">\n  <button\n    class=\"navbar-toggler mr-2\"\n    type=\"button\"\n    data-toggle=\"collapse\"\n    data-target=\"#navbar\"\n  >\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"navbar-collapse collapse\" id=\"navbar\">\n    <ul class=\"navbar-nav justify-content-center d-flex flex-fill\">\n      <li class=\"nav-item\">\n        <a\n          class=\"nav-link\"\n          [routerLink]=\"['/']\"\n          routerLinkActive=\"router-link-active\"\n        >\n          <i class=\"fa fa-home\"></i> Home</a\n        >\n      </li>\n      <li class=\"nav-item\">\n        <a\n          class=\"nav-link\"\n          [routerLink]=\"['/']\"\n          routerLinkActive=\"router-link-active\"\n        >\n          <i class=\"fa fa-users\"></i> Employees</a\n        >\n      </li>\n      <li class=\"nav-item\">\n        <a\n          class=\"nav-link\"\n          [routerLink]=\"['/']\"\n          routerLinkActive=\"router-link-active\"\n        >\n          <i class=\"fa fa-sitemap\"></i> Assignments</a\n        >\n      </li>\n    </ul>\n  </div>\n</nav>\n<br />\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _auth_signin_signin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../auth/signin/signin.component */ "./src/app/auth/signin/signin.component.ts");
/* harmony import */ var _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth/signup/signup.component */ "./src/app/auth/signup/signup.component.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _store_actions_auth_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../store/actions/auth.actions */ "./src/app/store/actions/auth.actions.ts");







var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(store, dialog) {
        this.store = store;
        this.dialog = dialog;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        this.authState = this.store.select("auth");
    };
    HeaderComponent.prototype.login = function () {
        var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogConfig"]();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.width = "400px";
        this.dialog.open(_auth_signin_signin_component__WEBPACK_IMPORTED_MODULE_3__["SigninComponent"], dialogConfig);
    };
    HeaderComponent.prototype.signup = function () {
        var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogConfig"]();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.width = "400px";
        this.dialog.open(_auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_4__["SignupComponent"], dialogConfig);
    };
    HeaderComponent.prototype.onLogout = function () {
        this.store.dispatch(new _store_actions_auth_actions__WEBPACK_IMPORTED_MODULE_6__["Logout"]());
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-header",
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/shared/employee.model.ts":
/*!******************************************!*\
  !*** ./src/app/shared/employee.model.ts ***!
  \******************************************/
/*! exports provided: Employee */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Employee", function() { return Employee; });
var Employee = /** @class */ (function () {
    function Employee(id, name, lastname, cinumber, birthdate, address, phone, role, profession) {
        this.id = id;
        this.name = name;
        this.lastname = lastname;
        this.cinumber = cinumber;
        this.birthdate = birthdate;
        this.address = address;
        this.phone = phone;
        this.role = role;
        this.profession = profession;
    }
    return Employee;
}());



/***/ }),

/***/ "./src/app/store/actions/auth.actions.ts":
/*!***********************************************!*\
  !*** ./src/app/store/actions/auth.actions.ts ***!
  \***********************************************/
/*! exports provided: TRY_SIGNIN, TRY_SIGNUP, SIGNIN, SIGNUP, LOGOUT, SET_TOKEN, FAIL_AUTH, TrySignin, TrySignup, Signin, Signup, Logout, SetToken, FailAuth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TRY_SIGNIN", function() { return TRY_SIGNIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TRY_SIGNUP", function() { return TRY_SIGNUP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGNIN", function() { return SIGNIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGNUP", function() { return SIGNUP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGOUT", function() { return LOGOUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_TOKEN", function() { return SET_TOKEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FAIL_AUTH", function() { return FAIL_AUTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrySignin", function() { return TrySignin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrySignup", function() { return TrySignup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Signin", function() { return Signin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Signup", function() { return Signup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Logout", function() { return Logout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetToken", function() { return SetToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FailAuth", function() { return FailAuth; });
var TRY_SIGNIN = "TRY_SIGNIN";
var TRY_SIGNUP = "TRY_SIGNUP";
var SIGNIN = "SIGNIN";
var SIGNUP = "SIGNUP";
var LOGOUT = "LOGOUT";
var SET_TOKEN = "SET_TOKEN";
var FAIL_AUTH = "FAIL_AUTH";
var TrySignin = /** @class */ (function () {
    function TrySignin(payload) {
        this.payload = payload;
        this.type = TRY_SIGNIN;
    }
    return TrySignin;
}());

var TrySignup = /** @class */ (function () {
    function TrySignup(payload) {
        this.payload = payload;
        this.type = TRY_SIGNUP;
    }
    return TrySignup;
}());

var Signin = /** @class */ (function () {
    function Signin() {
        this.type = SIGNIN;
    }
    return Signin;
}());

var Signup = /** @class */ (function () {
    function Signup() {
        this.type = SIGNUP;
    }
    return Signup;
}());

var Logout = /** @class */ (function () {
    function Logout() {
        this.type = LOGOUT;
    }
    return Logout;
}());

var SetToken = /** @class */ (function () {
    function SetToken(payload) {
        this.payload = payload;
        this.type = SET_TOKEN;
    }
    return SetToken;
}());

var FailAuth = /** @class */ (function () {
    function FailAuth(payload) {
        this.payload = payload;
        this.type = FAIL_AUTH;
    }
    return FailAuth;
}());



/***/ }),

/***/ "./src/app/store/actions/employment.actions.ts":
/*!*****************************************************!*\
  !*** ./src/app/store/actions/employment.actions.ts ***!
  \*****************************************************/
/*! exports provided: SET_EMPLOYEES, ADD_EMPLOYEE, UPDATE_EMPLOYEE, DELETE_EMPLOYEE, START_EDIT, STOP_EDIT, STORE_EMPLOYEES, FETCH_EMPLOYEES, SetEmployees, AddEmployee, UpdateEmployee, DeleteEmployee, StartEdit, StopEdit, StoreEmployees, FetchEmployees */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_EMPLOYEES", function() { return SET_EMPLOYEES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_EMPLOYEE", function() { return ADD_EMPLOYEE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_EMPLOYEE", function() { return UPDATE_EMPLOYEE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_EMPLOYEE", function() { return DELETE_EMPLOYEE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "START_EDIT", function() { return START_EDIT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STOP_EDIT", function() { return STOP_EDIT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STORE_EMPLOYEES", function() { return STORE_EMPLOYEES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_EMPLOYEES", function() { return FETCH_EMPLOYEES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetEmployees", function() { return SetEmployees; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddEmployee", function() { return AddEmployee; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateEmployee", function() { return UpdateEmployee; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteEmployee", function() { return DeleteEmployee; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartEdit", function() { return StartEdit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StopEdit", function() { return StopEdit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreEmployees", function() { return StoreEmployees; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FetchEmployees", function() { return FetchEmployees; });
var SET_EMPLOYEES = 'SET_EMPLOYEES';
var ADD_EMPLOYEE = 'ADD_EMPLOYEE';
var UPDATE_EMPLOYEE = 'UPDATE_EMPLOYEE';
var DELETE_EMPLOYEE = 'DELETE_EMPLOYEE';
var START_EDIT = 'START_EDIT';
var STOP_EDIT = 'STOP_EDIT';
var STORE_EMPLOYEES = 'STORE_EMPLOYEES';
var FETCH_EMPLOYEES = 'FETCH_EMPLOYEES';
var SetEmployees = /** @class */ (function () {
    function SetEmployees(payload) {
        this.payload = payload;
        this.type = SET_EMPLOYEES;
    }
    return SetEmployees;
}());

var AddEmployee = /** @class */ (function () {
    function AddEmployee(payload) {
        this.payload = payload;
        this.type = ADD_EMPLOYEE;
    }
    return AddEmployee;
}());

var UpdateEmployee = /** @class */ (function () {
    function UpdateEmployee(payload) {
        this.payload = payload;
        this.type = UPDATE_EMPLOYEE;
    }
    return UpdateEmployee;
}());

var DeleteEmployee = /** @class */ (function () {
    function DeleteEmployee(payload) {
        this.payload = payload;
        this.type = DELETE_EMPLOYEE;
    }
    return DeleteEmployee;
}());

var StartEdit = /** @class */ (function () {
    function StartEdit(payload) {
        this.payload = payload;
        this.type = START_EDIT;
    }
    return StartEdit;
}());

var StopEdit = /** @class */ (function () {
    function StopEdit() {
        this.type = STOP_EDIT;
    }
    return StopEdit;
}());

var StoreEmployees = /** @class */ (function () {
    function StoreEmployees() {
        this.type = STORE_EMPLOYEES;
    }
    return StoreEmployees;
}());

var FetchEmployees = /** @class */ (function () {
    function FetchEmployees() {
        this.type = FETCH_EMPLOYEES;
    }
    return FetchEmployees;
}());



/***/ }),

/***/ "./src/app/store/effects/auth.effects.ts":
/*!***********************************************!*\
  !*** ./src/app/store/effects/auth.effects.ts ***!
  \***********************************************/
/*! exports provided: AuthEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthEffects", function() { return AuthEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _actions_auth_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../actions/auth.actions */ "./src/app/store/actions/auth.actions.ts");









var AuthEffects = /** @class */ (function () {
    function AuthEffects(actions$, router, store) {
        var _this = this;
        this.actions$ = actions$;
        this.router = router;
        this.store = store;
        this.authSignin = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_6__["ofType"])(_actions_auth_actions__WEBPACK_IMPORTED_MODULE_8__["TRY_SIGNIN"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (action) {
            return action.payload;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (authData) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])(firebase__WEBPACK_IMPORTED_MODULE_7__["auth"]()
                .signInWithEmailAndPassword(authData.username, authData.password)
                .catch(function (err) {
                return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].throw(err);
            }));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function () {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])(firebase__WEBPACK_IMPORTED_MODULE_7__["auth"]().currentUser.getIdToken());
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["mergeMap"])(function (token) {
            _this.router.navigate(["/"]);
            return [
                {
                    type: _actions_auth_actions__WEBPACK_IMPORTED_MODULE_8__["SIGNIN"]
                },
                {
                    type: _actions_auth_actions__WEBPACK_IMPORTED_MODULE_8__["SET_TOKEN"],
                    payload: token
                },
                {
                    type: _actions_auth_actions__WEBPACK_IMPORTED_MODULE_8__["FAIL_AUTH"],
                    payload: false
                }
            ];
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (err, caught) {
            console.log(err);
            _this.store.dispatch(new _actions_auth_actions__WEBPACK_IMPORTED_MODULE_8__["FailAuth"](true));
            return caught;
        }));
        this.authSignup = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_6__["ofType"])(_actions_auth_actions__WEBPACK_IMPORTED_MODULE_8__["TRY_SIGNUP"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (action) {
            return action.payload;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (authData) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])(firebase__WEBPACK_IMPORTED_MODULE_7__["auth"]()
                .createUserWithEmailAndPassword(authData.username, authData.password));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function () {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])(firebase__WEBPACK_IMPORTED_MODULE_7__["auth"]().currentUser.getIdToken());
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["mergeMap"])(function (token) {
            return [
                {
                    type: _actions_auth_actions__WEBPACK_IMPORTED_MODULE_8__["SIGNUP"]
                },
                {
                    type: _actions_auth_actions__WEBPACK_IMPORTED_MODULE_8__["SET_TOKEN"],
                    payload: token
                }
            ];
        }));
        this.authLogout = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_6__["ofType"])(_actions_auth_actions__WEBPACK_IMPORTED_MODULE_8__["LOGOUT"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function () {
            _this.router.navigate(["/"]);
        }));
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_6__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AuthEffects.prototype, "authSignin", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_6__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AuthEffects.prototype, "authSignup", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_6__["Effect"])({ dispatch: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AuthEffects.prototype, "authLogout", void 0);
    AuthEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_6__["Actions"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]])
    ], AuthEffects);
    return AuthEffects;
}());



/***/ }),

/***/ "./src/app/store/effects/employment.effects.ts":
/*!*****************************************************!*\
  !*** ./src/app/store/effects/employment.effects.ts ***!
  \*****************************************************/
/*! exports provided: EmploymentEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmploymentEffects", function() { return EmploymentEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var src_app_graphql_graphql_crud_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/graphql/graphql-crud.service */ "./src/app/graphql/graphql-crud.service.ts");
/* harmony import */ var _actions_employment_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../actions/employment.actions */ "./src/app/store/actions/employment.actions.ts");






var EmploymentEffects = /** @class */ (function () {
    function EmploymentEffects(actions$, graphqlCrudService) {
        var _this = this;
        this.actions$ = actions$;
        this.graphqlCrudService = graphqlCrudService;
        this.newEmployee = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_actions_employment_actions__WEBPACK_IMPORTED_MODULE_5__["ADD_EMPLOYEE"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (action) {
            return _this.graphqlCrudService.addEmployee(action.payload.employee);
        }));
        this.updateEmployee = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_actions_employment_actions__WEBPACK_IMPORTED_MODULE_5__["UPDATE_EMPLOYEE"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (action) {
            return _this.graphqlCrudService.updateEmployee(action.payload.employee);
        }));
        this.deleteEmployee = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_actions_employment_actions__WEBPACK_IMPORTED_MODULE_5__["DELETE_EMPLOYEE"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (action) {
            return _this.graphqlCrudService.deleteEmployee(action.payload.id);
        }));
        this.employeesState = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_actions_employment_actions__WEBPACK_IMPORTED_MODULE_5__["FETCH_EMPLOYEES"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (action) {
            return _this.graphqlCrudService.getEmployees();
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (employees) {
            return {
                type: _actions_employment_actions__WEBPACK_IMPORTED_MODULE_5__["SET_EMPLOYEES"],
                payload: employees.data.getEmployees
            };
        }));
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])({ dispatch: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], EmploymentEffects.prototype, "newEmployee", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])({ dispatch: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], EmploymentEffects.prototype, "updateEmployee", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])({ dispatch: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], EmploymentEffects.prototype, "deleteEmployee", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], EmploymentEffects.prototype, "employeesState", void 0);
    EmploymentEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Actions"],
            src_app_graphql_graphql_crud_service__WEBPACK_IMPORTED_MODULE_4__["GraphqlCrudService"]])
    ], EmploymentEffects);
    return EmploymentEffects;
}());



/***/ }),

/***/ "./src/app/store/reducers/app.reducers.ts":
/*!************************************************!*\
  !*** ./src/app/store/reducers/app.reducers.ts ***!
  \************************************************/
/*! exports provided: appReducers, reducers, rootReducer, reducer, REDUCERS_TOKEN, reducerProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appReducers", function() { return appReducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return reducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rootReducer", function() { return rootReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REDUCERS_TOKEN", function() { return REDUCERS_TOKEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducerProvider", function() { return reducerProvider; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _auth_reducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.reducers */ "./src/app/store/reducers/auth.reducers.ts");
/* harmony import */ var _employment_reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./employment.reducers */ "./src/app/store/reducers/employment.reducers.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");




var appReducers = {
    auth: _auth_reducers__WEBPACK_IMPORTED_MODULE_1__["AuthReducer"],
    employment: _employment_reducers__WEBPACK_IMPORTED_MODULE_2__["EmploymentReducer"]
};
var reducers = {
    AuthReducer: _auth_reducers__WEBPACK_IMPORTED_MODULE_1__["AuthReducer"],
    EmploymentReducer: _employment_reducers__WEBPACK_IMPORTED_MODULE_2__["EmploymentReducer"]
};
var rootReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["compose"])(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])(reducers);
function reducer(state, action) {
    return rootReducer(state, action);
}
var REDUCERS_TOKEN = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["InjectionToken"]('App Reducers');
var reducerProvider = { provide: REDUCERS_TOKEN, useValue: appReducers };


/***/ }),

/***/ "./src/app/store/reducers/auth.reducers.ts":
/*!*************************************************!*\
  !*** ./src/app/store/reducers/auth.reducers.ts ***!
  \*************************************************/
/*! exports provided: AuthReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthReducer", function() { return AuthReducer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _state_auth_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../state/auth.state */ "./src/app/store/state/auth.state.ts");
/* harmony import */ var _actions_auth_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/auth.actions */ "./src/app/store/actions/auth.actions.ts");



var AuthReducer = function (state, action) {
    if (state === void 0) { state = _state_auth_state__WEBPACK_IMPORTED_MODULE_1__["initialAuthState"]; }
    switch (action.type) {
        case (_actions_auth_actions__WEBPACK_IMPORTED_MODULE_2__["SIGNIN"]):
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { authenticated: true });
        case (_actions_auth_actions__WEBPACK_IMPORTED_MODULE_2__["LOGOUT"]):
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { token: null, authenticated: false });
        case (_actions_auth_actions__WEBPACK_IMPORTED_MODULE_2__["SET_TOKEN"]):
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { token: action.payload });
        case (_actions_auth_actions__WEBPACK_IMPORTED_MODULE_2__["FAIL_AUTH"]):
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { failAuth: action.payload });
        default:
            return state;
    }
};


/***/ }),

/***/ "./src/app/store/reducers/employment.reducers.ts":
/*!*******************************************************!*\
  !*** ./src/app/store/reducers/employment.reducers.ts ***!
  \*******************************************************/
/*! exports provided: EmploymentReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmploymentReducer", function() { return EmploymentReducer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _actions_employment_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/employment.actions */ "./src/app/store/actions/employment.actions.ts");
/* harmony import */ var _state_employment_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../state/employment.state */ "./src/app/store/state/employment.state.ts");



var EmploymentReducer = function (state, action) {
    if (state === void 0) { state = _state_employment_state__WEBPACK_IMPORTED_MODULE_2__["initialEmploymentState"]; }
    switch (action.type) {
        case _actions_employment_actions__WEBPACK_IMPORTED_MODULE_1__["SET_EMPLOYEES"]:
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { employees: action.payload.slice() });
        case _actions_employment_actions__WEBPACK_IMPORTED_MODULE_1__["ADD_EMPLOYEE"]:
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { employees: state.employees.concat([action.payload.employee]) });
        case _actions_employment_actions__WEBPACK_IMPORTED_MODULE_1__["UPDATE_EMPLOYEE"]:
            var _loop_1 = function (emp) {
                if (emp.id === action.payload.employee.id) {
                    var employee = emp;
                    var updatedEmployee = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, employee, action.payload.employee);
                    employees = state.employees.slice();
                    var objIndex_1 = employees.findIndex((function (obj) { return obj.id == emp.id; }));
                    employees[objIndex_1] = updatedEmployee;
                }
            };
            var employees;
            for (var _i = 0, _a = state.employees; _i < _a.length; _i++) {
                var emp = _a[_i];
                _loop_1(emp);
            }
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { employees: employees, editedEmployee: null, editedEmployeeIndex: -1 });
        case _actions_employment_actions__WEBPACK_IMPORTED_MODULE_1__["DELETE_EMPLOYEE"]:
            var oldEmployees = state.employees.slice();
            var objIndex = oldEmployees.findIndex((function (obj) { return obj.id == action.payload.id; }));
            oldEmployees.splice(objIndex, 1);
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { employees: oldEmployees });
        case _actions_employment_actions__WEBPACK_IMPORTED_MODULE_1__["START_EDIT"]:
            for (var _b = 0, _c = state.employees; _b < _c.length; _b++) {
                var emp = _c[_b];
                if (emp.id === action.payload.id) {
                    var editedEmp = emp;
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { editedEmployee: editedEmp, editedEmployeeId: editedEmp.id, editedEmployeeIndex: action.payload.index });
                }
            }
        case _actions_employment_actions__WEBPACK_IMPORTED_MODULE_1__["STOP_EDIT"]:
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { editedEmployee: null, editedEmployeeIndex: -1 });
        default:
            return state;
    }
};


/***/ }),

/***/ "./src/app/store/selectors/employment.selectors.ts":
/*!*********************************************************!*\
  !*** ./src/app/store/selectors/employment.selectors.ts ***!
  \*********************************************************/
/*! exports provided: selectEmployees, filterEmployees, employeesCI, employeesList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectEmployees", function() { return selectEmployees; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterEmployees", function() { return filterEmployees; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "employeesCI", function() { return employeesCI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "employeesList", function() { return employeesList; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");

var selectEmployees = function (state) { return state.employment; };
var filterEmployees = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectEmployees, function (state, props) { return state.employees
    .filter(function (employee) {
    return (employee.cinumber.match(props.keyword) ||
        employee.name.toLocaleLowerCase().match(props.keyword.toLocaleLowerCase()) ||
        employee.lastname.toLocaleLowerCase().match(props.keyword.toLocaleLowerCase()) ||
        employee.birthdate.toLocaleLowerCase().match(props.keyword.toLocaleLowerCase()) ||
        employee.address.toLocaleLowerCase().match(props.keyword.toLocaleLowerCase()) ||
        employee.phone.match(props.keyword) ||
        employee.role.toLocaleLowerCase().match(props.keyword.toLocaleLowerCase()) ||
        employee.profession.toLocaleLowerCase().match(props.keyword.toLocaleLowerCase()));
}); });
var employeesCI = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectEmployees, function (state) { return state.employees.map(function (employees) { return +employees.cinumber; }); });
var employeesList = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectEmployees, function (state) { return state.employees; });


/***/ }),

/***/ "./src/app/store/state/auth.state.ts":
/*!*******************************************!*\
  !*** ./src/app/store/state/auth.state.ts ***!
  \*******************************************/
/*! exports provided: initialAuthState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialAuthState", function() { return initialAuthState; });
var initialAuthState = {
    token: null,
    authenticated: false,
    failAuth: false
};


/***/ }),

/***/ "./src/app/store/state/employment.state.ts":
/*!*************************************************!*\
  !*** ./src/app/store/state/employment.state.ts ***!
  \*************************************************/
/*! exports provided: initialEmploymentState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialEmploymentState", function() { return initialEmploymentState; });
var initialEmploymentState = {
    employees: [],
    editedEmployee: null,
    editedEmployeeId: '',
    editedEmployeeIndex: -1,
};


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
var environment = {
    production: false,
    uri: "http://localhost:4000/graphql"
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/andres/Documentos/Angular/management-app/employment/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map