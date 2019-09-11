(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n\r\n<div *ngIf=\"loaded < threshold\">\r\n    <p>\r\n        Loading Page, Please Wait.....\r\n    </p>\r\n\r\n    <!---<img src=\"https://tesseract.projectnaptha.com/img/eng_bw.png\" width=\"500\" height=\"250\">--->\r\n</div>\r\n\r\n<div *ngIf=\"loaded >= threshold\">\r\n    <router-outlet></router-outlet>\r\n    <app-footer></app-footer>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/component/drivers/drivers.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/component/drivers/drivers.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div *ngIf=\"userLoaded\">\r\n        <ol>\r\n            <div *ngFor=\"let user of users; index as i\">\r\n                <li *ngIf=\"user.active\"> {{i}} -> {{user.username}} : {{user.active}} </li>\r\n            </div>\r\n        </ol>\r\n</div>\r\n\r\n\r\n<div *ngIf=\"!users\">\r\n    Driver no is work\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/component/footer/footer.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/component/footer/footer.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <a routerLink=\"home\"> Home </a>  <br />\n  <a routerLink=\"standings\"> Standings </a> <br />\n  <a routerLink=\"wdc\"> Driver's Championship </a> <br />\n  <a routerLink=\"wcc\"> Constructor's Championship </a> <br />\n  <a routerLink=\"reports\"> Admin Panel </a> <br />\n  <a routerLink=\"teams\"> Teams </a> <br />\n  <a routerLink=\"season1\"> Season 1 </a> <br />\n  <a routerLink=\"results\">Race Results </a> <br />\n  <a routerLink=\"drivers\"> Driver Stats </a> <br />\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/component/home/home.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/component/home/home.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align:center\">\r\n    <h1>\r\n        Welcome to {{ title }}!\r\n    </h1>\r\n    <!---<img src=\"assets/FI_RLI.JPG\" />-->\r\n    <img [src]=\"homeimage\">\r\n</div>\r\n\r\n<input type=\"text\" [(ngModel)]=\"file\" /> <br />\r\n\r\n<br />\r\n{{ file }}\r\n<br />"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/component/reports/reports.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/component/reports/reports.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n1. Create a New Season : <br />\nSeason : <input type=\"text\" [(ngModel)]=\"season_name\" /> \n\n<br /><br />\n<button (click)=insertSeason()>  \n  Create New Season : {{ season_name }}  \n</button>\n\n<br /><br /><br />\n\n2. Create a Qualy / Race Table : <br />\nSeason : <input type=\"text\" [(ngModel)]=\"season_name\" /> <br />\nTrack : <input type=\"text\" [(ngModel)]=\"track_name\" /> \n\n<br /><br />\n<button (click)=insertResult(1)>  \n  Create New Qualy Table  \n</button>\n<button (click)=insertResult(2)>  \n  Create New Race Table  \n</button>\n\n<br /><br /><br />\n<input type=\"text\" [(ngModel)]=\"pin\" />\n\n<br /><br />\n{{ status }}\n\n<br /><br /><br />\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/component/results/results.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/component/results/results.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  results works!\n</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/component/season1/season1.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/component/season1/season1.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  season1 works!\n</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/component/standings/standings.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/component/standings/standings.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<div *ngIf=\"userLoaded\">\r\n    Users : <br />\r\n    {{ users }}\r\n</div>\r\n\r\n<br /><br />\r\n\r\n<div *ngIf=\"seasonLoaded\">\r\n    Season {{ curseason + 1 }} : <br />\r\n    {{ season }}\r\n</div>\r\n\r\n<br /><br />\r\n\r\n<div *ngIf=\"seasonCLoaded\">\r\n    Season {{ curseason + 1 }} Columns : <br />\r\n    {{ seasonC }}\r\n</div>\r\n\r\n<br /><br />\r\n\r\n<div *ngIf=\"ready\">\r\n    <ol>\r\n        <div *ngFor=\"let user of users; index as i\">\r\n            <li *ngIf=\"user.active\"> {{i}} -> {{user.username}} : {{points[user.id - 1]}} </li>\r\n        </div>\r\n    </ol>\r\n</div>\r\n-->\r\n\r\n<br /><br />\r\n\r\n    <h2> Roster for Season {{ curseason + 1 }} </h2>\r\n    \r\n<br /><br />\r\n<table>\r\n    \r\n    <tr>\r\n        <th width=\"75\" style=\"text-align:center\"> Pos. </th>\r\n        <th width=\"250\" style=\"text-align:center\"> Driver </th>\r\n        <th width=\"100\" style=\"text-align:center\"> Points </th>\r\n        <th *ngIf=\"flapdefined\" width=\"75\" style=\"text-align:center\"> F Lap </th>\r\n        <!---<th *ngFor=\"let track of seasonC\" > {{ track }} </th>-->\r\n    </tr>\r\n     \r\n    <tr *ngFor=\"let num of order; index as j\">\r\n            <td width=\"75\" style=\"text-align:center\"> {{ j+1 }}</td>\r\n            <td width=\"250\" style=\"text-align:center\"> {{ users[num].username }} </td>\r\n            <td width=\"100\" style=\"text-align:center\"> {{ points[num] }} </td>\r\n            <td *ngIf=\"flapdefined\" width=\"75\" style=\"text-align:center\"> {{ flapuser[num] }} </td>\r\n            <!---<td *ngFor=\"let track of seasonC\" width=\"150\" style=\"text-align:center\"> {{ season1[j][track] }} </td>-->\r\n    </tr>\r\n</table>\r\n\r\n<br /><br />\r\n\r\nSeasons : <br />\r\n<div *ngFor=\"let season of seasonsT; index as j\">\r\n    <button (click)=changeSeason(j)>  \r\n        {{season | titlecase}}  \r\n    </button>\r\n</div>\r\n\r\n<!--\r\n<br /><br /><br />\r\n<ul>\r\n    <div *ngFor=\"let n of order\">\r\n        <li> {{ n }} </li>\r\n    </div>\r\n</ul>\r\n-->\r\n\r\n <!---\r\n<div *ngFor=\"let user of users; index as j\">\r\n    <tr *ngIf=\"user.active\">\r\n        <td width=\"150\" style=\"text-align:center\"> {{ j+1 }}</td>\r\n        <td width=\"150\" style=\"text-align:center\"> {{ user.username }} </td>\r\n        <td *ngFor=\"let track of season1C\"  width=\"150\" style=\"text-align:center\"> {{ season1[j][track] }}</td>\r\n        <td width=\"150\" style=\"text-align:center\"> {{ points[j] }}</td>\r\n    </tr>\r\n</div>\r\n-->\r\n<br /><br /><br />\r\n\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/component/teams/teams.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/component/teams/teams.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\r\n<div *ngIf=\"userLoaded\">\r\n    Users : <br />\r\n    {{ users }}\r\n</div>\r\n\r\n<div *ngIf=\"teamsLoaded\">\r\n    Teams : <br />\r\n    {{ teams }}\r\n</div>\r\n-->\r\n<br /><br />\r\n\r\n<div *ngIf=\"ready\">\r\n    <!---\r\n    <ol>\r\n        <div *ngFor=\"let num of order; index as i\">\r\n            <li *ngIf=\"users[num].active && teams[num][teamsC[curseason]] != 'None'\">\r\n                {{ i+1 }} -> {{users[num].username}} : {{ teams[num][teamsC[curseason]] }} --------- {{ points[num] }}\r\n            </li>\r\n        </div>\r\n    </ol>\r\n    -->\r\n\r\n    <br /><br />\r\n\r\n    <h2> Roster for Season {{ curseason + 1 }} </h2>\r\n\r\n    <table>\r\n    \r\n        <tr>\r\n            <th width=\"75\" style=\"text-align:center\"> Pos. </th>\r\n            <th width=\"350\" style=\"text-align:center\"> Team </th>\r\n            <th colspan=\"2\" width=\"400\" style=\"text-align:center\"> Drivers </th>\r\n            <th width=\"75\" style=\"text-align:center\"> Points </th>\r\n            <!---<th *ngFor=\"let track of seasonC\" > {{ track }} </th>-->\r\n        </tr>\r\n         \r\n        <tr *ngFor=\"let team of constructors; index as j\">\r\n                <td width=\"75\" style=\"text-align:center\"> {{ j+1 }}</td>\r\n                <td width=\"350\" style=\"text-align:center\"> {{ team.team }} </td>\r\n                <td *ngFor=\"let member of team.member\" width=\"200\" style=\"text-align:center\"> {{ users[member].username }} </td>\r\n                <td width=\"75\" style=\"text-align:center\"> {{ team.points }} </td>\r\n                <!---<td *ngFor=\"let track of seasonC\" width=\"150\" style=\"text-align:center\"> {{ season1[j][track] }} </td>-->\r\n        </tr>\r\n    </table>\r\n\r\n    <br /><br />\r\n\r\n    <h2> Reserves </h2>\r\n\r\n    <ul>\r\n        <li *ngFor=\"let r of reserves\">\r\n            {{ users[r].username }}\r\n        </li>\r\n    </ul>\r\n\r\n    <br /><br />\r\n\r\n    Seasons : <br />\r\n    <div *ngFor=\"let season of seasonsT; index as j\">\r\n        <button (click)=changeSeason(j)>  {{season | titlecase}}  </button>\r\n    </div>\r\n\t<!--- Current Drivers \r\n    <div *ngFor=\"let team of teams\">\r\n\t<li *ngIf=\"team != 'Reserve'\">\r\n\r\n\t</li>\r\n    </div>\r\n\r\n    <br /><br />\r\n\r\n    <ul>\r\n\t<li *ngFor=\"let season of teamsC; index as j\" (click)=\"changeseason(j)\"> {{ season }} </li>\r\n    </ul> -->\r\n</div>\r\n\r\n<br /><br />\r\n\r\n\r\n<!---\r\n<table>\r\n    <tr>\r\n        <th> Position </th>\r\n        <th> Driver </th>\r\n        <th *ngFor=\"let track of season1C\"> {{ track }} </th>\r\n        <th> Points </th>\r\n    </tr>\r\n\r\n    <div *ngFor=\"let user of users; index as j\">\r\n        <tr *ngIf=\"user.active\">\r\n            <td width=\"150\" style=\"text-align:center\"> {{ j }}</td>\r\n            <td width=\"150\" style=\"text-align:center\"> {{ user.username }} </td>\r\n            <td *ngFor=\"let track of season1C\" width=\"150\" style=\"text-align:center\"> {{ season1[j][track] }}</td>\r\n            <td width=\"150\" style=\"text-align:center\"> {{ points[j] }}</td>\r\n        </tr>\r\n    </div>\r\n</table>\r\n--->\r\n\r\n<br /><br /><br />\r\n\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/component/wcc/wcc.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/component/wcc/wcc.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"ready\">\n  <ol>\n      <div *ngFor=\"let constructor of constructors; index as i\">\n          <li>\n              {{ i+1 }} -> {{ constructor.team }} : {{ constructor.points }}\n          </li>\n      </div>\n  </ol>\n\n  <br /><br />\n\n  Seasons : <br />\n  <div *ngFor=\"let season of seasonsT; index as j\">\n      <button (click)=changeSeason(j)>  {{season | titlecase}}  </button>\n  </div>\n</div>\n\n<br /><br /><br />"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/component/wdc/wdc.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/component/wdc/wdc.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  wdc works!\n</p>\n\n\n"

/***/ }),

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
/* harmony import */ var _component_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./component/home/home.component */ "./src/app/component/home/home.component.ts");
/* harmony import */ var _component_standings_standings_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./component/standings/standings.component */ "./src/app/component/standings/standings.component.ts");
/* harmony import */ var _component_wdc_wdc_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./component/wdc/wdc.component */ "./src/app/component/wdc/wdc.component.ts");
/* harmony import */ var _component_wcc_wcc_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./component/wcc/wcc.component */ "./src/app/component/wcc/wcc.component.ts");
/* harmony import */ var _component_teams_teams_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./component/teams/teams.component */ "./src/app/component/teams/teams.component.ts");
/* harmony import */ var _component_drivers_drivers_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./component/drivers/drivers.component */ "./src/app/component/drivers/drivers.component.ts");
/* harmony import */ var _component_results_results_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./component/results/results.component */ "./src/app/component/results/results.component.ts");
/* harmony import */ var _component_season1_season1_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./component/season1/season1.component */ "./src/app/component/season1/season1.component.ts");
/* harmony import */ var _component_reports_reports_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./component/reports/reports.component */ "./src/app/component/reports/reports.component.ts");












var routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: _component_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'standings', component: _component_standings_standings_component__WEBPACK_IMPORTED_MODULE_4__["StandingsComponent"] },
    { path: 'wdc', component: _component_wdc_wdc_component__WEBPACK_IMPORTED_MODULE_5__["WdcComponent"] },
    { path: 'wcc', component: _component_wcc_wcc_component__WEBPACK_IMPORTED_MODULE_6__["WccComponent"] },
    { path: 'teams', component: _component_teams_teams_component__WEBPACK_IMPORTED_MODULE_7__["TeamsComponent"] },
    { path: 'drivers', component: _component_drivers_drivers_component__WEBPACK_IMPORTED_MODULE_8__["DriversComponent"] },
    { path: 'results', component: _component_results_results_component__WEBPACK_IMPORTED_MODULE_9__["ResultsComponent"] },
    { path: 'season1', component: _component_season1_season1_component__WEBPACK_IMPORTED_MODULE_10__["Season1Component"] },
    { path: 'reports', component: _component_reports_reports_component__WEBPACK_IMPORTED_MODULE_11__["ReportsComponent"] }
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
/* harmony import */ var _service_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./service/users.service */ "./src/app/service/users.service.ts");
/* harmony import */ var _service_columns_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./service/columns.service */ "./src/app/service/columns.service.ts");
/* harmony import */ var _service_stat_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./service/stat.service */ "./src/app/service/stat.service.ts");





