import { Component, Input } from '@angular/core';
import { roadmapCategories } from 'src/app/constants/constans';

@Component({
  selector: 'roadmap-item',
  templateUrl: './roadmap-item.component.html',
})
export class RoadmapItemComponent {
  @Input() roadmapCategory!: typeof roadmapCategories[0];
}
