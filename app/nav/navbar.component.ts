import { Component } from '@angular/core';
import { AuthService } from '../user/auth.service';
import { ISession, EventService} from '../events/shared/index'

@Component({
    selector: 'nav-bar',
    templateUrl: 'app/nav/navbar.component.html',
    styles: [
        `
        .nav.navbar-nav { font-size: 15px; }
        li > a.active { color: #F97924; }
        `
    ]

})
export class NavBarComponent {

    searchTerm: string;
    foundSessions: ISession;
   
    constructor(private _authService: AuthService, private _eventService: EventService) { }

    searchSessions(searchTerm): void{
        alert(searchTerm);
        this._eventService.searchSessions(searchTerm).subscribe( sessions => { 
            this.foundSessions = sessions;
            console.log(this.foundSessions);
        });
    }


}
