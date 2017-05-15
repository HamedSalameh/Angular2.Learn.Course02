import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { EventsAppComponent} from './events-app.component';
import { EventsListComponent} from './events/events-list.component';
import { EventThumbnailComponent } from './events/event-thunmbnail.component';
import { NavBarComponent} from './nav/navbar.component';
import { Error404Component} from './errors/404.component';
import { EventRouteActivator} from './events/event-route-activator.component';
import { CreateEventComponent} from './events/create-event.component';
import { EventService } from './events/shared/event.service';
import { EventDetailsComponent} from './events/event-details/event-details.component';
import { ToastrService} from './common/toastr.service';
import { appRoutes } from './routes';
import { EventListResolver} from './events/events-list.resolver.service';

@NgModule({
    imports: [ BrowserModule, RouterModule.forRoot(appRoutes) ],
    exports: [],
    declarations: [ 
        EventsAppComponent, 
        EventsListComponent,  
        EventThumbnailComponent, 
        NavBarComponent, 
        EventDetailsComponent, 
        CreateEventComponent, 
        Error404Component],
    providers: [ 
        EventService, 
        ToastrService, 
        EventRouteActivator,
        { 
            provide: 'canDeactivateCreateEvent',
            useValue: checkDirtyStart 
        },
        EventListResolver
        ],
    bootstrap: [ EventsAppComponent]
})
export class AppModule {

}

function checkDirtyStart(component: CreateEventComponent){
    if (component.isDirty){
        return window.confirm("You have not saved this event, do you really want to cancel?");
    }
    return true;
}