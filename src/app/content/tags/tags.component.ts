import { formatDate } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Tags } from './tags.model';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
})
export class TagsComponent implements OnInit {
data : Array<Tags> = new Array<Tags>();
post = new Tags()
  constructor(
    public http: HttpClient,
  ) { }

  ngOnInit(): void {
    this.getTag();
  }


  postTag() {
if(this.post.name != null){
  this.post.created_at = new Date().toString();
this.post.updated_at = formatDate(new Date(), 'hh:mm:ss', 'en-US')
    var demourl = "http://localhost:8000/api/tag"
    this.http.post(demourl , this.post ).subscribe({
      next: res => this.Success(res),
    }
    )
}
  }



  getTag() {

    var demourl = "http://localhost:8000/api/tag"
    this.http.get(demourl).subscribe({
      next: res => this.Success(res),
    }
    )
  }
  Success(res:any){
    console.log(res)
    this.data = res;
  }
  


}
