import { AfterViewInit, Component } from '@angular/core';
import { IFeedBack } from 'src/app/types';
import initialData from '../../../data.json';

@Component({
  selector: 'feedback-large-card-list',
  templateUrl: './feedback-large-card-list.component.html',
})
export class FeedbackLargeCardListComponent implements AfterViewInit {
  feedbacks: IFeedBack[] = initialData.productRequests;
  ngAfterViewInit() {
    console.log(this.feedbacks);
  }
}
