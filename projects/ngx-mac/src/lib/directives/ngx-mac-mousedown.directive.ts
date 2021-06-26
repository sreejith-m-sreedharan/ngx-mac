import {Directive, EventEmitter, HostBinding, HostListener, Input, Output} from "@angular/core";
import {NgxMacService} from "../ngx-mac.service";

@Directive({
  selector: '[NgxMacMousedown]'
})
export class NgxMacMousedownDirective {
  @Output()
  NgxMacMousedown = new EventEmitter<boolean>();

  @HostListener('mousedown')
  mousedownListener() {
    this.NgxMacMousedown.emit(true);
  }
  @HostListener('window:mouseup')
  windowMouseupListener() {
    this.NgxMacMousedown.emit(false);
  }

  constructor() {}

}
