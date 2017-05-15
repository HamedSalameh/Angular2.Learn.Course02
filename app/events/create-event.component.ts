import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    template:
    `
    <div class="col-md-6">
        <h3>Create Event form</h3>
        <br/>
        <br/>
        <button type="submit" class="btn btn-primary">Save</button>
        <button type="button" (click)="cancel()" class="btn btn-default">Cancel</button>
    </div>
    `   
})
export class CreateEventComponent{
    
    isDirty:boolean = true;
    constructor(private _router:Router){}

    cancel() : void {
        this._router.navigate(['/events']);
        
    }
}