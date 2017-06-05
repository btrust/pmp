import { AddMsnAircrewComponent } from './add-msn-aircrew/add-msn-aircrew.component';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { FormsModule } from '@angular/forms';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import { DatabaseService } from './../../../shared/services/database.service';
import { Crw } from './../../../shared/models/crw';

import { ConfigComponent } from './../../../shared/components/config/config.component';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-msn-aircrew',
  templateUrl: './msn-aircrew.component.html',
  styleUrls: ['./msn-aircrew.component.css']
})
export class MsnAircrewComponent implements OnInit {

  crwDb = new Array<Crw>();

  constructor(
    private databaseService: DatabaseService,
    private modalService: NgbModal
  ) {
    this.crwDb = this.databaseService.crw;
  }

  ngOnInit() {

  }

  addCrewmember() {
    const modalRef = this.modalService.open(AddMsnAircrewComponent);
  }

  onDelete(index: number) {
    if (index > -1) {
      this.crwDb.splice(index, 1);
    }
  }

  setAlfa(i: number) {
    this.crwDb[i].alfa = true;
    for (let x = 0; x < this.crwDb.length; x++) {
      if (x !== i) {
        this.crwDb[x].alfa = false;
      }
    }
  }

}
