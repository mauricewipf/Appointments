import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Appointment } from './appointment';

import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import 'rxjs/add/operator/map';

@Injectable()
export class AppointmentsService {
  private appointmentsUrl = 'api/appointments';
  private headers = new Headers({'Content-Type': 'application/json'});

  public appointments: FirebaseListObservable<any[]>;

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  constructor(
    private http: Http,
    private firebaseDb: AngularFireDatabase
  ) { }

  // delete this
  // getAppointments(): Promise<Appointment[]> {
  //   return this.http.get(this.appointmentsUrl)
  //     .toPromise()
  //     .then(response => response.json().data as Appointment[])
  //     .catch(this.handleError);
  // }


  getAppointments(): FirebaseListObservable<any[]> {
    return this.firebaseDb.list('/appointments') as FirebaseListObservable<any[]>;
  }

  getAppointment(uid): FirebaseObjectObservable<any> {
    return this.firebaseDb.object(`appointments/${uid}`) as FirebaseObjectObservable<any>;
  }

  post(date: Date, name: string) {
    this.firebaseDb.list('/appointments').push({date: date.getTime(), name: name});
  }

  // delete this
  // create(date: Date, name: string): Promise<Appointment> {
  //   return this.http
  //     .post(this.appointmentsUrl, JSON.stringify({date: date, name: name}), {headers: this.headers})
  //     .toPromise()
  //     .then(res => res.json().data as Appointment)
  //     .catch(this.handleError);
  // }

}

@Injectable()
export class Globals {
  appointments: Appointment[];
}
