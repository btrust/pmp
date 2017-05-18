import { Component, OnInit, OnChanges } from '@angular/core';
import { Crw } from '../Shared/crw';
import { DatabaseService } from '../Shared/database.service';

@Component({
  selector: 'app-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.css']
})
export class SetupComponent implements OnInit {
  constructor(private databaseSevice: DatabaseService) { }

  ngOnInit() {
  }

}
