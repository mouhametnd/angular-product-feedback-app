import {
  AfterContentChecked,
  AfterViewInit,
  Component,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { IFeedBack } from 'src/app/types';

@Component({
  selector: 'feedback-large-card-list',
  templateUrl: './feedback-large-card-list.component.html',
})
export class FeedbackLargeCardListComponent {
  @Input() feedbacks!: IFeedBack[];
}
