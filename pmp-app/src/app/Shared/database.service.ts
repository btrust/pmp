import { Msn } from './msn';
import { Crw } from './crw';
import { Aar } from './aar';

export class DatabaseService {
  db: IDBDatabase;

  constructor() {

    const DBOpenRequest = indexedDB.open('msnDB', 1);

    DBOpenRequest.onsuccess = (e) => {
      this.db = DBOpenRequest.result;
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

      if (!this.db.objectStoreNames.contains('storeSetup')) {
        const setup = this.db.createObjectStore('storeSetup', { keyPath: 'id' });
      }
    };
  }

  addMission(msn: Msn) {

    let transaction = this.db.transaction(['storeMissions'], 'readwrite');
    let store = transaction.objectStore('storeMissions')
    let request = store.add(msn);

    request.onsuccess = (e) => {
      console.log('Added mission: ' + msn.numleg);
    };

    request.onerror = (e) => {
      alert('Mission/Leg already exists')
      console.log('Error', e.target);
    };
  }

  delMission(msn: Msn) {

    let transaction = this.db.transaction(["storeMissions"], "readwrite");
    let store = transaction.objectStore("storeMissions");
    let index = store.index('numleg');

    index.openCursor(msn.numleg).onsuccess = (e) => {
      let cursor: IDBDatabase = (<IDBOpenDBRequest>e.target).result;
      if (cursor) {
        let request = store.delete((<IDBOpenDBRequest>e.target).result.value.id);
        request.onsuccess = function (e) {
          console.log('Mission deleted');
        };
        request.onerror = function (e) {
          alert('Mission not deleted');
          console.log('Error', e.target);
        };
      } else {
        console.log('Mission not deleted: Could not be found')
      }
    };
    transaction.onerror = (e) => {
      console.log('Could not remove mission ' + msn.numleg);
    };
  }

  addCrewmember(msn: Msn, crw: Crw) {

    let transaction = this.db.transaction(["storeCrews"], "readwrite");
    let store = transaction.objectStore("storeCrews");
    crw.numleg = msn.numleg;
    let request = store.add(crw);

    request.onsuccess = (e) => {
      console.log(crw.name + ' added');
    };
    request.onerror = (e) => {
      console.log("Error", e.target);
    };
  }

  delCrewmember(id) {
    let transaction = this.db.transaction(["storeCrews"], "readwrite");
    let store = transaction.objectStore("storeCrews");
    let request = store.delete(id);
    request.onsuccess = (e) => {
      console.log('Crewmember ' + id + ' removed');

    };
    request.onerror = (e) => {
      console.log('Crewmember' + id + 'not removed');
    };
  }

  delCrewmemberAll(msn: Msn) {
    let transaction = this.db.transaction(["storeCrews"], "readwrite");
    let store = transaction.objectStore("storeCrews");
    let index = store.index('numleg');

    index.openCursor(msn.numleg).onsuccess = (e) => {
      let cursor: IDBCursorWithValue = (<IDBOpenDBRequest>e.target).result;
      if (cursor) {
        let request = store.delete(cursor.value.id);
        cursor.continue();
      }
    }
    index.openCursor().onerror = (e) => {
      console.log('Could not remove crew from' + msn.numleg);
    }
  }

  addAAR(msn: Msn, aar: Aar) {

    console.log('Adding aarEvent to ' + msn.numleg[0] + " Leg " + msn.numleg[1]);
    let transaction = this.db.transaction(["storeAARs"], "readwrite");
    let store = transaction.objectStore("storeAARs");
    aar.numleg = msn.numleg;
    let request = store.add(aar);

    request.onsuccess = (e) => {
      console.log('AAR added');
    };
    request.onerror = (e) => {
      console.log('Error', e.target);
    };
  }

  delAAR(aarId) {
    let transaction = this.db.transaction(["storeAARs"], "readwrite");
    let store = transaction.objectStore("storeAARs");
    var request = store.delete(aarId);
    request.onsuccess = (e) => {
      console.log('AR event' + aarId + 'removed');
      // Need something to delete all receivers too
    };
    request.onerror = (e) => {
      console.log('Crewmember' + aarId + 'not removed');
    };
  }

  delAARAll(msn: Msn) {
    let transaction = this.db.transaction(["storeAARs"], "readwrite");
    let store = transaction.objectStore("storeAARs");
    let index = store.index('numleg');

    index.openCursor(msn.numleg).onsuccess = (e) => {
      let cursor: IDBCursorWithValue = (<IDBOpenDBRequest>e.target).result;
      if (cursor) {
        let request = store.delete(cursor.value.id);
        cursor.continue();
      }
    };
    index.openCursor(msn.numleg).onerror = (e) => {
      console.log('Could not remove AAR event ');
    };
  }

  delRcvr(rcvrId) {
    let transaction = this.db.transaction(["storeReceivers"], "readwrite");
    let store = transaction.objectStore("storeReceivers");
    let request = store.delete(rcvrId);
    request.onsuccess = (e) => {
    };
    request.onerror = (e) => {
      console.log("Error", e.target);
    };
  }

  delRcvrAll(aarId) {
    let transaction = this.db.transaction(["storeReceivers"], "readwrite");
    let store = transaction.objectStore("storeReceivers");
    let index = store.index('aarId');

    index.openCursor(aarId).onsuccess = (e) => {
      let cursor: IDBCursorWithValue = (<IDBOpenDBRequest>e.target).result;
      if (cursor) {
        let request = store.delete(cursor.value.id);
        cursor.continue();
      }
    };
    index.openCursor(aarId).onerror = (e) => {
      console.log('Could not remove receivers');
    };
  }

}
