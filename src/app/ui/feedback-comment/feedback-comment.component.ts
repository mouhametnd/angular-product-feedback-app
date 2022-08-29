import { Component, Input } from '@angular/core';
import { IComment, IReply } from '../../types';

@Component({
  selector: 'feedback-comment',
  templateUrl: './feedback-comment.component.html',
  styleUrls: ['./feedback-comment.component.scss', '../../../styles.scss'],
})
export class FeedbackCommentComponent {
  @Input() comment!: IComment;
  shouldDisplayForm = false;
  handleShouldDisplayForm() {
    this.shouldDisplayForm = !this.shouldDisplayForm;
  }
  trackByContent(_: unknown, { content }: IReply) {
    return content;
  }
}
