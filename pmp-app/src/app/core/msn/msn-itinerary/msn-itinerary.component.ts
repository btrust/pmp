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
  msnDb = new Msn;

  constructor(
    private databaseService: DatabaseService,
  ) {
    this.msnDb = this.databaseService.msn;
  }

  ngOnInit() {
    this.msnItineraryForm = new FormGroup({
      'depICAO': new FormControl(this.msnDb.depICAO, [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(4),
        Validators.pattern('^[0-9a-zA-Z]+$')
      ]),
      'arrICAO': new FormControl(this.msnDb.arrICAO, [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(4),
        Validators.pattern('^[0-9a-zA-Z]+$')
      ]),
      'takeoffPln': new FormControl(this.msnDb.takeoffPln, [
        Validators.required,
      ]),
      'takeoffAct': new FormControl(this.msnDb.takeoffAct, [
        Validators.required,
      ]),
      'landPln': new FormControl(this.msnDb.landPln, [
        Validators.required,
      ]),
      'landAct': new FormControl(this.msnDb.landAct, [
        Validators.required,
      ]),
      'cargoPln': new FormControl(this.msnDb.cargoPln, [
        Validators.required,
      ]),
      'cargoAct': new FormControl(this.msnDb.cargoAct, [
        Validators.required,
      ]),
      'rampfuelPln': new FormControl(this.msnDb.rampfuelPln, [
        Validators.required,
      ]),
      'rampfuelAct': new FormControl(this.msnDb.rampfuelAct, [
        Validators.required,
      ]),
      'landfuelPln': new FormControl(this.msnDb.landfuelPln, [
        Validators.required,
      ]),
      'landfuelAct': new FormControl(this.msnDb.landfuelAct, [
        Validators.required,
      ]),
    });

  }

}
