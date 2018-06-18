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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- The video -->\r\n<video autoplay playsinline muted loop id=\"bg-leafs\">\r\n  <source src=\"./assets/vid/loop-bg.mp4\" type=\"video/mp4\">\r\n</video>\r\n\r\n<div class=\"page-wrapper\">\r\n  \r\n  <!-- Overlay Menu-->\r\n  <!--> <div class=\"overlay-menu overlay\">\r\n    <div class=\"navigation\">\r\n      <ul class=\"navigation-list\">\r\n        <li \r\n        *ngFor=\"let item of navListItems;let i = index\" \r\n        id=\"{{item.label | lowercase}}\"\r\n        (click)=\"listClick(item, i)\"\r\n        [ngClass]=\"{'active': item.isActive }\">\r\n          <a href=\"#\">\r\n            <i \r\n            class=\"fa fa-{{item.icon}}\" \r\n            aria-hidden=\"true\"\r\n            data-fa-mask=\"fas fa-circle\" \r\n            data-fa-transform=\"shrink-7 up-.6\">\r\n            </i> {{item.label}}\r\n          </a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div> -->\r\n  <!-- Overlay Menu END-->\r\n  \r\n  <div class=\"left-nav\">\r\n    <div class=\"navigation\">\r\n      <div class=\"website-logo-wrapper\">\r\n        <div class=\"logo\">\r\n          <img class=\"nav-logo-img\" src=\"./assets/img/logo_white.png\" alt=\"logo-white\">\r\n        </div>\r\n        <div class=\"content\">\r\n          <span>Simpleux</span><br>\r\n          <span>Portfolio Template</span>\r\n        </div>\r\n      </div>\r\n      <ul class=\"navigation-list\">\r\n        <li \r\n        *ngFor=\"let item of navListItems;let i = index\" \r\n        id=\"{{item.label | lowercase}}\"\r\n        (click)=\"listClick(item, i)\"\r\n        [ngClass]=\"{'active': item.isActive }\">\r\n          <a href=\"#\">\r\n            <i \r\n            class=\"fa fa-{{item.icon}}\" \r\n            aria-hidden=\"true\"\r\n            data-fa-mask=\"fas fa-circle\" \r\n            data-fa-transform=\"shrink-7 up-.6\">\r\n            </i> {{item.label}}\r\n          </a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n  \r\n  <div class=\"main\" >\r\n      <!-- <div class=\"mobile-menu\" animateBurger>\r\n        <div class=\"mobile-menu__top\"></div>\r\n        <div class=\"mobile-menu__middle\"></div>\r\n        <div class=\"mobile-menu__bottom\"></div>\r\n      </div> -->\r\n\r\n    <div class=\"components-wrapper\" \r\n    #componentsWrapper \r\n    (swipedown)=\"swipe($event)\" \r\n    (swipeup)=\"swipe($event)\">\r\n      <section id=\"home\" class=\"component-item\">\r\n        <home></home>\r\n      </section>\r\n      <section id=\"about\" class=\"component-item\">\r\n        <about></about>\r\n      </section>\r\n      <section id=\"services\" class=\"component-item\">\r\n        <services></services>\r\n      </section>\r\n      <section id=\"contact\" class=\"component-item\">\r\n          <contact></contact>\r\n      </section>\r\n    </div>\r\n\r\n  </div> \r\n\r\n  <div class=\"right-nav\">\r\n    <div class=\"navigation\">\r\n\r\n      <ul class=\"navigation-list\">\r\n        <li \r\n        *ngFor=\"let item of navListItems;let i = index\" \r\n        id=\"{{item.label | lowercase}}\"\r\n        (click)=\"listClick(item, i)\"\r\n        [ngClass]=\"{'active': item.isActive }\">\r\n          <a href=\"#\">\r\n            <span class=\"bullet\"></span>\r\n          </a>\r\n        </li>\r\n      </ul>\r\n      <div class=\"social-wrapper\">\r\n        <a href=\"#\">\r\n          <i class=\"fab fa-facebook-f\"></i>\r\n        </a>\r\n        <a href=\"#\">\r\n          <i class=\"fab fa-twitter\"></i>\r\n        </a>\r\n        <a href=\"#\">\r\n          <i class=\"fab fa-linkedin-in\"></i>\r\n        </a>\r\n        <a href=\"#\">\r\n          <i class=\"fab fa-instagram\"></i>\r\n        </a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navigation {\n  display: flex;\n  justify-content: center;\n  height: 100vh;\n  align-items: center; }\n  .navigation ul {\n    position: fixed;\n    list-style: none;\n    margin: 0;\n    padding: 0; }\n  .navigation ul li {\n      line-height: 30px;\n      padding: 10px; }\n  .navigation ul li a {\n        font-size: 22px;\n        text-decoration: none;\n        color: #a09e9e; }\n  .navigation ul li svg {\n        margin-right: 5px; }\n  .navigation ul li.active a {\n      color: white; }\n  .navigation .website-logo-wrapper {\n    display: flex;\n    align-self: flex-start;\n    color: white;\n    margin-top: 30px; }\n  .navigation .website-logo-wrapper .logo {\n      width: 25%; }\n  .navigation .website-logo-wrapper .content {\n      width: 75%;\n      padding-left: 10px; }\n  .navigation .website-logo-wrapper .content > span:last-child {\n      color: rgba(255, 255, 255, 0.5); }\n  .right-nav .navigation {\n  display: flex;\n  justify-content: center;\n  height: 100vh;\n  align-items: center; }\n  .right-nav .navigation ul {\n    position: fixed;\n    margin: 0;\n    padding: 0; }\n  .right-nav .navigation ul li {\n      box-sizing: content-box;\n      padding: 0;\n      height: 10px;\n      background: white;\n      border-radius: 50%;\n      width: 10px;\n      margin: 20px 0;\n      opacity: 0.2; }\n  .right-nav .navigation ul li span.bullet {\n        font-size: 28px; }\n  .right-nav .navigation ul li:hover {\n      cursor: pointer; }\n  .right-nav .navigation ul li.active {\n      border: 4px solid rgba(0, 0, 0, 0.8);\n      position: relative;\n      right: 3px;\n      background: white;\n      opacity: 1; }\n  .right-nav .navigation .social-wrapper {\n    align-self: flex-end;\n    padding-bottom: 30px; }\n  .right-nav .navigation .social-wrapper svg {\n      color: rgba(255, 255, 255, 0.5);\n      margin: 0 7px;\n      font-size: 24px; }\n  .right-nav .navigation .social-wrapper svg:hover {\n      color: white; }\n  .right-nav .navigation .social-wrapper a:hover {\n      text-decoration: none; }\n  .mobile-menu {\n  width: 20px;\n  height: 19px;\n  background-color: transparent;\n  position: absolute;\n  right: 20px;\n  top: 20px;\n  display: none;\n  align-items: center; }\n  .mobile-menu .mobile-menu__middle {\n    width: 20px;\n    height: 3px;\n    background-color: white;\n    position: absolute;\n    transition: all .3s ease-out;\n    -webkit-transform-origin: 0 0;\n            transform-origin: 0 0; }\n  .mobile-menu .mobile-menu__top {\n    position: absolute;\n    top: 1px;\n    left: 0;\n    width: 20px;\n    height: 3px;\n    background-color: white;\n    -webkit-transform-origin: 0 0;\n            transform-origin: 0 0;\n    transition: all .3s ease-out; }\n  .mobile-menu .mobile-menu__bottom {\n    position: absolute;\n    top: 15px;\n    left: 0;\n    width: 20px;\n    height: 3px;\n    background-color: white;\n    -webkit-transform-origin: 0 100%;\n            transform-origin: 0 100%;\n    transition: all .3s ease-out; }\n  .mobile-menu.show .mobile-menu__top {\n  -webkit-transform: rotate(45deg) scaleX(1.28) translateY(-1px);\n          transform: rotate(45deg) scaleX(1.28) translateY(-1px);\n  transition: all .3s ease-out; }\n  .mobile-menu.show .mobile-menu__middle {\n  opacity: 0;\n  -webkit-transform: scaleX(0);\n          transform: scaleX(0);\n  transition: all .3s ease-out; }\n  .mobile-menu.show .mobile-menu__bottom {\n  -webkit-transform: rotate(-45deg) scaleX(1.25) translateY(3px);\n          transform: rotate(-45deg) scaleX(1.25) translateY(3px);\n  transition: all .3s ease-out; }\n  .website-logo-wrapper--mobile {\n  display: none;\n  position: absolute;\n  top: 20px;\n  left: 20px; }\n  .overlay-menu .navigation {\n  display: none; }\n  @media only screen and (max-width: 640px) {\n  .overlay-menu {\n    position: absolute;\n    left: 0;\n    top: 0;\n    height: 100vh;\n    width: 100vw;\n    z-index: 1;\n    background: rgba(0, 0, 0, 0);\n    transition: all .5s ease-out; }\n    .overlay-menu .navigation {\n      display: none;\n      justify-content: start;\n      margin-left: 20px; }\n      .overlay-menu .navigation ul li:hover {\n        cursor: pointer; }\n  body.show .overlay-menu {\n    position: fixed;\n    left: 0;\n    top: 0;\n    height: 100vh;\n    width: 100vw;\n    background: rgba(0, 0, 0, 0.8);\n    transition: all .5s ease-out; }\n    body.show .overlay-menu .navigation {\n      display: flex; }\n  .mobile-menu {\n    display: flex;\n    z-index: 2;\n    position: fixed; }\n  .mobile-menu:hover {\n    cursor: pointer; }\n  .website-logo-wrapper--mobile {\n    display: flex;\n    color: white; }\n    .website-logo-wrapper--mobile .logo {\n      width: 25%; }\n    .website-logo-wrapper--mobile .content {\n      width: 75%;\n      padding-left: 10px; }\n    .website-logo-wrapper--mobile .content > span:last-child {\n      color: rgba(255, 255, 255, 0.5); } }\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_directives_component_item_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/directives/component-item.directive */ "./src/app/shared/directives/component-item.directive.ts");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _shared_services_navigation_links_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/services/navigation-links.service */ "./src/app/shared/services/navigation-links.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = /** @class */ (function () {
    function AppComponent(builder, navService) {
        this.builder = builder;
        this.navService = navService;
        this.currentComponent = 0;
        this.timing = "700ms ease-in";
        this.SWIPE_ACTION = { UP: 'swipeup', DOWN: 'swipedown' };
        this.navListItems = [
            { icon: "home", label: "Home", isActive: true },
            { icon: "info-circle", label: "About", isActive: false },
            { icon: "list-alt", label: "Services", isActive: false },
            { icon: "phone", label: "Contact", isActive: false }
        ];
    }
    AppComponent.prototype.ngOnInit = function () { };
    AppComponent.prototype.ngAfterViewInit = function () {
        this.firstComponentHeight = this.componentList.toArray()[0].nativeElement.offsetHeight;
    };
    AppComponent.prototype.swipe = function (action) {
        if (action.type === 'swipedown') {
            this.prev();
        }
        else {
            this.next();
        }
    };
    AppComponent.prototype.isActive = function (i) {
        this.navListItems.map(function (item, index) {
            item.isActive = (i == index) ? true : false;
        });
    };
    AppComponent.prototype.listClick = function (item, index) {
        this.isActive(index);
        this.scrollThisIntoView(index);
    };
    AppComponent.prototype.next = function () {
        if (this.currentComponent + 1 === this.componentList.length)
            return;
        this.currentComponent =
            (this.currentComponent + 1) % this.componentList.length;
        console.log("currentComponent", this.currentComponent);
        var offset = this.currentComponent * this.firstComponentHeight;
        var myAnimation = this.builder.build([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])(this.timing, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: "translateY(-" + offset + "px)" }))
        ]);
        this.player = myAnimation.create(this.componentsWrapper.nativeElement);
        this.player.play();
        this.isActive(this.currentComponent);
    };
    AppComponent.prototype.prev = function () {
        if (this.currentComponent === 0)
            return;
        this.currentComponent =
            (this.currentComponent - 1 + this.componentList.length) %
                this.componentList.length;
        console.log("currentComponent", this.currentComponent);
        var offset = this.currentComponent * this.firstComponentHeight;
        var myAnimation = this.builder.build([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])(this.timing, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: "translateY(-" + offset + "px)" }))
        ]);
        this.player = myAnimation.create(this.componentsWrapper.nativeElement);
        this.player.play();
        this.isActive(this.currentComponent);
    };
    AppComponent.prototype.onWheelScroll = function (event) {
        if (event.deltaY > 0) {
            //scrolling down
            this.next();
        }
        else {
            //scrolling up
            this.prev();
        }
    };
    AppComponent.prototype.scrollThisIntoView = function (index) {
        var offset = index * this.firstComponentHeight;
        var myAnimation = this.builder.build([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])(this.timing, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: "translateY(-" + offset + "px)" }))
        ]);
        this.player = myAnimation.create(this.componentsWrapper.nativeElement);
        this.player.play();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])(_shared_directives_component_item_directive__WEBPACK_IMPORTED_MODULE_1__["ComponentItemDirective"], { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], AppComponent.prototype, "componentList", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("componentsWrapper", { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], AppComponent.prototype, "componentsWrapper", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("about", { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], AppComponent.prototype, "aboutComp", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])("window:wheel", ["$event"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], AppComponent.prototype, "onWheelScroll", null);
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-root",
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [_angular_animations__WEBPACK_IMPORTED_MODULE_2__["AnimationBuilder"],
            _shared_services_navigation_links_service__WEBPACK_IMPORTED_MODULE_3__["NavigationLinksService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: HammerConfig, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HammerConfig", function() { return HammerConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _shared_components_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/components/home/home.component */ "./src/app/shared/components/home/home.component.ts");
/* harmony import */ var _shared_components_about_about_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/components/about/about.component */ "./src/app/shared/components/about/about.component.ts");
/* harmony import */ var _shared_components_services_services_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/components/services/services.component */ "./src/app/shared/components/services/services.component.ts");
/* harmony import */ var _shared_components_contact_contact_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/components/contact/contact.component */ "./src/app/shared/components/contact/contact.component.ts");
/* harmony import */ var _shared_directives_component_item_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/directives/component-item.directive */ "./src/app/shared/directives/component-item.directive.ts");
/* harmony import */ var _shared_directives_animate_burger_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/directives/animate-burger.directive */ "./src/app/shared/directives/animate-burger.directive.ts");
/* harmony import */ var _shared_services_window_obj_reference_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared/services/window-obj-reference.service */ "./src/app/shared/services/window-obj-reference.service.ts");
/* harmony import */ var _shared_services_navigation_links_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shared/services/navigation-links.service */ "./src/app/shared/services/navigation-links.service.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




//Custom Components





//Custom Directives


//Custom Services


//HammerJS for touch gestures


var HammerConfig = /** @class */ (function (_super) {
    __extends(HammerConfig, _super);
    function HammerConfig() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.overrides = {
            'swipe': { direction: hammerjs__WEBPACK_IMPORTED_MODULE_13__["DIRECTION_ALL"] }
        };
        return _this;
    }
    return HammerConfig;
}(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["HammerGestureConfig"]));

