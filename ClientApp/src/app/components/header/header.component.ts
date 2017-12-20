import { AuthenticationService } from './../../services/authentication.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bug-tracker-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  loggedInUser: any;
  constructor(private autService: AuthenticationService) { }

  ngOnInit() {
    this.loggedInUser = this.autService.loggedInUser;
  }

}
