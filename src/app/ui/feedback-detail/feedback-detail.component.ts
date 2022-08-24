import { Component } from '@angular/core';
import data from '../../../data.json';

@Component({
  selector: 'feedback-detail',
  templateUrl: './feedback-detail.component.html',
})
export class FeedBackDetailComponent {
  feedback = data.productRequests[4];
}
