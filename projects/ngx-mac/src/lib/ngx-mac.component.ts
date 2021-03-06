import {Component, HostListener, OnInit} from '@angular/core';
import {ControlValueAccessor} from "@angular/forms";

@Component({
  selector: 'lib-ngx-mac',
  template: `
`,
  styles: [`
  `]
})
export class NgxMacComponent implements OnInit, ControlValueAccessor {

  blur: boolean;

  constructor() {
  }

  ngOnInit(): void {
  }

  @HostListener('window:blur')
  windowBlurListener() {
    this.blur = true;
  }

  @HostListener('window:focus')
  windowFocusListener() {
    this.blur = false;
  }

  registerOnChange(fn: any): void {
  }

  registerOnTouched(fn: any): void {
  }

  setDisabledState(isDisabled: boolean): void {
  }

  writeValue(obj: any): void {
  }
}
