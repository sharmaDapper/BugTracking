import { ApiService } from './../../services/api.services';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'bugTracker-edit-bug',
  templateUrl: './edit-bug.component.html',
  styleUrls: ['./edit-bug.component.scss']
})
export class EditBugComponent implements OnInit {
  bugId: number;
  sub: any;
  bugDetails: any;
  toolBarConfig: any;
  comment : string;
  constructor(private route: ActivatedRoute,private api: ApiService) {
    this.toolBarConfig = { toolbar: [ [ 'bold', 'italic', { list: 'ordered' }, { list: 'bullet' } ] ] };
   }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.bugId = +params['id']; // (+) converts string 'id' to a number
      this.getBugById();
      
   });
  }

  getBugById(){
    this.api.getBugById(this.bugId).subscribe(
      (data)=>{
        this.bugDetails = data;
        
      },
      (error)=>{
        console.log(error);
      }
    )
  }

  updateBug(){
    this.api.updateBug(this.bugDetails).subscribe(
      (data)=>{
        this.bugDetails = data;
        alert("Updated Successfully");
      },
      (error)=>{
        console.log(error);
        alert("Error Occured");
      }
    )
  }

  addComment(){
    let comment  = {
      description:this.comment,
      commentBy:"Manish Kumar",
      dateTime:new Date()
    }
    this.bugDetails.comments?this.bugDetails.comments.push(comment):this.bugDetails.comments=[comment];
    this.updateBug();
    this.comment = null;
  }

}
