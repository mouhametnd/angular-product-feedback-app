import { ISelectOption } from '../types';

export const fbCategories = [
  'ALL',
  'UI',
  'UX',
  'Enhancement',
  'Bug',
  'Feature',
];
export const roadmapCategories = [
  { name: 'Planned', color: 'plannedClr', quantity: 0 },
  { name: 'In Progress', color: 'inProgressClr', quantity: 0 },
  { name: 'Suggestion', color: 'suggestionClr', quantity: 0 },
  { name: 'Live', color: 'liveClr', quantity: 0 },
];

export const sortByOptions: ISelectOption[] = [
  { title: 'Most Upvotes', value: 'most-upvotes' },
  { title: 'Least Upvotes', value: 'least-upvotes' },
  { title: 'Most Comments', value: 'most-comments' },
  { title: 'Least Comments', value: 'least-comments' },
];
