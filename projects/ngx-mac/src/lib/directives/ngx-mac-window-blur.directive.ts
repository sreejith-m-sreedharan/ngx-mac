import {Directive, EventEmitter, HostBinding, HostListener, Input, Output} from "@angular/core";
import {NgxMacService} from "../ngx-mac.service";

@Directive({
  selector: '[NgxMacWindowBlur]'
})
export class NgxMacWindowBlurDirective {
  @Output()
  NgxMacWindowBlur = new EventEmitter<boolean>();

  @HostListener('window:blur')
  mouseoverListener() {
    this.NgxMacWindowBlur.emit(true);
  }
  @HostListener('window:focus')
  mouseoutListener() {
    this.NgxMacWindowBlur.emit(false);
  }

  constructor(private NgxMacService: NgxMacService) {}

}
