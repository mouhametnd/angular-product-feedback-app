import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { roadmapStatuses } from 'src/app/constants/constans';
import { IAppStore, IFeedBack } from 'src/app/types';
import { FeedbackHelper } from 'src/app/utils/feedback-helper';

@Component({
  selector: 'roadmap-column',
  templateUrl: './roadmap-columns.component.html',
  styleUrls: ['./roadmap-columns.component.scss'],
})
export class RoadmapColumn implements OnInit, OnDestroy {
  constructor(private _store: Store<IAppStore>) {}
  roadmapStatuses = roadmapStatuses;
  fbsDividedByStatus!: IFeedBack[][];
  subscription!: Subscription;

  trackById(_: unknown, { id }: IFeedBack) {
    return id;
  }

  ngOnInit() {
    this.subscription = this._store
      .select('data')
      .subscribe(({ productRequests }) => {
        this.fbsDividedByStatus =
          FeedbackHelper.getFbsDivivedByStatus(productRequests);
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
