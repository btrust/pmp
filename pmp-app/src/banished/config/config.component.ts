import { Router } from '@angular/router';
import { Component, OnInit, OnChanges } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AngularIndexedDbService } from './../../../shared/services/angular-indexeddb.service';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css']
})
export class ConfigComponent implements OnInit {

  configForm: FormGroup;
  t1 = '';

  constructor(private angularIndexedDb: AngularIndexedDbService, private router: Router) {
}

  ngOnInit() {
    this.configForm = new FormGroup({
      'userName': new FormControl(this.t1, Validators.required),
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


  // getValues(): void {
  //       const transaction = this.angularIndexedDb.db.transaction(['storeConfig'], 'readonly');
  //       const store = transaction.objectStore('storeConfig');
  //       const request = store.get(1);
  //       request.onsuccess = (e) => {
  //           this.t1 = request.result.name;
  //           console.log(request.result.name);
  //       };
  //       request.onerror = (e) => {
  //           console.log('miss');
  //       };
  // }

  onSubmit() {
    // this.getValues();
    if (!this.configForm.valid) {
      this.configForm.get('userPosition').markAsTouched;
      // alert('Enter valid data.');
    } else {
      console.log(this.configForm.value);
      console.log('Form Submitted');
      // this.angularIndexedDb.addConfig(this.configForm.value);
      this.router.navigate(['']);
    }
  }

}
