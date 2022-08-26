import { createReducer, on } from '@ngrx/store';
import { IFeedBack } from 'src/app/types';
import { setSelectedFbAct } from './selected-feedback-slice.action';

export const selectedFbReducer = createReducer<null | IFeedBack>(
  null,
  on(setSelectedFbAct, (_, { fb }) => {
    return fb;
  })
);
