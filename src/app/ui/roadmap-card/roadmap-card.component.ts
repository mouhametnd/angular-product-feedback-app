import { Component } from "@angular/core";
import { roadmapCategories } from "src/app/constants/constans";

@Component({
  selector: "roadmap-card",
  templateUrl: "./roadmap-card.component.html",
})
export class RoadmapCardComponent {
  roadmapCategories = roadmapCategories
}