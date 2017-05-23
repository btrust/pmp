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
    msn = new Msn;
    crw = new Array<Crw>();
    Aar = new Array<Aar>();
    Rcvr = new Array<Rcvr>();

    constructor(private angularIndexedDbService: AngularIndexedDbService) {
        this.angularIndexedDbService.dbReady.subscribe(
            (status: boolean) => {if (status){
                this.loadConfig();}
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
    }

}