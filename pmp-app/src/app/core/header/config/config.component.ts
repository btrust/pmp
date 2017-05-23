import { NgbModalRef } from '@ng-bootstrap/ng-bootstrap/modal/modal.module';
import { Router } from '@angular/router';
import { Component, OnInit, OnChanges, ViewEncapsulation, Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AngularIndexedDbService } from './../../../shared/services/angular-indexeddb.service';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Config } from './../../../shared/models/config';
import { DatabaseService } from './../../../shared/services/database.service';

@Injectable()

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./config.component.css']
})
export class ConfigComponent implements OnInit {
  configDb: Config;
  configForm: FormGroup;
  NgbActiveModalService;

  constructor(
    private angularIndexedDbService: AngularIndexedDbService,
    private router: Router,
    private ngbActiveModal: NgbActiveModal,
    private databaseService: DatabaseService
    ) {
    this.configDb = this.databaseService.config;
  }

  ngOnInit() {
    this.configForm = new FormGroup({
      'userName': new FormControl(this.configDb.name, Validators.required),
      'userDodid': new FormControl(this.configDb.dodid,
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(10),
          Validators.pattern('^[0-9]+$')
        ]),
      'userPosition': new FormControl(this.configDb.position,
        Validators.required),
      'userSquadron': new FormControl(this.configDb.squadron, Validators.required),
    });
  }

  onSubmit() {
    if (!this.configForm.valid) {
      if (!this.configForm.get('userPosition').valid) {
        this.configForm.get('userPosition').markAsTouched();
      }
      if (!this.configForm.get('userSquadron').valid) {
        this.configForm.get('userSquadron').markAsTouched();
      }
      if (!this.configForm.get('userName').valid) {
        this.configForm.get('userName').markAsTouched();
      }
      if (!this.configForm.get('userDodid').valid) {
        this.configForm.get('userDodid').markAsTouched();
      }
      alert('Enter valid data.');
    } else {
      this.configDb.name = this.configForm.get('userName').value;
      this.configDb.dodid = this.configForm.get('userDodid').value;
      this.configDb.position = this.configForm.get('userPosition').value;
      this.configDb.squadron = this.configForm.get('userSquadron').value;
      console.log('Edited config');
      this.router.navigate(['']);
      this.ngbActiveModal.close();
    };
  }
}