var AppComponent = /** @class */ (function () {
    //Program Starts Here : 
    function AppComponent(columnsService, usersService, statService) {
        this.columnsService = columnsService;
        this.usersService = usersService;
        this.statService = statService;
        //threshold denotes the number of Units of Data to be loaded before the App is ready to display the contents
        //loaded denotes the number of Loaded Units of Data.
        this.sometext = "Awesome, it Works";
        this.loaded = 0;
        this.threshold = 6; //Set for the Tables & Columns in fdb
        this.sometext = "";
        this.LoadUsers();
        this.LoadColumns();
    }
    AppComponent.prototype.LoadUsers = function () {
        //console.log('Loading Users');
        var _this = this;
        //Get Users Table
        this.usersService.getO("fdb", "users", "id").subscribe(function (users) {
            _this.usersService.users = users;
            _this.usersService.userdefined = true;
            _this.loaded++;
            _this.computeStats();
        });
        //Get Points Table
        this.usersService.getO("fdb", "points", "pos").subscribe(function (points) {
            //don't need pos, because not sorting
            _this.usersService.pointsS = points;
            for (var i = 0; i < _this.usersService.pointsS.length; ++i)
                delete _this.usersService.pointsS[i].pos;
            _this.usersService.pointsSdefined = true;
            _this.loaded++;
            _this.computeStats();
        });
        //Get Teams Table
        this.usersService.getO("fdb", "teams").subscribe(function (teams) {
            _this.usersService.teams = teams;
            _this.usersService.teamsdefined = true;
            _this.loaded++;
            _this.computeStats();
        });
    };
    AppComponent.prototype.LoadColumns = function () {
        //console.log('Loading Columns');
        var _this = this;
        //Get Users Table
        this.columnsService.getC("fdb", "users").subscribe(function (users) {
            _this.columnsService.usersC = users;
            _this.columnsService.userCdefined = true;
            _this.loaded++;
            _this.computeStats();
        });
        //Get Teams Table
        this.columnsService.getC("fdb", "teams").subscribe(function (teams) {
            _this.columnsService.teamsC = teams;
            _this.columnsService.teamsC.shift();
            _this.columnsService.teamsCdefined = true;
            _this.loaded++;
            _this.computeStats();
        });
        //Get Seasons's Tables
        this.columnsService.getT("seasons").subscribe(function (seasons) {
            _this.columnsService.seasonsT = seasons;
            _this.columnsService.seasonsTdefined = true;
            _this.loaded++;
            _this.threshold += (_this.columnsService.seasonsT.length * 3) - 1;
            _this.computeStats();
            _this.LoadSeasons();
        });
    };
    AppComponent.prototype.LoadSeasons = function () {
        var _this = this;
        //Load the Seasons Data
        this.usersService.seasons = new Array(this.columnsService.seasonsT.length);
        var _loop_1 = function (i) {
            //Get Season i Table
            this_1.usersService.getO("seasons", this_1.columnsService.seasonsT[i], "id").subscribe(function (seasons) {
                //need id, because sorting using id
                _this.usersService.season1 = seasons;
                _this.usersService.season1defined = true;
                _this.loaded++;
                _this.usersService.seasons[i] = seasons;
                _this.computeStats();
            });
        };
        var this_1 = this;
        for (var i = 0; i < this.columnsService.seasonsT.length; i++) {
            _loop_1(i);
        }
        //Load the Columns Data
        this.columnsService.seasonsC = new Array(this.columnsService.seasonsT.length);
        var _loop_2 = function (i) {
            //Get Season i Columns
            this_2.columnsService.getC("seasons", this_2.columnsService.seasonsT[i]).subscribe(function (seasons) {
                //shift removes the first element from the Array, i.e., "id"
                var S = seasons;
                S.shift();
                _this.loaded++;
                _this.columnsService.seasonsC[i] = S;
                _this.computeStats();
            });
        };
        var this_2 = this;
        for (var i = 0; i < this.columnsService.seasonsT.length; i++) {
            _loop_2(i);
        }
        //Load Fastest Lap Tables
        this.usersService.flaps = new Array(this.columnsService.seasonsT.length - 1);
        var _loop_3 = function (i) {
            //Get Fastest Lap i Table
            this_3.usersService.getO("fastest_laps", this_3.columnsService.seasonsT[i]).subscribe(function (flap) {
                _this.usersService.flaps[i - 1] = flap;
                _this.loaded++;
                _this.computeStats();
            });
        };
        var this_3 = this;
        for (var i = 1; i < this.columnsService.seasonsT.length; i++) {
            _loop_3(i);
        }
    };
    AppComponent.prototype.computeStats = function () {
        if (this.loaded < this.threshold)
            return;
        this.statService.begin_compute();
    };
    /*    constructor() {
            const worker = new TesseractWorker();
            let myImage: string = "assets/Qualy.png";
    
            
            /*worker.recognize(myImage, 'eng', {
                tessjs_image_rectangle_left: 560,
                tessjs_image_rectangle_top: 305,
                tessjs_image_rectangle_width: 210,
                tessjs_image_rectangle_height: 30,
              })
                .progress(progress => {
                    console.log('progress', progress);
                })
                
                .then(result => {
                    this.loaded = 20;
                    this.sometext = result.text;
                    console.log('result', result);
                });
    
                const params = [
                    {
                      tessjs_image_rectangle_left: 0,
                      tessjs_image_rectangle_top: 0,
                      tessjs_image_rectangle_width: 500,
                      tessjs_image_rectangle_height: 300,
                    },
                    {
                      tessjs_image_rectangle_left: 500,
                      tessjs_image_rectangle_top: 0,
                      tessjs_image_rectangle_width: 500,
                      tessjs_image_rectangle_height: 300,
                    },
                  ];
                  
                  Promise.all(
                    params.map(param => (
                      worker
                        .recognize(
                          'https://tesseract.projectnaptha.com/img/eng_bw.png',
                          'eng',
                          param
                        )
                        .then(({ text }) => text)
                    ))
                  ).then((texts) => {
                    console.log(texts);
    
                    this.loaded = 20;
                    worker.terminate();
                  });
        }*/
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent.ctorParameters = function () { return [
        { type: _service_columns_service__WEBPACK_IMPORTED_MODULE_3__["ColumnsService"] },
        { type: _service_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"] },
        { type: _service_stat_service__WEBPACK_IMPORTED_MODULE_4__["StatService"] }
    ]; };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
        //Flow is to Load Data from 'fdb' first, which contains { Users, Points and Teams }
        //followed by Loading the Columns and Table Metadata
        //folloed by Loading Data about each Season, which contains { Seasons, Fastest Laps }
        ,
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_columns_service__WEBPACK_IMPORTED_MODULE_3__["ColumnsService"], _service_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"], _service_stat_service__WEBPACK_IMPORTED_MODULE_4__["StatService"]])
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _component_home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./component/home/home.component */ "./src/app/component/home/home.component.ts");
/* harmony import */ var _component_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./component/footer/footer.component */ "./src/app/component/footer/footer.component.ts");
/* harmony import */ var _component_standings_standings_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./component/standings/standings.component */ "./src/app/component/standings/standings.component.ts");
/* harmony import */ var _component_wdc_wdc_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./component/wdc/wdc.component */ "./src/app/component/wdc/wdc.component.ts");
/* harmony import */ var _component_wcc_wcc_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./component/wcc/wcc.component */ "./src/app/component/wcc/wcc.component.ts");
/* harmony import */ var _component_teams_teams_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./component/teams/teams.component */ "./src/app/component/teams/teams.component.ts");
/* harmony import */ var _component_drivers_drivers_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./component/drivers/drivers.component */ "./src/app/component/drivers/drivers.component.ts");
/* harmony import */ var _component_results_results_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./component/results/results.component */ "./src/app/component/results/results.component.ts");
/* harmony import */ var _component_season1_season1_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./component/season1/season1.component */ "./src/app/component/season1/season1.component.ts");
/* harmony import */ var _component_reports_reports_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./component/reports/reports.component */ "./src/app/component/reports/reports.component.ts");

















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _component_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"],
                _component_standings_standings_component__WEBPACK_IMPORTED_MODULE_9__["StandingsComponent"],
                _component_wdc_wdc_component__WEBPACK_IMPORTED_MODULE_10__["WdcComponent"],
                _component_wcc_wcc_component__WEBPACK_IMPORTED_MODULE_11__["WccComponent"],
                _component_teams_teams_component__WEBPACK_IMPORTED_MODULE_12__["TeamsComponent"],
                _component_drivers_drivers_component__WEBPACK_IMPORTED_MODULE_13__["DriversComponent"],
                _component_results_results_component__WEBPACK_IMPORTED_MODULE_14__["ResultsComponent"],
                _component_season1_season1_component__WEBPACK_IMPORTED_MODULE_15__["Season1Component"],
                _component_reports_reports_component__WEBPACK_IMPORTED_MODULE_16__["ReportsComponent"],
                _component_home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/component/drivers/drivers.component.css":
