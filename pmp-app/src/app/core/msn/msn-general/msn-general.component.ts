import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { FormsModule } from '@angular/forms';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import { AngularIndexedDbService } from './../../../shared/services/angular-indexeddb.service';
import { DatabaseService } from './../../../shared/services/database.service';
import { MsnTailService } from './../../../shared/services/msn-tail.service';
import { MsnPurposeService } from './../../../shared/services/msn-purpose.service';
import { Msn } from './../../../shared/models/msn';


@Component({
  selector: 'app-msn-general',
  templateUrl: './msn-general.component.html',
  styleUrls: ['./msn-general.component.css']
})
export class MsnGeneralComponent implements OnInit {

  msnGeneralForm: FormGroup;
  TAIL = [];
  PURPOSE = [];
  SYMBOL = ['A1', 'A2', 'A3', 'A4', 'A5', 'A6', 'A7', 'A8', 'A9', 'S1', 'S2', 'S3', 'S4', 'S5', 'S6', 'S7', 'S8', 'T1', 'T2', 'T3', 'T4',
    'T5', 'T6', 'T7', 'T8', 'T9', 'O1', 'O2', 'O3', 'O4', 'O5', 'O6', 'O7', 'O8', 'O9', 'P1', 'P2', 'P3', 'P4', 'P5', 'P6', 'P7', 'P8',
    'P9', 'R1', 'R2', 'R3', 'R4', 'R5', 'R6', 'R7', 'R8', 'R9', 'C1', 'C2', 'C3', 'C4', 'C5', 'C6', 'C7', 'C8', 'C9', 'L1', 'L2', 'L3',
    'L4', 'L5', 'L6', 'L7', 'L8', 'M1', 'M2', 'M3', 'M4', 'M5', 'M6', 'M7', 'M8', 'N1', 'N2', 'N3', 'N4', 'N5', 'N6', 'N7', 'N8', 'Q1',
    'Q2', 'Q3', 'Q5',
  ];

  msn = new Msn;
  taildetails: object = undefined;
  purposes: any;

  constructor(
    private databaseService: DatabaseService,
    private msnTailService: MsnTailService,
    private msnPurposeService: MsnPurposeService,
  ) {
    this.TAIL = this.msnTailService.TAIL;
    this.PURPOSE = this.msnPurposeService.PURPOSE;
    this.msn = this.databaseService.msn[0];
  }

  search = (text$: Observable<string>) =>
    text$
      .debounceTime(200)
      .distinctUntilChanged()
      .map(term => term.length < 2 ? []
        : this.tailsOnly(this.TAIL).filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10));

  ngOnInit() {
    this.msnGeneralForm = new FormGroup({
      'symbol': new FormControl(this.msn.symbol,
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(5),
          Validators.pattern('^[0-9a-zA-Z]+$'),
          this.symbolValid.bind(this)
        ]),
      'purpose': new FormControl(this.msn.purpose,
        [
          Validators.required,
          this.showMsnDecodeOptions.bind(this)
        ]),
      'auth': new FormControl(this.msn.auth, [
        Validators.required,
        Validators.minLength(7),
        Validators.maxLength(7),
        Validators.pattern('^[0-9-]+$')
      ]),
      'tail': new FormControl(this.msn.tail, [
        Validators.required,
        Validators.minLength(7),
        Validators.maxLength(8),
        Validators.pattern('^[0-9-]+$'),
        this.showTailDetail.bind(this)
      ]),
      'callsign': new FormControl(this.msn.callsign, [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(8),
        Validators.pattern('^[a-zA-Z0-9]+$')
      ]),
    });
  }

  showMsnDecodeOptions(control: FormControl) {
    const purposesarray = [];
    this.PURPOSE.forEach(element => {
      if (element.code === control.value) {
        purposesarray.push(element.purpose);
      }
    });
    this.purposes = purposesarray;
  }

  symbolValid(control: FormControl): { [s: string]: boolean } {
    if (this.SYMBOL.indexOf(control.value.substring(0, 2)) > 0) {
      return null;
    }
    return { 'symbolNotValid': true }
  }

  showTailDetail(control: FormControl) {
    // If no match is found control.value = -1... therefore we use the > 0 condition.
    if (this.tailsOnly(this.TAIL).indexOf(control.value) > 0) {
      this.taildetails = this.TAIL.find(x => x.tail === control.value);
    } else {
      this.taildetails = undefined;
    }
  }

  tailsOnly(taildb) {
    const tailOnlyArray = [];
    taildb.forEach(element => {
      tailOnlyArray.push(element.tail);
    });
    return tailOnlyArray;
  }

  stuff() {
  }
}
