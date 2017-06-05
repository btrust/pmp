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
      'name': new FormControl(this.configDb.name, Validators.required),
      'dodid': new FormControl(this.configDb.dodid,
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(10),
          Validators.pattern('^[0-9]+$')
        ]),
      'position': new FormControl(this.configDb.position,
        Validators.required),
      'squadron': new FormControl(this.configDb.squadron, Validators.required),
    });
  }

  onSubmit() {
    if (!this.configForm.valid) {
      if (!this.configForm.get('position').valid) {
        this.configForm.get('position').markAsTouched();
      }
      if (!this.configForm.get('squadron').valid) {
        this.configForm.get('squadron').markAsTouched();
      }
      if (!this.configForm.get('name').valid) {
        this.configForm.get('name').markAsTouched();
      }
      if (!this.configForm.get('dodid').valid) {
        this.configForm.get('dodid').markAsTouched();
      }
      alert('Enter valid data.');
    } else {
      this.configDb.name = this.configForm.get('name').value;
      this.configDb.dodid = this.configForm.get('dodid').value;
      this.configDb.position = this.configForm.get('position').value;
      this.configDb.squadron = this.configForm.get('squadron').value;
      console.log('Edited config');
      this.router.navigate(['']);
      this.ngbActiveModal.close();
    };
  }
}
