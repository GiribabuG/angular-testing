import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

   subject = new Subject()

  constructor() { }
  shareEmitter = new EventEmitter()

  setDetails(data:any){
    this.subject.next(data)
  }

  getDetails(){
   return this.subject.asObservable()
  }

  getEmiiterDetails(data:any){
    this.shareEmitter.emit(data)
  }
}
