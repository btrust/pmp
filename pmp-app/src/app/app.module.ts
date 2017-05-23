import { AngularIndexedDbService } from './shared/services/angular-indexeddb.service';
import { DatabaseService } from './shared/services/database.service';

import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Routes, Router, RouterModule } from '@angular/router';

import { TailService } from './shared/services/tail.service';

import { HeaderComponent } from './core/header/header.component';
import { ConfigComponent } from './core/header/config/config.component';
import { NewMsnComponent } from './core/header/new-msn/new-msn.component';
import { HomeComponent } from './core/home/home.component';
import { NgbdTypeaheadBasic } from './shared/components/typeahead-basic.component';

import { MsnComponent } from './core/msn/msn.component';
import { MsnGeneralComponent } from './core/msn/msn-general/msn-general.component';
import { MsnAircrewComponent } from './core/msn/msn-aircrew/msn-aircrew.component';
import { MsnItineraryComponent } from './core/msn/msn-itinerary/msn-itinerary.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'config', component: ConfigComponent },
  {
    path: 'msn', component: MsnComponent, children: [
      { path: 'general', component: MsnGeneralComponent },
      { path: 'aircrew', component: MsnAircrewComponent },
      { path: 'itinerary', component: MsnItineraryComponent },
    ]
  },

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
    MsnComponent,
    NgbdTypeaheadBasic

  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    NgbModule.forRoot(),
  ],
  providers: [AngularIndexedDbService, NgbActiveModal, NgbdTypeaheadBasic, TailService, DatabaseService],
  bootstrap: [AppComponent],
  entryComponents: [NewMsnComponent, ConfigComponent]
})
export class AppModule { }
