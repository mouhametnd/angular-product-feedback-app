import { Component, Input } from '@angular/core';
import { IComment } from '../../types';

@Component({
  selector: 'feedback-comment',
  templateUrl: './feedback-comment.component.html',
  styleUrls: ['./feedback-comment.component.scss', '../../../styles.scss']
})
export class FeedbackCommentComponent {
  @Input() comment!: IComment;
}
