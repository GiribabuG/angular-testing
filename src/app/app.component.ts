import { Component } from '@angular/core';
import { AppService } from './app.service';
import { concat, from, mergeMap, tap, toArray } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  searchText:any="";
  public colors = ['red', 'yelloe', 'orange', 'pink', 'blue']
  constructor(private appService: AppService) {
    this.getaddElementCount();
   }

  testValue() {
    this.appService.setDetails(this.colors)
  }


  testValueUsingEmitter() {
    this.appService.getEmiiterDetails(this.colors)
  }

  array = [
    [1, 2, 3],
    [4, 5, 6],
    [4, 5, 8,9,8]
  ]

  getaddElementCount() {
    from(this.array).pipe(
      mergeMap(innerArray =>
        from(innerArray).pipe(
          toArray()
        )
      ),
      
      tap(value=>{console.log("result",
          value.reduce((acc,val)=> acc+val)
      )})
    ).subscribe((res)=>{
      
    var data =   res.reduce((acc,val)=> acc+val)
      console.log("res",data)
    })
  }
}
