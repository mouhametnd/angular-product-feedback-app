import { createAction, props } from '@ngrx/store';
import { IFeedBack } from 'src/app/types';

export const setSelectedFbAct = createAction(
  '[selectedFb] SET_FB',
  props<{ fb: IFeedBack }>()
);
