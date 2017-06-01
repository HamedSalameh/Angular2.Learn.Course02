import { Component } from '@angular/core';
import { AuthService} from './auth.service';
import { Router} from '@angular/router';
import { Subject, Observable } from 'rxjs/RX';

@Component({
    templateUrl: 'app/user/login.component.html',
    styles: [

    ]
})
export class LoginComponent {
    loginInvalid: boolean = false;

    constructor(private _authService: AuthService, private _router:Router){}

    login(formValues): void {
        this._authService.loginUser(formValues.userName, formValues.password).subscribe( res => {
            if (!res){
                this.loginInvalid = true;
            } else {
                this._router.navigate(['events']);
            }
        })
        
    }

    cancel(): void {
        this._router.navigate(['events']);
    }

}