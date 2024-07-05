import { By } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { TestBed } from '@angular/core/testing';
import { DebugElement } from "@angular/core";

xdescribe('AppComponent',()=>{

  let component : AppComponent
  let el: DebugElement;
  beforeEach(()=>{
    const fixture = TestBed.createComponent(AppComponent)
    component = fixture.componentInstance
    el = fixture.debugElement;
  });


  it('should write test cased for ngFor',()=>{
    const fixture = TestBed.createComponent(AppComponent)
    component = fixture.componentInstance
    fixture.detectChanges();
    const element:any[] =el.queryAll(By.css(".displayColors")); // fixture.debugElement.queryAll(By.css('.displayColors'));
    console.log("element",element)
    expect(element.length).toEqual(5);

    element.forEach((ele:DebugElement, index:any)=> {
      expect(ele.children[0].nativeElement.innerHTML.trim()).toEqual(component.colors[index])
    });
  });

});


































// import { TestBed } from '@angular/core/testing';
// import { RouterTestingModule } from '@angular/router/testing';
// import { AppComponent } from './app.component';

// describe('AppComponent', () => {
//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       imports: [
//         RouterTestingModule
//       ],
//       declarations: [
//         AppComponent
//       ],
//     }).compileComponents();
//   });

//   it('should create the app', () => {
//     const fixture = TestBed.createComponent(AppComponent);
//     const app = fixture.componentInstance;
//     expect(app).toBeTruthy();
//   });

//   it(`should have as title 'first-angular-testing'`, () => {
//     const fixture = TestBed.createComponent(AppComponent);
//     const app = fixture.componentInstance;
//     expect(app.title).toEqual('first-angular-testing');
//   });

//   it('should render title', () => {
//     const fixture = TestBed.createComponent(AppComponent);
//     fixture.detectChanges();
//     const compiled = fixture.nativeElement as HTMLElement;
//     expect(compiled.querySelector('.content span')?.textContent).toContain('first-angular-testing app is running!');
//   });
// });