var appRoutes = [];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _shared_components_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                _shared_components_about_about_component__WEBPACK_IMPORTED_MODULE_6__["AboutComponent"],
                _shared_components_services_services_component__WEBPACK_IMPORTED_MODULE_7__["ServicesComponent"],
                _shared_components_contact_contact_component__WEBPACK_IMPORTED_MODULE_8__["ContactComponent"],
                _shared_directives_component_item_directive__WEBPACK_IMPORTED_MODULE_9__["ComponentItemDirective"],
                _shared_directives_animate_burger_directive__WEBPACK_IMPORTED_MODULE_10__["AnimateBurgerDirective"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_14__["RouterModule"].forRoot(appRoutes)
            ],
            providers: [_shared_services_window_obj_reference_service__WEBPACK_IMPORTED_MODULE_11__["WindowObjReferenceService"], _shared_services_navigation_links_service__WEBPACK_IMPORTED_MODULE_12__["NavigationLinksService"], {
                    provide: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["HAMMER_GESTURE_CONFIG"],
                    useClass: HammerConfig
                }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/shared/components/about/about.component.html":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/about/about.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" id=\"about\">\r\n  <div class=\"flex-parent\">\r\n    <div class=\"flex-child\">\r\n      <h1>Modern Website <br>for your business</h1>\r\n    </div>\r\n    <div class=\"flex-child\">\r\n      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris aliquet malesuada feugiat. Curabitur fermentum bibendum nulla, non dictum ipsum tincidunt non. Cras vitae neque molestie, rhoncus ipsum sit amet, lobortis dui. Fusce in urna sem.</p>\r\n      <i class=\"fa fa-cog fa-spin\"></i>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/shared/components/about/about.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/about/about.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*!\n * Bootstrap Grid v4.1.1 (https://getbootstrap.com/)\n * Copyright 2011-2018 The Bootstrap Authors\n * Copyright 2011-2018 Twitter, Inc.\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)\n */\n@-ms-viewport {\n  width: device-width; }\nhtml {\n  box-sizing: border-box;\n  -ms-overflow-style: scrollbar; }\n*,\n*::before,\n*::after {\n  box-sizing: inherit; }\n.container {\n  width: 100%;\n  padding-right: 15px;\n  padding-left: 15px;\n  margin-right: auto;\n  margin-left: auto; }\n@media (min-width: 576px) {\n    .container {\n      max-width: 540px; } }\n@media (min-width: 768px) {\n    .container {\n      max-width: 720px; } }\n@media (min-width: 992px) {\n    .container {\n      max-width: 960px; } }\n@media (min-width: 1200px) {\n    .container {\n      max-width: 1140px; } }\n.container-fluid {\n  width: 100%;\n  padding-right: 15px;\n  padding-left: 15px;\n  margin-right: auto;\n  margin-left: auto; }\n.row {\n  display: flex;\n  flex-wrap: wrap;\n  margin-right: -15px;\n  margin-left: -15px; }\n.no-gutters {\n  margin-right: 0;\n  margin-left: 0; }\n.no-gutters > .col,\n  .no-gutters > [class*=\"col-\"] {\n    padding-right: 0;\n    padding-left: 0; }\n.col-1, .col-2, .col-3, .col-4, .col-5, .col-6, .col-7, .col-8, .col-9, .col-10, .col-11, .col-12, .col,\n.col-auto, .col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11, .col-sm-12, .col-sm,\n.col-sm-auto, .col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11, .col-md-12, .col-md,\n.col-md-auto, .col-lg-1, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-10, .col-lg-11, .col-lg-12, .col-lg,\n.col-lg-auto, .col-xl-1, .col-xl-2, .col-xl-3, .col-xl-4, .col-xl-5, .col-xl-6, .col-xl-7, .col-xl-8, .col-xl-9, .col-xl-10, .col-xl-11, .col-xl-12, .col-xl,\n.col-xl-auto {\n  position: relative;\n  width: 100%;\n  min-height: 1px;\n  padding-right: 15px;\n  padding-left: 15px; }\n.col {\n  flex-basis: 0;\n  flex-grow: 1;\n  max-width: 100%; }\n.col-auto {\n  flex: 0 0 auto;\n  width: auto;\n  max-width: none; }\n.col-1 {\n  flex: 0 0 8.33333333%;\n  max-width: 8.33333333%; }\n.col-2 {\n  flex: 0 0 16.66666667%;\n  max-width: 16.66666667%; }\n.col-3 {\n  flex: 0 0 25%;\n  max-width: 25%; }\n.col-4 {\n  flex: 0 0 33.33333333%;\n  max-width: 33.33333333%; }\n.col-5 {\n  flex: 0 0 41.66666667%;\n  max-width: 41.66666667%; }\n.col-6 {\n  flex: 0 0 50%;\n  max-width: 50%; }\n.col-7 {\n  flex: 0 0 58.33333333%;\n  max-width: 58.33333333%; }\n.col-8 {\n  flex: 0 0 66.66666667%;\n  max-width: 66.66666667%; }\n.col-9 {\n  flex: 0 0 75%;\n  max-width: 75%; }\n.col-10 {\n  flex: 0 0 83.33333333%;\n  max-width: 83.33333333%; }\n.col-11 {\n  flex: 0 0 91.66666667%;\n  max-width: 91.66666667%; }\n.col-12 {\n  flex: 0 0 100%;\n  max-width: 100%; }\n.order-first {\n  order: -1; }\n.order-last {\n  order: 13; }\n.order-0 {\n  order: 0; }\n.order-1 {\n  order: 1; }\n.order-2 {\n  order: 2; }\n.order-3 {\n  order: 3; }\n.order-4 {\n  order: 4; }\n.order-5 {\n  order: 5; }\n.order-6 {\n  order: 6; }\n.order-7 {\n  order: 7; }\n.order-8 {\n  order: 8; }\n.order-9 {\n  order: 9; }\n.order-10 {\n  order: 10; }\n.order-11 {\n  order: 11; }\n.order-12 {\n  order: 12; }\n.offset-1 {\n  margin-left: 8.33333333%; }\n.offset-2 {\n  margin-left: 16.66666667%; }\n.offset-3 {\n  margin-left: 25%; }\n.offset-4 {\n  margin-left: 33.33333333%; }\n.offset-5 {\n  margin-left: 41.66666667%; }\n.offset-6 {\n  margin-left: 50%; }\n.offset-7 {\n  margin-left: 58.33333333%; }\n.offset-8 {\n  margin-left: 66.66666667%; }\n.offset-9 {\n  margin-left: 75%; }\n.offset-10 {\n  margin-left: 83.33333333%; }\n.offset-11 {\n  margin-left: 91.66666667%; }\n@media (min-width: 576px) {\n  .col-sm {\n    flex-basis: 0;\n    flex-grow: 1;\n    max-width: 100%; }\n  .col-sm-auto {\n    flex: 0 0 auto;\n    width: auto;\n    max-width: none; }\n  .col-sm-1 {\n    flex: 0 0 8.33333333%;\n    max-width: 8.33333333%; }\n  .col-sm-2 {\n    flex: 0 0 16.66666667%;\n    max-width: 16.66666667%; }\n  .col-sm-3 {\n    flex: 0 0 25%;\n    max-width: 25%; }\n  .col-sm-4 {\n    flex: 0 0 33.33333333%;\n    max-width: 33.33333333%; }\n  .col-sm-5 {\n    flex: 0 0 41.66666667%;\n    max-width: 41.66666667%; }\n  .col-sm-6 {\n    flex: 0 0 50%;\n    max-width: 50%; }\n  .col-sm-7 {\n    flex: 0 0 58.33333333%;\n    max-width: 58.33333333%; }\n  .col-sm-8 {\n    flex: 0 0 66.66666667%;\n    max-width: 66.66666667%; }\n  .col-sm-9 {\n    flex: 0 0 75%;\n    max-width: 75%; }\n  .col-sm-10 {\n    flex: 0 0 83.33333333%;\n    max-width: 83.33333333%; }\n  .col-sm-11 {\n    flex: 0 0 91.66666667%;\n    max-width: 91.66666667%; }\n  .col-sm-12 {\n    flex: 0 0 100%;\n    max-width: 100%; }\n  .order-sm-first {\n    order: -1; }\n  .order-sm-last {\n    order: 13; }\n  .order-sm-0 {\n    order: 0; }\n  .order-sm-1 {\n    order: 1; }\n  .order-sm-2 {\n    order: 2; }\n  .order-sm-3 {\n    order: 3; }\n  .order-sm-4 {\n    order: 4; }\n  .order-sm-5 {\n    order: 5; }\n  .order-sm-6 {\n    order: 6; }\n  .order-sm-7 {\n    order: 7; }\n  .order-sm-8 {\n    order: 8; }\n  .order-sm-9 {\n    order: 9; }\n  .order-sm-10 {\n    order: 10; }\n  .order-sm-11 {\n    order: 11; }\n  .order-sm-12 {\n    order: 12; }\n  .offset-sm-0 {\n    margin-left: 0; }\n  .offset-sm-1 {\n    margin-left: 8.33333333%; }\n  .offset-sm-2 {\n    margin-left: 16.66666667%; }\n  .offset-sm-3 {\n    margin-left: 25%; }\n  .offset-sm-4 {\n    margin-left: 33.33333333%; }\n  .offset-sm-5 {\n    margin-left: 41.66666667%; }\n  .offset-sm-6 {\n    margin-left: 50%; }\n  .offset-sm-7 {\n    margin-left: 58.33333333%; }\n  .offset-sm-8 {\n    margin-left: 66.66666667%; }\n  .offset-sm-9 {\n    margin-left: 75%; }\n  .offset-sm-10 {\n    margin-left: 83.33333333%; }\n  .offset-sm-11 {\n    margin-left: 91.66666667%; } }\n@media (min-width: 768px) {\n  .col-md {\n    flex-basis: 0;\n    flex-grow: 1;\n    max-width: 100%; }\n  .col-md-auto {\n    flex: 0 0 auto;\n    width: auto;\n    max-width: none; }\n  .col-md-1 {\n    flex: 0 0 8.33333333%;\n    max-width: 8.33333333%; }\n  .col-md-2 {\n    flex: 0 0 16.66666667%;\n    max-width: 16.66666667%; }\n  .col-md-3 {\n    flex: 0 0 25%;\n    max-width: 25%; }\n  .col-md-4 {\n    flex: 0 0 33.33333333%;\n    max-width: 33.33333333%; }\n  .col-md-5 {\n    flex: 0 0 41.66666667%;\n    max-width: 41.66666667%; }\n  .col-md-6 {\n    flex: 0 0 50%;\n    max-width: 50%; }\n  .col-md-7 {\n    flex: 0 0 58.33333333%;\n    max-width: 58.33333333%; }\n  .col-md-8 {\n    flex: 0 0 66.66666667%;\n    max-width: 66.66666667%; }\n  .col-md-9 {\n    flex: 0 0 75%;\n    max-width: 75%; }\n  .col-md-10 {\n    flex: 0 0 83.33333333%;\n    max-width: 83.33333333%; }\n  .col-md-11 {\n    flex: 0 0 91.66666667%;\n    max-width: 91.66666667%; }\n  .col-md-12 {\n    flex: 0 0 100%;\n    max-width: 100%; }\n  .order-md-first {\n    order: -1; }\n  .order-md-last {\n    order: 13; }\n  .order-md-0 {\n    order: 0; }\n  .order-md-1 {\n    order: 1; }\n  .order-md-2 {\n    order: 2; }\n  .order-md-3 {\n    order: 3; }\n  .order-md-4 {\n    order: 4; }\n  .order-md-5 {\n    order: 5; }\n  .order-md-6 {\n    order: 6; }\n  .order-md-7 {\n    order: 7; }\n  .order-md-8 {\n    order: 8; }\n  .order-md-9 {\n    order: 9; }\n  .order-md-10 {\n    order: 10; }\n  .order-md-11 {\n    order: 11; }\n  .order-md-12 {\n    order: 12; }\n  .offset-md-0 {\n    margin-left: 0; }\n  .offset-md-1 {\n    margin-left: 8.33333333%; }\n  .offset-md-2 {\n    margin-left: 16.66666667%; }\n  .offset-md-3 {\n    margin-left: 25%; }\n  .offset-md-4 {\n    margin-left: 33.33333333%; }\n  .offset-md-5 {\n    margin-left: 41.66666667%; }\n  .offset-md-6 {\n    margin-left: 50%; }\n  .offset-md-7 {\n    margin-left: 58.33333333%; }\n  .offset-md-8 {\n    margin-left: 66.66666667%; }\n  .offset-md-9 {\n    margin-left: 75%; }\n  .offset-md-10 {\n    margin-left: 83.33333333%; }\n  .offset-md-11 {\n    margin-left: 91.66666667%; } }\n@media (min-width: 992px) {\n  .col-lg {\n    flex-basis: 0;\n    flex-grow: 1;\n    max-width: 100%; }\n  .col-lg-auto {\n    flex: 0 0 auto;\n    width: auto;\n    max-width: none; }\n  .col-lg-1 {\n    flex: 0 0 8.33333333%;\n    max-width: 8.33333333%; }\n  .col-lg-2 {\n    flex: 0 0 16.66666667%;\n    max-width: 16.66666667%; }\n  .col-lg-3 {\n    flex: 0 0 25%;\n    max-width: 25%; }\n  .col-lg-4 {\n    flex: 0 0 33.33333333%;\n    max-width: 33.33333333%; }\n  .col-lg-5 {\n    flex: 0 0 41.66666667%;\n    max-width: 41.66666667%; }\n  .col-lg-6 {\n    flex: 0 0 50%;\n    max-width: 50%; }\n  .col-lg-7 {\n    flex: 0 0 58.33333333%;\n    max-width: 58.33333333%; }\n  .col-lg-8 {\n    flex: 0 0 66.66666667%;\n    max-width: 66.66666667%; }\n  .col-lg-9 {\n    flex: 0 0 75%;\n    max-width: 75%; }\n  .col-lg-10 {\n    flex: 0 0 83.33333333%;\n    max-width: 83.33333333%; }\n  .col-lg-11 {\n    flex: 0 0 91.66666667%;\n    max-width: 91.66666667%; }\n  .col-lg-12 {\n    flex: 0 0 100%;\n    max-width: 100%; }\n  .order-lg-first {\n    order: -1; }\n  .order-lg-last {\n    order: 13; }\n  .order-lg-0 {\n    order: 0; }\n  .order-lg-1 {\n    order: 1; }\n  .order-lg-2 {\n    order: 2; }\n  .order-lg-3 {\n    order: 3; }\n  .order-lg-4 {\n    order: 4; }\n  .order-lg-5 {\n    order: 5; }\n  .order-lg-6 {\n    order: 6; }\n  .order-lg-7 {\n    order: 7; }\n  .order-lg-8 {\n    order: 8; }\n  .order-lg-9 {\n    order: 9; }\n  .order-lg-10 {\n    order: 10; }\n  .order-lg-11 {\n    order: 11; }\n  .order-lg-12 {\n    order: 12; }\n  .offset-lg-0 {\n    margin-left: 0; }\n  .offset-lg-1 {\n    margin-left: 8.33333333%; }\n  .offset-lg-2 {\n    margin-left: 16.66666667%; }\n  .offset-lg-3 {\n    margin-left: 25%; }\n  .offset-lg-4 {\n    margin-left: 33.33333333%; }\n  .offset-lg-5 {\n    margin-left: 41.66666667%; }\n  .offset-lg-6 {\n    margin-left: 50%; }\n  .offset-lg-7 {\n    margin-left: 58.33333333%; }\n  .offset-lg-8 {\n    margin-left: 66.66666667%; }\n  .offset-lg-9 {\n    margin-left: 75%; }\n  .offset-lg-10 {\n    margin-left: 83.33333333%; }\n  .offset-lg-11 {\n    margin-left: 91.66666667%; } }\n@media (min-width: 1200px) {\n  .col-xl {\n    flex-basis: 0;\n    flex-grow: 1;\n    max-width: 100%; }\n  .col-xl-auto {\n    flex: 0 0 auto;\n    width: auto;\n    max-width: none; }\n  .col-xl-1 {\n    flex: 0 0 8.33333333%;\n    max-width: 8.33333333%; }\n  .col-xl-2 {\n    flex: 0 0 16.66666667%;\n    max-width: 16.66666667%; }\n  .col-xl-3 {\n    flex: 0 0 25%;\n    max-width: 25%; }\n  .col-xl-4 {\n    flex: 0 0 33.33333333%;\n    max-width: 33.33333333%; }\n  .col-xl-5 {\n    flex: 0 0 41.66666667%;\n    max-width: 41.66666667%; }\n  .col-xl-6 {\n    flex: 0 0 50%;\n    max-width: 50%; }\n  .col-xl-7 {\n    flex: 0 0 58.33333333%;\n    max-width: 58.33333333%; }\n  .col-xl-8 {\n    flex: 0 0 66.66666667%;\n    max-width: 66.66666667%; }\n  .col-xl-9 {\n    flex: 0 0 75%;\n    max-width: 75%; }\n  .col-xl-10 {\n    flex: 0 0 83.33333333%;\n    max-width: 83.33333333%; }\n  .col-xl-11 {\n    flex: 0 0 91.66666667%;\n    max-width: 91.66666667%; }\n  .col-xl-12 {\n    flex: 0 0 100%;\n    max-width: 100%; }\n  .order-xl-first {\n    order: -1; }\n  .order-xl-last {\n    order: 13; }\n  .order-xl-0 {\n    order: 0; }\n  .order-xl-1 {\n    order: 1; }\n  .order-xl-2 {\n    order: 2; }\n  .order-xl-3 {\n    order: 3; }\n  .order-xl-4 {\n    order: 4; }\n  .order-xl-5 {\n    order: 5; }\n  .order-xl-6 {\n    order: 6; }\n  .order-xl-7 {\n    order: 7; }\n  .order-xl-8 {\n    order: 8; }\n  .order-xl-9 {\n    order: 9; }\n  .order-xl-10 {\n    order: 10; }\n  .order-xl-11 {\n    order: 11; }\n  .order-xl-12 {\n    order: 12; }\n  .offset-xl-0 {\n    margin-left: 0; }\n  .offset-xl-1 {\n    margin-left: 8.33333333%; }\n  .offset-xl-2 {\n    margin-left: 16.66666667%; }\n  .offset-xl-3 {\n    margin-left: 25%; }\n  .offset-xl-4 {\n    margin-left: 33.33333333%; }\n  .offset-xl-5 {\n    margin-left: 41.66666667%; }\n  .offset-xl-6 {\n    margin-left: 50%; }\n  .offset-xl-7 {\n    margin-left: 58.33333333%; }\n  .offset-xl-8 {\n    margin-left: 66.66666667%; }\n  .offset-xl-9 {\n    margin-left: 75%; }\n  .offset-xl-10 {\n    margin-left: 83.33333333%; }\n  .offset-xl-11 {\n    margin-left: 91.66666667%; } }\n.d-none {\n  display: none !important; }\n.d-inline {\n  display: inline !important; }\n.d-inline-block {\n  display: inline-block !important; }\n.d-block {\n  display: block !important; }\n.d-table {\n  display: table !important; }\n.d-table-row {\n  display: table-row !important; }\n.d-table-cell {\n  display: table-cell !important; }\n.d-flex {\n  display: flex !important; }\n.d-inline-flex {\n  display: inline-flex !important; }\n@media (min-width: 576px) {\n  .d-sm-none {\n    display: none !important; }\n  .d-sm-inline {\n    display: inline !important; }\n  .d-sm-inline-block {\n    display: inline-block !important; }\n  .d-sm-block {\n    display: block !important; }\n  .d-sm-table {\n    display: table !important; }\n  .d-sm-table-row {\n    display: table-row !important; }\n  .d-sm-table-cell {\n    display: table-cell !important; }\n  .d-sm-flex {\n    display: flex !important; }\n  .d-sm-inline-flex {\n    display: inline-flex !important; } }\n@media (min-width: 768px) {\n  .d-md-none {\n    display: none !important; }\n  .d-md-inline {\n    display: inline !important; }\n  .d-md-inline-block {\n    display: inline-block !important; }\n  .d-md-block {\n    display: block !important; }\n  .d-md-table {\n    display: table !important; }\n  .d-md-table-row {\n    display: table-row !important; }\n  .d-md-table-cell {\n    display: table-cell !important; }\n  .d-md-flex {\n    display: flex !important; }\n  .d-md-inline-flex {\n    display: inline-flex !important; } }\n@media (min-width: 992px) {\n  .d-lg-none {\n    display: none !important; }\n  .d-lg-inline {\n    display: inline !important; }\n  .d-lg-inline-block {\n    display: inline-block !important; }\n  .d-lg-block {\n    display: block !important; }\n  .d-lg-table {\n    display: table !important; }\n  .d-lg-table-row {\n    display: table-row !important; }\n  .d-lg-table-cell {\n    display: table-cell !important; }\n  .d-lg-flex {\n    display: flex !important; }\n  .d-lg-inline-flex {\n    display: inline-flex !important; } }\n@media (min-width: 1200px) {\n  .d-xl-none {\n    display: none !important; }\n  .d-xl-inline {\n    display: inline !important; }\n  .d-xl-inline-block {\n    display: inline-block !important; }\n  .d-xl-block {\n    display: block !important; }\n  .d-xl-table {\n    display: table !important; }\n  .d-xl-table-row {\n    display: table-row !important; }\n  .d-xl-table-cell {\n    display: table-cell !important; }\n  .d-xl-flex {\n    display: flex !important; }\n  .d-xl-inline-flex {\n    display: inline-flex !important; } }\n@media print {\n  .d-print-none {\n    display: none !important; }\n  .d-print-inline {\n    display: inline !important; }\n  .d-print-inline-block {\n    display: inline-block !important; }\n  .d-print-block {\n    display: block !important; }\n  .d-print-table {\n    display: table !important; }\n  .d-print-table-row {\n    display: table-row !important; }\n  .d-print-table-cell {\n    display: table-cell !important; }\n  .d-print-flex {\n    display: flex !important; }\n  .d-print-inline-flex {\n    display: inline-flex !important; } }\n.flex-row {\n  flex-direction: row !important; }\n.flex-column {\n  flex-direction: column !important; }\n.flex-row-reverse {\n  flex-direction: row-reverse !important; }\n.flex-column-reverse {\n  flex-direction: column-reverse !important; }\n.flex-wrap {\n  flex-wrap: wrap !important; }\n.flex-nowrap {\n  flex-wrap: nowrap !important; }\n.flex-wrap-reverse {\n  flex-wrap: wrap-reverse !important; }\n.flex-fill {\n  flex: 1 1 auto !important; }\n.flex-grow-0 {\n  flex-grow: 0 !important; }\n.flex-grow-1 {\n  flex-grow: 1 !important; }\n.flex-shrink-0 {\n  flex-shrink: 0 !important; }\n.flex-shrink-1 {\n  flex-shrink: 1 !important; }\n.justify-content-start {\n  justify-content: flex-start !important; }\n.justify-content-end {\n  justify-content: flex-end !important; }\n.justify-content-center {\n  justify-content: center !important; }\n.justify-content-between {\n  justify-content: space-between !important; }\n.justify-content-around {\n  justify-content: space-around !important; }\n.align-items-start {\n  align-items: flex-start !important; }\n.align-items-end {\n  align-items: flex-end !important; }\n.align-items-center {\n  align-items: center !important; }\n.align-items-baseline {\n  align-items: baseline !important; }\n.align-items-stretch {\n  align-items: stretch !important; }\n.align-content-start {\n  align-content: flex-start !important; }\n.align-content-end {\n  align-content: flex-end !important; }\n.align-content-center {\n  align-content: center !important; }\n.align-content-between {\n  align-content: space-between !important; }\n.align-content-around {\n  align-content: space-around !important; }\n.align-content-stretch {\n  align-content: stretch !important; }\n.align-self-auto {\n  -ms-grid-row-align: auto !important;\n      align-self: auto !important; }\n.align-self-start {\n  align-self: flex-start !important; }\n.align-self-end {\n  align-self: flex-end !important; }\n.align-self-center {\n  -ms-grid-row-align: center !important;\n      align-self: center !important; }\n.align-self-baseline {\n  align-self: baseline !important; }\n.align-self-stretch {\n  -ms-grid-row-align: stretch !important;\n      align-self: stretch !important; }\n@media (min-width: 576px) {\n  .flex-sm-row {\n    flex-direction: row !important; }\n  .flex-sm-column {\n    flex-direction: column !important; }\n  .flex-sm-row-reverse {\n    flex-direction: row-reverse !important; }\n  .flex-sm-column-reverse {\n    flex-direction: column-reverse !important; }\n  .flex-sm-wrap {\n    flex-wrap: wrap !important; }\n  .flex-sm-nowrap {\n    flex-wrap: nowrap !important; }\n  .flex-sm-wrap-reverse {\n    flex-wrap: wrap-reverse !important; }\n  .flex-sm-fill {\n    flex: 1 1 auto !important; }\n  .flex-sm-grow-0 {\n    flex-grow: 0 !important; }\n  .flex-sm-grow-1 {\n    flex-grow: 1 !important; }\n  .flex-sm-shrink-0 {\n    flex-shrink: 0 !important; }\n  .flex-sm-shrink-1 {\n    flex-shrink: 1 !important; }\n  .justify-content-sm-start {\n    justify-content: flex-start !important; }\n  .justify-content-sm-end {\n    justify-content: flex-end !important; }\n  .justify-content-sm-center {\n    justify-content: center !important; }\n  .justify-content-sm-between {\n    justify-content: space-between !important; }\n  .justify-content-sm-around {\n    justify-content: space-around !important; }\n  .align-items-sm-start {\n    align-items: flex-start !important; }\n  .align-items-sm-end {\n    align-items: flex-end !important; }\n  .align-items-sm-center {\n    align-items: center !important; }\n  .align-items-sm-baseline {\n    align-items: baseline !important; }\n  .align-items-sm-stretch {\n    align-items: stretch !important; }\n  .align-content-sm-start {\n    align-content: flex-start !important; }\n  .align-content-sm-end {\n    align-content: flex-end !important; }\n  .align-content-sm-center {\n    align-content: center !important; }\n  .align-content-sm-between {\n    align-content: space-between !important; }\n  .align-content-sm-around {\n    align-content: space-around !important; }\n  .align-content-sm-stretch {\n    align-content: stretch !important; }\n  .align-self-sm-auto {\n    -ms-grid-row-align: auto !important;\n        align-self: auto !important; }\n  .align-self-sm-start {\n    align-self: flex-start !important; }\n  .align-self-sm-end {\n    align-self: flex-end !important; }\n  .align-self-sm-center {\n    -ms-grid-row-align: center !important;\n        align-self: center !important; }\n  .align-self-sm-baseline {\n    align-self: baseline !important; }\n  .align-self-sm-stretch {\n    -ms-grid-row-align: stretch !important;\n        align-self: stretch !important; } }\n@media (min-width: 768px) {\n  .flex-md-row {\n    flex-direction: row !important; }\n  .flex-md-column {\n    flex-direction: column !important; }\n  .flex-md-row-reverse {\n    flex-direction: row-reverse !important; }\n  .flex-md-column-reverse {\n    flex-direction: column-reverse !important; }\n  .flex-md-wrap {\n    flex-wrap: wrap !important; }\n  .flex-md-nowrap {\n    flex-wrap: nowrap !important; }\n  .flex-md-wrap-reverse {\n    flex-wrap: wrap-reverse !important; }\n  .flex-md-fill {\n    flex: 1 1 auto !important; }\n  .flex-md-grow-0 {\n    flex-grow: 0 !important; }\n  .flex-md-grow-1 {\n    flex-grow: 1 !important; }\n  .flex-md-shrink-0 {\n    flex-shrink: 0 !important; }\n  .flex-md-shrink-1 {\n    flex-shrink: 1 !important; }\n  .justify-content-md-start {\n    justify-content: flex-start !important; }\n  .justify-content-md-end {\n    justify-content: flex-end !important; }\n  .justify-content-md-center {\n    justify-content: center !important; }\n  .justify-content-md-between {\n    justify-content: space-between !important; }\n  .justify-content-md-around {\n    justify-content: space-around !important; }\n  .align-items-md-start {\n    align-items: flex-start !important; }\n  .align-items-md-end {\n    align-items: flex-end !important; }\n  .align-items-md-center {\n    align-items: center !important; }\n  .align-items-md-baseline {\n    align-items: baseline !important; }\n  .align-items-md-stretch {\n    align-items: stretch !important; }\n  .align-content-md-start {\n    align-content: flex-start !important; }\n  .align-content-md-end {\n    align-content: flex-end !important; }\n  .align-content-md-center {\n    align-content: center !important; }\n  .align-content-md-between {\n    align-content: space-between !important; }\n  .align-content-md-around {\n    align-content: space-around !important; }\n  .align-content-md-stretch {\n    align-content: stretch !important; }\n  .align-self-md-auto {\n    -ms-grid-row-align: auto !important;\n        align-self: auto !important; }\n  .align-self-md-start {\n    align-self: flex-start !important; }\n  .align-self-md-end {\n    align-self: flex-end !important; }\n  .align-self-md-center {\n    -ms-grid-row-align: center !important;\n        align-self: center !important; }\n  .align-self-md-baseline {\n    align-self: baseline !important; }\n  .align-self-md-stretch {\n    -ms-grid-row-align: stretch !important;\n        align-self: stretch !important; } }\n@media (min-width: 992px) {\n  .flex-lg-row {\n    flex-direction: row !important; }\n  .flex-lg-column {\n    flex-direction: column !important; }\n  .flex-lg-row-reverse {\n    flex-direction: row-reverse !important; }\n  .flex-lg-column-reverse {\n    flex-direction: column-reverse !important; }\n  .flex-lg-wrap {\n    flex-wrap: wrap !important; }\n  .flex-lg-nowrap {\n    flex-wrap: nowrap !important; }\n  .flex-lg-wrap-reverse {\n    flex-wrap: wrap-reverse !important; }\n  .flex-lg-fill {\n    flex: 1 1 auto !important; }\n  .flex-lg-grow-0 {\n    flex-grow: 0 !important; }\n  .flex-lg-grow-1 {\n    flex-grow: 1 !important; }\n  .flex-lg-shrink-0 {\n    flex-shrink: 0 !important; }\n  .flex-lg-shrink-1 {\n    flex-shrink: 1 !important; }\n  .justify-content-lg-start {\n    justify-content: flex-start !important; }\n  .justify-content-lg-end {\n    justify-content: flex-end !important; }\n  .justify-content-lg-center {\n    justify-content: center !important; }\n  .justify-content-lg-between {\n    justify-content: space-between !important; }\n  .justify-content-lg-around {\n    justify-content: space-around !important; }\n  .align-items-lg-start {\n    align-items: flex-start !important; }\n  .align-items-lg-end {\n    align-items: flex-end !important; }\n  .align-items-lg-center {\n    align-items: center !important; }\n  .align-items-lg-baseline {\n    align-items: baseline !important; }\n  .align-items-lg-stretch {\n    align-items: stretch !important; }\n  .align-content-lg-start {\n    align-content: flex-start !important; }\n  .align-content-lg-end {\n    align-content: flex-end !important; }\n  .align-content-lg-center {\n    align-content: center !important; }\n  .align-content-lg-between {\n    align-content: space-between !important; }\n  .align-content-lg-around {\n    align-content: space-around !important; }\n  .align-content-lg-stretch {\n    align-content: stretch !important; }\n  .align-self-lg-auto {\n    -ms-grid-row-align: auto !important;\n        align-self: auto !important; }\n  .align-self-lg-start {\n    align-self: flex-start !important; }\n  .align-self-lg-end {\n    align-self: flex-end !important; }\n  .align-self-lg-center {\n    -ms-grid-row-align: center !important;\n        align-self: center !important; }\n  .align-self-lg-baseline {\n    align-self: baseline !important; }\n  .align-self-lg-stretch {\n    -ms-grid-row-align: stretch !important;\n        align-self: stretch !important; } }\n@media (min-width: 1200px) {\n  .flex-xl-row {\n    flex-direction: row !important; }\n  .flex-xl-column {\n    flex-direction: column !important; }\n  .flex-xl-row-reverse {\n    flex-direction: row-reverse !important; }\n  .flex-xl-column-reverse {\n    flex-direction: column-reverse !important; }\n  .flex-xl-wrap {\n    flex-wrap: wrap !important; }\n  .flex-xl-nowrap {\n    flex-wrap: nowrap !important; }\n  .flex-xl-wrap-reverse {\n    flex-wrap: wrap-reverse !important; }\n  .flex-xl-fill {\n    flex: 1 1 auto !important; }\n  .flex-xl-grow-0 {\n    flex-grow: 0 !important; }\n  .flex-xl-grow-1 {\n    flex-grow: 1 !important; }\n  .flex-xl-shrink-0 {\n    flex-shrink: 0 !important; }\n  .flex-xl-shrink-1 {\n    flex-shrink: 1 !important; }\n  .justify-content-xl-start {\n    justify-content: flex-start !important; }\n  .justify-content-xl-end {\n    justify-content: flex-end !important; }\n  .justify-content-xl-center {\n    justify-content: center !important; }\n  .justify-content-xl-between {\n    justify-content: space-between !important; }\n  .justify-content-xl-around {\n    justify-content: space-around !important; }\n  .align-items-xl-start {\n    align-items: flex-start !important; }\n  .align-items-xl-end {\n    align-items: flex-end !important; }\n  .align-items-xl-center {\n    align-items: center !important; }\n  .align-items-xl-baseline {\n    align-items: baseline !important; }\n  .align-items-xl-stretch {\n    align-items: stretch !important; }\n  .align-content-xl-start {\n    align-content: flex-start !important; }\n  .align-content-xl-end {\n    align-content: flex-end !important; }\n  .align-content-xl-center {\n    align-content: center !important; }\n  .align-content-xl-between {\n    align-content: space-between !important; }\n  .align-content-xl-around {\n    align-content: space-around !important; }\n  .align-content-xl-stretch {\n    align-content: stretch !important; }\n  .align-self-xl-auto {\n    -ms-grid-row-align: auto !important;\n        align-self: auto !important; }\n  .align-self-xl-start {\n    align-self: flex-start !important; }\n  .align-self-xl-end {\n    align-self: flex-end !important; }\n  .align-self-xl-center {\n    -ms-grid-row-align: center !important;\n        align-self: center !important; }\n  .align-self-xl-baseline {\n    align-self: baseline !important; }\n  .align-self-xl-stretch {\n    -ms-grid-row-align: stretch !important;\n        align-self: stretch !important; } }\n@media (max-width: 991.98px) {\n  #about h1 {\n    font-size: 1.8rem; } }\n#about {\n  min-height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n#about .flex-parent {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column; }\n#about .flex-parent .flex-child {\n      text-align: center; }\n#about .flex-parent h1 {\n      font-size: 3.5rem;\n      margin-bottom: 2rem;\n      line-height: 1.1;\n      font-weight: bold; }\n#about .flex-parent p {\n      opacity: .75; }\n#about .flex-parent .flex-child:last-child {\n    width: 80%; }\n"

/***/ }),

