import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  
   userNameObservable$ : BehaviorSubject<string> = new BehaviorSubject<string>('')
  
  constructor() { }





}
