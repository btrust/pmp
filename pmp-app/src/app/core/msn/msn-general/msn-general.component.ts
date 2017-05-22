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
msnGeneralForm: FormGroup;
PURPOSE = [
    ['AE', 'AEROMEDICAL_EVACUATION'],
    ['AFRC', 'AFRC'],
    ['AIREV', 'AEROMEDICAL_EVACUATION', 'ANG'],
    ['AR', 'EXECUTIVE_AIRCRAFT_SPECIAL_AIR_MISSION'],
    ['AREXER', 'CONTINGENCY_OPLAN_EXCERCISE'],
    ['CHANL', 'CHANNEL'],
    ['CNTNG', 'TANKER_AIR_REFUELING', 'CONTINGENCY_OPLAN_EXCERCISE'],
    ['CORNET', 'EXECUTIVE_AIRCRAFT_SPECIAL_AIR_MISSION'],
    ['EXER', 'TANKER_AIR_REFUELING', 'CONTINGENCY_OPLAN_EXCERCISE'],
    ['GRDLFT', 'ANG'],
    ['JAATT', 'JOINT_AIRBORNE_AIR_TRANSPORT_TRANING'],
    ['JCSEXER', 'CONTINGENCY_OPLAN_EXERCISE'],
    ['MISC', 'MISC'],
    ['OPLAN', 'CONTINGENCY_OPLAN_EXERCISE'],
    ['OPORD', 'CONTINGENCY_OPLAN_EXERCISE'],
    ['SAAM', 'SPECIAL_ASSIGNMENT_AIRLIFT_MISSION'],
    ['SAM', 'EXECUTIVE_AIRCRAFT_SPECIAL_AIR_MISSION'],
    ['SUPT', 'OPERATIONAL_SUPPORT_AIRLIFT', 'EXECUTIVE_AIRCRAFT_SPECIAL_AIR_MISSION', 'ANG', 'AFSOC'],
    ['TRNG', 'LOCAL_TRAINING', 'EXECUTIVE_AIRCRAFT_SPECIAL_AIR_MISSION', 'ANG']
];
  constructor() {


   }

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
