import { FormControl } from '@angular/forms';
import dataJson from '../data.json';

export interface ISelectOption {
  title: string;
  value: string;
}

export interface IBaseFormValues {
  fbCategory: ISelectOption;
  fbTitle: FormControl<string | null>;
  fbDetail: FormControl<string | null>;
}

export interface IEditFormValues extends IBaseFormValues {
  fbStatus: ISelectOption;
}

export interface IFeedBack {
  id: string;
  title: string;
  category: string;
  upvotes: number;
  upvoted: boolean;
  status: TFbStatusValues;
  description: string;
  comments: IComment[];
}

export interface IComment {
  id: string;
  content: string;
  user: IUser;
  replies: IReply[];
}

export interface IReply {
  user: IUser;
  content: string;
  replyingTo: string;
}

export interface IUser {
  image: string;
  name: string;
  username: string;
}

export interface IAppStore {
  data: IAppData;
}

export type TFbStatusValues = 'PLANNED' | 'IN_PROGRESS' | 'SUGGESTION' | 'LIVE';
export type TFbStatusTitles = 'Planned' | 'In Progress' | 'Suggestion' | 'Live';

export interface IFbStatus {
  title: TFbStatusTitles;
  value: TFbStatusValues;
}

export type TFbCategoryValues =
  | 'ALL'
  | 'UI'
  | 'UX'
  | 'ENHANCEMENT'
  | 'BUG'
  | 'FEATURE';

export type TFbCategoryTitles =
  | 'ALL'
  | 'UI'
  | 'UX'
  | 'Enhancement'
  | 'Bug'
  | 'Feature';

export interface IFbCategory {
  title: TFbCategoryTitles;
  value: TFbCategoryValues;
}

export type TFbSortValues =
  | 'MOST_UPVOTES'
  | 'LEAST_UPVOTES'
  | 'MOST_COMMENTS'
  | 'LEAST_COMMENTS';

export type TfbSortByTitles =
  | 'Most Upvotes'
  | 'Least Upvotes'
  | 'Most Comments'
  | 'Least Comments';

export interface IFbSortby {
  title: TfbSortByTitles;
  value: TFbSortValues;
}

export interface IAppData {
  numOfInProgressFbs: number;
  numOfLiveFbs: number;
  numOfPlannedFbs: number;
  numOfSuggestionFbs: number;
  currentUser: IUser;
  productRequests: IFeedBack[];
  filterCategory: IFbCategory;
  sorter: IFbSortby;
}

export interface IJSonData {
  currentUser: IUser;
  productRequests: IFeedBack[];
}

export type TDividedFbs = {
  [K in TFbStatusValues]: IFeedBack[];
};
export type TDividedNums = {
  [K in TFbStatusValues]: number;
};

export interface IRoadmapStatus {
  title: TFbStatusTitles;
  value: TFbStatusValues;
  description: string;
  color: string;
  quantity: number;
}