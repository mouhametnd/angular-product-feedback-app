import { AfterViewInit, Component, Input } from '@angular/core';
import { IFeedBack } from 'src/app/types';

@Component({
  selector: 'feedback-large-card-item',
  templateUrl: './feedback-large-card-item.component.html',
  styleUrls: ['./feedback-card-item.component.scss'],
})
export class FeedBackLargeCardItemComponent {
  @Input() feedback!: IFeedBack;
  @Input() isFlexCol = false;
  @Input() extraClasses = '';

 
}
