import { Component, Input } from '@angular/core';

@Component({
  selector: 'dumb-form',
  templateUrl: './dumb-form.component.html',
})
export class DumbFormComponent {
  @Input() goBackFn!: Function;
  @Input() svgSrc!: string;
  @Input() title!: string;

}
