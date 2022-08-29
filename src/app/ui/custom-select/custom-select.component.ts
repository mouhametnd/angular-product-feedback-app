import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ISelectOption } from 'src/app/types';

@Component({
  selector: 'custom-select',
  templateUrl: './custom-select.component.html',
})
export class CustomSelectComponent {
  @Input() options!: ISelectOption[];
  @Input() shouldDisplaySelect!: boolean;
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
