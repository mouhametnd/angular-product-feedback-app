import { Component } from "@angular/core";
import { roadmapCategories } from "src/app/constants/constans";

@Component({
  selector: "roadmap",
  templateUrl: "./roadmap.component.html",
})
export class RoadmapComponent {
  roadmapCategories = roadmapCategories
}