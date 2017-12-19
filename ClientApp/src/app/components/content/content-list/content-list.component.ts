import { ApiService } from './../../../services/api.services';
import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {
  @Input() bugList: any;
  constructor(private api: ApiService) { }

  ngOnInit() {

  }

}
