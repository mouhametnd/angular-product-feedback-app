import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { roadmapStatuses } from 'src/app/constants/constans';
import {
  IAppStore,
  IFeedBack,
  IRoadmapStatus,
  TDividedFbs,
} from 'src/app/types';
import { FeedbackHelper } from 'src/app/utils/feedback-helper';

@Component({
  selector: 'roadmap-column',
  templateUrl: './roadmap-column.component.html',
  styleUrls: ['./roadmap-column.component.scss']
})
export class RoadmapColumn implements OnInit {
  // @Input() status!: IRoadmapStatus
  roadmapStatuses = roadmapStatuses;
  fbsDividedByStatus!: IFeedBack[][];

  constructor(private _store: Store<IAppStore>) {}

  ngOnInit() {
    this._store.select('data').subscribe(({ productRequests }) => {
      this.fbsDividedByStatus =
        FeedbackHelper.getFbsDivivedByStatus(productRequests);

        console.log(this.fbsDividedByStatus)
    });
  }
}
// todo: change name to columns
