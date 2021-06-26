import {Directive, HostBinding, Input} from "@angular/core";
import {NgxMacService} from "../ngx-mac.service";

@Directive({
  selector: '[NgxMacMargin]',
})
export class NgxMacMarginDirective {

  private value: string;
  @Input()
  set NgxMacMargin(height: number | string) {
    this.value = this.NgxMacService.getPxValue(height, '');
  }
  private _marginBottom: string = '0';
  @Input()
  set marginBottom(marginBottom: number | string) {
    this._marginBottom = this.NgxMacService.getPxValue(marginBottom);
  }
  private _marginLeft: string = '0';
  @Input()
  set marginLeft(marginLeft: number | string) {
    this._marginLeft = this.NgxMacService.getPxValue(marginLeft);
  }
  private _marginRight: string = '0';
  @Input()
  set marginRight(marginRight: number | string) {
    this._marginRight = this.NgxMacService.getPxValue(marginRight);
  }
  private _marginTop: string = '0';
  @Input()
  set marginTop(marginTop: number | string) {
    this._marginTop = this.NgxMacService.getPxValue(marginTop);
  }

  @HostBinding('style.margin')
  get style() {
    if (this.value) {
      return this.value;
    }
    return `${this._marginTop} ${this._marginRight} ${this._marginBottom} ${this._marginLeft}`;
  }

  constructor(private NgxMacService: NgxMacService) {}

}
