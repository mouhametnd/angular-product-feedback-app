import { createReducer, on } from '@ngrx/store';
import {
  filterDataAct,
  sortDataAct,
  updateDataAct,
  toggleUpvoteFbAct,
} from './data-slice-actions';
import initialDataJson from '../../../../data.json';
import { FeedbackHelper } from 'src/app/utils/feedback-helper';
import { IAppData, IFeedBack, IJSonData } from 'src/app/types';
import { fbCategories, fbSortOptions } from 'src/app/constants/constans';

localStorage.clear();
let dataFromLS = JSON.parse(
  localStorage.getItem('data') as string
) as IJSonData;
if (!dataFromLS) {
  localStorage.setItem('data', JSON.stringify(initialDataJson));
  dataFromLS = initialDataJson as IJSonData;
}

const [numOfPlannedFbs, numOfInProgressFbs, numOfSuggestionFbs, numOfLiveFbs] =
  FeedbackHelper.getNumOfFbsByStatus(dataFromLS.productRequests);

const initialState: IAppData = {
  ...dataFromLS,
  numOfInProgressFbs,
  numOfLiveFbs,
  numOfPlannedFbs,
  numOfSuggestionFbs,
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
    console.log('reducer fired');
    return { ...state, sorter };
  }),
  on(toggleUpvoteFbAct, (state, { id }) => {
    const newStoreRef = JSON.parse(JSON.stringify(state)) as IAppData;
    const { productRequests } = newStoreRef;
    const clickedFb = productRequests.find((fb) => fb.id === id)!;
    const isUpvoted = clickedFb.upvoted;

    isUpvoted ? (clickedFb.upvotes -= 1) : (clickedFb.upvotes += 1);
    clickedFb.upvoted = !isUpvoted;

    return newStoreRef
  })
);
