import { Injectable, EventEmitter } from '@angular/core';
import { Msn } from './../models/msn';
import { Crw } from './../models/crw';
import { Aar } from './../models/aar';
import { Rcvr } from './../models/rcvr';
import { HeaderComponent } from './../../core/header/header.component';
import { DatabaseService } from './database.service';

@Injectable()
export class AngularIndexedDbService {

    db: IDBDatabase;
    dbReady = new EventEmitter<boolean>();
    msn: Msn;
    constructor(private databaseService: DatabaseService) {
        let msn = this.databaseService.msn;

        const DBOpenRequest = indexedDB.open('msnDB', 1);

        DBOpenRequest.onsuccess = (e) => {
            this.db = DBOpenRequest.result;
            this.dbReady.emit(true);
            console.log('Database successfully opened');
        };

        DBOpenRequest.onerror = (e) => {
            console.log('Error: Could not open database');
        };

        DBOpenRequest.onupgradeneeded = (e) => {

            this.db = DBOpenRequest.result;

            if (!this.db.objectStoreNames.contains('storeMissions')) {
                const missions = this.db.createObjectStore('storeMissions', { keyPath: 'id', autoIncrement: true });
                missions.createIndex('numleg', 'numleg', { unique: true });
            }
            if (!this.db.objectStoreNames.contains('storeCrews')) {
                const crews = this.db.createObjectStore('storeCrews', { keyPath: 'id', autoIncrement: true });
                crews.createIndex('numleg', 'numleg');
            }

            if (!this.db.objectStoreNames.contains('storeAARs')) {
                const aars = this.db.createObjectStore('storeAARs', { keyPath: 'id', autoIncrement: true });
                aars.createIndex('numleg', 'numleg');
            }

            if (!this.db.objectStoreNames.contains('storeReceivers')) {
                const receivers = this.db.createObjectStore('storeReceivers', { keyPath: 'id', autoIncrement: true });
                receivers.createIndex('numleg', 'numleg');
                receivers.createIndex('aarId', 'aarId');
            }

            if (!this.db.objectStoreNames.contains('storePosts')) {
                const posts = this.db.createObjectStore('storePosts', { keyPath: 'id', autoIncrement: true });
            }

            if (!this.db.objectStoreNames.contains('storeConfig')) {
                const config = this.db.createObjectStore('storeConfig', { keyPath: 'id' });
                config.add({ id: 1, dodid: '', name: '', position: '', squadron: '', numleg: [], lastview: '' });
            }
        };
    }

    addMission(msn: Msn) {
        const transaction = this.db.transaction(['storeMissions'], 'readwrite');
        const store = transaction.objectStore('storeMissions');
        const request = store.add(msn);
        request.onsuccess = (e) => {
            console.log('Added mission: ' + msn.numleg);
        };
        request.onerror = (e) => {
            alert('Mission/Leg already exists')
            console.log('Error', e.target);
        };
    }

    delMission(msn: Msn) {
        const transaction = this.db.transaction(['storeMissions'], 'readwrite');
        const store = transaction.objectStore('storeMissions');
        const index = store.index('numleg');

        index.openCursor(msn.numleg).onsuccess = (e) => {
            const cursor: IDBDatabase = (<IDBOpenDBRequest>e.target).result;
            if (cursor) {
                const request = store.delete((<IDBOpenDBRequest>e.target).result.value.id);
                request.onsuccess = function (e) {
                    console.log('Mission deconsted');
                };
                request.onerror = function (e) {
                    alert('Mission not deconsted');
                    console.log('Error', e.target);
                };
            } else {
                console.log('Mission not deconsted: Could not be found')
            }
        };
        transaction.onerror = (e) => {
            console.log('Could not remove mission ' + msn.numleg);
        };
    }

    addCrewmember(msn: Msn, crw: Crw) {
        const transaction = this.db.transaction(['storeCrews'], 'readwrite');
        const store = transaction.objectStore('storeCrews');
        crw.numleg = msn.numleg;
        const request = store.add(crw);

        request.onsuccess = (e) => {
            console.log(crw.name + ' added');
        };
        request.onerror = (e) => {
            console.log('Error', e.target);
        };
    }

    delCrewmember(id) {
        const transaction = this.db.transaction(['storeCrews'], 'readwrite');
        const store = transaction.objectStore('storeCrews');
        const request = store.delete(id);
        request.onsuccess = (e) => {
            console.log('Crewmember ' + id + ' removed');

        };
        request.onerror = (e) => {
            console.log('Crewmember' + id + 'not removed');
        };
    }

