import { Component, DoCheck } from '@angular/core';
import { sortByOptions } from 'src/app/constants/constans';

@Component({
  selector: 'suggestion-bar',
  templateUrl: './suggestion-bar.component.html',
})
export class SuggestionBarComponent {
  selectedOption = sortByOptions[0];
  sortByOptions = sortByOptions;
  shouldDisplaySelect = false;

  toggleSelect() {
    this.shouldDisplaySelect = !this.shouldDisplaySelect;
  }

}
