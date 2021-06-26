import {
  Component,
  EventEmitter,
  forwardRef,
  HostListener,
  Input,
  OnInit,
  Output,
  ViewContainerRef
} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";
import {ControlValueAccessorAbstractComponent} from "../control-value-accessor-abstract.component";
import {StyleValueTypes} from "../../pipes/style-value.pipe";
import {VerticalAlignmentTypes} from "../../directives/ngx-mac-vertical-alignment.directive";
import {HorizontalAlignmentTypes} from "../../directives/ngx-mac-horizontal-alignment.directive";
import {LayoutTypes, OsTypes} from "../../types/types";
import {NgxMacService} from "../../ngx-mac.service";



@Component({
  selector: 'ngx-mac-window',
  templateUrl: './window.component.html',
  styleUrls: ['./window.component.css']
})
export class WindowComponent implements OnInit {
  private _os: OsTypes;
  @Input()
  set os(os: OsTypes) {
    this._os = os;
  }
  get os() {
    return this.NgxMacService.getOs(this._os);
  }
  @Input()
  label: string;
  @Input()
  disabled: boolean;
  @Input()
  background: string;
  @Input()
  color: string;
  @Input()
  height: StyleValueTypes;
  @Input()
  width: StyleValueTypes;
  @Input()
  verticalAlignment: VerticalAlignmentTypes = 'top';
  @Input()
  horizontalAlignment: HorizontalAlignmentTypes = 'left';
  @Input()
  padding: number | string = '24px 20px 20px';
  @Input()
  paddingTop: number | string;
  @Input()
  paddingLeft: number | string;
  @Input()
  paddingRight: number | string;
  @Input()
  paddingBottom: number | string;
  @Input()
  layout: LayoutTypes = 'horizontal';

  windowBlur: boolean;


  constructor(private NgxMacService: NgxMacService) {
  }

  ngOnInit(): void {
  }
}
