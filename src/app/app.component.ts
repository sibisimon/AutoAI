import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { UserService } from './core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  constructor (
    private userService: UserService,
    private router: Router,
  ) {}

  ngOnInit() {
    if (this.userService.isAuthenticated()){
      this.router.navigateByUrl('account/dashboard');
    }
  }

}
