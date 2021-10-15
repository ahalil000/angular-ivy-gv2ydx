
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class Service {
  subject: Subject<number> = new Subject();

  setDataObject(obj) { 
    this.subject.next(obj); 
  }
  
  getDataObject(): Observable<any> {
    return this.subject; 
  }
}