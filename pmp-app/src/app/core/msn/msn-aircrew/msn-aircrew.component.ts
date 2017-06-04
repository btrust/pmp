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
import { Crw } from './../../../shared/models/crw';

@Component({
  selector: 'app-msn-aircrew',
  templateUrl: './msn-aircrew.component.html',
  styleUrls: ['./msn-aircrew.component.css']
})
export class MsnAircrewComponent implements OnInit {

  msnAircrewForm: FormGroup;
  crwDb = new Array<Crw>();
  crw = new Crw;

  constructor(private databaseService: DatabaseService) {
    this.crwDb = this.databaseService.crw;
   }

  ngOnInit() {
    this.msnAircrewForm = new FormGroup({
      'dodid': new FormControl(this.crw.dodid,
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(10),
          Validators.pattern('^[0-9]+$')
        ]),
      'name': new FormControl(this.crw.name,
        [
          Validators.required
        ]),
      'position': new FormControl(this.crw.position, [
        Validators.required,
        Validators.minLength(7),
        Validators.maxLength(7),
        Validators.pattern('^[0-9-]+$')
      ]),
      'squadron': new FormControl(this.crw.squadron, [
        Validators.required
      ]),
    });

  }

  onSubmit() {
    console.log(this.msnAircrewForm);
  }

}
