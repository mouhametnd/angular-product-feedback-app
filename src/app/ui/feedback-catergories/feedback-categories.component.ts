import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { fbCategories } from 'src/app/constants/constans';
import { filterDataAct } from 'src/app/store/slices/data-slice/data-slice-actions';
import { IAppStore, IFbCategory, TFbCategoryValues } from 'src/app/types';

@Component({
  selector: 'feedback-categories',
  templateUrl: './feedback-categories.component.html',
})
export class FeedbackCategoriesComponent implements OnInit, OnDestroy {
  constructor(private _store: Store<IAppStore>) {}
  fbCategories = fbCategories;
  activeCategory!: IFbCategory;
  subscription!: Subscription;

  handleClick(category: IFbCategory) {
    if (category.value === this.activeCategory.value) return;
    this._store.dispatch(filterDataAct({ category }));
  }

  isButtonActive(category: TFbCategoryValues) {
    return category === this.activeCategory.value;
  }

  ngOnInit() {
    this.subscription = this._store
      .select('data')
      .subscribe(({ filterCategory }) => {
        this.activeCategory = filterCategory;
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
