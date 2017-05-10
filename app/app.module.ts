import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { EventsAppComponent} from './events-app.component';
import { EventsListComponent} from './events/events-list.component';
import { EventThumbnailComponent } from './events/evemt-thunmbnail.component';

@NgModule({
    imports: [ BrowserModule ],
    exports: [],
    declarations: [ EventsAppComponent, EventsListComponent,  EventThumbnailComponent],
    providers: [],
    bootstrap: [ EventsAppComponent]
})
export class AppModule {

}