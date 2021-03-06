import {
  Component,
  EventEmitter,
  forwardRef, HostBinding,
  HostListener,
  Input,
  OnInit,
  Output,
  ViewContainerRef
} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";
import {ControlValueAccessorAbstractComponent} from "../control-value-accessor-abstract.component";
import {LayoutTypes, OsTypes} from "../../types/types";
import {NgxMacService} from "../../ngx-mac.service";
import {StyleValuePipe} from "../../pipes/style-value.pipe";
import {HorizontalAlignmentTypes} from "../../directives/ngx-mac-horizontal-alignment.directive";
import {VerticalAlignmentTypes} from "../../directives/ngx-mac-vertical-alignment.directive";

@Component({
  selector: 'ngx-mac-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  private _os: OsTypes;
  @Input()
  set os(os: OsTypes) {
    this._os = os;
  }
  get os() {
    return this.NgxMacService.getOs(this._os);
  }
  @Input()
  horizontalAlignment: HorizontalAlignmentTypes;
  @Input()
  verticalAlignment: VerticalAlignmentTypes;
  @Input()
  height: string | number;
  @Input()
  width: string | number;
  @Input()
  margin: number | string;
  @Input()
  marginTop: number | string;
  @Input()
  marginLeft: number | string;
  @Input()
  marginRight: number | string;
  @Input()
  marginBottom: number | string;
  @Input()
  padding: number | string;
  @Input()
  paddingTop: number | string;
  @Input()
  paddingLeft: number | string;
  @Input()
  paddingRight: number | string;
  @Input()
  paddingBottom: number | string;
  @Input()
  background: string | boolean = false;
  @Input()
  layout: LayoutTypes = 'horizontal';

  constructor(private NgxMacService: NgxMacService,
              private styleValuePipe: StyleValuePipe) {
  }

  ngOnInit(): void {
  }

  @HostBinding('style.width')
  get styleWidth() {
    return this.styleValuePipe.transform(this.width);
  }

  @HostBinding('style.height')
  get styleHeight() {
    return this.styleValuePipe.transform(this.height);
  }
}
