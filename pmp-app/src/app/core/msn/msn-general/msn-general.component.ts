import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AngularIndexedDbService } from './../../../shared/services/angular-indexeddb.service';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-msn-general',
  templateUrl: './msn-general.component.html',
  styleUrls: ['./msn-general.component.css']
})
export class MsnGeneralComponent implements OnInit {
generalMsnForm: FormGroup;
  constructor() { }

  ngOnInit() {
    
    this.generalMsnForm = new FormGroup({
       'msnSymbol': new FormControl('',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(5),
          Validators.pattern('^[a-zA-Z]+$')
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
