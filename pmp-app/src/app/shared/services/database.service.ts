import { Injectable } from '@angular/core';
import { Msn } from './../models/msn';
import { Crw } from './../models/crw';
import { Aar } from './../models/aar';
import { Rcvr } from './../models/rcvr';
import { Config } from './../models/config';
import { AngularIndexedDbService } from './../services/angular-indexeddb.service';

@Injectable()
export class DatabaseService {

    config = new Config;
    msn = new Array<Msn>();
    crw = new Array<Crw>();
    aar = new Array<Aar>();
    rcvr = new Array<Rcvr>();

    constructor(
        private angularIndexedDbService: AngularIndexedDbService
        ) {

        this.msn.push(new Msn);
        this.msn[0].arrICAO = 'KSKA';
        this.msn[0].arrICAO = 'RODN';
        this.msn[0].auth = '17-9999';
        this.msn[0].callsign = 'ROBOT11';
        this.msn[0].cargoAct = 1;
        this.msn[0].cargoPln = 0;
        this.msn[0].purpose = 'TRNG';
        this.msn[0].symbol = 'T3MA';
        this.msn[0].tail = '57-1454';
        this.crw.push(new Crw);
        this.crw.push(new Crw);
        this.crw.push(new Crw);
        this.crw[0].name = 'Fuck Face';
        this.crw[0].dodid = '1234567890';
        this.crw[0].position = 'FPNC';
        this.crw[0].squadron = '92';

        this.crw[1].name = 'Tiger Woods';
        this.crw[1].dodid = '1234567890';
        this.crw[1].position = 'IP';
        this.crw[1].squadron = '384';

        this.crw[2].name = 'Jack Nicholas';
        this.crw[2].dodid = '1234567890';
        this.crw[2].position = 'CP';
        this.crw[2].squadron = '93';

        this.angularIndexedDbService.dbReady.subscribe(
            (status: boolean) => {
                if (status) {
                    this.loadConfig();
                }
            });
    }

    loadConfig() {
        const transaction = this.angularIndexedDbService.db.transaction(['storeConfig'], 'readonly');
        const store = transaction.objectStore('storeConfig');
        const request = store.get(1);

        request.onsuccess = (e) => {
            const data = (<IDBOpenDBRequest>e.target).result;
            this.config.name = data.name;
            this.config.dodid = data.dodid;
            this.config.position = data.position;
            this.config.squadron = data.squadron;
        };
        request.onerror = (e) => {
            alert('Something went wrong...')
            console.log('Error', e.target);
        };
        this.msn[0].symbol = 'T3ZA';
        this.msn[0].callsign = 'Fack';
        console.log(this.msn[0].symbol);
    }

}