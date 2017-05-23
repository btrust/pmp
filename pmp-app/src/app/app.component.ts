import { Component } from '@angular/core';
import { AngularIndexedDbService } from './shared/services/angular-indexeddb.service';
import { DatabaseService } from './shared/services/database.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})

export class AppComponent {

  constructor(
    private angularIndexedDb: AngularIndexedDbService,
    private databaseService: DatabaseService,
    private router: Router
  ) {
  }
}