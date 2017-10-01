import { Component, OnInit } from '@angular/core';
import { AuthService } from './../auth.service';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  public user;

  constructor(
    private authService: AuthService,
    private modalService: NgbModal
  ) {}

  ngOnInit() {
    this.user = this.authService.userObj;
  }

  resetPassword() {
    this.authService.resetPassword().then(response => {
      alert(response);
    });
  }

  open() {
    this.modalService.open(DeleteAccountModalContentComponent);
  }

}

@Component({
  selector: 'app-delete-account-modal-content',
  templateUrl: './delete-account-modal-content.component.html'
})
export class DeleteAccountModalContentComponent {
  password: string;

  constructor(
    public activeModal: NgbActiveModal,
    private authService: AuthService
  ) {}

  deleteAccount() {
    this.authService.login(this.authService.userObj.email, this.password).then(response => {
      if (response) {
        alert(`Wrong password`);
      } else {
        this.authService.deleteAccount();
        this.activeModal.close();
      }
    });
  }
}