/***/ "./src/app/shared/components/about/about.component.ts":
/*!************************************************************!*\
  !*** ./src/app/shared/components/about/about.component.ts ***!
  \************************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/shared/components/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.scss */ "./src/app/shared/components/about/about.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/contact/contact.component.html":
/*!******************************************************************!*\
  !*** ./src/app/shared/components/contact/contact.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" id=\"contact\">\r\n  <div class=\"flex-parent\">\r\n    <h5>Customer Service</h5>\r\n    <h1>Contact</h1>\r\n    <p>For questions about our company and products found on our stores. Cras vitae neque molestie, rhoncus ipsum sit amet, lobortis dui. Fusce in urna sem.</p>\r\n\r\n    <div class=\"flex-child\">\r\n      <div class=\"contact\">\r\n        <h6>Contact</h6>\r\n        <p>Call: 01 234 567 89</p>\r\n        <p class=\"email\">Email: ouremail@domain.com</p>\r\n      </div>\r\n      <div class=\"address\">\r\n        <h6>Address</h6>\r\n        <p>Company address</p>\r\n        <p>12 Street Turning Place</p> \r\n        <p>South Est, Antartica</p> \r\n      </div>\r\n    </div>\r\n    <div class=\"button-wrapper\">        \r\n      <button class=\"btn btn-primary btn-transparent-rounded\">Send Message</button>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/shared/components/contact/contact.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/shared/components/contact/contact.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*!\n * Bootstrap Grid v4.1.1 (https://getbootstrap.com/)\n * Copyright 2011-2018 The Bootstrap Authors\n * Copyright 2011-2018 Twitter, Inc.\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)\n */\n@-ms-viewport {\n  width: device-width; }\nhtml {\n  box-sizing: border-box;\n  -ms-overflow-style: scrollbar; }\n*,\n*::before,\n*::after {\n  box-sizing: inherit; }\n.container {\n  width: 100%;\n  padding-right: 15px;\n  padding-left: 15px;\n  margin-right: auto;\n  margin-left: auto; }\n@media (min-width: 576px) {\n    .container {\n      max-width: 540px; } }\n@media (min-width: 768px) {\n    .container {\n      max-width: 720px; } }\n@media (min-width: 992px) {\n    .container {\n      max-width: 960px; } }\n@media (min-width: 1200px) {\n    .container {\n      max-width: 1140px; } }\n.container-fluid {\n  width: 100%;\n  padding-right: 15px;\n  padding-left: 15px;\n  margin-right: auto;\n  margin-left: auto; }\n.row {\n  display: flex;\n  flex-wrap: wrap;\n  margin-right: -15px;\n  margin-left: -15px; }\n.no-gutters {\n  margin-right: 0;\n  margin-left: 0; }\n.no-gutters > .col,\n  .no-gutters > [class*=\"col-\"] {\n    padding-right: 0;\n    padding-left: 0; }\n.col-1, .col-2, .col-3, .col-4, .col-5, .col-6, .col-7, .col-8, .col-9, .col-10, .col-11, .col-12, .col,\n.col-auto, .col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11, .col-sm-12, .col-sm,\n.col-sm-auto, .col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11, .col-md-12, .col-md,\n.col-md-auto, .col-lg-1, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-10, .col-lg-11, .col-lg-12, .col-lg,\n.col-lg-auto, .col-xl-1, .col-xl-2, .col-xl-3, .col-xl-4, .col-xl-5, .col-xl-6, .col-xl-7, .col-xl-8, .col-xl-9, .col-xl-10, .col-xl-11, .col-xl-12, .col-xl,\n.col-xl-auto {\n  position: relative;\n  width: 100%;\n  min-height: 1px;\n  padding-right: 15px;\n  padding-left: 15px; }\n.col {\n  flex-basis: 0;\n  flex-grow: 1;\n  max-width: 100%; }\n.col-auto {\n  flex: 0 0 auto;\n  width: auto;\n  max-width: none; }\n.col-1 {\n  flex: 0 0 8.33333333%;\n  max-width: 8.33333333%; }\n.col-2 {\n  flex: 0 0 16.66666667%;\n  max-width: 16.66666667%; }\n.col-3 {\n  flex: 0 0 25%;\n  max-width: 25%; }\n.col-4 {\n  flex: 0 0 33.33333333%;\n  max-width: 33.33333333%; }\n.col-5 {\n  flex: 0 0 41.66666667%;\n  max-width: 41.66666667%; }\n.col-6 {\n  flex: 0 0 50%;\n  max-width: 50%; }\n.col-7 {\n  flex: 0 0 58.33333333%;\n  max-width: 58.33333333%; }\n.col-8 {\n  flex: 0 0 66.66666667%;\n  max-width: 66.66666667%; }\n.col-9 {\n  flex: 0 0 75%;\n  max-width: 75%; }\n.col-10 {\n  flex: 0 0 83.33333333%;\n  max-width: 83.33333333%; }\n.col-11 {\n  flex: 0 0 91.66666667%;\n  max-width: 91.66666667%; }\n.col-12 {\n  flex: 0 0 100%;\n  max-width: 100%; }\n.order-first {\n  order: -1; }\n.order-last {\n  order: 13; }\n.order-0 {\n  order: 0; }\n.order-1 {\n  order: 1; }\n.order-2 {\n  order: 2; }\n.order-3 {\n  order: 3; }\n.order-4 {\n  order: 4; }\n.order-5 {\n  order: 5; }\n.order-6 {\n  order: 6; }\n.order-7 {\n  order: 7; }\n.order-8 {\n  order: 8; }\n.order-9 {\n  order: 9; }\n.order-10 {\n  order: 10; }\n.order-11 {\n  order: 11; }\n.order-12 {\n  order: 12; }\n.offset-1 {\n  margin-left: 8.33333333%; }\n.offset-2 {\n  margin-left: 16.66666667%; }\n.offset-3 {\n  margin-left: 25%; }\n.offset-4 {\n  margin-left: 33.33333333%; }\n.offset-5 {\n  margin-left: 41.66666667%; }\n.offset-6 {\n  margin-left: 50%; }\n.offset-7 {\n  margin-left: 58.33333333%; }\n.offset-8 {\n  margin-left: 66.66666667%; }\n.offset-9 {\n  margin-left: 75%; }\n.offset-10 {\n  margin-left: 83.33333333%; }\n.offset-11 {\n  margin-left: 91.66666667%; }\n@media (min-width: 576px) {\n  .col-sm {\n    flex-basis: 0;\n    flex-grow: 1;\n    max-width: 100%; }\n  .col-sm-auto {\n    flex: 0 0 auto;\n    width: auto;\n    max-width: none; }\n  .col-sm-1 {\n    flex: 0 0 8.33333333%;\n    max-width: 8.33333333%; }\n  .col-sm-2 {\n    flex: 0 0 16.66666667%;\n    max-width: 16.66666667%; }\n  .col-sm-3 {\n    flex: 0 0 25%;\n    max-width: 25%; }\n  .col-sm-4 {\n    flex: 0 0 33.33333333%;\n    max-width: 33.33333333%; }\n  .col-sm-5 {\n    flex: 0 0 41.66666667%;\n    max-width: 41.66666667%; }\n  .col-sm-6 {\n    flex: 0 0 50%;\n    max-width: 50%; }\n  .col-sm-7 {\n    flex: 0 0 58.33333333%;\n    max-width: 58.33333333%; }\n  .col-sm-8 {\n    flex: 0 0 66.66666667%;\n    max-width: 66.66666667%; }\n  .col-sm-9 {\n    flex: 0 0 75%;\n    max-width: 75%; }\n  .col-sm-10 {\n    flex: 0 0 83.33333333%;\n    max-width: 83.33333333%; }\n  .col-sm-11 {\n    flex: 0 0 91.66666667%;\n    max-width: 91.66666667%; }\n  .col-sm-12 {\n    flex: 0 0 100%;\n    max-width: 100%; }\n  .order-sm-first {\n    order: -1; }\n  .order-sm-last {\n    order: 13; }\n  .order-sm-0 {\n    order: 0; }\n  .order-sm-1 {\n    order: 1; }\n  .order-sm-2 {\n    order: 2; }\n  .order-sm-3 {\n    order: 3; }\n  .order-sm-4 {\n    order: 4; }\n  .order-sm-5 {\n    order: 5; }\n  .order-sm-6 {\n    order: 6; }\n  .order-sm-7 {\n    order: 7; }\n  .order-sm-8 {\n    order: 8; }\n  .order-sm-9 {\n    order: 9; }\n  .order-sm-10 {\n    order: 10; }\n  .order-sm-11 {\n    order: 11; }\n  .order-sm-12 {\n    order: 12; }\n  .offset-sm-0 {\n    margin-left: 0; }\n  .offset-sm-1 {\n    margin-left: 8.33333333%; }\n  .offset-sm-2 {\n    margin-left: 16.66666667%; }\n  .offset-sm-3 {\n    margin-left: 25%; }\n  .offset-sm-4 {\n    margin-left: 33.33333333%; }\n  .offset-sm-5 {\n    margin-left: 41.66666667%; }\n  .offset-sm-6 {\n    margin-left: 50%; }\n  .offset-sm-7 {\n    margin-left: 58.33333333%; }\n  .offset-sm-8 {\n    margin-left: 66.66666667%; }\n  .offset-sm-9 {\n    margin-left: 75%; }\n  .offset-sm-10 {\n    margin-left: 83.33333333%; }\n  .offset-sm-11 {\n    margin-left: 91.66666667%; } }\n@media (min-width: 768px) {\n  .col-md {\n    flex-basis: 0;\n    flex-grow: 1;\n    max-width: 100%; }\n  .col-md-auto {\n    flex: 0 0 auto;\n    width: auto;\n    max-width: none; }\n  .col-md-1 {\n    flex: 0 0 8.33333333%;\n    max-width: 8.33333333%; }\n  .col-md-2 {\n    flex: 0 0 16.66666667%;\n    max-width: 16.66666667%; }\n  .col-md-3 {\n    flex: 0 0 25%;\n    max-width: 25%; }\n  .col-md-4 {\n    flex: 0 0 33.33333333%;\n    max-width: 33.33333333%; }\n  .col-md-5 {\n    flex: 0 0 41.66666667%;\n    max-width: 41.66666667%; }\n  .col-md-6 {\n    flex: 0 0 50%;\n    max-width: 50%; }\n  .col-md-7 {\n    flex: 0 0 58.33333333%;\n    max-width: 58.33333333%; }\n  .col-md-8 {\n    flex: 0 0 66.66666667%;\n    max-width: 66.66666667%; }\n  .col-md-9 {\n    flex: 0 0 75%;\n    max-width: 75%; }\n  .col-md-10 {\n    flex: 0 0 83.33333333%;\n    max-width: 83.33333333%; }\n  .col-md-11 {\n    flex: 0 0 91.66666667%;\n    max-width: 91.66666667%; }\n  .col-md-12 {\n    flex: 0 0 100%;\n    max-width: 100%; }\n  .order-md-first {\n    order: -1; }\n  .order-md-last {\n    order: 13; }\n  .order-md-0 {\n    order: 0; }\n  .order-md-1 {\n    order: 1; }\n  .order-md-2 {\n    order: 2; }\n  .order-md-3 {\n    order: 3; }\n  .order-md-4 {\n    order: 4; }\n  .order-md-5 {\n    order: 5; }\n  .order-md-6 {\n    order: 6; }\n  .order-md-7 {\n    order: 7; }\n  .order-md-8 {\n    order: 8; }\n  .order-md-9 {\n    order: 9; }\n  .order-md-10 {\n    order: 10; }\n  .order-md-11 {\n    order: 11; }\n  .order-md-12 {\n    order: 12; }\n  .offset-md-0 {\n    margin-left: 0; }\n  .offset-md-1 {\n    margin-left: 8.33333333%; }\n  .offset-md-2 {\n    margin-left: 16.66666667%; }\n  .offset-md-3 {\n    margin-left: 25%; }\n  .offset-md-4 {\n    margin-left: 33.33333333%; }\n  .offset-md-5 {\n    margin-left: 41.66666667%; }\n  .offset-md-6 {\n    margin-left: 50%; }\n  .offset-md-7 {\n    margin-left: 58.33333333%; }\n  .offset-md-8 {\n    margin-left: 66.66666667%; }\n  .offset-md-9 {\n    margin-left: 75%; }\n  .offset-md-10 {\n    margin-left: 83.33333333%; }\n  .offset-md-11 {\n    margin-left: 91.66666667%; } }\n@media (min-width: 992px) {\n  .col-lg {\n    flex-basis: 0;\n    flex-grow: 1;\n    max-width: 100%; }\n  .col-lg-auto {\n    flex: 0 0 auto;\n    width: auto;\n    max-width: none; }\n  .col-lg-1 {\n    flex: 0 0 8.33333333%;\n    max-width: 8.33333333%; }\n  .col-lg-2 {\n    flex: 0 0 16.66666667%;\n    max-width: 16.66666667%; }\n  .col-lg-3 {\n    flex: 0 0 25%;\n    max-width: 25%; }\n  .col-lg-4 {\n    flex: 0 0 33.33333333%;\n    max-width: 33.33333333%; }\n  .col-lg-5 {\n    flex: 0 0 41.66666667%;\n    max-width: 41.66666667%; }\n  .col-lg-6 {\n    flex: 0 0 50%;\n    max-width: 50%; }\n  .col-lg-7 {\n    flex: 0 0 58.33333333%;\n    max-width: 58.33333333%; }\n  .col-lg-8 {\n    flex: 0 0 66.66666667%;\n    max-width: 66.66666667%; }\n  .col-lg-9 {\n    flex: 0 0 75%;\n    max-width: 75%; }\n  .col-lg-10 {\n    flex: 0 0 83.33333333%;\n    max-width: 83.33333333%; }\n  .col-lg-11 {\n    flex: 0 0 91.66666667%;\n    max-width: 91.66666667%; }\n  .col-lg-12 {\n    flex: 0 0 100%;\n    max-width: 100%; }\n  .order-lg-first {\n    order: -1; }\n  .order-lg-last {\n    order: 13; }\n  .order-lg-0 {\n    order: 0; }\n  .order-lg-1 {\n    order: 1; }\n  .order-lg-2 {\n    order: 2; }\n  .order-lg-3 {\n    order: 3; }\n  .order-lg-4 {\n    order: 4; }\n  .order-lg-5 {\n    order: 5; }\n  .order-lg-6 {\n    order: 6; }\n  .order-lg-7 {\n    order: 7; }\n  .order-lg-8 {\n    order: 8; }\n  .order-lg-9 {\n    order: 9; }\n  .order-lg-10 {\n    order: 10; }\n  .order-lg-11 {\n    order: 11; }\n  .order-lg-12 {\n    order: 12; }\n  .offset-lg-0 {\n    margin-left: 0; }\n  .offset-lg-1 {\n    margin-left: 8.33333333%; }\n  .offset-lg-2 {\n    margin-left: 16.66666667%; }\n  .offset-lg-3 {\n    margin-left: 25%; }\n  .offset-lg-4 {\n    margin-left: 33.33333333%; }\n  .offset-lg-5 {\n    margin-left: 41.66666667%; }\n  .offset-lg-6 {\n    margin-left: 50%; }\n  .offset-lg-7 {\n    margin-left: 58.33333333%; }\n  .offset-lg-8 {\n    margin-left: 66.66666667%; }\n  .offset-lg-9 {\n    margin-left: 75%; }\n  .offset-lg-10 {\n    margin-left: 83.33333333%; }\n  .offset-lg-11 {\n    margin-left: 91.66666667%; } }\n@media (min-width: 1200px) {\n  .col-xl {\n    flex-basis: 0;\n    flex-grow: 1;\n    max-width: 100%; }\n  .col-xl-auto {\n    flex: 0 0 auto;\n    width: auto;\n    max-width: none; }\n  .col-xl-1 {\n    flex: 0 0 8.33333333%;\n    max-width: 8.33333333%; }\n  .col-xl-2 {\n    flex: 0 0 16.66666667%;\n    max-width: 16.66666667%; }\n  .col-xl-3 {\n    flex: 0 0 25%;\n    max-width: 25%; }\n  .col-xl-4 {\n    flex: 0 0 33.33333333%;\n    max-width: 33.33333333%; }\n  .col-xl-5 {\n    flex: 0 0 41.66666667%;\n    max-width: 41.66666667%; }\n  .col-xl-6 {\n    flex: 0 0 50%;\n    max-width: 50%; }\n  .col-xl-7 {\n    flex: 0 0 58.33333333%;\n    max-width: 58.33333333%; }\n  .col-xl-8 {\n    flex: 0 0 66.66666667%;\n    max-width: 66.66666667%; }\n  .col-xl-9 {\n    flex: 0 0 75%;\n    max-width: 75%; }\n  .col-xl-10 {\n    flex: 0 0 83.33333333%;\n    max-width: 83.33333333%; }\n  .col-xl-11 {\n    flex: 0 0 91.66666667%;\n    max-width: 91.66666667%; }\n  .col-xl-12 {\n    flex: 0 0 100%;\n    max-width: 100%; }\n  .order-xl-first {\n    order: -1; }\n  .order-xl-last {\n    order: 13; }\n  .order-xl-0 {\n    order: 0; }\n  .order-xl-1 {\n    order: 1; }\n  .order-xl-2 {\n    order: 2; }\n  .order-xl-3 {\n    order: 3; }\n  .order-xl-4 {\n    order: 4; }\n  .order-xl-5 {\n    order: 5; }\n  .order-xl-6 {\n    order: 6; }\n  .order-xl-7 {\n    order: 7; }\n  .order-xl-8 {\n    order: 8; }\n  .order-xl-9 {\n    order: 9; }\n  .order-xl-10 {\n    order: 10; }\n  .order-xl-11 {\n    order: 11; }\n  .order-xl-12 {\n    order: 12; }\n  .offset-xl-0 {\n    margin-left: 0; }\n  .offset-xl-1 {\n    margin-left: 8.33333333%; }\n  .offset-xl-2 {\n    margin-left: 16.66666667%; }\n  .offset-xl-3 {\n    margin-left: 25%; }\n  .offset-xl-4 {\n    margin-left: 33.33333333%; }\n  .offset-xl-5 {\n    margin-left: 41.66666667%; }\n  .offset-xl-6 {\n    margin-left: 50%; }\n  .offset-xl-7 {\n    margin-left: 58.33333333%; }\n  .offset-xl-8 {\n    margin-left: 66.66666667%; }\n  .offset-xl-9 {\n    margin-left: 75%; }\n  .offset-xl-10 {\n    margin-left: 83.33333333%; }\n  .offset-xl-11 {\n    margin-left: 91.66666667%; } }\n.d-none {\n  display: none !important; }\n.d-inline {\n  display: inline !important; }\n.d-inline-block {\n  display: inline-block !important; }\n.d-block {\n  display: block !important; }\n.d-table {\n  display: table !important; }\n.d-table-row {\n  display: table-row !important; }\n.d-table-cell {\n  display: table-cell !important; }\n.d-flex {\n  display: flex !important; }\n.d-inline-flex {\n  display: inline-flex !important; }\n@media (min-width: 576px) {\n  .d-sm-none {\n    display: none !important; }\n  .d-sm-inline {\n    display: inline !important; }\n  .d-sm-inline-block {\n    display: inline-block !important; }\n  .d-sm-block {\n    display: block !important; }\n  .d-sm-table {\n    display: table !important; }\n  .d-sm-table-row {\n    display: table-row !important; }\n  .d-sm-table-cell {\n    display: table-cell !important; }\n  .d-sm-flex {\n    display: flex !important; }\n  .d-sm-inline-flex {\n    display: inline-flex !important; } }\n@media (min-width: 768px) {\n  .d-md-none {\n    display: none !important; }\n  .d-md-inline {\n    display: inline !important; }\n  .d-md-inline-block {\n    display: inline-block !important; }\n  .d-md-block {\n    display: block !important; }\n  .d-md-table {\n    display: table !important; }\n  .d-md-table-row {\n    display: table-row !important; }\n  .d-md-table-cell {\n    display: table-cell !important; }\n  .d-md-flex {\n    display: flex !important; }\n  .d-md-inline-flex {\n    display: inline-flex !important; } }\n@media (min-width: 992px) {\n  .d-lg-none {\n    display: none !important; }\n  .d-lg-inline {\n    display: inline !important; }\n  .d-lg-inline-block {\n    display: inline-block !important; }\n  .d-lg-block {\n    display: block !important; }\n  .d-lg-table {\n    display: table !important; }\n  .d-lg-table-row {\n    display: table-row !important; }\n  .d-lg-table-cell {\n    display: table-cell !important; }\n  .d-lg-flex {\n    display: flex !important; }\n  .d-lg-inline-flex {\n    display: inline-flex !important; } }\n@media (min-width: 1200px) {\n  .d-xl-none {\n    display: none !important; }\n  .d-xl-inline {\n    display: inline !important; }\n  .d-xl-inline-block {\n    display: inline-block !important; }\n  .d-xl-block {\n    display: block !important; }\n  .d-xl-table {\n    display: table !important; }\n  .d-xl-table-row {\n    display: table-row !important; }\n  .d-xl-table-cell {\n    display: table-cell !important; }\n  .d-xl-flex {\n    display: flex !important; }\n  .d-xl-inline-flex {\n    display: inline-flex !important; } }\n@media print {\n  .d-print-none {\n    display: none !important; }\n  .d-print-inline {\n    display: inline !important; }\n  .d-print-inline-block {\n    display: inline-block !important; }\n  .d-print-block {\n    display: block !important; }\n  .d-print-table {\n    display: table !important; }\n  .d-print-table-row {\n    display: table-row !important; }\n  .d-print-table-cell {\n    display: table-cell !important; }\n  .d-print-flex {\n    display: flex !important; }\n  .d-print-inline-flex {\n    display: inline-flex !important; } }\n.flex-row {\n  flex-direction: row !important; }\n.flex-column {\n  flex-direction: column !important; }\n.flex-row-reverse {\n  flex-direction: row-reverse !important; }\n.flex-column-reverse {\n  flex-direction: column-reverse !important; }\n.flex-wrap {\n  flex-wrap: wrap !important; }\n.flex-nowrap {\n  flex-wrap: nowrap !important; }\n.flex-wrap-reverse {\n  flex-wrap: wrap-reverse !important; }\n.flex-fill {\n  flex: 1 1 auto !important; }\n.flex-grow-0 {\n  flex-grow: 0 !important; }\n.flex-grow-1 {\n  flex-grow: 1 !important; }\n.flex-shrink-0 {\n  flex-shrink: 0 !important; }\n.flex-shrink-1 {\n  flex-shrink: 1 !important; }\n.justify-content-start {\n  justify-content: flex-start !important; }\n.justify-content-end {\n  justify-content: flex-end !important; }\n.justify-content-center {\n  justify-content: center !important; }\n.justify-content-between {\n  justify-content: space-between !important; }\n.justify-content-around {\n  justify-content: space-around !important; }\n.align-items-start {\n  align-items: flex-start !important; }\n.align-items-end {\n  align-items: flex-end !important; }\n.align-items-center {\n  align-items: center !important; }\n.align-items-baseline {\n  align-items: baseline !important; }\n.align-items-stretch {\n  align-items: stretch !important; }\n.align-content-start {\n  align-content: flex-start !important; }\n.align-content-end {\n  align-content: flex-end !important; }\n.align-content-center {\n  align-content: center !important; }\n.align-content-between {\n  align-content: space-between !important; }\n.align-content-around {\n  align-content: space-around !important; }\n.align-content-stretch {\n  align-content: stretch !important; }\n.align-self-auto {\n  -ms-grid-row-align: auto !important;\n      align-self: auto !important; }\n.align-self-start {\n  align-self: flex-start !important; }\n.align-self-end {\n  align-self: flex-end !important; }\n.align-self-center {\n  -ms-grid-row-align: center !important;\n      align-self: center !important; }\n.align-self-baseline {\n  align-self: baseline !important; }\n.align-self-stretch {\n  -ms-grid-row-align: stretch !important;\n      align-self: stretch !important; }\n@media (min-width: 576px) {\n  .flex-sm-row {\n    flex-direction: row !important; }\n  .flex-sm-column {\n    flex-direction: column !important; }\n  .flex-sm-row-reverse {\n    flex-direction: row-reverse !important; }\n  .flex-sm-column-reverse {\n    flex-direction: column-reverse !important; }\n  .flex-sm-wrap {\n    flex-wrap: wrap !important; }\n  .flex-sm-nowrap {\n    flex-wrap: nowrap !important; }\n  .flex-sm-wrap-reverse {\n    flex-wrap: wrap-reverse !important; }\n  .flex-sm-fill {\n    flex: 1 1 auto !important; }\n  .flex-sm-grow-0 {\n    flex-grow: 0 !important; }\n  .flex-sm-grow-1 {\n    flex-grow: 1 !important; }\n  .flex-sm-shrink-0 {\n    flex-shrink: 0 !important; }\n  .flex-sm-shrink-1 {\n    flex-shrink: 1 !important; }\n  .justify-content-sm-start {\n    justify-content: flex-start !important; }\n  .justify-content-sm-end {\n    justify-content: flex-end !important; }\n  .justify-content-sm-center {\n    justify-content: center !important; }\n  .justify-content-sm-between {\n    justify-content: space-between !important; }\n  .justify-content-sm-around {\n    justify-content: space-around !important; }\n  .align-items-sm-start {\n    align-items: flex-start !important; }\n  .align-items-sm-end {\n    align-items: flex-end !important; }\n  .align-items-sm-center {\n    align-items: center !important; }\n  .align-items-sm-baseline {\n    align-items: baseline !important; }\n  .align-items-sm-stretch {\n    align-items: stretch !important; }\n  .align-content-sm-start {\n    align-content: flex-start !important; }\n  .align-content-sm-end {\n    align-content: flex-end !important; }\n  .align-content-sm-center {\n    align-content: center !important; }\n  .align-content-sm-between {\n    align-content: space-between !important; }\n  .align-content-sm-around {\n    align-content: space-around !important; }\n  .align-content-sm-stretch {\n    align-content: stretch !important; }\n  .align-self-sm-auto {\n    -ms-grid-row-align: auto !important;\n        align-self: auto !important; }\n  .align-self-sm-start {\n    align-self: flex-start !important; }\n  .align-self-sm-end {\n    align-self: flex-end !important; }\n  .align-self-sm-center {\n    -ms-grid-row-align: center !important;\n        align-self: center !important; }\n  .align-self-sm-baseline {\n    align-self: baseline !important; }\n  .align-self-sm-stretch {\n    -ms-grid-row-align: stretch !important;\n        align-self: stretch !important; } }\n@media (min-width: 768px) {\n  .flex-md-row {\n    flex-direction: row !important; }\n  .flex-md-column {\n    flex-direction: column !important; }\n  .flex-md-row-reverse {\n    flex-direction: row-reverse !important; }\n  .flex-md-column-reverse {\n    flex-direction: column-reverse !important; }\n  .flex-md-wrap {\n    flex-wrap: wrap !important; }\n  .flex-md-nowrap {\n    flex-wrap: nowrap !important; }\n  .flex-md-wrap-reverse {\n    flex-wrap: wrap-reverse !important; }\n  .flex-md-fill {\n    flex: 1 1 auto !important; }\n  .flex-md-grow-0 {\n    flex-grow: 0 !important; }\n  .flex-md-grow-1 {\n    flex-grow: 1 !important; }\n  .flex-md-shrink-0 {\n    flex-shrink: 0 !important; }\n  .flex-md-shrink-1 {\n    flex-shrink: 1 !important; }\n  .justify-content-md-start {\n    justify-content: flex-start !important; }\n  .justify-content-md-end {\n    justify-content: flex-end !important; }\n  .justify-content-md-center {\n    justify-content: center !important; }\n  .justify-content-md-between {\n    justify-content: space-between !important; }\n  .justify-content-md-around {\n    justify-content: space-around !important; }\n  .align-items-md-start {\n    align-items: flex-start !important; }\n  .align-items-md-end {\n    align-items: flex-end !important; }\n  .align-items-md-center {\n    align-items: center !important; }\n  .align-items-md-baseline {\n    align-items: baseline !important; }\n  .align-items-md-stretch {\n    align-items: stretch !important; }\n  .align-content-md-start {\n    align-content: flex-start !important; }\n  .align-content-md-end {\n    align-content: flex-end !important; }\n  .align-content-md-center {\n    align-content: center !important; }\n  .align-content-md-between {\n    align-content: space-between !important; }\n  .align-content-md-around {\n    align-content: space-around !important; }\n  .align-content-md-stretch {\n    align-content: stretch !important; }\n  .align-self-md-auto {\n    -ms-grid-row-align: auto !important;\n        align-self: auto !important; }\n  .align-self-md-start {\n    align-self: flex-start !important; }\n  .align-self-md-end {\n    align-self: flex-end !important; }\n  .align-self-md-center {\n    -ms-grid-row-align: center !important;\n        align-self: center !important; }\n  .align-self-md-baseline {\n    align-self: baseline !important; }\n  .align-self-md-stretch {\n    -ms-grid-row-align: stretch !important;\n        align-self: stretch !important; } }\n@media (min-width: 992px) {\n  .flex-lg-row {\n    flex-direction: row !important; }\n  .flex-lg-column {\n    flex-direction: column !important; }\n  .flex-lg-row-reverse {\n    flex-direction: row-reverse !important; }\n  .flex-lg-column-reverse {\n    flex-direction: column-reverse !important; }\n  .flex-lg-wrap {\n    flex-wrap: wrap !important; }\n  .flex-lg-nowrap {\n    flex-wrap: nowrap !important; }\n  .flex-lg-wrap-reverse {\n    flex-wrap: wrap-reverse !important; }\n  .flex-lg-fill {\n    flex: 1 1 auto !important; }\n  .flex-lg-grow-0 {\n    flex-grow: 0 !important; }\n  .flex-lg-grow-1 {\n    flex-grow: 1 !important; }\n  .flex-lg-shrink-0 {\n    flex-shrink: 0 !important; }\n  .flex-lg-shrink-1 {\n    flex-shrink: 1 !important; }\n  .justify-content-lg-start {\n    justify-content: flex-start !important; }\n  .justify-content-lg-end {\n    justify-content: flex-end !important; }\n  .justify-content-lg-center {\n    justify-content: center !important; }\n  .justify-content-lg-between {\n    justify-content: space-between !important; }\n  .justify-content-lg-around {\n    justify-content: space-around !important; }\n  .align-items-lg-start {\n    align-items: flex-start !important; }\n  .align-items-lg-end {\n    align-items: flex-end !important; }\n  .align-items-lg-center {\n    align-items: center !important; }\n  .align-items-lg-baseline {\n    align-items: baseline !important; }\n  .align-items-lg-stretch {\n    align-items: stretch !important; }\n  .align-content-lg-start {\n    align-content: flex-start !important; }\n  .align-content-lg-end {\n    align-content: flex-end !important; }\n  .align-content-lg-center {\n    align-content: center !important; }\n  .align-content-lg-between {\n    align-content: space-between !important; }\n  .align-content-lg-around {\n    align-content: space-around !important; }\n  .align-content-lg-stretch {\n    align-content: stretch !important; }\n  .align-self-lg-auto {\n    -ms-grid-row-align: auto !important;\n        align-self: auto !important; }\n  .align-self-lg-start {\n    align-self: flex-start !important; }\n  .align-self-lg-end {\n    align-self: flex-end !important; }\n  .align-self-lg-center {\n    -ms-grid-row-align: center !important;\n        align-self: center !important; }\n  .align-self-lg-baseline {\n    align-self: baseline !important; }\n  .align-self-lg-stretch {\n    -ms-grid-row-align: stretch !important;\n        align-self: stretch !important; } }\n@media (min-width: 1200px) {\n  .flex-xl-row {\n    flex-direction: row !important; }\n  .flex-xl-column {\n    flex-direction: column !important; }\n  .flex-xl-row-reverse {\n    flex-direction: row-reverse !important; }\n  .flex-xl-column-reverse {\n    flex-direction: column-reverse !important; }\n  .flex-xl-wrap {\n    flex-wrap: wrap !important; }\n  .flex-xl-nowrap {\n    flex-wrap: nowrap !important; }\n  .flex-xl-wrap-reverse {\n    flex-wrap: wrap-reverse !important; }\n  .flex-xl-fill {\n    flex: 1 1 auto !important; }\n  .flex-xl-grow-0 {\n    flex-grow: 0 !important; }\n  .flex-xl-grow-1 {\n    flex-grow: 1 !important; }\n  .flex-xl-shrink-0 {\n    flex-shrink: 0 !important; }\n  .flex-xl-shrink-1 {\n    flex-shrink: 1 !important; }\n  .justify-content-xl-start {\n    justify-content: flex-start !important; }\n  .justify-content-xl-end {\n    justify-content: flex-end !important; }\n  .justify-content-xl-center {\n    justify-content: center !important; }\n  .justify-content-xl-between {\n    justify-content: space-between !important; }\n  .justify-content-xl-around {\n    justify-content: space-around !important; }\n  .align-items-xl-start {\n    align-items: flex-start !important; }\n  .align-items-xl-end {\n    align-items: flex-end !important; }\n  .align-items-xl-center {\n    align-items: center !important; }\n  .align-items-xl-baseline {\n    align-items: baseline !important; }\n  .align-items-xl-stretch {\n    align-items: stretch !important; }\n  .align-content-xl-start {\n    align-content: flex-start !important; }\n  .align-content-xl-end {\n    align-content: flex-end !important; }\n  .align-content-xl-center {\n    align-content: center !important; }\n  .align-content-xl-between {\n    align-content: space-between !important; }\n  .align-content-xl-around {\n    align-content: space-around !important; }\n  .align-content-xl-stretch {\n    align-content: stretch !important; }\n  .align-self-xl-auto {\n    -ms-grid-row-align: auto !important;\n        align-self: auto !important; }\n  .align-self-xl-start {\n    align-self: flex-start !important; }\n  .align-self-xl-end {\n    align-self: flex-end !important; }\n  .align-self-xl-center {\n    -ms-grid-row-align: center !important;\n        align-self: center !important; }\n  .align-self-xl-baseline {\n    align-self: baseline !important; }\n  .align-self-xl-stretch {\n    -ms-grid-row-align: stretch !important;\n        align-self: stretch !important; } }\n@media (max-width: 991.98px) {\n  #contact .flex-parent {\n    width: 80vw !important; }\n    #contact .flex-parent .flex-child > div {\n      width: 100% !important; } }\n#contact {\n  min-height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n#contact .flex-parent {\n    display: flex;\n    flex-direction: column;\n    width: 50vw; }\n#contact .flex-parent .flex-child {\n      display: flex;\n      flex-direction: row;\n      margin-top: 2rem;\n      flex-wrap: wrap; }\n#contact .flex-parent .flex-child > div {\n      width: 50%; }\n#contact .flex-parent p.email {\n      margin-bottom: 2rem; }\n#contact .flex-parent .button-wrapper {\n      margin-top: 30px; }\n"

/***/ }),

