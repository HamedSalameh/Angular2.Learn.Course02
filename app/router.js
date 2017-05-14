"use strict";
var event_details_component_1 = require('./events/event-details/event-details.component');
var events_list_component_1 = require('./events/events-list.component');
exports.appRoutes = [
    { path: 'events', component: events_list_component_1.EventsListComponent },
    { path: 'events/:id', component: event_details_component_1.EventDetailsComponent },
    { path: '', redirectTo: '/events', pathMatch: 'full' }
];
//# sourceMappingURL=router.js.map