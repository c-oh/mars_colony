import { Component, OnInit } from '@angular/core';
import AliensService from '../services/aliens.service';
import EncountersService from '../services/encounters.service';
import { FormGroup, FormControl, FormBuilder, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import{Alien} from '../models';
@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css'],
  providers: [AliensService, EncountersService]
})

export class ReportComponent implements OnInit {

aliensList:Alien[];
NO_ALIEN_SELECTED = '(none)';
reportForm: FormGroup;

  constructor(private aliensService: AliensService,
  private encountersService: EncountersService) { 

    aliensService.getAliens().subscribe((aliens) => {
      this.aliensList = aliens;
    }, (err) =>{
      console.log(err);
    });
  }

  ngOnInit() {
    this.reportForm= new FormGroup({
      atype: new FormControl(this.NO_ALIEN_SELECTED, []),
      action: new FormControl('',[Validators.required,Validators.maxLength(450)])
    })
  }

}
