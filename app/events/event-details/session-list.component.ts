import { Component, Input, OnChanges } from '@angular/core';
import { ISession } from '../shared/index'
import { AuthService} from '../../user/auth.service'
import { VoterService } from './voter.service';

@Component({
    selector: 'session-list',
    templateUrl: 'app/events/event-details/session-list.component.html'
})
export class SessionsListComponent implements OnChanges {

    @Input() sessions: ISession[]
    @Input() filterBy: string;
    @Input() sortBy: string;
    @Input() eventID: number;

    visibleSessions: ISession[];

    constructor(private _auth: AuthService, private voterService: VoterService) {}
    
    ngOnChanges() : void{
        if(this.sessions){
            this.filterSessions(this.filterBy);
            this.sortBy === 'name' ? this.visibleSessions.sort(sortByNameAsc) : this.visibleSessions.sort(sortByVotesDesc);
        }
    }

    userHasVoted(session : ISession) {
        return this.voterService.userHasVoted(session, this._auth.currentUser.userName);
    }

    toggleVote(session: ISession) {
        if (this.userHasVoted(session)){
            this.voterService.deleteVoter(this.eventID, session, this._auth.currentUser.userName);   
        }
        else {
            this.voterService.addVoter(this.eventID, session, this._auth.currentUser.userName);
        }

        if (this.sortBy === 'votes'){
            this.visibleSessions.sort(sortByVotesDesc);
        }
    }

    filterSessions(filter){
        if (filter === 'all'){
            // .slice() - a nice was to duplacate an object array (creates a new one)
            this.visibleSessions = this.sessions.slice(0);
        } else {
            this.visibleSessions = this.sessions.filter( session => {
                return session.level.toLocaleLowerCase() === filter;
            } )
        }
    }

}

// These 2 methods will be used by JavaScript sory method to compare 2 items (predicates)
function sortByNameAsc(s1: ISession, s2: ISession){
    if(s1.name > s2.name) return 1;
    else if(s1.name === s2.name) return 0;
    else return -1;
}

function sortByVotesDesc(s1: ISession, s2: ISession){
    return s2.voters.length - s1.voters.length;
}