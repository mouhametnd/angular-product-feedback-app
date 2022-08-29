import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { fbCategories, fbStatus } from 'src/app/constants/constans';
import {
  deleteFbAct,
  saveChangesAct,
} from 'src/app/store/slices/data-slice/data-slice-actions';
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
    private _activatedRoute: ActivatedRoute,
    private router: Router
  ) {}
  options = fbStatus;
  shouldDisplay = false;
  selectedFb!: IFeedBack | null;
  selectedOption!: ISelectOption;
  formValues!: IEditFormValues;
  segmentId!: string;
  baseFormDefaultValues!: TBaseFormDefaultValues;
  toggleSelect() {
    this.shouldDisplay = !this.shouldDisplay;
  }

  goBackToDetial() {
    return `/feedback-detail/${this.selectedFb?.id}`;
  }

  baseFormListener(baseFormValues: IBaseFormState) {
    this.formValues = { ...baseFormValues, status: this.selectedOption };
  }

  handleSaveChangesClick() {
    this.segmentId = this._activatedRoute.snapshot.paramMap.get('id') as string;

    const { areInputsValid, category, description, status, title } =
      this.formValues;
    if (!areInputsValid) return;

    this._store.dispatch(
      saveChangesAct({
        fbProps: {
          category,
          description,
          status: status.value,
          title,
          id: this.segmentId,
        },
      })
    );

    this.router.navigate(['feedback-detail', this.segmentId]);
  }

  handleDeleteClick() {
    this._store.dispatch(
      deleteFbAct({
        id: this.segmentId,
      })
    );

    this.router.navigate(['/']);
  }

  ngOnInit() {
    this._store.select('data').subscribe(({ productRequests }) => {
      const segmentId = this._activatedRoute.snapshot.paramMap.get(
        'id'
      ) as string;
      this.selectedFb = FeedbackHelper.getFbById(segmentId, productRequests);
      if (!this.selectedFb) return;

      const { category, description, title, status } = this.selectedFb;

      this.selectedOption = fbStatus.find(
        ({ value }) => value === status
      ) as ISelectOption;

      this.baseFormDefaultValues = { category, description, title };
      this.segmentId = this._activatedRoute.snapshot.paramMap.get(
        'id'
      ) as string;
    });
  }
}
