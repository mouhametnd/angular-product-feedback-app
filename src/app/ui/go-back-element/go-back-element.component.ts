import { Component, Input } from "@angular/core";

@Component({
  selector: "go-back-element",
  templateUrl: "./go-back-element.component.html",
  styleUrls: ["./go-back-element.component.scss"]
})
export class GoBackElementComponent {
  @Input() goBackFn!: Function;
  @Input() extraClasses = '';
}