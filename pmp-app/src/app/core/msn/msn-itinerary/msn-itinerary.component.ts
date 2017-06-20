import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { FormsModule } from '@angular/forms';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import { AngularIndexedDbService } from './../../../shared/services/angular-indexeddb.service';
import { DatabaseService } from './../../../shared/services/database.service';
import { Msn } from './../../../shared/models/msn';

@Component({
  selector: 'app-msn-itinerary',
  templateUrl: './msn-itinerary.component.html',
  styleUrls: ['./msn-itinerary.component.css']
})
export class MsnItineraryComponent implements OnInit {

  msnItineraryForm: FormGroup;
  msn= new Msn;

  constructor(
    private databaseService: DatabaseService,
  ) {
    this.msn = this.databaseService.msn[0];
  }

  ngOnInit() {
    this.msnItineraryForm = new FormGroup({
      'depICAO': new FormControl(this.msn.depICAO, [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(4),
        Validators.pattern('^[0-9a-zA-Z]+$')
      ]),
      'arrICAO': new FormControl(this.msn.arrICAO, [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(4),
        Validators.pattern('^[0-9a-zA-Z]+$')
      ]),
      'takeoffPln': new FormControl(this.msn.takeoffPln, [
        Validators.required,
      ]),
      'takeoffAct': new FormControl(this.msn.takeoffAct, [
        Validators.required,
      ]),
      'landPln': new FormControl(this.msn.landPln, [
        Validators.required,
      ]),
      'landAct': new FormControl(this.msn.landAct, [
        Validators.required,
      ]),
      'cargoPln': new FormControl(this.msn.cargoPln, [
        Validators.required,
      ]),
      'cargoAct': new FormControl(this.msn.cargoAct, [
        Validators.required,
      ]),
      'rampfuelPln': new FormControl(this.msn.rampfuelPln, [
        Validators.required,
      ]),
      'rampfuelAct': new FormControl(this.msn.rampfuelAct, [
        Validators.required,
      ]),
      'landfuelPln': new FormControl(this.msn.landfuelPln, [
        Validators.required,
      ]),
      'landfuelAct': new FormControl(this.msn.landfuelAct, [
        Validators.required,
      ]),
    });

  }

}

@Component({
  selector: 'ngbd-datepicker-popup',
  templateUrl: './msn-itinerary.component.html'
})
export class NgbdDatepickerPopup {
  model;
}

@Component({
  selector: 'ngbd-timepicker-basic',
  templateUrl: './msn-itinerary.component.html'
})
export class NgbdTimepickerBasic {
  time = {hour: 13, minute: 30};
}

