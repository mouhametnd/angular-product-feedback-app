import {
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { ISelectOption } from 'src/app/types';

@Component({
  selector: 'custom-select',
  templateUrl: './custom-select.component.html',
})
export class CustomSelectComponent {
  @Input() options!: ISelectOption[];
  @Input() shouldDisplay!: boolean;
  @Input() extraClasses: string = '';

  @Input() selectedOption!: ISelectOption;
  @Output() selectedOptionChange = new EventEmitter<ISelectOption>();

  isSelected(value: string) {
    return this.selectedOption.value === value && 'optionSelected';
  }

  setValue(value: ISelectOption) {
    if (value.value === this.selectedOption.value) return;

    this.selectedOption = value;
    this.selectedOptionChange.emit(this.selectedOption);
  }
}
