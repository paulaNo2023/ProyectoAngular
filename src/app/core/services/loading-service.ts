import { Injectable } from '@angular/core';
import { BehaviorSubject, observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingServiceService {
  private loadingTriggered$ = new BehaviorSubject<boolean>(false);

  public isLoading$ = this.loadingTriggered$.asObservable();

  setIsLoading (value: boolean): void{
    this.loadingTriggered$.next(value);
  }
}
