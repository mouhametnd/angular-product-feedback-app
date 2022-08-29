import { nanoid } from 'nanoid';
import { IReply, IUser } from '../types';

export class CommentClass {
  constructor(
    public content: string,
    public user: IUser,
    public replies: IReply[] = [],
    public id = nanoid()
  ) {}
}
