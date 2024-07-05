import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppService } from '../app.service';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit {

  public studentForm: FormGroup;

  public formData:any;
  constructor(private fb: FormBuilder, private appService : AppService) {
    this.studentForm = this.fb.group({
      firstName: [, [Validators.required]],
      middleName: [, [Validators.required]],
      lastName: [, [Validators.required]],
      rollNumber: [, [Validators.required]],
      gender: [, [Validators.required]],
    })
   }

   public title:any=[];
   public title2:any=[];
   
  ngOnInit() {
    
    console.log(this.appService.getDetails().subscribe(value=>{
      this.title=value
    }))


// share data between components using emiiter method
    this.appService.shareEmitter.subscribe(value=>{
      this.title2=value
      console.log(this.title2)
    })
  }

  formSubmit(){
    console.log(this.studentForm.value);
    this.formData = JSON.stringify(this.studentForm.value)
  } 


}
