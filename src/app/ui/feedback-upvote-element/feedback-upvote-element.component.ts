import { Component, Input } from '@angular/core';

@Component({
  selector: 'fedback-upvote-element',
  templateUrl: './feedback-upvote-element.component.html',
  styleUrls : ['./feedback-upvote.component.scss']
})
export class FeedbackUpvoteElementComponent {
  @Input() numUpvotes!: number;
  @Input() isFlexCol = false;
}
