import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { createFbAct } from 'src/app/store/slices/data-slice/data-slice-actions';
import { IAppStore, IBaseFormState } from 'src/app/types';

@Component({
  selector: 'create-feedback',
  templateUrl: './create-feedback.component.html',
})
export class CreateFeedbackComponent {
  constructor(private _store: Store<IAppStore>, private _router: Router) {}
  baseFormState!: IBaseFormState;
  @Input() goBackLink: string = '/';
  baseFormStateListener(baseForm: IBaseFormState) {
    this.baseFormState = baseForm;
  }


  createFeedback() {
    const { areInputsValid, category, description, title } = this.baseFormState;
    if (!areInputsValid) return;

    this._store.dispatch(
      createFbAct({ fbProps: { category, description, title } })
    );
    this._router.navigate([this.goBackLink]);
  }
}
