import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventService } from './shared/event.service';
import { IEvent } from './shared/event.model';

@Component({

    template:
    `
    <div>
        <h1>Upcomming Angular 2 Events</h1>
        <hr>
        <div class="row">
            <div *ngFor="let event of events" class="col-md-5">
                <event-thumbnail  [event]="event"></event-thumbnail>
            </div>
        </div>
    </div>
    `
})

export class EventsListComponent implements OnInit {
    events: IEvent[];

    constructor(private _EventService: EventService,  private _route: ActivatedRoute) { }

    ngOnInit() {
        this.events = this._route.snapshot.data['events'];
    }
}