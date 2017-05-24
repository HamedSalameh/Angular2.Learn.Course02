import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventService } from '../shared/event.service';
import { IEvent, ISession } from '../shared/event.model';
import { SessionsListComponent } from './session-list.component'

@Component({
    templateUrl: '/app/events/event-details/event-details.component.html',
    styles: [`
        .container { padding-left: 20px; padding-right: 20px; },
        .event-image { height: 100px; }
        a {cursor: pointer}
        `]
})
export class EventDetailsComponent implements OnInit {
    event: IEvent;
    addMode: boolean;
    filterBy: string = 'all';
    sortBy: string = 'votes';
    
    constructor(private _eventService: EventService, private _route:ActivatedRoute){};

    ngOnInit() {
        this.event = this._eventService.getEvent(+this._route.snapshot.params['id']);
    }

    addSession(){
        this.addMode = true;
    }

    saveNewSession(session: ISession){
        const nextId = Math.max.apply(null, this.event.sessions.map( s => s.id));

        session.id = nextId + 1;
        this.event.sessions.push(session);
        this._eventService.updateEvent(this.event);
        this.addMode = false;
    }

    cancelAddSession() {
        this.addMode=false;
    }

}