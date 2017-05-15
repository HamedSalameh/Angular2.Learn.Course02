"use strict";
var event_details_component_1 = require('./events/event-details/event-details.component');
var events_list_component_1 = require('./events/events-list.component');
var create_event_component_1 = require('./events/create-event.component');
var _404_component_1 = require('./errors/404.component');
exports.appRoutes = [
    { path: 'events/new', component: create_event_component_1.CreateEventComponent },
    { path: 'events', component: events_list_component_1.EventsListComponent },
    { path: 'events/:id', component: event_details_component_1.EventDetailsComponent },
    { path: '404', component: _404_component_1.Error404Component },
    { path: '', redirectTo: '/events', pathMatch: 'full' }
];
//# sourceMappingURL=routers.js.map