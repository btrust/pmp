import { NewMsnComponent } from './../../core/msn/new-msn/new-msn.component';
import {Component, Input} from '@angular/core';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {ConfigComponent } from './../../shared/components/config/config.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'

})
export class HeaderComponent {
  constructor(private modalService: NgbModal) {}

  editConfig() {
    const modalRef = this.modalService.open(ConfigComponent);
  }

  initConfg() {
    const modalRef = this.modalService.open(ConfigComponent, {backdrop: 'static'});
  }

  newMission() {
    const modalRef = this.modalService.open(NewMsnComponent);
  }
}

