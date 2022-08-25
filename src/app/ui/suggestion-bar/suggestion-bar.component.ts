import { Component, DoCheck, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { fbSortOptions } from 'src/app/constants/constans';
import { sortDataAct } from 'src/app/store/slices/data-slice/data-slice-actions';
import { IAppStore, IFbSortby, ISelectOption } from 'src/app/types';

@Component({
  selector: 'suggestion-bar',
  templateUrl: './suggestion-bar.component.html'
})
export class SuggestionBarComponent implements OnInit {
  constructor(private _store: Store<IAppStore>) {}
  numOfSuggestionFbs!: number;
  selectedOption!: ISelectOption;
  fbSortOptions = fbSortOptions;
  shouldDisplaySelect = false;

  toggleSelect() {
    this.shouldDisplaySelect = !this.shouldDisplaySelect;
  }

  handleSelectClick() {
    this._store.dispatch(
      sortDataAct({ sorter: this.selectedOption as IFbSortby })
    );
  }

  ngOnInit() {
    this._store.select('data').subscribe(({ numOfSuggestionFbs, sorter }) => {
      console.log('sss',numOfSuggestionFbs)
      this.numOfSuggestionFbs = numOfSuggestionFbs;
      this.selectedOption = sorter;
    });
  }
}
