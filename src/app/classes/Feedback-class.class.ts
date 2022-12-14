import { nanoid } from 'nanoid';
import { fbStatus } from '../constants/constans';
import {
  IComment,
  IFeedBack,
  TFbCategoryValues,
  TFbSortValues,
  TFbStatusValues,
} from '../types';

export class FeedBackCLass implements IFeedBack {
  constructor(
    public title: string,
    public description: string,
    public category: string,
    public status = fbStatus[3].value,
    public id = nanoid(),
    public upvoted = false,
    public upvotes = 0,
    public comments: IComment[] = []
  ) {}
}
