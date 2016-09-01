import { Component } from '@angular/core';
import { NgRedux, select } from 'ng2-redux';
import { Observable } from 'rxjs/Observable';

import { AppState } from '../shared';
import * as CounterActions from './counter-actions-creator';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent {
  @select() counter$: Observable<number>;

  constructor(private ngRedux: NgRedux<AppState>) {
  }

  increment(): void {
    this.ngRedux.dispatch(CounterActions.increment());
  }

  decrement(): void {
    this.ngRedux.dispatch(CounterActions.decrement());
  }
}
