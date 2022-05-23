import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-mobile-menu',
  templateUrl: './mobile-menu.component.html',
  styleUrls: ['./mobile-menu.component.scss'],
})
export class MobileMenuComponent {
  @Output()
  clickedEvent = new EventEmitter();

  public emitClick() {
    this.clickedEvent.emit(null);
  }
}
