import {Directive, ElementRef, EventEmitter, HostBinding, Input, OnInit, Output, Renderer2} from "@angular/core";
import {NgxMacService} from "../ngx-mac.service";
import {OsTypes} from "../types/types";

@Directive({
  selector: '[NgxMacOsClass]',
  exportAs: 'NgxMacOs'
})
export class NgxMacOsClassDirective {

  @Output()
  osChange = new EventEmitter<OsTypes>();

  public os: OsTypes;

  @Input()
  set NgxMacOsClass(NgxMacOsClass: OsTypes) {
    const os = this.NgxMacService.getOs(NgxMacOsClass);
    if (this.os !== os) {
      this.os = os;
      this.osChange.emit(os);
    }
  }

  @HostBinding('class.windows')
  get windowsClass() {
    return this.os === 'windows';
  }

  @HostBinding('class.mac')
  get osClass() {
    return this.os === 'mac';
  }

  isMac() {
    return this.os === 'mac';
  }
  styleDefaultValue(macStyle: any, windowsStyle: any) {
    return this.isMac() ? macStyle : windowsStyle;
  }
  constructor(private NgxMacService: NgxMacService,
              private elementRef: ElementRef,
              private renderer2: Renderer2) {
  }

}
