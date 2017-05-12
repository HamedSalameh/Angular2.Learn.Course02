import { Component, OnInit } from '@angular/core';
import { EventService } from '../events/shared/event.service';

@Component({
    selector: 'events-list',
    template:
    `
    <div>
        <h1>Upcomming Angular 2 Events</h1>
        <hr>
        <div class="row">
            <event-thumbnail *ngFor="let event of events" [event]="event" class="col col-md-5"></event-thumbnail>
        </div>
    </div>
    `
})

export class EventsListComponent implements OnInit {
    events : any;

    constructor(private _EventService :EventService ) {}

    ngOnInit() {
      this.events = this._EventService.getEvents();
    }
}