/*!*********************************************************!*\
  !*** ./src/app/component/drivers/drivers.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9kcml2ZXJzL2RyaXZlcnMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/component/drivers/drivers.component.ts":
/*!********************************************************!*\
  !*** ./src/app/component/drivers/drivers.component.ts ***!
  \********************************************************/
/*! exports provided: DriversComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DriversComponent", function() { return DriversComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/users.service */ "./src/app/service/users.service.ts");



var DriversComponent = /** @class */ (function () {
    function DriversComponent(usersService) {
        this.usersService = usersService;
        this.userLoaded = false;
        console.log('Calling D C');
        this.userLoaded = false;
    }
    /*
    getUsers(): void {

        console.log('User Definition : ' + this.usersService.isUserdefined());

        if (this.usersService.isUserdefined()) {
            this.users = this.usersService.getUsers();
            this.userLoaded = true;
        }
        else
        {
            this.usersService.getUsersO("fdb", "users")
                .subscribe(users => {
                    this.users = users;

                    this.usersService.users = users;
                    this.usersService.userString = JSON.stringify(users);

                    this.userString = this.usersService.getUsersString();

                    this.userLoaded = true;
                    console.log(this.usersService.userString);
                    console.log(this.users);
                    
                });
        }
    }
    */
    DriversComponent.prototype.ngOnInit = function () {
        this.users = this.usersService.getUsers();
        this.userLoaded = true;
        //this.getUsers();
    };
    DriversComponent.ctorParameters = function () { return [
        { type: _service_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"] }
    ]; };
    DriversComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-drivers',
            template: __webpack_require__(/*! raw-loader!./drivers.component.html */ "./node_modules/raw-loader/index.js!./src/app/component/drivers/drivers.component.html"),
            styles: [__webpack_require__(/*! ./drivers.component.css */ "./src/app/component/drivers/drivers.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"]])
    ], DriversComponent);
    return DriversComponent;
}());



/***/ }),

/***/ "./src/app/component/footer/footer.component.css":
/*!*******************************************************!*\
  !*** ./src/app/component/footer/footer.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/component/footer/footer.component.ts":
/*!******************************************************!*\
  !*** ./src/app/component/footer/footer.component.ts ***!
  \******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/index.js!./src/app/component/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/component/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/component/home/home.component.css":
/*!***************************************************!*\
  !*** ./src/app/component/home/home.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/component/home/home.component.ts":
/*!**************************************************!*\
  !*** ./src/app/component/home/home.component.ts ***!
  \**************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.title = 'RLI';
        this.file = 'Henlo';
        //All Images are Stored in Based64 Format in Blob Decoded Format
        //Need to move these to Assets
        this.homeimage = 'data:image/png;base64,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';
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.title = "Racing League India";
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/component/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/component/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/component/reports/reports.component.css":
/*!*********************************************************!*\
  !*** ./src/app/component/reports/reports.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9yZXBvcnRzL3JlcG9ydHMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/component/reports/reports.component.ts":
/*!********************************************************!*\
  !*** ./src/app/component/reports/reports.component.ts ***!
  \********************************************************/
/*! exports provided: ReportsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsComponent", function() { return ReportsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/users.service */ "./src/app/service/users.service.ts");
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! crypto-js */ "./node_modules/crypto-js/index.js");
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(crypto_js__WEBPACK_IMPORTED_MODULE_3__);




var ReportsComponent = /** @class */ (function () {
    function ReportsComponent(usersService) {
        this.usersService = usersService;
        this.season_name = "Replace me with Season Name";
        this.track_name = "Replace me with Track Name";
        this.status = "";
        this.pin = "Enter 6 Digit PIN Here";
        this.shapin = "f2978ea1ceaef7962f641fec7e7a4f943a821e4a98bb81a70e21419ea839ca7b";
    }
    ReportsComponent.prototype.insertSeason = function () {
        var _this = this;
        if (crypto_js__WEBPACK_IMPORTED_MODULE_3__["SHA256"](this.pin) == this.shapin) {
            this.usersService.insertSeason(this.season_name).subscribe(function (season) {
                _this.status = "Success";
            });
        }
        else {
            this.status = "Incorrect PIN";
        }
    };
    ReportsComponent.prototype.insertResult = function (mode) {
        var _this = this;
        if (crypto_js__WEBPACK_IMPORTED_MODULE_3__["SHA256"](this.pin) == this.shapin) {
            this.usersService.insertResult(mode, this.season_name, this.track_name).subscribe(function (result) {
                _this.status = "Success";
            });
        }
        else {
            this.status = "Incorrect PIN";
        }
    };
    ReportsComponent.prototype.ngOnInit = function () {
    };
    ReportsComponent.ctorParameters = function () { return [
        { type: _service_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"] }
    ]; };
    ReportsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-reports',
            template: __webpack_require__(/*! raw-loader!./reports.component.html */ "./node_modules/raw-loader/index.js!./src/app/component/reports/reports.component.html"),
            styles: [__webpack_require__(/*! ./reports.component.css */ "./src/app/component/reports/reports.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"]])
    ], ReportsComponent);
    return ReportsComponent;
}());



/***/ }),

/***/ "./src/app/component/results/results.component.css":
/*!*********************************************************!*\
  !*** ./src/app/component/results/results.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9yZXN1bHRzL3Jlc3VsdHMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/component/results/results.component.ts":
/*!********************************************************!*\
  !*** ./src/app/component/results/results.component.ts ***!
  \********************************************************/
/*! exports provided: ResultsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultsComponent", function() { return ResultsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ResultsComponent = /** @class */ (function () {
    function ResultsComponent() {
    }
    ResultsComponent.prototype.ngOnInit = function () {
    };
    ResultsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-results',
            template: __webpack_require__(/*! raw-loader!./results.component.html */ "./node_modules/raw-loader/index.js!./src/app/component/results/results.component.html"),
            styles: [__webpack_require__(/*! ./results.component.css */ "./src/app/component/results/results.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ResultsComponent);
    return ResultsComponent;
}());



/***/ }),

/***/ "./src/app/component/season1/season1.component.css":
/*!*********************************************************!*\
  !*** ./src/app/component/season1/season1.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9zZWFzb24xL3NlYXNvbjEuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/component/season1/season1.component.ts":
/*!********************************************************!*\
  !*** ./src/app/component/season1/season1.component.ts ***!
  \********************************************************/
