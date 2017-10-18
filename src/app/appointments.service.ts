import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

import { Appointment } from './appointment';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from 'angularfire2/database';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class AppointmentsService {
  public appointments: AngularFireList<Appointment[]>;
  private user;
  appointmentsRef: AngularFirestoreCollection<Appointment>;
  public appointments2: Observable<Appointment[]>;

  constructor(
    private firebaseDb: AngularFireDatabase,
    private router: Router,
    private authService: AuthService,
    private afs: AngularFirestore
  ) {
    this.appointmentsRef = this.afs.collection<Appointment>(
      'appointments',
      ref => ref.where('user_uid', '==', 'Wm5sGsJM4wQKly2CkyBDkfvPSpB3')
    );
  }

  getAppointments(): Observable<Appointment[]> {
    return this.appointmentsRef.snapshotChanges().map(actions => {
      return actions.map(action => {
        const data = action.payload.doc.data() as Appointment;
        const id = action.payload.doc.id;
        return { id, ...data };
      });
    });
  }

  // getAppointments(): AngularFireList<Appointment[]> {
  //   return this.firebaseDb.list<Appointment[]>('/appointments',
  //     ref => ref.orderByChild('user_uid').equalTo(this.authService.userObj.uid)
  //   ) as AngularFireList<Appointment[]>;
  // }

  getAppointment(key): Observable<Appointment> {
    return this.appointmentsRef.doc(key).snapshotChanges().map(action => {
      if (action.payload.exists) {
        const data = action.payload.data() as Appointment;
        const id = action.payload.id;
        return { id, ...data };
      }
    });

    // docRef.get().then(function(doc) {
    //     if (doc.exists) {
    //         console.log("Document data:", doc.data());
    //     } else {
    //         console.log("No such document!");
    //     }
    // }).catch(function(error) {
    //     console.log("Error getting document:", error);
    // });

    // return this.firebaseDb.object(`appointments/${key}`) as AngularFireObject<Appointment>;
  }

  createAppointment(date: Date, name: string): void {
    this.appointmentsRef.add({
      date: date,
      name: name,
      user_uid: this.authService.userObj.uid
    }).then(res => console.log('res ', res)
    ).catch(err => console.log('err ', err)
    );

    // this.firebaseDb.list('/appointments').push({
    //   date: date.getTime(),
    //   name: name,
    //   user_uid: this.authService.userObj.uid
    // });
  }

  deleteAppointment(key: string): void {
    this.appointmentsRef.doc(key).delete()
    .then(_ => {
      console.log(`Appointment ${key} deleted`);
      this.router.navigate(['/']);
    })
    .catch(err => alert(err));

    // this.firebaseDb.list('/appointments').remove(key)
    // .then(_ => {
    //   console.log(`Appointment ${key} deleted`);
    //   this.router.navigate(['/']);
    // })
    // .catch(err => alert(err));
  }

}
