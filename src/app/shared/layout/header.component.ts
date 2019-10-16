import { Component, OnInit } from '@angular/core';

import { UserService } from '../../core';
import {User} from '../../core/models';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-layout-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  constructor(
    private router: Router,
    private userService: UserService,
  ) {}

  currentUser: User;

  logoutUser(): void {
    this.userService.purgeAuth();
    window.location.reload();
  }

  ngOnInit() {
    this.currentUser = this.userService.currentUser;
  }
}
