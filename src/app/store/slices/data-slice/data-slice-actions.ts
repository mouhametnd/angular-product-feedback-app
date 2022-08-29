import { createAction, props } from '@ngrx/store';
import {
  IBaseFormState,
  IEditFormValues,
  IFbCategory,
  IFbSortby,
  ISaveChangesAct,
  TBaseFormDefaultValues,
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
  props<{ fbProps: TBaseFormDefaultValues }>()
);
export const saveChangesAct = createAction(
  '[data] SAVE_CHANGES',
  props<{ fbProps: ISaveChangesAct }>()
);

export const deleteFbAct = createAction(
  '[data] DELETE',
  props<{ id: string }>()
);
export const addCommentAct = createAction(
  '[data] ADD_COMMENT',
  props<{ fbId: string; content: string }>()
);
export const addReplyAct = createAction(
  '[data] ADD_REPLY',
  props<{ fbId: string; content: string; replyTo: string; commentId: string }>()
);
