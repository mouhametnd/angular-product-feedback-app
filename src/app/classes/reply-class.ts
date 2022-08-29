import { IUser } from "../types";

export class ReplyClass {
  constructor(
    public content: string,
    public user: IUser,
    public replyingTo: string,
  ) {}
}