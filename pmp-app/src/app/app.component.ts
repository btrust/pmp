import { Component } from '@angular/core';
import { AngularIndexedDbService } from './shared/services/angular-indexeddb.service';
import { DatabaseService } from './shared/services/database.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  startLoad: boolean = false;
  
  constructor(private databaseService: DatabaseService,
  private angularIndexedDb: AngularIndexedDbService,
  private router: Router) {
    this.angularIndexedDb.dbReady.subscribe(
      (status: boolean) => this.startLoad = true
    );
  }
}
