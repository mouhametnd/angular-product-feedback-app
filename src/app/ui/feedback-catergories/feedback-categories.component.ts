import { Component } from "@angular/core";
import { fbCategories } from "src/app/constants/constans";

@Component({
  selector: "feedback-categories",
  templateUrl: "./feedback-categories.component.html",
})
export class FeedbackCategoriesComponent {

  fbCategories = fbCategories
}