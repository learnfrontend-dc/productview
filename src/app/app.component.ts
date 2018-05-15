import { Component, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { BrowserModule, DomSanitizer } from '@angular/platform-browser'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public modalRef: BsModalRef;
  constructor(private modalService: BsModalService, private sanitizer: DomSanitizer) {}
  public ordercartUrl=this.sanitizer.bypassSecurityTrustResourceUrl("https://ordercart-dc.herokuapp.com/");
  public openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
}