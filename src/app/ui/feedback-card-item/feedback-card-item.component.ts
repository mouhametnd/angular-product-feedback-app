import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { toggleUpvoteFbAct } from 'src/app/store/slices/data-slice/data-slice-actions';
import { setSelectedFbAct } from 'src/app/store/slices/selected-feedback-slice/selected-feedback-slice.action';
import { IAppStore, IFeedBack } from 'src/app/types';
import { FeedbackHelper } from 'src/app/utils/feedback-helper';

@Component({
  selector: 'feedback-card-item',
  templateUrl: './feedback-card-item.component.html',
  styleUrls: ['./feedback-card-item.component.scss'],
})
export class FeedBackLargeCardItemComponent {
  constructor(private _store: Store<IAppStore>, private _router: Router) {}
  @Input() feedback!: IFeedBack;
  @Input() isFlexCol = false;
  @Input() extraClasses = '';
  
  getFbCommentsLength = FeedbackHelper.getFbCommentsLength;
  handleUpvoteClick(e: Event) {
    e.stopPropagation();
    this._store.dispatch(toggleUpvoteFbAct({ id: this.feedback.id }));
  }

  handleCardClick() {
    this._router.navigate(['/feedback-detail', this.feedback.id]);
    this._store.dispatch(setSelectedFbAct({ fb: this.feedback }));
  }
}
