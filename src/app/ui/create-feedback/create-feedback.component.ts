import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { fbCategories, fbStatus } from 'src/app/constants/constans';
import { createFbAct } from 'src/app/store/slices/data-slice/data-slice-actions';
import { IAppStore, IBaseFormState } from 'src/app/types';

@Component({
  selector: 'create-feedback',
  templateUrl: './create-feedback.component.html',
})
export class CreateFeedbackComponent {
  baseFormState!: IBaseFormState;
  @Input() goBackLink: string = '/';
  baseFormStateListener(baseForm: IBaseFormState) {
    this.baseFormState = baseForm;
  }

  constructor(private _store: Store<IAppStore>, private _router: Router) {}

  createFeedback() {
    const { areInputsValid, category, description, title } = this.baseFormState;
    if (!areInputsValid) return;

    this._store.dispatch(
      createFbAct({ fbProps: { category, description, title } })
    );
    this._router.navigate([this.goBackLink]);

    // todo: the base form should return a boolean value that determine if we its input ar OK
    // todo: change name to create-feedback-form
  }
}
