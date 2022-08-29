import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { fbSortOptions } from 'src/app/constants/constans';
import { sortDataAct } from 'src/app/store/slices/data-slice/data-slice-actions';
import { IAppStore, IFbSortby, ISelectOption } from 'src/app/types';

@Component({
  selector: 'suggestion-bar',
  templateUrl: './suggestion-bar.component.html',
})
export class SuggestionBarComponent implements OnInit, OnDestroy {
  constructor(private _store: Store<IAppStore>) {}
  numOfSuggestionFbs!: number;
  selectedOption!: ISelectOption;
  fbSortOptions = fbSortOptions;
  shouldDisplaySelect = false;
  subscription!: Subscription;

  toggleSelect() {
    this.shouldDisplaySelect = !this.shouldDisplaySelect;
  }

  handleSelectClick() {
    this._store.dispatch(
      sortDataAct({ sorter: this.selectedOption as IFbSortby })
    );
  }

  ngOnInit() {
    this.subscription = this._store
      .select('data')
      .subscribe(({ numOfSuggestionFbs, sorter }) => {
        this.numOfSuggestionFbs = numOfSuggestionFbs;
        this.selectedOption = sorter;
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
