import { Component, OnInit } from '@angular/core';
import AliensService from '../services/aliens.service';
import EncountersService from '../services/encounters.service';

import{Alien} from '../models';
@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})

export class ReportComponent implements OnInit {

aliensList:Alien[];

  constructor(private aliensService: AliensService,
  private encountersService: EncountersService) { 

    aliensService.getAliens().subscribe((aliens) => {
      this.aliensList = aliens;
    }, (err) =>{
      console.log(err);
    });
  }

  ngOnInit() {
  }

}
