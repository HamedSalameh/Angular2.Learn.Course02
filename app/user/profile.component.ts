import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup} from '@angular/forms';
import { AuthService} from './auth.service';
import { Router} from '@angular/router';

@Component({
  templateUrl: 'app/user/profile.component.html'
})
export class ProfileComponent implements OnInit {

  profileForm: FormGroup;

  constructor(private _auth: AuthService, private _router: Router){}

  ngOnInit(){

    let firstName = new FormControl(this._auth.currentUser.firstName);
    let lastName = new FormControl(this._auth.currentUser.lastName);
    this.profileForm = new FormGroup({
      firstName: firstName,
      lastName: lastName
    })

  }

  cancel() : void{
    this._router.navigate(['events']);
  }

  saveProfile(formValue){
    this._auth.updateCurrentUser(formValue.firstName, formValue.lastName);
    this._router.navigate(['events']);
  }

}