/*! exports provided: Season1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Season1Component", function() { return Season1Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var Season1Component = /** @class */ (function () {
    function Season1Component() {
    }
    Season1Component.prototype.ngOnInit = function () {
    };
    Season1Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-season1',
            template: __webpack_require__(/*! raw-loader!./season1.component.html */ "./node_modules/raw-loader/index.js!./src/app/component/season1/season1.component.html"),
            styles: [__webpack_require__(/*! ./season1.component.css */ "./src/app/component/season1/season1.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], Season1Component);
    return Season1Component;
}());



/***/ }),

/***/ "./src/app/component/standings/standings.component.css":
/*!*************************************************************!*\
  !*** ./src/app/component/standings/standings.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table, th, td {\r\n  border: 1px solid black;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L3N0YW5kaW5ncy9zdGFuZGluZ3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHVCQUF1QjtBQUN6QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9zdGFuZGluZ3Mvc3RhbmRpbmdzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSwgdGgsIHRkIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/component/standings/standings.component.ts":
/*!************************************************************!*\
  !*** ./src/app/component/standings/standings.component.ts ***!
  \************************************************************/
/*! exports provided: StandingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StandingsComponent", function() { return StandingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/users.service */ "./src/app/service/users.service.ts");
/* harmony import */ var _service_columns_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/columns.service */ "./src/app/service/columns.service.ts");
/* harmony import */ var _service_stat_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/stat.service */ "./src/app/service/stat.service.ts");





var StandingsComponent = /** @class */ (function () {
    function StandingsComponent(usersService, columnsService, statService) {
        this.usersService = usersService;
        this.columnsService = columnsService;
        this.statService = statService;
        this.userLoaded = false;
        this.teamsLoaded = false;
        this.teamsCLoaded = false;
        this.seasonLoaded = false;
        this.seasonCLoaded = false;
        //1 -> [0]
        this.curseason = 1;
        this.flapdefined = false;
        this.ready = false;
        console.log('Calling S C');
    }
    StandingsComponent.prototype.get = function () {
        //get users from fdb, users
        //get season1 from seasons, one
        //get columns from seasons, one
        //get points from fdb, points
        //get teams from fdb, teams
        this.users = this.usersService.getUsers();
        this.userLoaded = true;
        this.season = this.usersService.getSeason(this.curseason);
        this.seasonLoaded = true;
        this.seasonC = this.columnsService.getSeasonC(this.curseason);
        this.seasonCLoaded = true;
        this.points = this.statService.getPoints(this.curseason);
        this.seasonsT = this.columnsService.getTables();
        if (this.curseason == 0)
            this.flapdefined = false;
        else {
            this.flapuser = this.statService.getFlapUsers(this.curseason);
            this.flapdefined = true;
        }
        this.teams = this.usersService.getTeams();
        this.teamsLoaded = true;
        this.teamsC = this.columnsService.getTeamsC();
        this.teamsCLoaded = true;
        this.order = new Array(this.season.length);
        for (var i = 0; i < this.season.length; i++)
            this.order[i] = this.season[i].id - 1;
    };
    //Sorting based on Points
    StandingsComponent.prototype.sort = function () {
        //-1 means L before R
        /*
        this.order.sort((l, r) => {
            if(!this.users[r].active) return -1;
            if(this.points[l] > this.points[r]) return -1;
            if(this.points[l] < this.points[r]) return 1;

            //Pull None further
            if(this.teams[l][this.teamsC[this.curseason]] == "None") return 1;
            if(this.teams[r][this.teamsC[this.curseason]] == "None") return -1;
            
            //Pull Reserve further
            if(this.teams[r][this.teamsC[this.curseason]] == "Reserve") return -1;
            return 1;
        });
        */
        var _this = this;
        this.order.sort(function (l, r) {
            if (_this.points[l] > _this.points[r])
                return -1;
            if (_this.points[l] < _this.points[r])
                return 1;
            //Pull Reserve further
            if (_this.teams[r][_this.teamsC[_this.curseason]] == "Reserve")
                return -1;
            return 1;
        });
        /*
        console.log(this.teamsC[this.curseason]);
        while(!this.users[this.order[this.order.length - 1]].active ||
            this.teams[this.order[this.order.length - 1]][this.teamsC[this.curseason]] == "None") {
                console.log(this.order.pop());
                console.log("Next last guy is : " + this.users[this.order[this.order.length - 1]].username);
            }
        */
    };
    //Change Numbers associated with Non-Finishes to Strings
    StandingsComponent.prototype.dnfs = function () {
        for (var i = 0; i < this.season.length; i++)
            for (var _i = 0, _a = this.seasonC; _i < _a.length; _i++) {
                var track = _a[_i];
                if (this.season[i][track] == 21)
                    this.season[i][track] = "DNF";
                else if (this.season[i][track] == 22)
                    this.season[i][track] = "DNS";
                else if (this.season[i][track] == 23)
                    this.season[i][track] = "DSQ";
            }
    };
    //Component Resetting when Season is Changed
    StandingsComponent.prototype.changeSeason = function (s) {
        if (this.curseason == s)
            return;
        this.curseason = s;
        this.get();
        this.dnfs();
        this.sort();
    };
    //Component Execution Starts Here :
    StandingsComponent.prototype.ngOnInit = function () {
        this.get();
        this.dnfs();
        this.sort();
        this.ready = true;
    };
    StandingsComponent.ctorParameters = function () { return [
        { type: _service_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"] },
        { type: _service_columns_service__WEBPACK_IMPORTED_MODULE_3__["ColumnsService"] },
        { type: _service_stat_service__WEBPACK_IMPORTED_MODULE_4__["StatService"] }
    ]; };
    StandingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-standings',
            template: __webpack_require__(/*! raw-loader!./standings.component.html */ "./node_modules/raw-loader/index.js!./src/app/component/standings/standings.component.html"),
            styles: [__webpack_require__(/*! ./standings.component.css */ "./src/app/component/standings/standings.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"], _service_columns_service__WEBPACK_IMPORTED_MODULE_3__["ColumnsService"], _service_stat_service__WEBPACK_IMPORTED_MODULE_4__["StatService"]])
    ], StandingsComponent);
    return StandingsComponent;
}());



/***/ }),

/***/ "./src/app/component/teams/teams.component.css":
/*!*****************************************************!*\
  !*** ./src/app/component/teams/teams.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table, th, td {\n    border: 1px solid black;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L3RlYW1zL3RlYW1zLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx1QkFBdUI7RUFDekIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnQvdGVhbXMvdGVhbXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlLCB0aCwgdGQge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICB9Il19 */"

/***/ }),

/***/ "./src/app/component/teams/teams.component.ts":
/*!****************************************************!*\
  !*** ./src/app/component/teams/teams.component.ts ***!
  \****************************************************/
/*! exports provided: TeamsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamsComponent", function() { return TeamsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/users.service */ "./src/app/service/users.service.ts");
/* harmony import */ var _service_columns_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/columns.service */ "./src/app/service/columns.service.ts");
/* harmony import */ var _service_stat_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/stat.service */ "./src/app/service/stat.service.ts");





