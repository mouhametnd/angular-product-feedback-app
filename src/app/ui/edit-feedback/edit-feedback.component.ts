import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { fbCategories, fbStatus } from 'src/app/constants/constans';
import { saveChangesAct } from 'src/app/store/slices/data-slice/data-slice-actions';
import {
  IAppStore,
  IBaseFormState,
  IEditFormValues,
  IFeedBack,
  ISelectOption,
  TBaseFormDefaultValues,
} from 'src/app/types';
import { FeedbackHelper } from 'src/app/utils/feedback-helper';

@Component({
  selector: 'edit-feedback',
  templateUrl: './edit-feedback.component.html',
})
export class EditFeedbackComponent implements OnInit {
  constructor(
    private _store: Store<IAppStore>,
    private _route: ActivatedRoute
  ) {}
  options = fbStatus;
  shouldDisplay = false;
  selectedFb!: IFeedBack | null;
  selectedOption!: ISelectOption;
  formValues!: IEditFormValues;
  baseFormDefaultValues!: TBaseFormDefaultValues;
  toggleSelect() {
    this.shouldDisplay = !this.shouldDisplay;
  }

  baseFormListener(baseFormValues: IBaseFormState) {
    this.formValues = { ...baseFormValues, status: this.selectedOption };
  }

  handleSaveChanges() {
    const segmentId = this._route.snapshot.paramMap.get('id') as string;
    const { areInputsValid, category, description, status, title } =
      this.formValues;

      console.log(this.formValues)
    if (areInputsValid) {


      
      this._store.dispatch(
        saveChangesAct({
          fbProps: { category, description,  title, id: segmentId },
        })
      );
      // do something
      console.log('sss');
    }
  }

  ngOnInit() {
    this._store.select('data').subscribe(({ productRequests }) => {
      const segmentId = this._route.snapshot.paramMap.get('id') as string;
      this.selectedFb = FeedbackHelper.getFbById(segmentId, productRequests);
      if (!this.selectedFb) return;

      const { category, description, title, status } = this.selectedFb;

      this.selectedOption = fbStatus.find(
        ({ value }) => value === status
      ) as ISelectOption;

      this.baseFormDefaultValues = { category, description, title };
    });
  }
}
