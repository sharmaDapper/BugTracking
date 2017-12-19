import { ApiService } from './../../services/api.services';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'bug-tracker-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  bugList: any;
  bugStats: any;

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.getBugs();
  }

  getBugs() {
    this.api.getBugs().subscribe(
      (data) => {
        this.bugList = data;
      },
      (error) => {
        console.log(error);
      }
    )
  }

}
