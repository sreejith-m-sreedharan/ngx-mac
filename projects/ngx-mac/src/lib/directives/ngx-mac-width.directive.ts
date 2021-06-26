import {Directive, HostBinding, Input} from "@angular/core";
import {NgxMacService} from "../ngx-mac.service";

@Directive({
  selector: '[NgxMacWidth]'
})
export class NgxMacWidthDirective {
  private width: string;
  @Input()
  set NgxMacWidth(size: number | string) {
    this.width = this.NgxMacService.getPxValue(size, 'auto');
  }

  @HostBinding('style.width')
  get style() {
    return this.width;
  }

  constructor(private NgxMacService: NgxMacService) {}

}
