import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { fbCategories } from 'src/app/constants/constans';
import { IBaseFormValues } from 'src/app/types';

@Component({
  selector: 'base-form',
  templateUrl: './base-form.component.html',
})
export class BaseFormComponent {
  @Input() formTitle!: string;
  @Input() formSvgIcon!: string;

  options = fbCategories;
  selectedOption = this.options[0];
  shouldDisplay = false;

  @Input() goBackFn!: Function;
  @Output() formValuesEmitter = new EventEmitter<IBaseFormValues>();

  toggleSelect() {
    this.shouldDisplay = !this.shouldDisplay;
  }

  shouldDisplayMessageError(formInput: FormControl<string | null>) {
    return formInput.errors && formInput.touched;
  }

  emitter() {
    const formValues = {
      ...this.baseForm.controls,
      fbCategory: this.selectedOption,
    };

    this.formValuesEmitter.emit(formValues);
  }

  fbTitle = new FormControl('', [
    Validators.required,
    Validators.maxLength(50),
    Validators.minLength(3),
  ]);

  fbDetail = new FormControl('', [
    Validators.required,
    Validators.minLength(3),
    Validators.maxLength(255),
  ]);

  baseForm = new FormGroup({ fbTitle: this.fbTitle, fbDetail: this.fbDetail });
}
