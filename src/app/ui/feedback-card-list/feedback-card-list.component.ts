import { Component, Input } from '@angular/core';
import { IFeedBack } from 'src/app/types';

@Component({
  selector: 'feedback-card-list',
  templateUrl: './feedback-card-list.component.html',
})
export class FeedbackLargeCardListComponent {
  @Input() feedbacks!: IFeedBack[];
  trackById(_: unknown, { id }: IFeedBack) {
    return id;
  }
}
