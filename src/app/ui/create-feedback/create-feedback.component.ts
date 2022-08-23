import { Component } from '@angular/core';
import { fbCategories, fbStatus } from 'src/app/constants/constans';
import { IBaseFormValues } from 'src/app/types';

@Component({
  selector: 'create-feedback',
  templateUrl: './create-feedback.component.html',
})
export class CreateFeedbackComponent {
  formValues!: IBaseFormValues;
  baseFormListener(baseFormValues: IBaseFormValues) {
    this.formValues = { ...baseFormValues };
  }
}
