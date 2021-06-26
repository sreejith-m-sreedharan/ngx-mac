import {Directive, EventEmitter, HostBinding, HostListener, Input, Output} from "@angular/core";
import {NgxMacService} from "../ngx-mac.service";

@Directive({
  selector: '[NgxMacMouseover]'
})
export class NgxMacMouseoverDirective {
  @Output()
  NgxMacMouseover = new EventEmitter<boolean>();

  @HostListener('mouseover')
  mouseoverListener() {
    this.NgxMacMouseover.emit(true);
  }
  @HostListener('mouseout')
  mouseoutListener() {
    this.NgxMacMouseover.emit(false);
  }

  constructor(private NgxMacService: NgxMacService) {}

}
