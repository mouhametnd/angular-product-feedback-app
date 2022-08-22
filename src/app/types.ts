export interface ISelectOption {
  title: string;
  value: string;
}

export interface IFeedBack {
  id: number;
  title: string;
  category: string;
  upvotes: number;
  upvoted: boolean;
  status: string;
  description: string;
  comments: IComment[];
}

export interface IComment {
  id: number;
  content: string;
  user: IUser;
}

export interface IUser {
  image: string;
  name: string;
  username: string;
}
