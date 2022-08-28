import {Injectable, Optional} from '@angular/core';
import {BehaviorSubject, map, Observable} from 'rxjs';

export class NgMicro {
  config?: any | unknown = {};
  state?: any | unknown = {};
}
@Injectable({
  providedIn: 'root'
})
export class NgMicroService {
  private readonly store: BehaviorSubject<NgMicro> = new BehaviorSubject<NgMicro>({});
  public readonly state$: Observable<any> = this.store.asObservable().pipe(map((c: NgMicro) => ({...c.state})));
  public readonly config$: Observable<any> = this.store.asObservable().pipe(map((c: NgMicro) => ({...c.config})));
  constructor(@Optional() microApp?: NgMicro) {
    if (microApp) {
      this.store.next(microApp);
    }
  }
}
