import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Msn } from './../../../shared/models/msn';
import { AngularIndexedDbService } from './../../../shared/services/angular-indexeddb.service';

@Component({
  selector: 'app-new-msn',
  templateUrl: './new-msn.component.html',
  styleUrls: ['./new-msn.component.css']
})
export class NewMsnComponent implements OnInit {
  newMsnForm: FormGroup;
  constructor(private router: Router, private angularIndexedDbService: AngularIndexedDbService, private ngbActiveModal: NgbActiveModal) { }

  ngOnInit() {
    this.newMsnForm = new FormGroup({
      'msnNumber': new FormControl('', [
        Validators.required,
        Validators.minLength(12),
        Validators.maxLength(12),
        Validators.pattern('^[0-9a-zA-Z]+$')
      ]),
      'msnLeg': new FormControl(1,
        [
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(1),
          Validators.pattern('^[0-9]+$')
        ]),
    });
  }

  onSubmit() {
    if (!this.newMsnForm.valid) {
      this.newMsnForm.get('msnNumber').markAsTouched;
      alert('Enter valid data.');
    } else {
      let msn = new Msn;
      msn.numleg = [this.newMsnForm.get('msnNumber').value, this.newMsnForm.get('msnLeg').value];

      const transaction = this.angularIndexedDbService.db.transaction(['storeMissions'], 'readwrite');
      const store = transaction.objectStore('storeMissions');
      const request = store.add(msn);

      request.onsuccess = (e) => {
        console.log('Added mission: ' + msn.numleg);
        this.router.navigate(['']);
        this.ngbActiveModal.close();
      };

      request.onerror = (e) => {
        alert('Mission/Leg already exists')
        console.log('Error', e.target);
      };
    }
  }
}