var TeamsComponent = /** @class */ (function () {
    function TeamsComponent(usersService, columnsService, statService) {
        this.usersService = usersService;
        this.columnsService = columnsService;
        this.statService = statService;
        this.userLoaded = false;
        this.teamsLoaded = false;
        this.teamsCLoaded = false;
        //1 -> [0]
        this.curseason = 1;
        this.ready = false;
        console.log('Calling T C');
    }
    TeamsComponent.prototype.get = function () {
        //get users from fdb, users
        //get teams from fdb, teams
        //get teamsC from fdb, teams
        this.users = this.usersService.getUsers();
        this.userLoaded = true;
        this.teams = this.usersService.getTeams();
        this.teamsLoaded = true;
        this.teamsC = this.columnsService.getTeamsC();
        this.teamsCLoaded = true;
        this.seasonsT = this.columnsService.getTables();
        this.points = this.statService.getPoints(this.curseason);
        this.constructors = this.statService.getConstructors(this.curseason);
        this.reserves = this.statService.getReserves(this.curseason);
        this.order = new Array(this.usersService.seasons[this.curseason].length);
        for (var i = 0; i < this.usersService.seasons[this.curseason]; i++)
            this.order[i] = this.usersService.seasons[this.curseason][i].id - 1;
    };
    TeamsComponent.prototype.ngOnInit = function () {
        this.get();
        //this.sort();    
        this.ready = true;
    };
    TeamsComponent.prototype.sort = function () {
        var _this = this;
        //Asuuming Teams are Sorted by ID, by stat.reorder_byid()
        this.order.sort(function (li, ri) {
            var l = _this.teams[li][_this.teamsC[_this.curseason]];
            var r = _this.teams[ri][_this.teamsC[_this.curseason]];
            if (l == r) {
                return _this.statService.pointsort(li, ri, _this.curseason);
            }
            else {
                if (l < r)
                    return -1;
                else
                    return 1;
            }
        });
    };
    TeamsComponent.prototype.changeSeason = function (s) {
        if (this.curseason == s)
            return;
        this.curseason = s;
        this.get();
        this.sort();
    };
    TeamsComponent.ctorParameters = function () { return [
        { type: _service_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"] },
        { type: _service_columns_service__WEBPACK_IMPORTED_MODULE_3__["ColumnsService"] },
        { type: _service_stat_service__WEBPACK_IMPORTED_MODULE_4__["StatService"] }
    ]; };
    TeamsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-teams',
            template: __webpack_require__(/*! raw-loader!./teams.component.html */ "./node_modules/raw-loader/index.js!./src/app/component/teams/teams.component.html"),
            styles: [__webpack_require__(/*! ./teams.component.css */ "./src/app/component/teams/teams.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"], _service_columns_service__WEBPACK_IMPORTED_MODULE_3__["ColumnsService"], _service_stat_service__WEBPACK_IMPORTED_MODULE_4__["StatService"]])
    ], TeamsComponent);
    return TeamsComponent;
}());

//Current Season Drivers
//Current Reserves


/***/ }),

/***/ "./src/app/component/wcc/wcc.component.css":
/*!*************************************************!*\
  !*** ./src/app/component/wcc/wcc.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC93Y2Mvd2NjLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/component/wcc/wcc.component.ts":
/*!************************************************!*\
  !*** ./src/app/component/wcc/wcc.component.ts ***!
  \************************************************/
/*! exports provided: WccComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WccComponent", function() { return WccComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/users.service */ "./src/app/service/users.service.ts");
/* harmony import */ var _service_columns_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/columns.service */ "./src/app/service/columns.service.ts");
/* harmony import */ var _service_stat_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/stat.service */ "./src/app/service/stat.service.ts");





var WccComponent = /** @class */ (function () {
    function WccComponent(usersService, columnsService, statService) {
        this.usersService = usersService;
        this.columnsService = columnsService;
        this.statService = statService;
        this.userLoaded = false;
        this.teamsLoaded = false;
        this.teamsCLoaded = false;
        //1 -> [0]
        this.curseason = 1;
        this.ready = false;
        console.log('Calling W C C');
    }
    WccComponent.prototype.get = function () {
        //get users from fdb, users
        //get teams from fdb, teams
        //get teamsC from fdb, teams
        this.users = this.usersService.getUsers();
        this.userLoaded = true;
        this.teams = this.usersService.getTeams();
        this.teamsLoaded = true;
        this.teamsC = this.columnsService.getTeamsC();
        this.teamsCLoaded = true;
        this.seasonsT = this.columnsService.getTables();
        this.points = this.statService.getPoints(this.curseason);
        this.constructors = this.statService.getConstructors(this.curseason);
    };
    WccComponent.prototype.ngOnInit = function () {
        this.get();
        this.ready = true;
    };
    WccComponent.prototype.changeSeason = function (s) {
        if (this.curseason == s)
            return;
        this.curseason = s;
        this.get();
    };
    WccComponent.ctorParameters = function () { return [
        { type: _service_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"] },
        { type: _service_columns_service__WEBPACK_IMPORTED_MODULE_3__["ColumnsService"] },
        { type: _service_stat_service__WEBPACK_IMPORTED_MODULE_4__["StatService"] }
    ]; };
    WccComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-wcc',
            template: __webpack_require__(/*! raw-loader!./wcc.component.html */ "./node_modules/raw-loader/index.js!./src/app/component/wcc/wcc.component.html"),
            styles: [__webpack_require__(/*! ./wcc.component.css */ "./src/app/component/wcc/wcc.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"], _service_columns_service__WEBPACK_IMPORTED_MODULE_3__["ColumnsService"], _service_stat_service__WEBPACK_IMPORTED_MODULE_4__["StatService"]])
    ], WccComponent);
    return WccComponent;
}());



/***/ }),

/***/ "./src/app/component/wdc/wdc.component.css":
/*!*************************************************!*\
  !*** ./src/app/component/wdc/wdc.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC93ZGMvd2RjLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/component/wdc/wdc.component.ts":
/*!************************************************!*\
  !*** ./src/app/component/wdc/wdc.component.ts ***!
  \************************************************/
/*! exports provided: WdcComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WdcComponent", function() { return WdcComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var WdcComponent = /** @class */ (function () {
    function WdcComponent(http) {
        this.http = http;
        this.usersfilepath = "server/b2.php";
    }
    WdcComponent.prototype.ngOnInit = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers.append('Content-Type', 'application/json');
        this.http.post(this.usersfilepath, JSON.stringify({
            "mode": 1,
            "db": "fdb",
            "table": "users"
        }), {
            headers: headers
        }).subscribe(function (data) {
            console.log(data);
        });
    };
    WdcComponent.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    WdcComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-wdc',
            template: __webpack_require__(/*! raw-loader!./wdc.component.html */ "./node_modules/raw-loader/index.js!./src/app/component/wdc/wdc.component.html"),
            styles: [__webpack_require__(/*! ./wdc.component.css */ "./src/app/component/wdc/wdc.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], WdcComponent);
    return WdcComponent;
}());



/***/ }),

/***/ "./src/app/service/columns.service.ts":
/*!********************************************!*\
  !*** ./src/app/service/columns.service.ts ***!
  \********************************************/
