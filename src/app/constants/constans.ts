import { never } from 'rxjs';
import { IFbCategory, IFbSortby, IFbStatus, ISelectOption } from '../types';


// todo: get better the objecr creation with dynamic creation

export const fbCategories: IFbCategory[] = [
  { title: 'ALL', value: 'ALL' },
  { title: 'UI', value: 'UI' },
  { title: 'UX', value: 'UX' },
  { title: 'Enhancement', value: 'ENHANCEMENT' },
  { title: 'Bug', value: 'BUG' },
  { title: 'Feature', value: 'FEATURE' },
];

export const fbStatus: IFbStatus[] = [
  { title: 'Planned', value: 'PLANNED' },
  { title: 'In Progress', value: 'IN_PROGRESS' },
  { title: 'Live', value: 'LIVE' },
  { title: 'Suggestion', value: 'SUGGESTION' },
];

export const roadmapStatuses = [
  {
    title: fbStatus[0].title,
    value: fbStatus[0].value,
    description: 'Ideas priortized for research',
    color: 'plannedClr',
    quantity: 0,
  },
  {
    title: fbStatus[1].title,
    value: fbStatus[1].value,
    description: 'Currently being developed',

    color: 'inProgressClr',
    quantity: 0,
  },
  {
    title: fbStatus[2].title,
    value: fbStatus[2].value,
    description: 'Suggested feedbacks',
    color: 'suggestionClr',
    quantity: 0,
  },
  {
    title: fbStatus[3].title,
    value: fbStatus[3].value,
    description: 'Released features',
    color: 'liveClr',
    quantity: 0,
  },
];

export const fbSortOptions: IFbSortby[] = [
  { title: 'Most Upvotes', value: 'MOST_UPVOTES' },
  { title: 'Least Upvotes', value: 'LEAST_UPVOTES' },
  { title: 'Most Comments', value: 'MOST_COMMENTS' },
  { title: 'Least Comments', value: 'LEAST_COMMENTS' },
];
