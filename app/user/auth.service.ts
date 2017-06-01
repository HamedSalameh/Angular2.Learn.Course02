import { Injectable } from '@angular/core';
import { IUser } from './user.model';
import { Subject, Observable } from 'rxjs/RX';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class AuthService {
    currentUser: IUser;

    constructor(private _http: Http) { }

    loginUser(userName: string, password: string) {
        let _header = new Headers({ 'Content-type': 'application/json' });
        let _requestOptions = new RequestOptions({ headers: _header });

        let loginInfo = { username: userName, password: password };

        // do: the same as forFech & map, but it means we will not change the data
        return this._http.post('/api/login', JSON.stringify(loginInfo), _requestOptions)
            .do(res => {
                if (res) {
                    this.currentUser = <IUser>res.json();
                }
            })
            .catch(err => {
                return Observable.of(false);
            }

            )
    }

    isAuthenticated() {
        return !!this.currentUser;
    }

    checkAuthenticationStatus() {
        return this._http.get('/api/currentIdentity').map((res: any) => {
            if (res._body) {
                return res.json();
            } else {
                return {};
            }
        }).do(currentUser => {
            if (!!currentUser.userName) {
                this.currentUser = currentUser;
            }
        }).subscribe();        
    }

    updateCurrentUser(firstName: string, lastName: string) {
        this.currentUser.firstName = firstName;
        this.currentUser.lastName = lastName;

    }
}