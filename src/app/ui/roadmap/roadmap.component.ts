import { Component } from '@angular/core';
import { roadmapCategories } from 'src/app/constants/constans';

@Component({
  selector: 'roadmap',
  templateUrl: './roadmap.component.html',
  styleUrls: ['./roadmap.component.scss'],
})
export class RoadmapComponent {
  categories = roadmapCategories;
}
