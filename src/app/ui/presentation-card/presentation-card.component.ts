import { Component, Input } from "@angular/core";

@Component({
  selector: "presentation-card",
  templateUrl: "./presentation-card.component.html",
})
export class PresentationCardComponent {
  @Input() extraClasses: string = '';
  @Input() bgImage: string = '';
}
