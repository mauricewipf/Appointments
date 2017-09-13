import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Appointment } from './appointment';

@Injectable()
export class AppointmentsService {
  private appointmentsUrl = 'api/appointments';
  private headers = new Headers({'Content-Type': 'application/json'});

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  constructor(private http: Http) { }

  getAppointments(): Promise<Appointment[]> {
    return this.http.get(this.appointmentsUrl)
      .toPromise()
      .then(response => response.json().data as Appointment[])
      .catch(this.handleError);
  }

  create(date: Date, name: string): Promise<Appointment> {
    return this.http
      .post(this.appointmentsUrl, JSON.stringify({date: date, name: name}), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data as Appointment)
      .catch(this.handleError);
  }

}

@Injectable()
export class Globals {
  appointments: Appointment[];
}
