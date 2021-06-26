import {Directive, HostBinding, Input} from "@angular/core";
import {LayoutTypes} from "../types/types";

@Directive({
  selector: '[NgxMacLayout]'
})
export class NgxMacLayoutDirective {

  private value: string;

  @Input()
  set NgxMacLayout(layout: LayoutTypes) {
    if (layout === 'horizontal') {
      this.value = 'row';
    } else {
      this.value = 'column';
    }
  }

  @HostBinding('style.flexDirection')
  get style() {
    return this.value;
  }

  constructor() {}

}
