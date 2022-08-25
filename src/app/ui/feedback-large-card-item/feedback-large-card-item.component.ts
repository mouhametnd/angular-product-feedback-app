import { AfterViewInit, Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { toggleUpvoteFbAct } from 'src/app/store/slices/data-slice/data-slice-actions';
import { IAppStore, IFeedBack } from 'src/app/types';
import { FeedbackHelper } from 'src/app/utils/feedback-helper';

@Component({
  selector: 'feedback-large-card-item',
  templateUrl: './feedback-large-card-item.component.html',
  styleUrls: ['./feedback-card-item.component.scss'],
})
export class FeedBackLargeCardItemComponent {
  constructor(private _store:Store<IAppStore>){}
  @Input() feedback!: IFeedBack;
  @Input() isFlexCol = false;
  @Input() extraClasses = '';
  getFbCommentsLength = FeedbackHelper.getFbCommentsLength;

  handleUpvoteClick(e: Event) {
    e.stopPropagation();
    this._store.dispatch(toggleUpvoteFbAct({id: this.feedback.id}))
  }

  // todo: change name of this component and file
}
