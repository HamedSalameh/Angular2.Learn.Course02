import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { EventsAppComponent} from './events-app.component';
import { EventsListComponent} from './events/events-list.component';
import { EventThumbnailComponent } from './events/event-thunmbnail.component';
import { NavBarComponent} from './nav/navbar.component';
import { EventService } from './events/shared/event.service';
import { EventDetailsComponent} from './events/event-details/event-details.component';
import { ToastrService} from './common/toastr.service';
import { appRoutes } from './router';

@NgModule({
    imports: [ BrowserModule, RouterModule.forRoot(appRoutes) ],
    exports: [],
    declarations: [ EventsAppComponent, EventsListComponent,  EventThumbnailComponent, NavBarComponent, EventDetailsComponent],
    providers: [ EventService, ToastrService ],
    bootstrap: [ EventsAppComponent]
})
export class AppModule {

}