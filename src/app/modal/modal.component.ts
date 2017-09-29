import {Component} from '@angular/core';

import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { AppointmentsService } from './../appointments.service';

@Component({
  selector: 'app-ngbd-modal-content',
  templateUrl: './modal-content.component.html'
})
export class NgbdModalContentComponent {
  appointmentDayInput: Date;
  appointmentTimeInput: Date;
  appointmentServiceInput: string;

  constructor(
    public activeModal: NgbActiveModal,
    private appointmentsService: AppointmentsService,
  ) {}

  add(day: Date, time: Date, name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.appointmentsService.createAppointment(new Date(day + ' ' + time + ':00'), name);
    this.activeModal.close();
  }

}

@Component({
  selector: 'app-ngbd-modal-component',
  templateUrl: './modal.component.html'
})
export class NgbdModalComponent {
  constructor(private modalService: NgbModal) {}

  open() {
    this.modalService.open(NgbdModalContentComponent);
  }
}
