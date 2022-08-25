import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { IAppStore, IFeedBack } from 'src/app/types';
import { FeedbackHelper } from 'src/app/utils/feedback-helper';
import data from '../../../data.json';

@Component({
  selector: 'feedback-detail',
  templateUrl: './feedback-detail.component.html',
})
export class FeedBackDetailComponent implements OnInit {
  feedback!: IFeedBack | undefined;
  constructor(
    private _private: Store<IAppStore>,
    private _route: ActivatedRoute
  ) {}

  ngOnInit() {
    const segmentId = this._route.snapshot.paramMap.get('id') as string;
    this._private.select('data').subscribe(({ productRequests }) => {
      this.feedback = FeedbackHelper.getFbById(segmentId, productRequests);
    });
  }
}
