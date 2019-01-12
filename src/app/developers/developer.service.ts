import { Injectable } from '@angular/core';
import { Developer } from './developer';
import { Http, Response } from '@angular/http';
import { environment } from 'src/environments/environment';

@Injectable()
export class DeveloperService {
    private developerUrl = environment.developerURL;

    constructor (private http: Http) {}

    // get developers
    getDevelopers(): Promise<void | Developer[]> {
      return this.http.get(this.developerUrl)
                 .toPromise()
                 .then(response => response.json() as Developer[])
                 .catch(this.handleError);
    }

    // get developers by ID
    getDeveloperByID(getDevID: Developer): Promise<void | Developer> {
      return this.http.get(this.developerUrl+ '/' + getDevID._id)
                 .toPromise()
                 .then(response => response.json() as Developer)
                 .catch(this.handleError);
    }

    // post developers
    createDeveloper(newDeveloper: Developer): Promise<void | Developer> {
      return this.http.post(this.developerUrl, newDeveloper)
                 .toPromise()
                 .then(response => response.json() as Developer)
                 .catch(this.handleError);
    }

    private handleError (error: any) {
      let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
      console.error(errMsg); // log to console instead
    }
}