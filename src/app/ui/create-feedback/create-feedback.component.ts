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
    this.formValues = baseFormValues;
  }

  createFeedback() {
    const { fbCategory, fbDetail, fbTitle } = this.formValues;

    if(fbDetail.errors || fbTitle.errors){
console.log()
    }

    // todo: the base form should return a boolean value that determine if we its input ar OK

    console.log(fbDetail.errors);
    console.log(fbTitle.errors);
  }
}
