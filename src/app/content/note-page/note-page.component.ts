import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NoteGet, NotePage, Tags } from './note-page.model';

@Component({
  selector: 'app-note-page',
  templateUrl: './note-page.component.html',
})

export class NotePageComponent implements OnInit {
  data: Array<NoteGet> = new Array<NoteGet>();
  post = new NotePage()
  Tags: Array<Tags> = new Array<Tags>();
  constructor(

    private modalService: NgbModal,
    public http: HttpClient,
  ) { }

  ngOnInit(): void {
    this.getNote();
    this.getTag();
  }

  postNote() {
    console.log(this.post)
        var demourl = "http://localhost:8000/api/note"
        this.http.post(demourl , this.post ).subscribe({
          next: res => this.Success(res),
        }
        )

      
    } 
  getNote() {

    var demourl = "http://localhost:8000/api/note"
    this.http.get(demourl).subscribe({
      next: res => this.Success(res),
    }
    )
  }
  Success(res: any) {
    console.log(res)
    this.data = res
  }

  getTag() {

    var demourl = "http://localhost:8000/api/tag"
    this.http.get(demourl).subscribe({
      next: res => this.SuccessTag(res),
    }
    )
  }
  SuccessTag(res:any){
this.Tags = res;
  }
  closeModal: string = '';

  triggerModal(content: any) {

    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', size: "md", centered: true }).result.then((res) => {
      this.closeModal = `Closed with: ${res}`;
    }, (res) => {
      this.closeModal = `Dismissed ${this.getDismissReason(res)}`;
    });
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

}
