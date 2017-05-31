import { Injectable } from '@angular/core';
import { ISession } from '../shared/event.model';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Subject, Observable } from 'rxjs/RX';

@Injectable()
export class VoterService {

    constructor(private _http: Http) {}

    deleteVoter(eventID: number, session: ISession, voterName:string) {
        session.voters = session.voters.filter( v => v !== voterName);

        let url = `/api/events/${eventID}/sessions/${session.id}/voters/${voterName}`;

        this._http.delete(url).catch(this.handleError).subscribe();
    }

    addVoter(eventID: number, session: ISession, voterName:string) {
        session.voters.push(voterName);

        let _headers = new Headers({'ContentType':'Application/json'});
        let _requestOptions = new RequestOptions({headers: _headers});

        let url = `/api/events/${eventID}/sessions/${session.id}/voters/${voterName}`;

        this._http.post(url, JSON.stringify({}), _requestOptions).catch(this.handleError).subscribe();
    }

    userHasVoted(session: ISession, voterName: string){
        return session.voters.some(v => v === voterName);
    }

    handleError(error: Response)
    {
        return Observable.throw(error.statusText);
    }
}