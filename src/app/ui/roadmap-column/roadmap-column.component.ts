import { Component, Input } from "@angular/core";
import { roadmapCategories } from "src/app/constants/constans";

@Component({
selector: 'roadmap-column',
templateUrl: './roadmap-column.component.html'
})
export class RoadmapColumn{
  @Input() category!: typeof roadmapCategories[0]
}