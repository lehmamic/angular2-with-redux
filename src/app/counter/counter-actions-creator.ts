import { Action } from '@ngrx/store';

export const INCREMENT: string = 'INCREMENT';
export const increment: () => Action = () => ({
  type: INCREMENT
});

export const DECREMENT: string = 'DECREMENT';
export const decrement: () => Action = () => ({
  type: DECREMENT
});
