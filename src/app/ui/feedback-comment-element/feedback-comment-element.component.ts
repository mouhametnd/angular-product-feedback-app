import { Component, Input } from '@angular/core';

@Component({
  selector: 'feedback-comment-element',
  templateUrl: './feedback-comment-element.component.html',
})
export class FeedbackCommentElementComponent {
  @Input() numOfComments!: number;
}
