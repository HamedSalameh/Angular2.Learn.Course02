import { EventService } from './shared/event.service';
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

@Injectable()
export class EventListResolver implements Resolve<any> {
    
    constructor(private _eventService: EventService){}

    resolve(){
        return this._eventService.getEvents().map(events => events);
    }
}