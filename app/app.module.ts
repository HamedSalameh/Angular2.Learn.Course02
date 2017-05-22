import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
    EventsListComponent,
    EventThumbnailComponent,
    EventService,
    EventDetailsComponent,
    CreateEventComponent,
    EventRouteActivator,
    EventListResolver,
    CreateSessionComponent,
    SessionsListComponent
} from './events/index';

import { AuthService} from './user/auth.service';
import { EventsAppComponent } from './events-app.component';
import { NavBarComponent } from './nav/navbar.component';
import { Error404Component } from './errors/404.component';
import { ToastrService } from './common/toastr.service';
import { appRoutes } from './routes';

@NgModule({
    imports: [BrowserModule, RouterModule.forRoot(appRoutes), FormsModule, ReactiveFormsModule],
    exports: [],
    declarations: [
        EventsAppComponent,
        EventsListComponent,
        EventThumbnailComponent,
        NavBarComponent,
        EventDetailsComponent,
        CreateEventComponent,
        Error404Component,
        CreateSessionComponent,
        SessionsListComponent],
    providers: [
        EventService,
        ToastrService,
        EventRouteActivator,
        {
            provide: 'canDeactivateCreateEvent',
            useValue: checkDirtyStart
        },
        EventListResolver,
        AuthService
    ],
    bootstrap: [EventsAppComponent]
})
export class AppModule {

}

function checkDirtyStart(component: CreateEventComponent) {
    if (component.isDirty) {
        return window.confirm("You have not saved this event, do you really want to cancel?");
    }
    return true;
}