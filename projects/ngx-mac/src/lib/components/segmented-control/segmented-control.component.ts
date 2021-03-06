import {
  Component,
  ContentChildren,
  forwardRef,
  HostListener,
  Input,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren
} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";
import {ControlValueAccessorAbstractComponent} from "../control-value-accessor-abstract.component";
import {SegmentedControlItemComponent} from "../segmented-control-item/segmented-control-item.component";

@Component({
  selector: 'ngx-mac-segmented-control',
  templateUrl: './segmented-control.component.html',
  styleUrls: ['./segmented-control.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => SegmentedControlComponent),
    multi: true
  }]
})
export class SegmentedControlComponent extends ControlValueAccessorAbstractComponent implements OnInit, ControlValueAccessor {

  @ContentChildren(SegmentedControlItemComponent)
  segmentedList: QueryList<SegmentedControlItemComponent>;
  @Input()
  height: string | number = '100%';
  @Input()
  width: string | number = '100%';
  @Input()
  backgroundColor: string = 'rgba(0, 0, 0, 0.04)';
  @Input()
  marginBottom: string | number;
  @Input()
  marginLeft: string | number;
  @Input()
  marginRight: string | number;
  @Input()
  marginTop: string | number;
  @Input()
  paddingBottom: string | number;
  @Input()
  paddingLeft: string | number;
  @Input()
  paddingRight: string | number;
  @Input()
  paddingTop: string | number;
  @Input()
  padding: string | number;
  @Input()
  margin: string | number;

  windowBlur: boolean;

  constructor() {
    super();
  }

  ngOnInit(): void {
    if (this.model === undefined) {
      setTimeout(() => this.selectTab(0));
    }
  }

  writeValue(obj: any): void {
    this.model = obj;
    this.selectTab(this.model);
  }

  selectTab(index: number, segmented?: SegmentedControlItemComponent) {
    if (!this.segmentedList) {
      return;
    }
    const lastTab = this.segmentedList.find(i => i.show);
    if (lastTab) {
      lastTab.show = false;
    }
    if (!segmented) {
      segmented = this.segmentedList.find((s, i) => i === index);
    }
    if (segmented) {
      segmented.show = true;
      this.model = index;
      super.changeValue(index);
    }
  }
}