    delCrewmemberAll(msn: Msn) {
        const transaction = this.db.transaction(['storeCrews'], 'readwrite');
        const store = transaction.objectStore('storeCrews');
        const index = store.index('numleg');

        index.openCursor(msn.numleg).onsuccess = (e) => {
            const cursor: IDBCursorWithValue = (<IDBOpenDBRequest>e.target).result;
            if (cursor) {
                const request = store.delete(cursor.value.id);
                cursor.continue();
            }
        }
        index.openCursor().onerror = (e) => {
            console.log('Could not remove crew from' + msn.numleg);
        }
    }

    addAAR(msn: Msn, aar: Aar) {
        console.log('Adding aarEvent to ' + msn.numleg[0] + ' Leg ' + msn.numleg[1]);
        const transaction = this.db.transaction(['storeAARs'], 'readwrite');
        const store = transaction.objectStore('storeAARs');
        aar.numleg = msn.numleg;
        const request = store.add(aar);

        request.onsuccess = (e) => {
            console.log('AAR added');
        };
        request.onerror = (e) => {
            console.log('Error', e.target);
        };
    }

    delAAR(aarId) {
        const transaction = this.db.transaction(['storeAARs'], 'readwrite');
        const store = transaction.objectStore('storeAARs');
        var request = store.delete(aarId);

        request.onsuccess = (e) => {
            console.log('AR event' + aarId + 'removed');
            // Need something to deconste all receivers too
        };
        request.onerror = (e) => {
            console.log('Crewmember' + aarId + 'not removed');
        };
    }

    delAARAll(msn: Msn) {
        const transaction = this.db.transaction(['storeAARs'], 'readwrite');
        const store = transaction.objectStore('storeAARs');
        const index = store.index('numleg');

        index.openCursor(msn.numleg).onsuccess = (e) => {
            const cursor: IDBCursorWithValue = (<IDBOpenDBRequest>e.target).result;
            if (cursor) {
                const request = store.delete(cursor.value.id);
                cursor.continue();
            }
        };
        index.openCursor(msn.numleg).onerror = (e) => {
            console.log('Could not remove AAR event ');
        };
    }

    delRcvr(rcvrId) {
        const transaction = this.db.transaction(['storeReceivers'], 'readwrite');
        const store = transaction.objectStore('storeReceivers');
        const request = store.delete(rcvrId);

        request.onsuccess = (e) => {
        };
        request.onerror = (e) => {
            console.log('Error', e.target);
        };
    }

    delRcvrAll(aarId) {
        const transaction = this.db.transaction(['storeReceivers'], 'readwrite');
        const store = transaction.objectStore('storeReceivers');
        const index = store.index('aarId');

        index.openCursor(aarId).onsuccess = (e) => {
            const cursor: IDBCursorWithValue = (<IDBOpenDBRequest>e.target).result;
            if (cursor) {
                const request = store.delete(cursor.value.id);
                cursor.continue();
            }
        };
        index.openCursor(aarId).onerror = (e) => {
            console.log('Could not remove receivers');
        };
    }

    addConfig(configForm): void {
        const transaction = this.db.transaction(['storeConfig'], 'readwrite');
        const store = transaction.objectStore('storeConfig');
        const request = store.get(1);
        request.onsuccess = (e) => {
            let data = (<IDBOpenDBRequest>e.target).result;
            data.name = configForm.userName;
            data.dodid = configForm.userDodid;
            data.position = configForm.userPosition;
            data.squadron = configForm.userSquadron;
            let requestUpdate = store.put(data);
        };
        request.onerror = (e) => {
        };
    }

    getConfig(): any {
        const transaction = this.db.transaction(['storeConfig'], 'readonly');
        const store = transaction.objectStore('storeConfig');
        const request = store.get(1);
        request.onsuccess = (e) => {
            if (request.result.name) {
                console.log(request.result.name);
            } else {
                alert('sup');
            }
        };
        request.onerror = (e) => {
        };
    }

    getByKey() {
        let promise = new Promise<any>((resolve, reject) => {
            const transaction: IDBTransaction = this.db.transaction(['storeConfig'], 'readonly');
            const store = transaction.objectStore('storeConfig');
            const request = store.get(1);
            request.onsuccess = function (event: Event) {
                resolve((<IDBOpenDBRequest>event.target).result);
            };
        });
        return promise;
    }


}