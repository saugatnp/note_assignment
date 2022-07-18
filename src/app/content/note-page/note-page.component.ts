import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-note-page',
  templateUrl: './note-page.component.html',
})
export class NotePageComponent implements OnInit {

  constructor(

    private modalService: NgbModal,

  ) { }

  ngOnInit(): void {
  }


  closeModal: string = '';

  triggerModal(content: any) {

    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', size: "lg", centered: true }).result.then((res) => {
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
