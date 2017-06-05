import { NgbModalRef } from '@ng-bootstrap/ng-bootstrap/modal/modal.module';
import { Router } from '@angular/router';
import { Component, OnInit, OnChanges, ViewEncapsulation, Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Crw } from './../../../../shared/models/crw';
import { DatabaseService } from './../../../../shared/services/database.service';

@Injectable()

@Component({
  selector: 'app-add-msn-aircrew',
  templateUrl: './add-msn-aircrew.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./add-msn-aircrew.component.css']
})
export class AddMsnAircrewComponent implements OnInit {

  crw = new Crw;
  crwDb = new Array<Crw>();
  addCrewForm: FormGroup;
  NgbActiveModalService;

  constructor(
    private router: Router,
    private ngbActiveModal: NgbActiveModal,
    private databaseService: DatabaseService
  ) {
    this.crwDb = this.databaseService.crw;
  }

  ngOnInit() {
    this.addCrewForm = new FormGroup({
      'name': new FormControl('', Validators.required),
      'dodid': new FormControl('',
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(10),
          Validators.pattern('^[0-9]+$')
        ]),
      'position': new FormControl('',
        Validators.required),
      'squadron': new FormControl('', Validators.required),
    });
  }

  onSubmit() {
    if (!this.addCrewForm.valid) {
      if (!this.addCrewForm.get('position').valid) {
        this.addCrewForm.get('position').markAsTouched();
      }
      if (!this.addCrewForm.get('squadron').valid) {
        this.addCrewForm.get('squadron').markAsTouched();
      }
      if (!this.addCrewForm.get('name').valid) {
        this.addCrewForm.get('name').markAsTouched();
      }
      if (!this.addCrewForm.get('dodid').valid) {
        this.addCrewForm.get('dodid').markAsTouched();
      }
      alert('Enter valid data');
    } else {
      this.crw.dodid = this.addCrewForm.get('dodid').value;
      this.crw.name = this.addCrewForm.get('name').value;
      this.crw.numleg = ['', ''];
      this.crw.position = this.addCrewForm.get('position').value;
      this.crw.squadron = this.addCrewForm.get('squadron').value;
      this.crwDb.push(this.crw);
      this.ngbActiveModal.close();
    }
  }

}




