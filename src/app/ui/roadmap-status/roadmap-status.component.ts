import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { roadmapCategories } from 'src/app/constants/constans';
import { IAppStore } from 'src/app/types';

@Component({
  selector: 'roadmap-status',
  templateUrl: './roadmap-status.component.html',
})
export class RoadmapStatusComponent implements OnInit {
  constructor(private _store: Store<IAppStore>) {}
  roadmapCategories = roadmapCategories;

  ngOnInit() {
    this._store.select('data').subscribe((data) => {
      this.roadmapCategories[1].quantity = data.numOfInProgressFbs;
      this.roadmapCategories[3].quantity = data.numOfLiveFbs;
      this.roadmapCategories[0].quantity = data.numOfPlannedFbs;
      this.roadmapCategories[2].quantity = data.numOfSuggestionFbs;
    });
  }
}