/*! exports provided: ColumnsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColumnsService", function() { return ColumnsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var ColumnsService = /** @class */ (function () {
    //season1 should have the same columns as fastest_laps
    function ColumnsService(http) {
        this.http = http;
        //xmlhttp: XMLHttpRequest;
        //usersfilepath: string = "assets/users.json";
        this.usersfilepath = "server/be.php"; //?db=fdb&table=users";
        this.userCdefined = false;
        this.teamsCdefined = false;
        this.seasonsTdefined = false;
        this.seasonsCdefined = false;
    }
    ColumnsService.prototype.isdefined = function (v) {
        if (v == "users")
            return this.userCdefined;
        //if (v == "points") return this.pointsdefined;
        if (v == "teams")
            return this.teamsCdefined;
        if (v == "seasonC")
            return this.seasonsCdefined;
        return false;
    };
    //Get Column Observable
    ColumnsService.prototype.getC = function (db, table) {
        //console.log(table + '\'s Columns being requested');
        //this.usersfilepath = "be.php?mode=2&db=" + db + "&table=" + table;
        this.usersfilepath = "server/be.php";
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers.append('Content-Type', 'application/json');
        var susers = this.http.post(this.usersfilepath, JSON.stringify({
            "mode": 2,
            "db": db,
            "table": table
        }), {
            headers: headers
        });
        return susers;
    };
    //Get Tables Observable
    ColumnsService.prototype.getT = function (db) {
        //console.log(db + '\'s Tables being requested');
        this.usersfilepath = "server/be.php";
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers.append('Content-Type', 'application/json');
        var susers = this.http.post(this.usersfilepath, JSON.stringify({
            "mode": 3,
            "db": db
        }), {
            headers: headers
        });
        return susers;
    };
    ColumnsService.prototype.getTables = function () {
        //console.log('Returning Season Tables');
        //console.log(this.seasonsT);
        return this.seasonsT;
    };
    ColumnsService.prototype.getUsersC = function () {
        //console.log('Returning User Columns');
        //console.log(this.usersC);
        return this.usersC;
    };
    ColumnsService.prototype.getTeamsC = function () {
        //console.log('Returning Teams');
        //console.log(this.teamsC);
        return this.teamsC;
    };
    //Returns only a Specific Season Columns
    ColumnsService.prototype.getSeasonC = function (season) {
        //console.log('Returning Season 1');
        //console.log(this.seasonsC[season]);
        return this.seasonsC[season];
    };
    ColumnsService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    ColumnsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
        //Metadata, i.e. Column and Table Data is Stored in this Service
        ,
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ColumnsService);
    return ColumnsService;
}());

/*
    1 	track   Primary 	varchar(30) 	latin1_swedish_ci 		No 	None

    2 	id 	int(11) 			No 	None 			Change Change 	Drop Drop

    More More

    3 	lap 	int(11) 			No 	None 			Change Change 	Drop Drop

    More More

    4 	time 	varchar(11) 	latin1_swedish_ci 		No 	None 			Change Change 	Drop Drop

    More More

    5 	tyre 	varchar(15) 	latin1_swedish_ci 		No 	None 			Change Change 	Drop Drop

    More More

*/ 


/***/ }),

/***/ "./src/app/service/stat.service.ts":
/*!*****************************************!*\
  !*** ./src/app/service/stat.service.ts ***!
  \*****************************************/
/*! exports provided: StatService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatService", function() { return StatService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./users.service */ "./src/app/service/users.service.ts");
/* harmony import */ var _columns_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./columns.service */ "./src/app/service/columns.service.ts");




var StatService = /** @class */ (function () {
    function StatService(columnsService, usersService) {
        this.columnsService = columnsService;
        this.usersService = usersService;
        this.pointsdefined = false;
        this.flapusersdefined = false;
    }
    StatService.prototype.begin_compute = function () {
        this.init();
        this.compute_points();
        this.construct_teams();
    };
    StatService.prototype.init = function () {
        this.users = this.usersService.getUsers();
        this.teams = this.usersService.getTeams();
        //All Sorting is done by Indices, so a new Array is always Created for each
        this.order = new Array(this.users.length);
        for (var i = 0; i < this.users.length; i++)
            this.order[i] = i;
        this.reserves = new Array();
    };
    StatService.prototype.compute_points = function () {
        var Tlength = this.columnsService.seasonsT.length;
        this.points = new Array();
        for (var i = 0; i < Tlength; i++) {
            this.points[i] = new Array(this.users.length);
            this.points[i].fill(0);
            for (var j = 0; j < this.usersService.seasons[i].length; j++)
                for (var _i = 0, _a = this.columnsService.seasonsC[i]; _i < _a.length; _i++) {
                    var track = _a[_i];
                    this.points[i][this.usersService.seasons[i][j].id - 1] += this.usersService.pointsS[this.usersService.seasons[i][j][track] - 1].feature;
                }
        }
        this.populate_flap();
        this.pointsdefined = true;
    };
    //Sort by Points, or Better Finishes
    StatService.prototype.pointsort = function (left, right, curseason) {
        if (this.points[curseason][left] > this.points[curseason][right])
            return -1;
        else if (this.points[curseason][left] < this.points[curseason][right])
            return 1;
        var leftwing = new Array(22);
        leftwing.fill(0);
        var rightwing = new Array(22);
        rightwing.fill(0);
        for (var _i = 0, _a = this.columnsService.seasonsC[curseason]; _i < _a.length; _i++) {
            var track = _a[_i];
            leftwing[this.usersService.seasons[curseason][left][track] - 1]++;
            rightwing[this.usersService.seasons[curseason][right][track] - 1]++;
        }
        for (var i = 0; i < leftwing.length; ++i) {
            if (leftwing[i] > rightwing[i])
                return -1;
            else if (leftwing[i] < rightwing[i])
                return 1;
        }
        return -1;
    };
    //Populates the Fastest Lap Index, as well as Adds to Points
    StatService.prototype.populate_flap = function () {
        //Assume Column Structure is same as Season Table, excluding "one"
        this.flapusers = new Array(this.columnsService.seasonsT.length);
        for (var i = 0; i < this.columnsService.seasonsT.length - 1; i++) {
            this.flapusers[i] = new Array(this.users.length);
            this.flapusers[i].fill(0);
            for (var j = 0; j < this.usersService.flaps[i].length; j++) {
                this.flapusers[i][this.usersService.flaps[i][j].id - 1] += 1;
                this.points[i + 1][this.usersService.flaps[i][j].id - 1] += 1;
            }
        }
        //console.log(this.flapusers);
        this.flapusersdefined = true;
    };
    //Sorts 'order' by Teams in Alphabetical Order, and Drivers within by Points
    StatService.prototype.teamsort = function (curseason) {
        var _this = this;
        this.order = new Array(this.usersService.seasons[curseason].length);
        for (var i = 0; i < this.usersService.seasons[curseason].length; i++)
            this.order[i] = this.usersService.seasons[curseason][i].id - 1;
        this.order.sort(function (li, ri) {
            var l = _this.teams[li][_this.columnsService.teamsC[curseason]];
            var r = _this.teams[ri][_this.columnsService.teamsC[curseason]];
            if (l == r) {
                return _this.pointsort(li, ri, curseason);
            }
            else {
                if (l < r)
                    return -1;
                else
                    return 1;
            }
        });
    };
    //Creates 'constructors' Object
    StatService.prototype.construct_teams = function () {
        this.constructors = new Array(this.columnsService.seasonsT.length);
        this.reserves = new Array(this.columnsService.seasonsT.length);
        //Iterate through Each Season
        for (var i = 0; i < this.columnsService.seasonsT.length; i++) {
            //Create a new Array for each Season
            this.constructors[i] = new Array();
            this.reserves[i] = new Array();
            //Sort by Teams for that Season
            this.teamsort(i);
            var prev = "", k = -1;
            for (var j = 0; j < this.order.length; j++) {
                var T = this.teams[this.order[j]][this.columnsService.teamsC[i]];
                //Ignore Users who have not participated in that season
                if (T == "None")
                    continue;
                //A Separate Array for Reserve Drivers
                if (T == "Reserve") {
                    this.reserves[i].push(this.order[j]);
                    continue;
                }
                //Since it is Sorted by Team Name, if the cur`rent team differs from prev,
                //it indicates that we that team is populated. Hence, he increment k
                //k is the index of constructors[i]
                if (T != prev) {
                    k++;
                    this.constructors[i].push({
                        team: T,
                        member: [],
                        points: 0
                    });
                }
                //Add the Points of the Driver into the Constructor
                this.constructors[i][k].points += this.points[i][this.order[j]];
                this.constructors[i][k].member.push(this.order[j]);
                prev = T;
            }
        }
        this.sort_teams();
    };
    //Sort the Constructors by Points
    StatService.prototype.sort_teams = function () {
        for (var i = 0; i < this.columnsService.seasonsT.length; i++) {
            this.constructors[i].sort(function (leftside, rightside) {
                if (leftside.points > rightside.points)
                    return -1;
                else
                    return 1;
            });
        }
        //this.reorder_byid();
    };
    StatService.prototype.reorder_byid = function () {
        this.users.sort(function (leftside, rightside) {
            if (leftside.id < rightside.id)
                return -1;
            else
                return 1;
        });
        this.teams.sort(function (leftside, rightside) {
            if (leftside.id < rightside.id)
                return -1;
            else
                return 1;
        });
    };
    //Get Functions for a Particular Season
    StatService.prototype.getPoints = function (season) {
        //console.log('Returning Points');
        //console.log(this.points[season]);
        return this.points[season];
    };
    StatService.prototype.getFlapUsers = function (season) {
        //console.log('Returning Fastest Lap Users');
        //console.log(this.flapusers[season - 1]);
        return this.flapusers[season - 1];
    };
    StatService.prototype.getConstructors = function (season) {
        //console.log('Returning Constructors');
        //console.log(this.constructors[season]);
        return this.constructors[season];
    };
    StatService.prototype.getReserves = function (season) {
        //console.log('Returning Reserves');
        //console.log(this.reserves[season]);
        return this.reserves[season];
    };
    StatService.ctorParameters = function () { return [
        { type: _columns_service__WEBPACK_IMPORTED_MODULE_3__["ColumnsService"] },
        { type: _users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"] }
    ]; };
    StatService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
        //Statistics derived from the DB are computed and Stored in this Service
        ,
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_columns_service__WEBPACK_IMPORTED_MODULE_3__["ColumnsService"], _users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"]])
    ], StatService);
    return StatService;
}());



