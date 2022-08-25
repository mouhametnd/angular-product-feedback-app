import { Component } from '@angular/core';
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
  baseFromState!: IBaseFormState;
  goBackLink: string = '/';
  baseFromStateListener(baseFrom: IBaseFormState) {
    this.baseFromState = baseFrom;
  }

  constructor(private _store: Store<IAppStore>, private _router: Router) {}

  createFeedback() {
    const { areInputsValid, category, description, title } = this.baseFromState;
    if (!areInputsValid) return;

    this._store.dispatch(
      createFbAct({ fbProps: { category, description, title } })
    );
    this._router.navigate([this.goBackLink]);

    // todo: the base form should return a boolean value that determine if we its input ar OK
  }
}
