import {Directive, HostBinding, Input} from "@angular/core";
import {NgxMacService} from "../ngx-mac.service";

@Directive({
  selector: '[NgxMacHeight]'
})
export class NgxMacHeightDirective {

  private height: string;
  @Input()
  set NgxMacHeight(height: number | string) {
    this.height = this.NgxMacService.getPxValue(height, 'auto');
  }

  @HostBinding('style.height')
  get style() {
    return this.height;
  }

  constructor(private NgxMacService: NgxMacService) {}

}