/***/ "./src/app/shared/components/contact/contact.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/shared/components/contact/contact.component.ts ***!
  \****************************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/shared/components/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.scss */ "./src/app/shared/components/contact/contact.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/home/home.component.html":
/*!************************************************************!*\
  !*** ./src/app/shared/components/home/home.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"website-logo-wrapper--mobile\">\r\n    <div class=\"logo\">\r\n      <img class=\"nav-logo-img\" src=\"./assets/img/logo_white.png\" alt=\"logo-white\">\r\n    </div>\r\n    <div class=\"content\">\r\n      <span>Simpleux</span><br>\r\n      <span>Portfolio Template</span>\r\n    </div>\r\n  </div>\r\n  \r\n<div class=\"container\" id=\"home\">\r\n  <div class=\"flex-parent\">\r\n    <div class=\"flex-child\">\r\n      <h1>Simpleux</h1>\r\n      <p>A Bootstrap 4 based template, helping you to build modern and beautiful websites.</p>\r\n      <button class=\"btn btn-primary btn-transparent-rounded\">Get started</button>\r\n    </div>\r\n    <div class=\"flex-child\">\r\n      <img \r\n      class=\"logo-img\" \r\n      src=\"./assets/img/logo_white.png\" \r\n      alt=\"logo-white\" \r\n      [@cardAnimator]=\"animationState\"\r\n      (@cardAnimator.done)=\"resetAnimationState()\"\r\n      (swipeleft)=\"startAnimation('swing')\">\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/shared/components/home/home.component.scss":
/*!************************************************************!*\
  !*** ./src/app/shared/components/home/home.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#home {\n  min-height: 100vh;\n  display: flex;\n  align-items: center; }\n  #home .flex-parent {\n    width: 100%;\n    display: flex; }\n  #home .flex-parent .flex-child {\n      width: 50%; }\n  #home .flex-parent img.logo-img {\n      max-width: 160px; }\n  #home .flex-parent h1 {\n      border-bottom: 2px solid white;\n      line-height: 90px;\n      margin-bottom: 1rem;\n      font-size: 5rem; }\n  #home .flex-parent p {\n      font-size: 1.5rem;\n      margin-bottom: 2rem; }\n  #home .flex-parent .flex-child:last-child {\n    display: flex;\n    justify-content: center;\n    align-items: center; }\n  @media only screen and (max-width: 640px) {\n  #home .flex-parent {\n    text-align: center; }\n  #home .flex-parent .flex-child:first-child {\n    width: auto; }\n  #home .flex-parent .flex-child:last-child {\n    display: none; } }\n"

/***/ }),

