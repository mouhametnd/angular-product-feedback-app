import { ISelectOption } from '../types';

export const fbCategories = [
  { title: 'ALL', value: 'all' },
  { title: 'UI', value: 'ui' },
  { title: 'UX', value: 'ux' },
  { title: 'Enhancement', value: 'enhancement' },
  { title: 'Bug', value: 'bug' },
  { title: 'Feature', value: 'feature' },
];

export const fbStatus = [
  { title: 'Planned', value: 'planned' },
  { title: 'In Progress', value: 'inprogress' },
  { title: 'Suggestion', value: 'suggestion' },
  { title: 'Live', value: 'live' },
];

export const roadmapCategories = [
  { name: fbStatus[0].title, color: 'plannedClr', quantity: 0 },
  { name: fbStatus[1].title, color: 'inProgressClr', quantity: 0 },
  { name: fbStatus[2].title, color: 'suggestionClr', quantity: 0 },
  { name: fbStatus[3].title, color: 'liveClr', quantity: 0 },
];

export const sortByOptions: ISelectOption[] = [
  { title: 'Most Upvotes', value: 'most-upvotes' },
  { title: 'Least Upvotes', value: 'least-upvotes' },
  { title: 'Most Comments', value: 'most-comments' },
  { title: 'Least Comments', value: 'least-comments' },
];
