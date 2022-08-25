import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { roadmapStatuses } from 'src/app/constants/constans';
import { IAppStore } from 'src/app/types';

@Component({
  selector: 'roadmap-status',
  templateUrl: './roadmap-status.component.html',
})
export class RoadmapStatusComponent implements OnInit {
  constructor(private _store: Store<IAppStore>) {}
  roadmapStatuses = roadmapStatuses;

  ngOnInit() {
    this._store.select('data').subscribe((data) => {
      this.roadmapStatuses[1].quantity = data.numOfInProgressFbs;
      this.roadmapStatuses[3].quantity = data.numOfLiveFbs;
      this.roadmapStatuses[0].quantity = data.numOfPlannedFbs;
      this.roadmapStatuses[2].quantity = data.numOfSuggestionFbs;
    });
  }
}
