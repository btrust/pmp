import { NgbModalRef } from '@ng-bootstrap/ng-bootstrap/modal/modal.module';
import { Router } from '@angular/router';
import { Component, OnInit, OnChanges, ViewEncapsulation, Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AngularIndexedDbService } from './../../../shared/services/angular-indexeddb.service';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Config } from './../../../shared/models/config';

@Injectable()

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./config.component.css']
})
export class ConfigComponent implements OnInit {

  configForm: FormGroup;
  NgbActiveModalService;

  constructor(private angularIndexedDbService: AngularIndexedDbService, private router: Router, private ngbActiveModal: NgbActiveModal) {
  }

  ngOnInit() {

    this.configForm = new FormGroup({
      'userName': new FormControl('', Validators.required),
      'userDodid': new FormControl('',
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(10),
          Validators.pattern('^[0-9]+$')
        ]),
      'userPosition': new FormControl('',
        Validators.required),
      'userSquadron': new FormControl('', Validators.required),
    });

    this.getValues();
  }

  getValues(): void {
        const transaction = this.angularIndexedDbService.db.transaction(['storeConfig'], 'readonly');
        const store = transaction.objectStore('storeConfig');
        const request = store.get(1);
        request.onsuccess = (e) => {
           this.configForm.setValue({
             userName: request.result.name,
             userDodid: request.result.dodid,
             userPosition: request.result.position,
             userSquadron: request.result.squadron,
           });
           };
        request.onerror = (e) => {
            console.log('miss');
        };
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

      const transaction = this.angularIndexedDbService.db.transaction(['storeConfig'], 'readwrite');
      const store = transaction.objectStore('storeConfig');
      const request = store.get(1);

      request.onsuccess = (e) => {
        let data = (<IDBOpenDBRequest>e.target).result;
        data.name = this.configForm.get('userName').value;
        data.dodid = this.configForm.get('userDodid').value;
        data.position = this.configForm.get('userPosition').value;
        data.squadron = this.configForm.get('userSquadron').value;
        let requestUpdate = store.put(data);
        console.log('Edited config');
        this.router.navigate(['']);
        this.ngbActiveModal.close();
      };
      request.onerror = (e) => {
        alert('Something went wrong...')
        console.log('Error', e.target);
      };
    }
  }
}
