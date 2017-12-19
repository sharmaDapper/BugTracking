import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from './../../../services/api.services';
@Component({
  selector: 'content-header',
  templateUrl: './content-header.component.html',
  styleUrls: ['./content-header.component.scss']
})
export class ContentHeaderComponent implements OnInit {

  @Input() bugList: any;
  bugStats: any = {
    openBugs:[],
    closedBugs:[]
  };

  constructor() { }

  ngOnInit() {
    this.setBugCounts();
  }
  setBugCounts() {
    //stats should actually come from an api when we have server will do
    this.bugStats.openBugs = this.bugList.filter((bug) => {
      return bug.status.toLowerCase() != "closed";
    });

    this.bugStats.closedBugs = this.bugList.filter((bug) => {
      return bug.status.toLowerCase() == "closed";
    });

  }

}
