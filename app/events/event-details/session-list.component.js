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
var auth_service_1 = require('../../user/auth.service');
var voter_service_1 = require('./voter.service');
var SessionsListComponent = (function () {
    function SessionsListComponent(_auth, voterService) {
        this._auth = _auth;
        this.voterService = voterService;
    }
    SessionsListComponent.prototype.ngOnChanges = function () {
        if (this.sessions) {
            this.filterSessions(this.filterBy);
            this.sortBy === 'name' ? this.visibleSessions.sort(sortByNameAsc) : this.visibleSessions.sort(sortByVotesDesc);
        }
    };
    SessionsListComponent.prototype.userHasVoted = function (session) {
        return this.voterService.userHasVoted(session, this._auth.currentUser.userName);
    };
    SessionsListComponent.prototype.toggleVote = function (session) {
        if (this.userHasVoted(session)) {
            this.voterService.deleteVoter(session, this._auth.currentUser.userName);
        }
        else {
            this.voterService.addVoter(session, this._auth.currentUser.userName);
        }
        if (this.sortBy === 'votes') {
            this.visibleSessions.sort(sortByVotesDesc);
        }
    };
    SessionsListComponent.prototype.filterSessions = function (filter) {
        if (filter === 'all') {
            // .slice() - a nice was to duplacate an object array (creates a new one)
            this.visibleSessions = this.sessions.slice(0);
        }
        else {
            this.visibleSessions = this.sessions.filter(function (session) {
                return session.level.toLocaleLowerCase() === filter;
            });
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], SessionsListComponent.prototype, "sessions", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], SessionsListComponent.prototype, "filterBy", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], SessionsListComponent.prototype, "sortBy", void 0);
    SessionsListComponent = __decorate([
        core_1.Component({
            selector: 'session-list',
            templateUrl: 'app/events/event-details/session-list.component.html'
        }), 
        __metadata('design:paramtypes', [auth_service_1.AuthService, voter_service_1.VoterService])
    ], SessionsListComponent);
    return SessionsListComponent;
}());
exports.SessionsListComponent = SessionsListComponent;
// These 2 methods will be used by JavaScript sory method to compare 2 items (predicates)
function sortByNameAsc(s1, s2) {
    if (s1.name > s2.name)
        return 1;
    else if (s1.name === s2.name)
        return 0;
    else
        return -1;
}
function sortByVotesDesc(s1, s2) {
    return s2.voters.length - s1.voters.length;
}
//# sourceMappingURL=session-list.component.js.map