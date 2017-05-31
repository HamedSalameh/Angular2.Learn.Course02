import { EventService } from './shared/event.service';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

@Injectable()
export class EventResolver implements Resolve<any> {
    
    constructor(private _eventService: EventService){}

    resolve(route: ActivatedRouteSnapshot){
        return this._eventService.getEvent(route.params['id']);
    }
}