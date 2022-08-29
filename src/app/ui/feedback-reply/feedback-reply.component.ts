import { Component, Input } from '@angular/core';
import { IReply } from 'src/app/types';

@Component({
  selector: 'fb-reply',
  templateUrl: './feedback-reply.component.html',
  styleUrls: ['../feedback-comment/feedback-comment.component.scss'],
})
export class FeedbackReplyComponent {
  @Input() reply!: IReply;
  @Input() commentId!: string;
  @Input() replyTo!: string;
  shouldDisplayReplyForm = false;
  toggleShouldDisplayReplyForm() {
    this.shouldDisplayReplyForm = !this.shouldDisplayReplyForm;
  }
}
