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
var EventThumbnailComponent = (function () {
    function EventThumbnailComponent() {
    }
    EventThumbnailComponent.prototype.getStartTimeClass = function () {
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], EventThumbnailComponent.prototype, "event", void 0);
    EventThumbnailComponent = __decorate([
        core_1.Component({
            selector: 'event-thumbnail',
            template: "\n    <div>\n        <div class=\"well hoverwell thumbnail\">\n            <h2>{{event?.name}}</h2>\n            <div>Date: {{event?.date}}</div>            \n            <div [ngClass]=\"getStartTimeClass()\" [ngSwitch]=\"event?.time\">\n                Time: {{event?.time}}\n                <span *ngSwitchCase=\"'8:00 am'\">(Early Start)</span>\n                <span *ngSwitchCase=\"'10:00 am'\">(Late Start)</span>\n                <span *ngSwitchDefault>(Normal Start)</span>\n            </div>\n            <div>Price: ${{event?.price}}</div>\n            <div *ngIf=\"event?.location\">\n                <span>Location: {{event?.location?.address}}</span>\n                <span class=\"pad-left\">{{event?.location?.city}}, {{event?.location?.country}}</span>\n            </div>\n            <div *ngIf=\"event?.onlineUrl\" >Online URL: {{ event?.onlineUrl }}</div>\n        </div>\n    </div>\n    ",
            styles: [
                "\n        .green { color: #003300 !important; }\n        .bold { font-weight: bold; }\n        .thumbnail { min-height: 210px;}\n        .pad-left { margin-left: 10px; }\n        .well div { color: #bbb; }\n        "
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], EventThumbnailComponent);
    return EventThumbnailComponent;
}());
exports.EventThumbnailComponent = EventThumbnailComponent;
//# sourceMappingURL=evemt-thunmbnail.component.js.map