import { Component, OnInit } from '@angular/core';
import AliensService from '../services/aliens.service';
import EncountersService from '../services/encounters.service';
import { FormGroup, FormControl, FormBuilder, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import{Alien} from '../models';
import {cantBe} from '../shared/validators';
import {Encounter, NewEncounter} from '../models';

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
      atype: new FormControl(this.NO_ALIEN_SELECTED, [cantBe(this.NO_ALIEN_SELECTED)]),
      action: new FormControl('',[Validators.required,Validators.maxLength(450)])
    })
  }

private getDate(){
  const date = new Date();
return `${date.getFullYear()}-${date.getMonth() +1} -${date.getDate()}`
}

onSubmit(event){
  event.preventDefault();
  const date = this.getDate();
  const atype = this.reportForm.get('atype').value;
  const action = this.reportForm.get('action').value;
  const encounter = new NewEncounter(date, atype, action, '4');

  this.encountersService.submitEncounter(encounter)
  .subscribe((enc) => {
    console.log('got encounter:',enc);
  }, (err) => {
    console.log('there was an error:', err);
  });
  
}
}
