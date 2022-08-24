import { FormControl } from '@angular/forms';
import dataJson from '../data.json'

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
  status: string;
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
  data: typeof dataJson
}
