import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

import { Appointment } from './appointment';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from 'angularfire2/database';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class AppointmentsService {
  appointmentsRef: AngularFirestoreCollection<Appointment>;

  constructor(
    private firebaseDb: AngularFireDatabase,
    private router: Router,
    private authService: AuthService,
    private afs: AngularFirestore
  ) {
    this.appointmentsRef = this.afs.collection<Appointment>('appointments');
  }

  getAppointments(): Observable<Appointment[]> {
    return this.afs.collection<Appointment>(
      'appointments',
      ref => ref.where('user_uid', '==', this.authService.userObj.uid)
    ).snapshotChanges().map(actions => {
      return actions.map(action => {
        const data = action.payload.doc.data() as Appointment;
        const id = action.payload.doc.id;
        return { id, ...data };
      });
    });
  }

  getAppointment(key): Observable<Appointment> {
    return this.appointmentsRef.doc(key).snapshotChanges().map(action => {
      if (action.payload.exists) {
        const data = action.payload.data() as Appointment;
        const id = action.payload.id;
        return { id, ...data };
      }
    });
  }

  createAppointment(date: Date, name: string): void {
    this.appointmentsRef.add({
      date: date,
      name: name,
      user_uid: this.authService.userObj.uid
    }).then(res => console.log('res ', res)
    ).catch(err => console.log('err ', err)
    );
  }

  deleteAppointment(key: string): void {
    this.appointmentsRef.doc(key).delete()
    .then(_ => {
      console.log(`Appointment ${key} deleted`);
      this.router.navigate(['/']);
    })
    .catch(err => alert(err));
  }

}
