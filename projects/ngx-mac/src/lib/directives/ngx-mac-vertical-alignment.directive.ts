import {Directive, HostBinding, Input} from "@angular/core";
import {NgxMacService} from "../ngx-mac.service";

@Directive({
  selector: '[NgxMacVerticalAlignment]'
})
export class NgxMacVerticalAlignmentDirective {

  private value: string;

  @Input()
  set NgxMacVerticalAlignment(verticalAlignment: VerticalAlignmentTypes) {
    if (verticalAlignment === 'top') {
      this.value = 'flex-start';
    } else if (verticalAlignment === 'center') {
      this.value = 'center';
    } else if (verticalAlignment === 'bottom') {
      this.value = 'flex-end';
    } else {
      this.value = 'normal';
    }
  }

  @HostBinding('style.align-items')
  get style() {
    return this.value;
  }

  constructor(private NgxMacService: NgxMacService) {}

}

export type VerticalAlignmentTypes = 'top' | 'center' | 'bottom';
