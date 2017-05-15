import { Component, OnInit } from '@angular/core';
import { EventService } from './shared/event.service';
import { ToastrService} from '../common/toastr.service';

@Component({

    template:
    `
    <div>
        <h1>Upcomming Angular 2 Events</h1>
        <hr>
        <div class="row">
            <event-thumbnail (click)="handleClick(event.name)" *ngFor="let event of events" [event]="event" class="col col-md-5"></event-thumbnail>
        </div>
    </div>
    `
})

export class EventsListComponent implements OnInit {
    events : any;

    constructor(private _EventService :EventService, private _ToastrService : ToastrService ) {}

    ngOnInit() {
      this.events = this._EventService.getEvents();
    }

    handleClick(event){
    this._ToastrService.success(event);
    }
}