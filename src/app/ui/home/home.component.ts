import { Component, OnDestroy, OnInit } from '@angular/core';
import { Actions } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { IAppStore, IFeedBack } from 'src/app/types';
import { FeedbackHelper } from 'src/app/utils/feedback-helper';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  constructor(private _store: Store<IAppStore>, private _actions: Actions) {}
  feedbacks!: IFeedBack[];
  subscription!: Subscription;

  haveFeedbacks() {
    return this.feedbacks.length;
  }

  ngOnInit() {
    this.subscription = this._store.select('data').subscribe((stramedData) => {
      const { productRequests, filterCategory, sorter } = stramedData;

      let filteredFbs = FeedbackHelper.filterFbByStatus(
        'SUGGESTION',
        productRequests
      );

      filteredFbs = FeedbackHelper.filterFbByCategory(
        filterCategory.value,
        filteredFbs
      );

      this.feedbacks = FeedbackHelper.sortFbsBy(sorter.value, filteredFbs);
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
