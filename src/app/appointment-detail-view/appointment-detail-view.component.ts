import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Appointment } from './../appointment';
import { AppointmentsService } from './../appointments.service';

@Component({
  selector: 'app-appointment-detail-view',
  templateUrl: './appointment-detail-view.component.html',
  styleUrls: ['./appointment-detail-view.component.css']
})
export class AppointmentDetailViewComponent implements OnInit {
  appointment: Appointment;

  constructor(
    private appointmentsService: AppointmentsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.appointmentsService.getAppointment(this.route.snapshot.params.key)
    .subscribe(appointment => {
      this.appointment = appointment;
    });
  }

  delete(key: string): void {
    this.appointmentsService.deleteAppointment(key);
  }

}
