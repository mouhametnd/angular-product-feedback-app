import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { fbCategories } from 'src/app/constants/constans';
import { IBaseFormState, ISelectOption } from 'src/app/types';

@Component({
  selector: 'base-form',
  templateUrl: './base-form.component.html',
})
export class BaseFormComponent implements OnInit {
  @Input() formTitle!: string;
  @Input() formSvgIcon!: string;
  @Input() goBackFn!: Function;
  // @Input() baseFormState!: IBaseFormState;
  @Output() baseFromStateEmitter = new EventEmitter<IBaseFormState>();

  options = fbCategories.filter(({value})=> value !== 'ALL');
  selectedOption = this.options[0] as ISelectOption;
  shouldDisplay = false;
  // todo: change to should displayselect

  ngOnInit() {
    this.emitter();
  }

  toggleSelect() {
    this.shouldDisplay = !this.shouldDisplay;
  }

  shouldDisplayMessageError(formInput: FormControl<string | null>) {
    return formInput.errors && formInput.touched;
  }

  emitter() {
    const { description, title } = this.baseForm.controls;
    const areInputsValid = !description.errors && !title.errors;

    this.baseFromStateEmitter.emit({
      description: description.value!,
      title: title.value!,
      areInputsValid,
      category: this.selectedOption.value,
    });
  }

  baseForm = new FormGroup({
    title: new FormControl('', [
      Validators.required,
      Validators.maxLength(50),
      Validators.minLength(3),
    ]),
    description: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(255),
    ]),
  });
}
