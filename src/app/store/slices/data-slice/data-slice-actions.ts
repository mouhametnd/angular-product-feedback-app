import { createAction, props } from '@ngrx/store';
import {
  IBaseFormState,
  IFbCategory,
  IFbSortby,
  TFbCategoryValues,
  TFbSortValues,
} from 'src/app/types';

export const updateDataAct = createAction('[data] UPDATE');
export const filterDataAct = createAction(
  '[data] FILTER',
  props<{ category: IFbCategory }>()
);
export const sortDataAct = createAction(
  '[data] SORT',
  props<{ sorter: IFbSortby }>()
);
export const toggleUpvoteFbAct = createAction(
  '[data] UPVOTE_TOGGLE',
  props<{ id: string }>()
);
export const createFbAct = createAction(
  '[data] CREATE',
  props<{ fbProps: Omit<IBaseFormState, 'areInputsValid'> }>()
);
export const refreshStore = createAction('[data] REFRESH STORE');
