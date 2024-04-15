import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchHomeService {
  private inputDataSubject = new BehaviorSubject<string>('');
  public inputData$ = this.inputDataSubject.asObservable();
  constructor() { }
  updateInputData(newData: string) {
    this.inputDataSubject.next(newData);
  }
}
