import {Directive, HostBinding, Input} from "@angular/core";
import {NgxMacService} from "../ngx-mac.service";

@Directive({
  selector: '[NgxMacPadding]'
})
export class NgxMacPaddingDirective {

  private value: string;
  @Input()
  set NgxMacPadding(height: number | string) {
    this.value = this.NgxMacService.getPxValue(height, '');
  }
  private _paddingBottom: string = '0';
  @Input()
  set paddingBottom(paddingBottom: number | string) {
    this._paddingBottom = this.NgxMacService.getPxValue(paddingBottom);
  }
  private _paddingLeft: string = '0';
  @Input()
  set paddingLeft(paddingLeft: number | string) {
    this._paddingLeft = this.NgxMacService.getPxValue(paddingLeft);
  }
  private _paddingRight: string = '0';
  @Input()
  set paddingRight(paddingRight: number | string) {
    this._paddingRight = this.NgxMacService.getPxValue(paddingRight);
  }
  private _paddingTop: string = '0';
  @Input()
  set paddingTop(paddingTop: number | string) {
    this._paddingTop = this.NgxMacService.getPxValue(paddingTop);
  }

  @HostBinding('style.padding')
  get style() {
    if (this.value) {
      return this.value;
    }
    return `${this._paddingTop} ${this._paddingRight} ${this._paddingBottom} ${this._paddingLeft}`;
  }

  constructor(private NgxMacService: NgxMacService) {}

}
