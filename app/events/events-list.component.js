"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var event_service_1 = require('./shared/event.service');
var toastr_service_1 = require('../common/toastr.service');
var EventsListComponent = (function () {
    function EventsListComponent(_EventService, _ToastrService, _route) {
        this._EventService = _EventService;
        this._ToastrService = _ToastrService;
        this._route = _route;
    }
    EventsListComponent.prototype.ngOnInit = function () {
        this.events = this._route.snapshot.data['events'];
    };
    EventsListComponent.prototype.handleClick = function (event) {
        this._ToastrService.success(event);
    };
    EventsListComponent = __decorate([
        core_1.Component({
            template: "\n    <div>\n        <h1>Upcomming Angular 2 Events</h1>\n        <hr>\n        <div class=\"row\">\n            <event-thumbnail (click)=\"handleClick(event.name)\" *ngFor=\"let event of events\" [event]=\"event\" class=\"col col-md-5\"></event-thumbnail>\n        </div>\n    </div>\n    "
        }), 
        __metadata('design:paramtypes', [event_service_1.EventService, toastr_service_1.ToastrService, router_1.ActivatedRoute])
    ], EventsListComponent);
    return EventsListComponent;
}());
exports.EventsListComponent = EventsListComponent;
//# sourceMappingURL=events-list.component.js.map