/***/ }),

/***/ "./src/app/service/users.service.ts":
/*!******************************************!*\
  !*** ./src/app/service/users.service.ts ***!
  \******************************************/
/*! exports provided: UsersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersService", function() { return UsersService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var UsersService = /** @class */ (function () {
    function UsersService(http) {
        this.http = http;
        this.usersfilepath = "server/be.php"; //?db=fdb&table=users";
        this.userdefined = false;
        this.pointsSdefined = false;
        this.teamsdefined = false;
        this.season1defined = false;
        this.flapdefined = false;
    }
    UsersService.prototype.isdefined = function (v) {
        if (v == "users")
            return this.userdefined;
        if (v == "teams")
            return this.teamsdefined;
        if (v == "season1")
            return this.season1defined;
        return false;
    };
    UsersService.prototype.getO = function (db, table, sort) {
        //console.log(table + ' being requested');
        if (sort === void 0) { sort = ""; }
        this.usersfilepath = "server/be.php";
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers.append('Content-Type', 'application/json');
        //POST Request to be.php
        /*
            mode  -> 1 denotes Request for Table Data
                     2 denotes Request for Array of Columns from a Specified 'table'
                     3 denotes Request for Array of Table Names from a Specified 'db'

            db    -> denotes Database Name
            table -> denotes Table Name
            sort  -> [Optional] Sorts Query Result by Specified Option
         */
        var susers = this.http.post(this.usersfilepath, JSON.stringify({
            "mode": 1,
            "db": db,
            "table": table,
            "sort": sort
        }), {
            headers: headers
        });
        return susers;
    };
    UsersService.prototype.insertSeason = function (season_name) {
        this.usersfilepath = "server/insert.php";
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers.append('Content-Type', 'application/json');
        var newseason = this.http.post(this.usersfilepath, JSON.stringify({
            "mode": 3,
            "season": season_name
        }), {
            headers: headers
        });
        return newseason;
    };
    UsersService.prototype.insertResult = function (mode, season_name, track_name) {
        this.usersfilepath = "server/insert.php";
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers.append('Content-Type', 'application/json');
        var sresult = this.http.post(this.usersfilepath, JSON.stringify({
            "mode": mode,
            "season": season_name,
            "track": track_name
        }), {
            headers: headers
        });
        return sresult;
    };
    //Get Table Functions
    UsersService.prototype.getUsers = function () {
        //console.log('Returning User');
        //console.log(this.users);
        return this.users;
    };
    UsersService.prototype.getPointsS = function () {
        //console.log('Returning Points System');
        //console.log(this.pointsS);
        return this.pointsS;
    };
    UsersService.prototype.getTeams = function () {
        //console.log('Returning Teams');
        //console.log(this.teams);
        return this.teams;
    };
    //Returns only a Specific Season Data
    UsersService.prototype.getSeason = function (season) {
        //console.log('Returning Season 1');
        //console.log(this.seasons[season]);
        return this.seasons[season];
    };
    //Returns only a Specific Season of Fastest Laps
    UsersService.prototype.getFlaps = function (season) {
        //console.log('Returning Fastest Lap');
        //console.log(this.flaps[season - 1]);
        return this.flaps[season - 1];
    };
    UsersService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    UsersService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
        //Database Data is Stored in this Service
        ,
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], UsersService);
    return UsersService;
}());

/*this.susers = this.http.post<any>(this.usersfilepath,
            {
                "db": "fdb",
                "table": "users"
            });

        //console.log('If Called');*/
/* //console.log('I\'m running first');

        //Create an instance of XMLHttpRquest
        this.xmlhttp = new XMLHttpRequest();
        if (!this.xmlhttp) {
            ////console.log("Giving up Cannot create an XMLHttpRequest instance");
        }

        //Send a GET Request for Users File
        this.xmlhttp.open('GET', this.usersfilepath);
        this.xmlhttp.send();

        ////console.log("Run first, I presume?");

        function printandcontinue() { //console.log('Let\'s continue'); };

        //Load into variables
        this.xmlhttp.onreadystatechange = () => {
            if (this.xmlhttp.readyState == XMLHttpRequest.DONE) {
                this.userString = this.xmlhttp.responseText;
                this.users = JSON.parse(this.xmlhttp.response);

                ////console.log(this.userString);
                //console.log('Constructor Running');
                ////console.log(this.users);

                //printandcontinue();
            }
        };*/ 


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
    production: false
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

module.exports = __webpack_require__(/*! /home/kapilace6/Documents/Code/RLI Website/fp/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map