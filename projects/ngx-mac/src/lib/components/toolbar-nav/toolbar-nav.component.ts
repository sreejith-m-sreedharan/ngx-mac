import {
  Component, ContentChild, ContentChildren,
  EventEmitter,
  forwardRef,
  HostListener,
  Input,
  OnInit,
  Output, QueryList,
  ViewContainerRef
} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";
import {ControlValueAccessorAbstractComponent} from "../control-value-accessor-abstract.component";
import {OsTypes} from "../../types/types";
import {NgxMacService} from "../../ngx-mac.service";
import {VerticalAlignmentTypes} from "../../directives/ngx-mac-vertical-alignment.directive";
import {HorizontalAlignmentTypes} from "../../directives/ngx-mac-horizontal-alignment.directive";
import {StyleValueTypes} from "../../pipes/style-value.pipe";
import {ToolbarComponent} from "../toolbar/toolbar.component";
import {ToolbarNavItemComponent} from "../toolbar-nav-item/toolbar-nav-item.component";

@Component({
  selector: 'ngx-mac-toolbar-nav',
  templateUrl: './toolbar-nav.component.html',
  styleUrls: ['./toolbar-nav.component.css']
})
export class ToolbarNavComponent implements OnInit {

  @ContentChildren(ToolbarNavItemComponent)
  toolbarNavItemComponents: QueryList<ToolbarNavItemComponent>;
  @Input()
  selectedIndex: number = 0;
  @Output()
  selectedIndexChange = new EventEmitter();
  @Input()
  height: StyleValueTypes;
  @Input()
  width: StyleValueTypes;
  @Input()
  verticalAlignment: VerticalAlignmentTypes = 'center';
  @Input()
  horizontalAlignment: HorizontalAlignmentTypes = 'center';

  windowBlur: boolean;

  constructor() {
  }

  ngOnInit(): void {
  }

}
