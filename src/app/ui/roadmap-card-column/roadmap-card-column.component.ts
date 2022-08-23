import { Component, Input } from '@angular/core';
import { roadmapCategories } from 'src/app/constants/constans';
import data from '../../../data.json'

@Component({
  selector: 'roadmap-card-column',
  templateUrl: './roadmap-card-coulmn.component.html',
})
export class RoadmapCardColumn {
  @Input() category!: typeof roadmapCategories[0];

  @Input() feedback = data.productRequests[0] // todo feedback type
}
