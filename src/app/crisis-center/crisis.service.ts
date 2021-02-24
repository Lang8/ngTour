import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

import { Crisis } from './crisis';
import { CRISES } from './mock-crises';
import { MessageService } from '../message.service';

@Injectable({
  providedIn: 'root',
})
export class CrisisService {

  static nextCrisisId = 100;
  private crisis$: BehaviorSubject<Crisis[]> = new BehaviorSubject<Crisis[]>(CRISES);

  constructor(private messageService: MessageService) { }

  getCrisis(id: number | string){
    return this.getCrises().pipe(
      map(crises => crises.find(crisis =>  crisis.id === +id))
    );
  }
  
  getCrises() {
    return this.crisis$;
  }
}