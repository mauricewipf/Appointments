import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Appointment } from './appointment';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';

@Injectable()
export class AppointmentsService {
  public appointments: FirebaseListObservable<any[]>;

  constructor(
    private firebaseDb: AngularFireDatabase,
    private router: Router
  ) { }

  getAppointments(): FirebaseListObservable<any[]> {
    return this.firebaseDb.list('/appointments') as FirebaseListObservable<any[]>;
  }

  getAppointment(key): FirebaseObjectObservable<any> {
    return this.firebaseDb.object(`appointments/${key}`) as FirebaseObjectObservable<any>;
  }

  createAppointment(date: Date, name: string): void {
    this.firebaseDb.list('/appointments').push({date: date.getTime(), name: name});
  }

  deleteAppointment(key: string): void {
    this.firebaseDb.list('/appointments').remove(key)
    .then(_ => {
      console.log(`Appointment ${key} deleted`);
      this.router.navigate(['/']);
    });
  }

}
