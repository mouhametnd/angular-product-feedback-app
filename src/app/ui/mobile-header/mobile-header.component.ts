import { Component } from '@angular/core';

@Component({
  selector: 'mobile-header',
  templateUrl: './mobile-header.component.html',
})
export class MobileHeaderComponent {
  isOpen = false;
  toggle() {
    this.isOpen = !this.isOpen;
  }

  toggleSvg() {
    const baseUrl = './assets/shared/mobile/';

    return this.isOpen
      ? `${baseUrl}icon-close.svg`
      : `${baseUrl}icon-hamburger.svg`;
  }
}
