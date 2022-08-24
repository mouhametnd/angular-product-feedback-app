import { createReducer, on } from '@ngrx/store';
import { updateDataAct } from './data-slice-actions';
import initialDataJson from '../../../../data.json';

let initialState = JSON.parse(localStorage.getItem('data') as string);
if (!initialState) {
  localStorage.setItem('data', JSON.stringify(initialDataJson));
  initialState = initialDataJson;
}

export const dataSliceReducer = createReducer(
  initialState,
  on(updateDataAct, () => {
    return localStorage.getItem('data');
  })
);
