import { Component } from '@angular/core';
import { AuthService} from './auth.service';
import { Router} from '@angular/router';

@Component({
    templateUrl: 'app/user/login.component.html'
})
export class LoginComponent {

    constructor(private _authService: AuthService, private _router:Router){}

    login(formValues): void {
        this._authService.loginUser(formValues.userName, formValues.password);
        this._router.navigate(['events']);
    }

    cancel(): void {
        this._router.navigate(['events']);
    }

}