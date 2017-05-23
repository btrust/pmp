import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

import {Observable} from 'rxjs/Observable';
import { FormsModule } from '@angular/forms';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import { AngularIndexedDbService } from './../../../shared/services/angular-indexeddb.service';
import { TailService } from './../../../shared/services/tail.service';
import { Purpose } from './../../../shared/models/purpose';


@Component({
  selector: 'app-msn-general',
  templateUrl: './msn-general.component.html',
  styleUrls: ['./msn-general.component.css']
})
export class MsnGeneralComponent implements OnInit {
msnGeneralForm: FormGroup;
TAIL: any;
tailDetails: object;

  constructor(private tail: TailService) {
    this.TAIL = this.tail.tailOnly();
   }

  search = (text$: Observable<string>) =>
    text$
      .debounceTime(200)
      .distinctUntilChanged()
      .map(term => term.length < 2 ? []
        : this.TAIL.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10));

  ngOnInit() {
    this.msnGeneralForm = new FormGroup({
       'msnSymbol': new FormControl('',
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(5),
          Validators.pattern('^[0-9a-zA-Z]+$')
        ]),
        'msnPurpose': new FormControl('',
        [
          Validators.required,
        ]),
      'msnAuth': new FormControl('', [
        Validators.required,
        Validators.minLength(7),
        Validators.maxLength(7),
        Validators.pattern('^[0-9-]+$')
        ]),
      'msnTail': new FormControl('', [
        Validators.required,
        Validators.minLength(7),
        Validators.maxLength(8),
        Validators.pattern('^[0-9-]+$')
      ]),
      'msnCallsign': new FormControl('', [
        Validators.required,
        Validators.minLength(7),
        Validators.maxLength(8),
        Validators.pattern('^[a-zA-Z0-9]+$')
         ]),
    });

  }

}
