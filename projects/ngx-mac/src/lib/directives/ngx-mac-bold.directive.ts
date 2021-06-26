import {Directive, HostBinding, Input} from "@angular/core";
import {NgxMacService} from "../ngx-mac.service";

@Directive({
  selector: '[NgxMacBold]'
})
export class NgxMacBoldDirective {

  private value: string;
  @Input()
  set NgxMacBold(bold: number | string | boolean) {
    if (typeof bold === 'boolean') {
      this.value = bold ? 'bold' : 'normal';
    } else if (typeof bold === 'number') {
      this.value = `${bold}`;
    } else {
      this.value = bold;
    }
  }

  @HostBinding('style.font-weight')
  get style() {
    return this.value;
  }

  constructor(private NgxMacService: NgxMacService) {}

}
