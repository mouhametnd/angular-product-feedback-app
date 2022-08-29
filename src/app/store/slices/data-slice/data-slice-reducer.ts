import { createReducer, on } from '@ngrx/store';
import {
  filterDataAct,
  sortDataAct,
  updateDataAct,
  toggleUpvoteFbAct,
  createFbAct,
  saveChangesAct,
  deleteFbAct,
  addCommentAct,
  addReplyAct,
} from './data-slice-actions';
import initialDataJson from '../../../../data.json';
import { FeedbackHelper } from 'src/app/utils/feedback-helper';
import {
  IAppData,
  IFeedBack,
  IJSonData,
  ISelectOption,
  TFbStatusValues,
} from 'src/app/types';
import { fbCategories, fbSortOptions } from 'src/app/constants/constans';
import { FeedBackCLass } from 'src/app/classes/feedback-class.class';
import { CommentClass } from 'src/app/classes/comment-class';
import { ReplyClass } from 'src/app/classes/reply-class';

// localStorage.clear();
let dataFromLS = JSON.parse(
  localStorage.getItem('data') as string
) as IJSonData;
if (!dataFromLS) {
  localStorage.setItem('data', JSON.stringify(initialDataJson));
  dataFromLS = initialDataJson as IJSonData;
}

const initialState: IAppData = {
  ...dataFromLS,
  ...FeedbackHelper.getNumOfFbsByStatus(dataFromLS.productRequests),
  filterCategory: fbCategories[0],
  sorter: fbSortOptions[0],
};

export const dataSliceReducer = createReducer(
  initialState,
  on(updateDataAct, () => {
    // return localStorage.getItem('data');
    const newState = JSON.parse(localStorage.getItem('data') || '') as IAppData;
    return newState;
  }),
  on(filterDataAct, (state, { category }) => {
    return { ...state, filterCategory: category };
  }),
  on(sortDataAct, (state, { sorter }) => {
    return { ...state, sorter };
  }),
  on(toggleUpvoteFbAct, (state, { id }) => {
    const newStoreRef = JSON.parse(JSON.stringify(state)) as IAppData;
    const { productRequests } = newStoreRef;
    const clickedFb = FeedbackHelper.getFbById(id, productRequests)!;
    const isUpvoted = clickedFb.upvoted;

    isUpvoted ? (clickedFb.upvotes -= 1) : (clickedFb.upvotes += 1);
    clickedFb.upvoted = !isUpvoted;

    return newStoreRef;
  }),
  on(createFbAct, (state, { fbProps }) => {
    const { category, description, title } = fbProps;
    const newFb = new FeedBackCLass(title, description, category);
    const newProductRequest = [...state.productRequests, newFb];

    return {
      ...state,
      ...FeedbackHelper.getNumOfFbsByStatus(newProductRequest),
      productRequests: newProductRequest,
    };
  }),
  on(saveChangesAct, (state, { fbProps }) => {
    const newProductRequest = [...state.productRequests];
    const { category, description, title, id } = fbProps;

    const newStatus = fbProps.status as TFbStatusValues;
    const selectedFb = FeedbackHelper.getFbById(
      id,
      newProductRequest
    ) as IFeedBack;

    newProductRequest.splice(newProductRequest.indexOf(selectedFb), 1, {
      ...selectedFb,
      title,
      description,
      category,
      status: newStatus,
    });

    return {
      ...state,
      ...FeedbackHelper.getNumOfFbsByStatus(newProductRequest),
      productRequests: newProductRequest,
    };
  }),
  on(deleteFbAct, (state, { id }) => {
    const newProductRequest = [...state.productRequests];
    const fbRef = FeedbackHelper.getFbById(id, newProductRequest)!;
    newProductRequest.splice(newProductRequest.indexOf(fbRef), 1);

    return { ...state, productRequests: newProductRequest };
  }),
  on(addCommentAct, (state, { fbId, content }) => {
    const newStoreRef = JSON.parse(JSON.stringify(state)) as IAppData;
    const { productRequests } = newStoreRef;
    const newComment = new CommentClass(content, state.currentUser);
    const fbRef = FeedbackHelper.getFbById(fbId, productRequests)!;
    fbRef.comments.push(newComment);
    return newStoreRef;
  }),
  on(addReplyAct, (state, { commentId, content, fbId, replyTo }) => {
    const newStoreRef = JSON.parse(JSON.stringify(state)) as IAppData;
    const newReply = new ReplyClass(content, state.currentUser, replyTo);
    const { productRequests } = newStoreRef;
    const fbRef = FeedbackHelper.getFbById(fbId, productRequests)!;
    fbRef.comments.find(({ id }) => id === commentId)!.replies.push(newReply);
    return newStoreRef;
  })
);
