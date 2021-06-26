import {Directive, HostBinding, Input} from "@angular/core";
import {NgxMacService} from "../ngx-mac.service";

@Directive({
  selector: '[NgxMacHorizontalAlignment]'
})
export class NgxMacHorizontalAlignmentDirective {

  private value: string;

  @Input()
  set NgxMacHorizontalAlignment(horizontalAlignment: HorizontalAlignmentTypes) {
    if (horizontalAlignment === 'left') {
      this.value = 'flex-start';
    } else if (horizontalAlignment === 'right') {
      this.value = 'flex-end';
    } else if (horizontalAlignment === 'center') {
      this.value = 'center';
    } else {
      this.value = 'normal';
    }
  }

  @HostBinding('style.justify-content')
  get style() {
    return this.value;
  }

  constructor(private NgxMacService: NgxMacService) {}

}

export type HorizontalAlignmentTypes = 'left' | 'center' | 'right';
