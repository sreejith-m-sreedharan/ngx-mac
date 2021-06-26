import {Directive, HostBinding, Input} from "@angular/core";
import {NgxMacService} from "../ngx-mac.service";

@Directive({
  selector: '[NgxMacSize]'
})
export class NgxMacSizeDirective {
  private size: string;
  @Input()
  set NgxMacSize(size: number | string) {
    this.size = this.NgxMacService.getPxValue(size);
  }

  @HostBinding('style.font-size')
  get style() {
    return this.size;
  }

  constructor(private NgxMacService: NgxMacService) {}

}
