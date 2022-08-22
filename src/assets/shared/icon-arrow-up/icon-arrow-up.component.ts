import { Component, Input } from '@angular/core';

@Component({
  selector: 'icon-arrow-up',
  templateUrl: './icon-arrow-up.component.html',
})
export class IconArrowUpComponent {
  @Input() fill: string = 'currentColor';
  @Input() extraClasses: string = 's';
}
