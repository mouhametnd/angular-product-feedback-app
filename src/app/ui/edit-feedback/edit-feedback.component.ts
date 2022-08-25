import { Component } from '@angular/core';
import { fbCategories, fbStatus } from 'src/app/constants/constans';
import { IBaseFormValues, IEditFormValues, ISelectOption } from 'src/app/types';

@Component({
  selector: 'edit-feedback',
  templateUrl: './edit-feedback.component.html',
})
export class EditFeedbackComponent {
  options = fbStatus;
  selectedOption = this.options[0] as ISelectOption;
  shouldDisplay = false;
  toggleSelect() {
    this.shouldDisplay = !this.shouldDisplay;
  }
  formValues!: IEditFormValues;

  baseFormListener(baseFormValues: IBaseFormValues) {
    this.formValues = { ...baseFormValues, fbStatus: this.selectedOption };
  }
}
