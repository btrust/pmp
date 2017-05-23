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
import { MsnSymbolService } from './../../../shared/services/msn-symbol.service';
import { Msn } from './../../../shared/models/msn';


@Component({
  selector: 'app-msn-general',
  templateUrl: './msn-general.component.html',
  styleUrls: ['./msn-general.component.css']
})
export class MsnGeneralComponent implements OnInit {
  msnGeneralForm: FormGroup;
  TAIL: any;
  PURPOSE: any;
  PURPOSE_EXPAND: any;
  PURPOSE_EXPAND_SELECT: any;
  SYMBOL: any;
  tailDetails: object;
  msnDb = new Msn;

  constructor(
    private databaseService: DatabaseService,
    private msnTailService: MsnTailService,
    private msnPurposeService: MsnPurposeService,
    private msnSymbolService: MsnSymbolService
   ) {
    this.TAIL = this.msnTailService.tailOnly();
    this.SYMBOL = this.msnSymbolService.SYMBOL;
    this.PURPOSE = this.msnPurposeService.PURPOSE;
    this.PURPOSE_EXPAND = this.msnPurposeService.PURPOSE_EXPAND;
    this.msnDb = this.databaseService.msn;
  }

  search = (text$: Observable<string>) =>
    text$
      .debounceTime(200)
      .distinctUntilChanged()
      .map(term => term.length < 2 ? []
        : this.TAIL.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10));

  ngOnInit() {
    this.msnGeneralForm = new FormGroup({
      'msnSymbol': new FormControl(this.msnDb.symbol,
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(5),
          Validators.pattern('^[0-9a-zA-Z]+$'),
          this.symbolValid.bind(this)
        ]),
      'msnPurpose': new FormControl(this.msnDb.purpose,
        [
          Validators.required,
          this.showMsnDecode.bind(this)
        ]),
      'msnAuth': new FormControl(this.msnDb.auth, [
        Validators.required,
        Validators.minLength(7),
        Validators.maxLength(7),
        Validators.pattern('^[0-9-]+$')
      ]),
      'msnTail': new FormControl(this.msnDb.tail, [
        Validators.required,
        Validators.minLength(7),
        Validators.maxLength(8),
        Validators.pattern('^[0-9-]+$'),
        this.setTailDetail.bind(this)
      ]),
      'msnCallsign': new FormControl(this.msnDb.callsign, [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(8),
        Validators.pattern('^[a-zA-Z0-9]+$')
      ]),
    });

  }

  symbolValid(control: FormControl): {[s: string]: boolean} {
    if (this.SYMBOL.indexOf(control.value.substring(0,2)) > 0) {
      return null;
    }
    return {'symbolNotValid': true}
  }

  setTailDetail(control: FormControl) {
    if(this.TAIL.indexOf(control.value)) {
     this.tailDetails = this.msnTailService.tailDetails(control.value);;
    } else {
      this.tailDetails = {};
    }
  }

  showMsnDecode(control: FormControl) {
    this.PURPOSE_EXPAND_SELECT = this.PURPOSE_EXPAND[control.value];
  }

}
