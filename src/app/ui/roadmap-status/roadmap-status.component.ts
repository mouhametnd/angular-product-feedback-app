import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { roadmapStatuses } from 'src/app/constants/constans';
import { IAppStore } from 'src/app/types';

@Component({
  selector: 'roadmap-status',
  templateUrl: './roadmap-status.component.html',
})
export class RoadmapStatusComponent implements OnInit, OnDestroy {
  constructor(private _store: Store<IAppStore>) {}
  roadmapStatuses = roadmapStatuses;
  subscription!: Subscription;

  ngOnInit() {
    this.subscription = this._store
      .select('data')
      .subscribe(
        ({
          numOfInProgressFbs,
          numOfPlannedFbs,
          numOfLiveFbs,
          numOfSuggestionFbs,
        }) => {
          this.roadmapStatuses[1].quantity = numOfInProgressFbs;
          this.roadmapStatuses[3].quantity = numOfLiveFbs;
          this.roadmapStatuses[0].quantity = numOfPlannedFbs;
          this.roadmapStatuses[2].quantity = numOfSuggestionFbs;
        }
      );
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
