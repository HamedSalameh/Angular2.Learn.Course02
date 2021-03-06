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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var auth_service_1 = require('./auth.service');
var router_1 = require('@angular/router');
var toastr_service_1 = require('../common/toastr.service');
var ProfileComponent = (function () {
    function ProfileComponent(_auth, _router, toastr) {
        this._auth = _auth;
        this._router = _router;
        this.toastr = toastr;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        this.firstName = new forms_1.FormControl(this._auth.currentUser.firstName, [forms_1.Validators.required, forms_1.Validators.pattern('[a-zA-Z].*')]);
        this.lastName = new forms_1.FormControl(this._auth.currentUser.lastName, forms_1.Validators.required);
        this.profileForm = new forms_1.FormGroup({
            firstName: this.firstName,
            lastName: this.lastName
        });
    };
    ProfileComponent.prototype.cancel = function () {
        this._router.navigate(['events']);
    };
    ProfileComponent.prototype.validateLastName = function () {
        return this.lastName.valid || this.lastName.untouched;
    };
    ProfileComponent.prototype.validateFirstName = function () {
        return this.firstName.valid || this.firstName.untouched;
    };
    ProfileComponent.prototype.saveProfile = function (formValue) {
        var _this = this;
        if (this.profileForm.valid) {
            this._auth.updateCurrentUser(formValue.firstName, formValue.lastName).subscribe(function () {
                _this.toastr.success("profile saved");
            });
        }
    };
    ProfileComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/user/profile.component.html',
            styles: ["\n    em { float:right; color:#E05C65; padding-left: 10px;}\n    .error input { background-color: #E3C3C5; }    \n  "]
        }),
        __param(2, core_1.Inject(toastr_service_1.TOASTR_TOKEN)), 
        __metadata('design:paramtypes', [auth_service_1.AuthService, router_1.Router, Object])
    ], ProfileComponent);
    return ProfileComponent;
}());
exports.ProfileComponent = ProfileComponent;
//# sourceMappingURL=profile.component.js.map