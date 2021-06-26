import {Directive, EventEmitter, HostBinding, HostListener, Input, Output} from "@angular/core";
import {NgxMacService} from "../ngx-mac.service";

@Directive({
  selector: '[NgxMacFocus]'
})
export class NgxMacFocusDirective {
  @Output()
  NgxMacFocus = new EventEmitter<boolean>();

  @HostListener('focus')
  focusListener() {
    this.NgxMacFocus.emit(true);
  }
  @HostListener('blur')
  blurListener() {
    this.NgxMacFocus.emit(false);
  }

  constructor(private NgxMacService: NgxMacService) {}

}
