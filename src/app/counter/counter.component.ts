import { Component, Inject } from '@angular/core';
import { Store } from 'redux';
import { AppStore, AppState } from '../shared';
import * as CounterActions from './counter-actions-creator';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent {
  counter: number;
  constructor(@Inject(AppStore) private store: Store<AppState>) {
    store.subscribe(() => this.readState());
    this.readState();
  }

  readState(): void {
    let state: AppState = this.store.getState() as AppState;
    this.counter = state.counter;
  }

  increment(): void {
    this.store.dispatch(CounterActions.increment());
  }

  decrement(): void {
    this.store.dispatch(CounterActions.decrement());
  }
}