/***/ "./src/app/shared/components/home/home.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/components/home/home.component.ts ***!
  \**********************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_keyframes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/keyframes */ "./src/app/shared/keyframes.ts");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.startAnimation = function (state) {
        console.log(state);
        if (!this.animationState) {
            this.animationState = state;
        }
    };
    HomeComponent.prototype.resetAnimationState = function () {
        this.animationState = '';
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/shared/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/shared/components/home/home.component.scss")],
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('cardAnimator', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('* => swing', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])(1000, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["keyframes"])(_shared_keyframes__WEBPACK_IMPORTED_MODULE_1__["swing"])))
                ])
            ]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/services/services.component.html":
/*!********************************************************************!*\
  !*** ./src/app/shared/components/services/services.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" id=\"services\">\r\n  <h1 class=\"services-intro\">What we do, we do best</h1>\r\n  <div class=\"flex-parent\">\r\n    <div class=\"flex-child\">\r\n      <div class=\"service-item\">\r\n        <div class=\"service-item-logo\">\r\n            <i class=\"icon icon-location\"></i>\r\n        </div>\r\n        <div class=\"service-item-content\">\r\n          <h4>Responsive</h4>\r\n          <p>Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at.</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"service-item\">\r\n        <div class=\"service-item-logo\">\r\n            <i class=\"icon icon-diamond\"></i>\r\n        </div>\r\n        <div class=\"service-item-content\">\r\n          <h4>Bootstrap</h4>\r\n          <p>Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at.</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"service-item\">\r\n        <div class=\"service-item-logo\">\r\n            <i class=\"icon icon-data\"></i>\r\n        </div>\r\n        <div class=\"service-item-content\">\r\n          <h4>Modern</h4>\r\n          <p>Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at.</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"flex-child\">\r\n        <div class=\"service-item\">\r\n          <div class=\"service-item-logo\">\r\n              <i class=\"icon icon-display\"></i>\r\n          </div>\r\n          <div class=\"service-item-content\">\r\n            <h4>Flexbox</h4>\r\n            <p>Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at.</p>\r\n          </div>\r\n        </div>\r\n        <div class=\"service-item\">\r\n          <div class=\"service-item-logo\">\r\n              <i class=\"icon icon-music\"></i>\r\n          </div>\r\n          <div class=\"service-item-content\">\r\n            <h4>Prebuilt code</h4>\r\n            <p>Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at.</p>\r\n          </div>\r\n        </div>\r\n        <div class=\"service-item\">\r\n          <div class=\"service-item-logo\">\r\n              <i class=\"icon icon-megaphone\"></i>\r\n          </div>\r\n          <div class=\"service-item-content\">\r\n            <h4>Mobile ready</h4>\r\n            <p>Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at.</p>\r\n          </div>\r\n        </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/shared/components/services/services.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/shared/components/services/services.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*!\n * Bootstrap Grid v4.1.1 (https://getbootstrap.com/)\n * Copyright 2011-2018 The Bootstrap Authors\n * Copyright 2011-2018 Twitter, Inc.\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)\n */\n@-ms-viewport {\n  width: device-width; }\nhtml {\n  box-sizing: border-box;\n  -ms-overflow-style: scrollbar; }\n*,\n*::before,\n*::after {\n  box-sizing: inherit; }\n.container {\n  width: 100%;\n  padding-right: 15px;\n  padding-left: 15px;\n  margin-right: auto;\n  margin-left: auto; }\n@media (min-width: 576px) {\n    .container {\n      max-width: 540px; } }\n@media (min-width: 768px) {\n    .container {\n      max-width: 720px; } }\n@media (min-width: 992px) {\n    .container {\n      max-width: 960px; } }\n@media (min-width: 1200px) {\n    .container {\n      max-width: 1140px; } }\n.container-fluid {\n  width: 100%;\n  padding-right: 15px;\n  padding-left: 15px;\n  margin-right: auto;\n  margin-left: auto; }\n.row {\n  display: flex;\n  flex-wrap: wrap;\n  margin-right: -15px;\n  margin-left: -15px; }\n.no-gutters {\n  margin-right: 0;\n  margin-left: 0; }\n.no-gutters > .col,\n  .no-gutters > [class*=\"col-\"] {\n    padding-right: 0;\n    padding-left: 0; }\n.col-1, .col-2, .col-3, .col-4, .col-5, .col-6, .col-7, .col-8, .col-9, .col-10, .col-11, .col-12, .col,\n.col-auto, .col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11, .col-sm-12, .col-sm,\n.col-sm-auto, .col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11, .col-md-12, .col-md,\n.col-md-auto, .col-lg-1, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-10, .col-lg-11, .col-lg-12, .col-lg,\n.col-lg-auto, .col-xl-1, .col-xl-2, .col-xl-3, .col-xl-4, .col-xl-5, .col-xl-6, .col-xl-7, .col-xl-8, .col-xl-9, .col-xl-10, .col-xl-11, .col-xl-12, .col-xl,\n.col-xl-auto {\n  position: relative;\n  width: 100%;\n  min-height: 1px;\n  padding-right: 15px;\n  padding-left: 15px; }\n.col {\n  flex-basis: 0;\n  flex-grow: 1;\n  max-width: 100%; }\n.col-auto {\n  flex: 0 0 auto;\n  width: auto;\n  max-width: none; }\n.col-1 {\n  flex: 0 0 8.33333333%;\n  max-width: 8.33333333%; }\n.col-2 {\n  flex: 0 0 16.66666667%;\n  max-width: 16.66666667%; }\n.col-3 {\n  flex: 0 0 25%;\n  max-width: 25%; }\n.col-4 {\n  flex: 0 0 33.33333333%;\n  max-width: 33.33333333%; }\n.col-5 {\n  flex: 0 0 41.66666667%;\n  max-width: 41.66666667%; }\n.col-6 {\n  flex: 0 0 50%;\n  max-width: 50%; }\n.col-7 {\n  flex: 0 0 58.33333333%;\n  max-width: 58.33333333%; }\n.col-8 {\n  flex: 0 0 66.66666667%;\n  max-width: 66.66666667%; }\n.col-9 {\n  flex: 0 0 75%;\n  max-width: 75%; }\n.col-10 {\n  flex: 0 0 83.33333333%;\n  max-width: 83.33333333%; }\n.col-11 {\n  flex: 0 0 91.66666667%;\n  max-width: 91.66666667%; }\n.col-12 {\n  flex: 0 0 100%;\n  max-width: 100%; }\n.order-first {\n  order: -1; }\n.order-last {\n  order: 13; }\n.order-0 {\n  order: 0; }\n.order-1 {\n  order: 1; }\n.order-2 {\n  order: 2; }\n.order-3 {\n  order: 3; }\n.order-4 {\n  order: 4; }\n.order-5 {\n  order: 5; }\n.order-6 {\n  order: 6; }\n.order-7 {\n  order: 7; }\n.order-8 {\n  order: 8; }\n.order-9 {\n  order: 9; }\n.order-10 {\n  order: 10; }\n.order-11 {\n  order: 11; }\n.order-12 {\n  order: 12; }\n.offset-1 {\n  margin-left: 8.33333333%; }\n.offset-2 {\n  margin-left: 16.66666667%; }\n.offset-3 {\n  margin-left: 25%; }\n.offset-4 {\n  margin-left: 33.33333333%; }\n.offset-5 {\n  margin-left: 41.66666667%; }\n.offset-6 {\n  margin-left: 50%; }\n.offset-7 {\n  margin-left: 58.33333333%; }\n.offset-8 {\n  margin-left: 66.66666667%; }\n.offset-9 {\n  margin-left: 75%; }\n.offset-10 {\n  margin-left: 83.33333333%; }\n.offset-11 {\n  margin-left: 91.66666667%; }\n@media (min-width: 576px) {\n  .col-sm {\n    flex-basis: 0;\n    flex-grow: 1;\n    max-width: 100%; }\n  .col-sm-auto {\n    flex: 0 0 auto;\n    width: auto;\n    max-width: none; }\n  .col-sm-1 {\n    flex: 0 0 8.33333333%;\n    max-width: 8.33333333%; }\n  .col-sm-2 {\n    flex: 0 0 16.66666667%;\n    max-width: 16.66666667%; }\n  .col-sm-3 {\n    flex: 0 0 25%;\n    max-width: 25%; }\n  .col-sm-4 {\n    flex: 0 0 33.33333333%;\n    max-width: 33.33333333%; }\n  .col-sm-5 {\n    flex: 0 0 41.66666667%;\n    max-width: 41.66666667%; }\n  .col-sm-6 {\n    flex: 0 0 50%;\n    max-width: 50%; }\n  .col-sm-7 {\n    flex: 0 0 58.33333333%;\n    max-width: 58.33333333%; }\n  .col-sm-8 {\n    flex: 0 0 66.66666667%;\n    max-width: 66.66666667%; }\n  .col-sm-9 {\n    flex: 0 0 75%;\n    max-width: 75%; }\n  .col-sm-10 {\n    flex: 0 0 83.33333333%;\n    max-width: 83.33333333%; }\n  .col-sm-11 {\n    flex: 0 0 91.66666667%;\n    max-width: 91.66666667%; }\n  .col-sm-12 {\n    flex: 0 0 100%;\n    max-width: 100%; }\n  .order-sm-first {\n    order: -1; }\n  .order-sm-last {\n    order: 13; }\n  .order-sm-0 {\n    order: 0; }\n  .order-sm-1 {\n    order: 1; }\n  .order-sm-2 {\n    order: 2; }\n  .order-sm-3 {\n    order: 3; }\n  .order-sm-4 {\n    order: 4; }\n  .order-sm-5 {\n    order: 5; }\n  .order-sm-6 {\n    order: 6; }\n  .order-sm-7 {\n    order: 7; }\n  .order-sm-8 {\n    order: 8; }\n  .order-sm-9 {\n    order: 9; }\n  .order-sm-10 {\n    order: 10; }\n  .order-sm-11 {\n    order: 11; }\n  .order-sm-12 {\n    order: 12; }\n  .offset-sm-0 {\n    margin-left: 0; }\n  .offset-sm-1 {\n    margin-left: 8.33333333%; }\n  .offset-sm-2 {\n    margin-left: 16.66666667%; }\n  .offset-sm-3 {\n    margin-left: 25%; }\n  .offset-sm-4 {\n    margin-left: 33.33333333%; }\n  .offset-sm-5 {\n    margin-left: 41.66666667%; }\n  .offset-sm-6 {\n    margin-left: 50%; }\n  .offset-sm-7 {\n    margin-left: 58.33333333%; }\n  .offset-sm-8 {\n    margin-left: 66.66666667%; }\n  .offset-sm-9 {\n    margin-left: 75%; }\n  .offset-sm-10 {\n    margin-left: 83.33333333%; }\n  .offset-sm-11 {\n    margin-left: 91.66666667%; } }\n@media (min-width: 768px) {\n  .col-md {\n    flex-basis: 0;\n    flex-grow: 1;\n    max-width: 100%; }\n  .col-md-auto {\n    flex: 0 0 auto;\n    width: auto;\n    max-width: none; }\n  .col-md-1 {\n    flex: 0 0 8.33333333%;\n    max-width: 8.33333333%; }\n  .col-md-2 {\n    flex: 0 0 16.66666667%;\n    max-width: 16.66666667%; }\n  .col-md-3 {\n    flex: 0 0 25%;\n    max-width: 25%; }\n  .col-md-4 {\n    flex: 0 0 33.33333333%;\n    max-width: 33.33333333%; }\n  .col-md-5 {\n    flex: 0 0 41.66666667%;\n    max-width: 41.66666667%; }\n  .col-md-6 {\n    flex: 0 0 50%;\n    max-width: 50%; }\n  .col-md-7 {\n    flex: 0 0 58.33333333%;\n    max-width: 58.33333333%; }\n  .col-md-8 {\n    flex: 0 0 66.66666667%;\n    max-width: 66.66666667%; }\n  .col-md-9 {\n    flex: 0 0 75%;\n    max-width: 75%; }\n  .col-md-10 {\n    flex: 0 0 83.33333333%;\n    max-width: 83.33333333%; }\n  .col-md-11 {\n    flex: 0 0 91.66666667%;\n    max-width: 91.66666667%; }\n  .col-md-12 {\n    flex: 0 0 100%;\n    max-width: 100%; }\n  .order-md-first {\n    order: -1; }\n  .order-md-last {\n    order: 13; }\n  .order-md-0 {\n    order: 0; }\n  .order-md-1 {\n    order: 1; }\n  .order-md-2 {\n    order: 2; }\n  .order-md-3 {\n    order: 3; }\n  .order-md-4 {\n    order: 4; }\n  .order-md-5 {\n    order: 5; }\n  .order-md-6 {\n    order: 6; }\n  .order-md-7 {\n    order: 7; }\n  .order-md-8 {\n    order: 8; }\n  .order-md-9 {\n    order: 9; }\n  .order-md-10 {\n    order: 10; }\n  .order-md-11 {\n    order: 11; }\n  .order-md-12 {\n    order: 12; }\n  .offset-md-0 {\n    margin-left: 0; }\n  .offset-md-1 {\n    margin-left: 8.33333333%; }\n  .offset-md-2 {\n    margin-left: 16.66666667%; }\n  .offset-md-3 {\n    margin-left: 25%; }\n  .offset-md-4 {\n    margin-left: 33.33333333%; }\n  .offset-md-5 {\n    margin-left: 41.66666667%; }\n  .offset-md-6 {\n    margin-left: 50%; }\n  .offset-md-7 {\n    margin-left: 58.33333333%; }\n  .offset-md-8 {\n    margin-left: 66.66666667%; }\n  .offset-md-9 {\n    margin-left: 75%; }\n  .offset-md-10 {\n    margin-left: 83.33333333%; }\n  .offset-md-11 {\n    margin-left: 91.66666667%; } }\n@media (min-width: 992px) {\n  .col-lg {\n    flex-basis: 0;\n    flex-grow: 1;\n    max-width: 100%; }\n  .col-lg-auto {\n    flex: 0 0 auto;\n    width: auto;\n    max-width: none; }\n  .col-lg-1 {\n    flex: 0 0 8.33333333%;\n    max-width: 8.33333333%; }\n  .col-lg-2 {\n    flex: 0 0 16.66666667%;\n    max-width: 16.66666667%; }\n  .col-lg-3 {\n    flex: 0 0 25%;\n    max-width: 25%; }\n  .col-lg-4 {\n    flex: 0 0 33.33333333%;\n    max-width: 33.33333333%; }\n  .col-lg-5 {\n    flex: 0 0 41.66666667%;\n    max-width: 41.66666667%; }\n  .col-lg-6 {\n    flex: 0 0 50%;\n    max-width: 50%; }\n  .col-lg-7 {\n    flex: 0 0 58.33333333%;\n    max-width: 58.33333333%; }\n  .col-lg-8 {\n    flex: 0 0 66.66666667%;\n    max-width: 66.66666667%; }\n  .col-lg-9 {\n    flex: 0 0 75%;\n    max-width: 75%; }\n  .col-lg-10 {\n    flex: 0 0 83.33333333%;\n    max-width: 83.33333333%; }\n  .col-lg-11 {\n    flex: 0 0 91.66666667%;\n    max-width: 91.66666667%; }\n  .col-lg-12 {\n    flex: 0 0 100%;\n    max-width: 100%; }\n  .order-lg-first {\n    order: -1; }\n  .order-lg-last {\n    order: 13; }\n  .order-lg-0 {\n    order: 0; }\n  .order-lg-1 {\n    order: 1; }\n  .order-lg-2 {\n    order: 2; }\n  .order-lg-3 {\n    order: 3; }\n  .order-lg-4 {\n    order: 4; }\n  .order-lg-5 {\n    order: 5; }\n  .order-lg-6 {\n    order: 6; }\n  .order-lg-7 {\n    order: 7; }\n  .order-lg-8 {\n    order: 8; }\n  .order-lg-9 {\n    order: 9; }\n  .order-lg-10 {\n    order: 10; }\n  .order-lg-11 {\n    order: 11; }\n  .order-lg-12 {\n    order: 12; }\n  .offset-lg-0 {\n    margin-left: 0; }\n  .offset-lg-1 {\n    margin-left: 8.33333333%; }\n  .offset-lg-2 {\n    margin-left: 16.66666667%; }\n  .offset-lg-3 {\n    margin-left: 25%; }\n  .offset-lg-4 {\n    margin-left: 33.33333333%; }\n  .offset-lg-5 {\n    margin-left: 41.66666667%; }\n  .offset-lg-6 {\n    margin-left: 50%; }\n  .offset-lg-7 {\n    margin-left: 58.33333333%; }\n  .offset-lg-8 {\n    margin-left: 66.66666667%; }\n  .offset-lg-9 {\n    margin-left: 75%; }\n  .offset-lg-10 {\n    margin-left: 83.33333333%; }\n  .offset-lg-11 {\n    margin-left: 91.66666667%; } }\n@media (min-width: 1200px) {\n  .col-xl {\n    flex-basis: 0;\n    flex-grow: 1;\n    max-width: 100%; }\n  .col-xl-auto {\n    flex: 0 0 auto;\n    width: auto;\n    max-width: none; }\n  .col-xl-1 {\n    flex: 0 0 8.33333333%;\n    max-width: 8.33333333%; }\n  .col-xl-2 {\n    flex: 0 0 16.66666667%;\n    max-width: 16.66666667%; }\n  .col-xl-3 {\n    flex: 0 0 25%;\n    max-width: 25%; }\n  .col-xl-4 {\n    flex: 0 0 33.33333333%;\n    max-width: 33.33333333%; }\n  .col-xl-5 {\n    flex: 0 0 41.66666667%;\n    max-width: 41.66666667%; }\n  .col-xl-6 {\n    flex: 0 0 50%;\n    max-width: 50%; }\n  .col-xl-7 {\n    flex: 0 0 58.33333333%;\n    max-width: 58.33333333%; }\n  .col-xl-8 {\n    flex: 0 0 66.66666667%;\n    max-width: 66.66666667%; }\n  .col-xl-9 {\n    flex: 0 0 75%;\n    max-width: 75%; }\n  .col-xl-10 {\n    flex: 0 0 83.33333333%;\n    max-width: 83.33333333%; }\n  .col-xl-11 {\n    flex: 0 0 91.66666667%;\n    max-width: 91.66666667%; }\n  .col-xl-12 {\n    flex: 0 0 100%;\n    max-width: 100%; }\n  .order-xl-first {\n    order: -1; }\n  .order-xl-last {\n    order: 13; }\n  .order-xl-0 {\n    order: 0; }\n  .order-xl-1 {\n    order: 1; }\n  .order-xl-2 {\n    order: 2; }\n  .order-xl-3 {\n    order: 3; }\n  .order-xl-4 {\n    order: 4; }\n  .order-xl-5 {\n    order: 5; }\n  .order-xl-6 {\n    order: 6; }\n  .order-xl-7 {\n    order: 7; }\n  .order-xl-8 {\n    order: 8; }\n  .order-xl-9 {\n    order: 9; }\n  .order-xl-10 {\n    order: 10; }\n  .order-xl-11 {\n    order: 11; }\n  .order-xl-12 {\n    order: 12; }\n  .offset-xl-0 {\n    margin-left: 0; }\n  .offset-xl-1 {\n    margin-left: 8.33333333%; }\n  .offset-xl-2 {\n    margin-left: 16.66666667%; }\n  .offset-xl-3 {\n    margin-left: 25%; }\n  .offset-xl-4 {\n    margin-left: 33.33333333%; }\n  .offset-xl-5 {\n    margin-left: 41.66666667%; }\n  .offset-xl-6 {\n    margin-left: 50%; }\n  .offset-xl-7 {\n    margin-left: 58.33333333%; }\n  .offset-xl-8 {\n    margin-left: 66.66666667%; }\n  .offset-xl-9 {\n    margin-left: 75%; }\n  .offset-xl-10 {\n    margin-left: 83.33333333%; }\n  .offset-xl-11 {\n    margin-left: 91.66666667%; } }\n.d-none {\n  display: none !important; }\n.d-inline {\n  display: inline !important; }\n.d-inline-block {\n  display: inline-block !important; }\n.d-block {\n  display: block !important; }\n.d-table {\n  display: table !important; }\n.d-table-row {\n  display: table-row !important; }\n.d-table-cell {\n  display: table-cell !important; }\n.d-flex {\n  display: flex !important; }\n.d-inline-flex {\n  display: inline-flex !important; }\n@media (min-width: 576px) {\n  .d-sm-none {\n    display: none !important; }\n  .d-sm-inline {\n    display: inline !important; }\n  .d-sm-inline-block {\n    display: inline-block !important; }\n  .d-sm-block {\n    display: block !important; }\n  .d-sm-table {\n    display: table !important; }\n  .d-sm-table-row {\n    display: table-row !important; }\n  .d-sm-table-cell {\n    display: table-cell !important; }\n  .d-sm-flex {\n    display: flex !important; }\n  .d-sm-inline-flex {\n    display: inline-flex !important; } }\n@media (min-width: 768px) {\n  .d-md-none {\n    display: none !important; }\n  .d-md-inline {\n    display: inline !important; }\n  .d-md-inline-block {\n    display: inline-block !important; }\n  .d-md-block {\n    display: block !important; }\n  .d-md-table {\n    display: table !important; }\n  .d-md-table-row {\n    display: table-row !important; }\n  .d-md-table-cell {\n    display: table-cell !important; }\n  .d-md-flex {\n    display: flex !important; }\n  .d-md-inline-flex {\n    display: inline-flex !important; } }\n@media (min-width: 992px) {\n  .d-lg-none {\n    display: none !important; }\n  .d-lg-inline {\n    display: inline !important; }\n  .d-lg-inline-block {\n    display: inline-block !important; }\n  .d-lg-block {\n    display: block !important; }\n  .d-lg-table {\n    display: table !important; }\n  .d-lg-table-row {\n    display: table-row !important; }\n  .d-lg-table-cell {\n    display: table-cell !important; }\n  .d-lg-flex {\n    display: flex !important; }\n  .d-lg-inline-flex {\n    display: inline-flex !important; } }\n@media (min-width: 1200px) {\n  .d-xl-none {\n    display: none !important; }\n  .d-xl-inline {\n    display: inline !important; }\n  .d-xl-inline-block {\n    display: inline-block !important; }\n  .d-xl-block {\n    display: block !important; }\n  .d-xl-table {\n    display: table !important; }\n  .d-xl-table-row {\n    display: table-row !important; }\n  .d-xl-table-cell {\n    display: table-cell !important; }\n  .d-xl-flex {\n    display: flex !important; }\n  .d-xl-inline-flex {\n    display: inline-flex !important; } }\n@media print {\n  .d-print-none {\n    display: none !important; }\n  .d-print-inline {\n    display: inline !important; }\n  .d-print-inline-block {\n    display: inline-block !important; }\n  .d-print-block {\n    display: block !important; }\n  .d-print-table {\n    display: table !important; }\n  .d-print-table-row {\n    display: table-row !important; }\n  .d-print-table-cell {\n    display: table-cell !important; }\n  .d-print-flex {\n    display: flex !important; }\n  .d-print-inline-flex {\n    display: inline-flex !important; } }\n.flex-row {\n  flex-direction: row !important; }\n.flex-column {\n  flex-direction: column !important; }\n.flex-row-reverse {\n  flex-direction: row-reverse !important; }\n.flex-column-reverse {\n  flex-direction: column-reverse !important; }\n.flex-wrap {\n  flex-wrap: wrap !important; }\n.flex-nowrap {\n  flex-wrap: nowrap !important; }\n.flex-wrap-reverse {\n  flex-wrap: wrap-reverse !important; }\n.flex-fill {\n  flex: 1 1 auto !important; }\n.flex-grow-0 {\n  flex-grow: 0 !important; }\n.flex-grow-1 {\n  flex-grow: 1 !important; }\n.flex-shrink-0 {\n  flex-shrink: 0 !important; }\n.flex-shrink-1 {\n  flex-shrink: 1 !important; }\n.justify-content-start {\n  justify-content: flex-start !important; }\n.justify-content-end {\n  justify-content: flex-end !important; }\n.justify-content-center {\n  justify-content: center !important; }\n.justify-content-between {\n  justify-content: space-between !important; }\n.justify-content-around {\n  justify-content: space-around !important; }\n.align-items-start {\n  align-items: flex-start !important; }\n.align-items-end {\n  align-items: flex-end !important; }\n.align-items-center {\n  align-items: center !important; }\n.align-items-baseline {\n  align-items: baseline !important; }\n.align-items-stretch {\n  align-items: stretch !important; }\n.align-content-start {\n  align-content: flex-start !important; }\n.align-content-end {\n  align-content: flex-end !important; }\n.align-content-center {\n  align-content: center !important; }\n.align-content-between {\n  align-content: space-between !important; }\n.align-content-around {\n  align-content: space-around !important; }\n.align-content-stretch {\n  align-content: stretch !important; }\n.align-self-auto {\n  -ms-grid-row-align: auto !important;\n      align-self: auto !important; }\n.align-self-start {\n  align-self: flex-start !important; }\n.align-self-end {\n  align-self: flex-end !important; }\n.align-self-center {\n  -ms-grid-row-align: center !important;\n      align-self: center !important; }\n.align-self-baseline {\n  align-self: baseline !important; }\n.align-self-stretch {\n  -ms-grid-row-align: stretch !important;\n      align-self: stretch !important; }\n@media (min-width: 576px) {\n  .flex-sm-row {\n    flex-direction: row !important; }\n  .flex-sm-column {\n    flex-direction: column !important; }\n  .flex-sm-row-reverse {\n    flex-direction: row-reverse !important; }\n  .flex-sm-column-reverse {\n    flex-direction: column-reverse !important; }\n  .flex-sm-wrap {\n    flex-wrap: wrap !important; }\n  .flex-sm-nowrap {\n    flex-wrap: nowrap !important; }\n  .flex-sm-wrap-reverse {\n    flex-wrap: wrap-reverse !important; }\n  .flex-sm-fill {\n    flex: 1 1 auto !important; }\n  .flex-sm-grow-0 {\n    flex-grow: 0 !important; }\n  .flex-sm-grow-1 {\n    flex-grow: 1 !important; }\n  .flex-sm-shrink-0 {\n    flex-shrink: 0 !important; }\n  .flex-sm-shrink-1 {\n    flex-shrink: 1 !important; }\n  .justify-content-sm-start {\n    justify-content: flex-start !important; }\n  .justify-content-sm-end {\n    justify-content: flex-end !important; }\n  .justify-content-sm-center {\n    justify-content: center !important; }\n  .justify-content-sm-between {\n    justify-content: space-between !important; }\n  .justify-content-sm-around {\n    justify-content: space-around !important; }\n  .align-items-sm-start {\n    align-items: flex-start !important; }\n  .align-items-sm-end {\n    align-items: flex-end !important; }\n  .align-items-sm-center {\n    align-items: center !important; }\n  .align-items-sm-baseline {\n    align-items: baseline !important; }\n  .align-items-sm-stretch {\n    align-items: stretch !important; }\n  .align-content-sm-start {\n    align-content: flex-start !important; }\n  .align-content-sm-end {\n    align-content: flex-end !important; }\n  .align-content-sm-center {\n    align-content: center !important; }\n  .align-content-sm-between {\n    align-content: space-between !important; }\n  .align-content-sm-around {\n    align-content: space-around !important; }\n  .align-content-sm-stretch {\n    align-content: stretch !important; }\n  .align-self-sm-auto {\n    -ms-grid-row-align: auto !important;\n        align-self: auto !important; }\n  .align-self-sm-start {\n    align-self: flex-start !important; }\n  .align-self-sm-end {\n    align-self: flex-end !important; }\n  .align-self-sm-center {\n    -ms-grid-row-align: center !important;\n        align-self: center !important; }\n  .align-self-sm-baseline {\n    align-self: baseline !important; }\n  .align-self-sm-stretch {\n    -ms-grid-row-align: stretch !important;\n        align-self: stretch !important; } }\n@media (min-width: 768px) {\n  .flex-md-row {\n    flex-direction: row !important; }\n  .flex-md-column {\n    flex-direction: column !important; }\n  .flex-md-row-reverse {\n    flex-direction: row-reverse !important; }\n  .flex-md-column-reverse {\n    flex-direction: column-reverse !important; }\n  .flex-md-wrap {\n    flex-wrap: wrap !important; }\n  .flex-md-nowrap {\n    flex-wrap: nowrap !important; }\n  .flex-md-wrap-reverse {\n    flex-wrap: wrap-reverse !important; }\n  .flex-md-fill {\n    flex: 1 1 auto !important; }\n  .flex-md-grow-0 {\n    flex-grow: 0 !important; }\n  .flex-md-grow-1 {\n    flex-grow: 1 !important; }\n  .flex-md-shrink-0 {\n    flex-shrink: 0 !important; }\n  .flex-md-shrink-1 {\n    flex-shrink: 1 !important; }\n  .justify-content-md-start {\n    justify-content: flex-start !important; }\n  .justify-content-md-end {\n    justify-content: flex-end !important; }\n  .justify-content-md-center {\n    justify-content: center !important; }\n  .justify-content-md-between {\n    justify-content: space-between !important; }\n  .justify-content-md-around {\n    justify-content: space-around !important; }\n  .align-items-md-start {\n    align-items: flex-start !important; }\n  .align-items-md-end {\n    align-items: flex-end !important; }\n  .align-items-md-center {\n    align-items: center !important; }\n  .align-items-md-baseline {\n    align-items: baseline !important; }\n  .align-items-md-stretch {\n    align-items: stretch !important; }\n  .align-content-md-start {\n    align-content: flex-start !important; }\n  .align-content-md-end {\n    align-content: flex-end !important; }\n  .align-content-md-center {\n    align-content: center !important; }\n  .align-content-md-between {\n    align-content: space-between !important; }\n  .align-content-md-around {\n    align-content: space-around !important; }\n  .align-content-md-stretch {\n    align-content: stretch !important; }\n  .align-self-md-auto {\n    -ms-grid-row-align: auto !important;\n        align-self: auto !important; }\n  .align-self-md-start {\n    align-self: flex-start !important; }\n  .align-self-md-end {\n    align-self: flex-end !important; }\n  .align-self-md-center {\n    -ms-grid-row-align: center !important;\n        align-self: center !important; }\n  .align-self-md-baseline {\n    align-self: baseline !important; }\n  .align-self-md-stretch {\n    -ms-grid-row-align: stretch !important;\n        align-self: stretch !important; } }\n@media (min-width: 992px) {\n  .flex-lg-row {\n    flex-direction: row !important; }\n  .flex-lg-column {\n    flex-direction: column !important; }\n  .flex-lg-row-reverse {\n    flex-direction: row-reverse !important; }\n  .flex-lg-column-reverse {\n    flex-direction: column-reverse !important; }\n  .flex-lg-wrap {\n    flex-wrap: wrap !important; }\n  .flex-lg-nowrap {\n    flex-wrap: nowrap !important; }\n  .flex-lg-wrap-reverse {\n    flex-wrap: wrap-reverse !important; }\n  .flex-lg-fill {\n    flex: 1 1 auto !important; }\n  .flex-lg-grow-0 {\n    flex-grow: 0 !important; }\n  .flex-lg-grow-1 {\n    flex-grow: 1 !important; }\n  .flex-lg-shrink-0 {\n    flex-shrink: 0 !important; }\n  .flex-lg-shrink-1 {\n    flex-shrink: 1 !important; }\n  .justify-content-lg-start {\n    justify-content: flex-start !important; }\n  .justify-content-lg-end {\n    justify-content: flex-end !important; }\n  .justify-content-lg-center {\n    justify-content: center !important; }\n  .justify-content-lg-between {\n    justify-content: space-between !important; }\n  .justify-content-lg-around {\n    justify-content: space-around !important; }\n  .align-items-lg-start {\n    align-items: flex-start !important; }\n  .align-items-lg-end {\n    align-items: flex-end !important; }\n  .align-items-lg-center {\n    align-items: center !important; }\n  .align-items-lg-baseline {\n    align-items: baseline !important; }\n  .align-items-lg-stretch {\n    align-items: stretch !important; }\n  .align-content-lg-start {\n    align-content: flex-start !important; }\n  .align-content-lg-end {\n    align-content: flex-end !important; }\n  .align-content-lg-center {\n    align-content: center !important; }\n  .align-content-lg-between {\n    align-content: space-between !important; }\n  .align-content-lg-around {\n    align-content: space-around !important; }\n  .align-content-lg-stretch {\n    align-content: stretch !important; }\n  .align-self-lg-auto {\n    -ms-grid-row-align: auto !important;\n        align-self: auto !important; }\n  .align-self-lg-start {\n    align-self: flex-start !important; }\n  .align-self-lg-end {\n    align-self: flex-end !important; }\n  .align-self-lg-center {\n    -ms-grid-row-align: center !important;\n        align-self: center !important; }\n  .align-self-lg-baseline {\n    align-self: baseline !important; }\n  .align-self-lg-stretch {\n    -ms-grid-row-align: stretch !important;\n        align-self: stretch !important; } }\n@media (min-width: 1200px) {\n  .flex-xl-row {\n    flex-direction: row !important; }\n  .flex-xl-column {\n    flex-direction: column !important; }\n  .flex-xl-row-reverse {\n    flex-direction: row-reverse !important; }\n  .flex-xl-column-reverse {\n    flex-direction: column-reverse !important; }\n  .flex-xl-wrap {\n    flex-wrap: wrap !important; }\n  .flex-xl-nowrap {\n    flex-wrap: nowrap !important; }\n  .flex-xl-wrap-reverse {\n    flex-wrap: wrap-reverse !important; }\n  .flex-xl-fill {\n    flex: 1 1 auto !important; }\n  .flex-xl-grow-0 {\n    flex-grow: 0 !important; }\n  .flex-xl-grow-1 {\n    flex-grow: 1 !important; }\n  .flex-xl-shrink-0 {\n    flex-shrink: 0 !important; }\n  .flex-xl-shrink-1 {\n    flex-shrink: 1 !important; }\n  .justify-content-xl-start {\n    justify-content: flex-start !important; }\n  .justify-content-xl-end {\n    justify-content: flex-end !important; }\n  .justify-content-xl-center {\n    justify-content: center !important; }\n  .justify-content-xl-between {\n    justify-content: space-between !important; }\n  .justify-content-xl-around {\n    justify-content: space-around !important; }\n  .align-items-xl-start {\n    align-items: flex-start !important; }\n  .align-items-xl-end {\n    align-items: flex-end !important; }\n  .align-items-xl-center {\n    align-items: center !important; }\n  .align-items-xl-baseline {\n    align-items: baseline !important; }\n  .align-items-xl-stretch {\n    align-items: stretch !important; }\n  .align-content-xl-start {\n    align-content: flex-start !important; }\n  .align-content-xl-end {\n    align-content: flex-end !important; }\n  .align-content-xl-center {\n    align-content: center !important; }\n  .align-content-xl-between {\n    align-content: space-between !important; }\n  .align-content-xl-around {\n    align-content: space-around !important; }\n  .align-content-xl-stretch {\n    align-content: stretch !important; }\n  .align-self-xl-auto {\n    -ms-grid-row-align: auto !important;\n        align-self: auto !important; }\n  .align-self-xl-start {\n    align-self: flex-start !important; }\n  .align-self-xl-end {\n    align-self: flex-end !important; }\n  .align-self-xl-center {\n    -ms-grid-row-align: center !important;\n        align-self: center !important; }\n  .align-self-xl-baseline {\n    align-self: baseline !important; }\n  .align-self-xl-stretch {\n    -ms-grid-row-align: stretch !important;\n        align-self: stretch !important; } }\n@media (max-width: 991.98px) {\n  #services h1.services-intro {\n    font-size: 1.8rem !important; }\n  #services .flex-parent {\n    flex-wrap: wrap; }\n    #services .flex-parent .flex-child {\n      width: 100vw; }\n      #services .flex-parent .flex-child .service-item {\n        margin-bottom: 20px; }\n        #services .flex-parent .flex-child .service-item .service-item-logo {\n          align-items: start !important; }\n          #services .flex-parent .flex-child .service-item .service-item-logo i.icon {\n            font-size: 2.5rem;\n            top: 5px;\n            position: relative; }\n        #services .flex-parent .flex-child .service-item .service-item-content {\n          margin-left: 10px; }\n          #services .flex-parent .flex-child .service-item .service-item-content h4 {\n            font-size: 18px; }\n          #services .flex-parent .flex-child .service-item .service-item-content p {\n            font-size: 13px; } }\n#services {\n  min-height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column; }\n#services h1.services-intro {\n    width: 60%;\n    text-align: center;\n    margin-bottom: 1rem;\n    font-size: 3.5rem;\n    margin-bottom: 2rem;\n    line-height: 1.1;\n    font-weight: bold; }\n#services .flex-parent {\n    width: 100%;\n    display: flex; }\n#services .flex-parent .flex-child .service-item {\n      display: flex; }\n#services .flex-parent .flex-child .service-item .service-item-logo {\n        width: 25%;\n        display: flex;\n        justify-content: center;\n        align-items: center; }\n#services .flex-parent .flex-child .service-item .service-item-logo .icon {\n          display: inline-block;\n          width: 1em;\n          height: 1em;\n          stroke-width: 0;\n          stroke: currentColor;\n          fill: currentColor; }\n#services .flex-parent .flex-child .service-item .service-item-logo .icon-location,\n        #services .flex-parent .flex-child .service-item .service-item-logo .icon-diamond,\n        #services .flex-parent .flex-child .service-item .service-item-logo .icon-display,\n        #services .flex-parent .flex-child .service-item .service-item-logo .icon-music,\n        #services .flex-parent .flex-child .service-item .service-item-logo .icon-megaphone,\n        #services .flex-parent .flex-child .service-item .service-item-logo .icon-data {\n          font-size: 3rem;\n          color: #fff; }\n#services .flex-parent .flex-child .service-item .service-item-content {\n        width: auto; }\n"

/***/ }),

