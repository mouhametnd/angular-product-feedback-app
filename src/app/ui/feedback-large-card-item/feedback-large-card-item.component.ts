import { AfterViewInit, Component, Input } from '@angular/core';
import { IFeedBack } from 'src/app/types';

@Component({
  selector: 'feedback-large-card-item',
  templateUrl: './feedback-large-card-item.component.html',
  styleUrls: ['./feedback-card.component.scss'],
})
export class FeedBackLargeCardItemComponent implements AfterViewInit {
  @Input() feedback!: IFeedBack;
  @Input() isFlexCol = true;

  ngAfterViewInit() {
    console.log(this.feedback);
  }
}
