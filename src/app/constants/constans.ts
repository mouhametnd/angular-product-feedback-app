import { ISelectOption } from '../types';

export const fbCategories = [
  { title: 'ALL', value: 'ALL' },
  { title: 'UI', value: 'UI' },
  { title: 'UX', value: 'UX' },
  { title: 'Enhancement', value: 'ENHANCEMENT' },
  { title: 'Bug', value: 'BUG' },
  { title: 'Feature', value: 'FEATURE' },
];

export const fbStatus = [
  { title: 'Planned', value: 'PLANNED' },
  { title: 'In Progress', value: 'IN_PROGRESS' },
  { title: 'Suggestion', value: 'SUGGESTION' },
  { title: 'Live', value: 'LIVE' },
];

export const roadmapCategories = [
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

export const sortByOptions: ISelectOption[] = [
  { title: 'Most Upvotes', value: 'most-upvotes' },
  { title: 'Least Upvotes', value: 'least-upvotes' },
  { title: 'Most Comments', value: 'most-comments' },
  { title: 'Least Comments', value: 'least-comments' },
];