/***/ "./src/app/shared/components/services/services.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/shared/components/services/services.component.ts ***!
  \******************************************************************/
/*! exports provided: ServicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesComponent", function() { return ServicesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ServicesComponent = /** @class */ (function () {
    function ServicesComponent() {
    }
    ServicesComponent.prototype.ngOnInit = function () {
    };
    ServicesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'services',
            template: __webpack_require__(/*! ./services.component.html */ "./src/app/shared/components/services/services.component.html"),
            styles: [__webpack_require__(/*! ./services.component.scss */ "./src/app/shared/components/services/services.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ServicesComponent);
    return ServicesComponent;
}());



/***/ }),

/***/ "./src/app/shared/directives/animate-burger.directive.ts":
/*!***************************************************************!*\
  !*** ./src/app/shared/directives/animate-burger.directive.ts ***!
  \***************************************************************/
/*! exports provided: AnimateBurgerDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimateBurgerDirective", function() { return AnimateBurgerDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var AnimateBurgerDirective = /** @class */ (function () {
    function AnimateBurgerDirective(elRef, document) {
        this.elRef = elRef;
        this.document = document;
        this.isOpen = false;
    }
    AnimateBurgerDirective.prototype.toggle = function () {
        this.toggleOpen();
    };
    AnimateBurgerDirective.prototype.toggleOpen = function () {
        this.isOpen = !this.isOpen;
        this.document.body.classList[this.isOpen ? 'add' : 'remove']('show');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.show'),
        __metadata("design:type", Object)
    ], AnimateBurgerDirective.prototype, "isOpen", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('click'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], AnimateBurgerDirective.prototype, "toggle", null);
    AnimateBurgerDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[animateBurger]'
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"])),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            Document])
    ], AnimateBurgerDirective);
    return AnimateBurgerDirective;
}());



