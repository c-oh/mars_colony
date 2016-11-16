import { Component, OnInit } from '@angular/core';
import {NewColonist, Job } from '../models';
import JobsService from '../services/jobs.service'
import {FormGroup, FormControl, FormBuilder, Validators, ValidatorFn, AbstractControl } from '@angular/forms';




@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [JobsService]
})
export class RegisterComponent implements OnInit {

colonist: NewColonist;
marsJobs: Job[];
registerForm: FormGroup;

NO_JOB_SELECTED = '(none)';


  constructor(jobService: JobsService) {
    jobService.getJobs().subscribe((jobs) => {
      this.marsJobs = jobs;
    }, (err)=> {
      console.log(err);
    });
   }

cantBe(value:string):ValidatorFn{
  return(control:AbstractControl):{[key: string]: any} => {
    return value === '(none)'? {'cant be none' :{value}} :null;
  };
}
  ngOnInit() {

    this.registerForm =new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(2)]),
      age: new FormControl('', [Validators.required, Validators.maxLength(3)]),
      job_id: new FormControl('none', [cantBe(this.NO_JOB_SELECTED)]),
    })
  }

  onSubmit(event){
    event.preventDefault();
  }

}

