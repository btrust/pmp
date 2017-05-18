import { Component } from '@angular/core';
import { DatabaseService } from './Shared/database.service';
import { Crw } from './Shared/crw';
import { Msn } from './Shared/msn';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  constructor(private databaseService: DatabaseService) {

  }
  onMissionDelete(incoming) {
    let mission = new Msn;
    mission.numleg = incoming;
    this.databaseService.delMission(mission);
  }

  onMissionAdd(incoming) {
    let mission = new Msn;
    mission.numleg = incoming;
    this.databaseService.addMission(mission);
  }

  onCrewmemberAdd(incoming , chacha) {
    let crewmember = new Crw;
    crewmember.name = chacha;
    let mission = new Msn;
    mission.numleg = incoming;
    this.databaseService.addCrewmember(mission, crewmember);
  }
  onCrewmemberDeleteAll(numlegz) {
    let mish = new Msn;
    mish.numleg = numlegz;
    this.databaseService.delCrewmemberAll(mish);
  }
}