/***/ }),

/***/ "./src/app/shared/directives/component-item.directive.ts":
/*!***************************************************************!*\
  !*** ./src/app/shared/directives/component-item.directive.ts ***!
  \***************************************************************/
/*! exports provided: ComponentItemDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentItemDirective", function() { return ComponentItemDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ComponentItemDirective = /** @class */ (function () {
    function ComponentItemDirective() {
    }
    ComponentItemDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '.component-item'
        }),
        __metadata("design:paramtypes", [])
    ], ComponentItemDirective);
    return ComponentItemDirective;
}());



/***/ }),

/***/ "./src/app/shared/keyframes.ts":
/*!*************************************!*\
  !*** ./src/app/shared/keyframes.ts ***!
  \*************************************/
/*! exports provided: swing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "swing", function() { return swing; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");

var swing = [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'rotate3d(0, 0, 1, 15deg)', offset: .2 }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'rotate3d(0, 0, 1, -10deg)', offset: .4 }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'rotate3d(0, 0, 1, 5deg)', offset: .6 }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'rotate3d(0, 0, 1, -5deg)', offset: .8 }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'none', offset: 1 })
];
// export const swipes = [
//   style({ transform: `translateY(-${offset}px)`
// ];


/***/ }),

/***/ "./src/app/shared/services/navigation-links.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/shared/services/navigation-links.service.ts ***!
  \*************************************************************/
