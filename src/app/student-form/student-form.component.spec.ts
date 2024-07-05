import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentFormComponent } from './student-form.component';
import { ReactiveFormsModule } from '@angular/forms';


describe('StudentFormComponent', () => {
  let component: StudentFormComponent;
  let fixture: ComponentFixture<StudentFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentFormComponent ],
      imports:[ReactiveFormsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("should validate form Filed of first Name",()=>{
    let firstName = component.studentForm.controls['firstName'];
    expect(firstName.valid).toBeFalsy();
    // expect(firstName.errors['required']).toBeTruthy()
  });

  it("should validate form Filed of middle Name",()=>{
    let middleName = component.studentForm.controls['middleName'];
    expect(middleName.valid).toBeFalsy();
  });

  it("should validate form Filed of last Name",()=>{
    let lastName = component.studentForm.controls['lastName'];
    expect(lastName.valid).toBeFalsy();
  });

  it("should validate form Filed of rollNumber",()=>{
    let rollNumber = component.studentForm.controls['rollNumber'];
    console.log("rollNumber",rollNumber)
    expect(rollNumber.valid).toBeFalsy();
    expect(rollNumber.getError('required')).toBeTruthy()
  });

  it("should validate form Filed of gender",()=>{
    let gender = component.studentForm.controls['gender'];
    expect(gender.valid).toBeFalsy();
    expect(gender.status=="INVALID").toBeTruthy();
  });


  
  it("should validate form submit",()=>{
    // let element = fixture.debugElement.nativeElement.querySelector(By.css('button'));
    component.studentForm.controls['firstName'].setValue('Giri')
    component.studentForm.controls['middleName'].setValue('Babu')
    component.studentForm.controls['lastName'].setValue('Gangulareddy')
    component.studentForm.controls['rollNumber'].setValue('51618')
    component.studentForm.controls['gender'].setValue('Male')
    component.formSubmit();
    console.log("1",component.formData)
    console.log("2", component.studentForm.value)
    fixture.detectChanges();
    expect(component.formData).toEqual(JSON.stringify(component.studentForm.value))
  });
});
