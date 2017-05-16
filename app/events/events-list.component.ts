import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventService } from './shared/event.service';
import { ToastrService} from '../common/toastr.service';
import { IEvent } from './shared/event.model';

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
    events : IEvent[];

    constructor(private _EventService :EventService, private _ToastrService : ToastrService, private _route:ActivatedRoute ) {}

    ngOnInit() {
        this.events = this._route.snapshot.data['events'];
    }

    handleClick(event){
    this._ToastrService.success(event);
    }
}