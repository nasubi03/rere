import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  userInfo: { [key: string]: any } = {};
  constructor(public auth: AuthService) {}

  ngOnInit(): void {
    this.auth.user$.subscribe((user) => {
      this.userInfo = user;
    });
  }

  logout(): void {
    this.auth.logout({ returnTo: window.location.origin });
  }
}
