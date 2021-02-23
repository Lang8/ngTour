import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { Crisis } from './crisis';
import { CRISES } from './mock-crises';
import { MessageService } from '../message.service';

@Injectable({
  providedIn: 'root',
})
export class CrisisService {

  constructor(private messageService: MessageService) { }

  getCrisis(id: number | string){
    return this.getCrises().pipe(
      map((crises: Crisis[]) => crises.find(crisis =>  crisis.id === +id))
    );
  }
  
  getCrises(): Observable<Crisis[]> {
    this.messageService.add('CrisisService: fetched crises');
    return of(CRISES);
  }
}