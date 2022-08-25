import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { roadmapStatuses } from 'src/app/constants/constans';
import { filterDataAct } from 'src/app/store/slices/data-slice/data-slice-actions';
import { IAppStore, TFbCategoryValues } from 'src/app/types';

@Component({
  selector: 'roadmap-card',
  templateUrl: './roadmap-card.component.html',
  
})
export class RoadmapCardComponent {
  
}
