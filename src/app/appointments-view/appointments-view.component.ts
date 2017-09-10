import { Component, OnInit, Input } from '@angular/core';

import { Appointment } from './../appointment';
import { AppointmentsService } from './../appointments.service';

@Component({
  selector: 'app-appointments-view',
  templateUrl: './appointments-view.component.html',
  styleUrls: ['./appointments-view.component.css']
})
export class AppointmentsViewComponent implements OnInit {
  appointments: Appointment[];
  @Input() searchString: string;
  // isClassVisible = false;

  constructor(private appointmentService: AppointmentsService) { }

  getAppointments(): void {

    this.appointmentService.getAppointments()
    .then(appointments => this.appointments = appointments);

  }

  // greyPastAppointments(): void {
  //   for (let i = 0; i < this.appointments.length; i++) {
  //     if (new Date(this.appointments[i].day) < new Date()) {
  //       console.log('foo');
  //       this.isClassVisible = true;
  //     }
  //   }
  // }

  ngOnInit(): void {
    this.getAppointments();
  }

}
