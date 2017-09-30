import { Component, OnInit } from '@angular/core';
import { AuthService } from './../auth.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  public user;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.user
    .subscribe(user => {
      this.user = user;
      console.log('user ', user);
    });
  }

  changePassword() {
    alert('Function coming soon.');
  }

}
