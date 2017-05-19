import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { AuthService} from './auth.service';
import { Router} from '@angular/router';

@Component({
  templateUrl: 'app/user/profile.component.html',
  styles:[`
    em { float:right; color:#E05C65; padding-left: 10px;}
    .error input { background-color: #E3C3C5; }    
  `]
})
export class ProfileComponent implements OnInit {

  profileForm: FormGroup;
  private firstName: FormControl;
  private lastName: FormControl;
  lastNameErrorMessage: string;

  constructor(private _auth: AuthService, private _router: Router){}

  ngOnInit(){

    this.firstName = new FormControl(this._auth.currentUser.firstName, [Validators.required, Validators.pattern('[a-zA-Z].*')]);
    this.lastName = new FormControl(this._auth.currentUser.lastName, Validators.required);
    this.profileForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName
    })

  }

  cancel() : void{
    this._router.navigate(['events']);
  }

  validateLastName(){
    return this.lastName.valid || this.lastName.untouched;
  }

  validateFirstName(){
    return this.firstName.valid || this.firstName.untouched;
  }



  saveProfile(formValue){
    if (this.profileForm.valid){
      this._auth.updateCurrentUser(formValue.firstName, formValue.lastName);
      this._router.navigate(['events']);
    }
  }

}