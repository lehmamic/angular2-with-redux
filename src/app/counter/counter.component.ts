import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { AppState } from '../shared';
import * as CounterActions from './counter-actions-creator';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent {
  counter: Observable<number>;
  constructor(private store: Store<AppState>) {
    this.counter = store.select('counter');
  }

  increment(): void {
    this.store.dispatch(CounterActions.increment());
  }

  decrement(): void {
    this.store.dispatch(CounterActions.decrement());
  }
}
