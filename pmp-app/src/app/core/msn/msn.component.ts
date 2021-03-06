import { MsnTailService } from '../../shared/services/msn-tail.service';
import { MsnPurposeService } from '../../shared/services/msn-purpose.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-msn',
  templateUrl: './msn.component.html',
  styleUrls: ['./msn.component.css'],
  providers: [MsnPurposeService, MsnTailService]
})
export class MsnComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
