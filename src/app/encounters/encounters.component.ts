import { Component, OnInit } from '@angular/core';
import { Encounter } from '../models'
import EncounterService from '../services/encounters.service';

@Component({
  selector: 'app-encounter',
  templateUrl: './encounters.component.html',
  styleUrls: ['./encounters.component.css'],
  providers: [EncounterService]
})
export class EncountersComponent implements OnInit {
  encounterList: Encounter[];
  constructor(encounterService: EncounterService) {
    encounterService.getEncounters().subscribe((encounters) => {
      this.encounterList = encounters;
      console.log(encounters);
    })
   }
  ngOnInit() {
  }
}