/*! exports provided: NavigationLinksService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationLinksService", function() { return NavigationLinksService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavigationLinksService = /** @class */ (function () {
    function NavigationLinksService() {
        this.navListItems = [
            { icon: 'home', label: 'Home', isActive: true },
            { icon: 'info-circle', label: 'About', isActive: false },
            { icon: 'list-alt', label: 'Services', isActive: false },
            { icon: 'phone', label: 'Contact', isActive: false },
        ];
    }
    /*
      new NavigationLink('home','Home', 'true'),
      new NavigationLink('info-circle','About', 'false'),
      new NavigationLink('list-alt','Services', 'false'),
      new NavigationLink('phone','Contact', 'false')
    */
    NavigationLinksService.prototype.getnavListItems = function () {
        return this.navListItems;
    };
    NavigationLinksService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], NavigationLinksService);
    return NavigationLinksService;
}());



/***/ }),

/***/ "./src/app/shared/services/window-obj-reference.service.ts":
/*!*****************************************************************!*\
  !*** ./src/app/shared/services/window-obj-reference.service.ts ***!
  \*****************************************************************/
/*! exports provided: WindowObjReferenceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WindowObjReferenceService", function() { return WindowObjReferenceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

function _window() {
    // return the global native browser window object
    // console.log('window', window);
    return window;
}
var WindowObjReferenceService = /** @class */ (function () {
    function WindowObjReferenceService() {
    }
    Object.defineProperty(WindowObjReferenceService.prototype, "nativeWindow", {
        get: function () {
            return _window();
        },
        enumerable: true,
        configurable: true
    });
    WindowObjReferenceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], WindowObjReferenceService);
    return WindowObjReferenceService;
}());



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
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\user\Desktop\trucking-spa\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map