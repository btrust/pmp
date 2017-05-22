import { Router } from '@angular/router';
import { Component, OnInit, OnChanges, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AngularIndexedDbService } from '../../../shared/services/angular-indexeddb.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-config',
  templateUrl: './config-modal.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./config-modal.component.css']
})

export class ConfigModalComponent implements OnInit {
  closeResult: string;
  configForm: FormGroup;
  constructor(private modalService: NgbModal, private angularIndexedDb: AngularIndexedDbService, private router: Router) {
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
      // console.log('Form Submitted');
      // this.angularIndexedDb.addConfig(this.configForm.value);
      this.router.navigate(['']);
    }
  }

  open(content) {
    console.log(content);
    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
}

