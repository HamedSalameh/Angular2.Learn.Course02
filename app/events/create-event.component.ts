import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from './shared/event.service';

@Component({
    templateUrl: 'app/events/create-event.component.html',
    styles:[`
    em { float:right; color:#E05C65; padding-left: 10px;}
    .error input { background-color: #E3C3C5; }    
  `]
})
export class CreateEventComponent{
    
    isDirty:boolean = true;
    constructor(private _router:Router, private _eventService:EventService){}

    cancel() : void {
        this._router.navigate(['/events']);
        
    }

    saveEvent(formValues): void {
        this._eventService.saveEvent(formValues).subscribe( (res) => {
            this.isDirty = false;
            this._router.navigate(['/events']);
        });
        
    }
} 