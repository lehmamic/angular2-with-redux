import { AppState } from '../shared';
import { ActionReducer, Action } from '@ngrx/store';
import { INCREMENT, DECREMENT } from './counter-actions-creator';

let initialState: AppState = { counter: 0 };

export const counterReducer: ActionReducer<AppState> =
  (state: AppState = initialState, action: Action): AppState => {
    switch (action.type) {
    case INCREMENT:
      return Object.assign({}, state, { counter: state.counter + 1 });
    case DECREMENT:
      return Object.assign({}, state, { counter: state.counter - 1 });
    default:
      return state;
    }
  };
