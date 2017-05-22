import { Routes, Router, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';

import { AngularIndexedDbService } from './shared/services/angular-indexeddb.service';
import { DatabaseService } from './shared/services/database.service';

import { ConfigComponent } from './core/header/config/config.component';
import { NewMsnComponent } from './core/header/new-msn/new-msn.component';
import { HomeComponent } from './core/home/home.component';
import { HeaderComponent } from './core/header/header.component';
import { MsnGeneralComponent } from './core/msn/msn-general/msn-general.component';
import { MsnAircrewComponent } from './core/msn/msn-aircrew/msn-aircrew.component';
import { MsnItineraryComponent } from './core/msn/msn-itinerary/msn-itinerary.component';
import { MsnComponent } from './core/msn/msn.component';

const appRoutes: Routes = [
  // { path: '**', redirectTo: ''},
  { path: 'config', component: ConfigComponent },

];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ConfigComponent,
    NewMsnComponent,
    HeaderComponent,
    MsnGeneralComponent,
    MsnAircrewComponent,
    MsnItineraryComponent,
    MsnComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    NgbModule.forRoot(),
  ],
  providers: [AngularIndexedDbService, DatabaseService, NgbActiveModal],
  bootstrap: [AppComponent],
  entryComponents: [NewMsnComponent, ConfigComponent]
})
export class AppModule { }
