import {InjectionToken, ModuleWithProviders, NgModule} from '@angular/core';
import {NgxMacComponent} from './ngx-mac.component';
import {CheckboxComponent} from "./components/checkbox/checkbox.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ButtonComponent} from "./components/button/button.component";
import {BoxComponent} from "./components/box/box.component";
import {LabelComponent} from "./components/label/label.component";
import {RadioComponent} from "./components/radio/radio.component";
import {CommonModule} from "@angular/common";
import {OS_TOKEN, OsTypes} from "./types/types";
import {OsUtils} from "./utils/os.utils";
import {SegmentedControlComponent} from "./components/segmented-control/segmented-control.component";
import {SegmentedControlItemComponent} from "./components/segmented-control-item/segmented-control-item.component";
import {TextInputComponent} from "./components/text-input/text-input.component";
import {ViewComponent} from "./components/view/view.component";
import {TextComponent} from "./components/text/text.component";
import {WindowComponent} from "./components/window/window.component";
import {NgxMacSizeDirective} from "./directives/ngx-mac-size.directive";
import {NgxMacHeightDirective} from "./directives/ngx-mac-height.directive";
import {NgxMacWidthDirective} from "./directives/ngx-mac-width.directive";
import {NgxMacBoldDirective} from "./directives/ngx-mac-bold.directive";
import {NgxMacMarginDirective} from "./directives/ngx-mac-margin.directive";
import {NgxMacPaddingDirective} from "./directives/ngx-mac-padding.directive";
import {NgxMacHorizontalAlignmentDirective} from "./directives/ngx-mac-horizontal-alignment.directive";
import {NgxMacVerticalAlignmentDirective} from "./directives/ngx-mac-vertical-alignment.directive";
import {NgxMacOsClassDirective} from "./directives/ngx-mac-os-class.directive";
import {NgxMacMouseoverDirective} from "./directives/ngx-mac-mouseover.directive";
import {NgxMacFocusDirective} from "./directives/ngx-mac-focus.directive";
import {NgxMacMousedownDirective} from "./directives/ngx-mac-mousedown.directive";
import {NgxMacWindowBlurDirective} from "./directives/ngx-mac-window-blur.directive";
import {StyleValuePipe} from "./pipes/style-value.pipe";
import {TitleBarComponent} from "./components/title-bar/title-bar.component";
import {ProgressCircleComponent} from "./components/progress-circle/progress-circle.component";
import {ToolbarComponent} from "./components/toolbar/toolbar.component";
import {ToolbarNavComponent} from "./components/toolbar-nav/toolbar-nav.component";
import {ToolbarNavItemComponent} from "./components/toolbar-nav-item/toolbar-nav-item.component";
import {NavPaneComponent} from "./components/nav-pane/nav-pane.component";
import {NavPaneItemComponent} from "./components/nav-pane-item/nav-pane-item.component";
import {SearchFieldComponent} from "./components/search-field/search-field.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {NgxMacLayoutDirective} from "./directives/ngx-mac-layout.directive";


@NgModule({
  declarations: [
    NgxMacComponent,
    CheckboxComponent,
    ButtonComponent,
    BoxComponent,
    LabelComponent,
    RadioComponent,
    TextInputComponent,
    SegmentedControlComponent,
    SegmentedControlItemComponent,
    TextComponent,
    WindowComponent,
    ViewComponent,
    NgxMacSizeDirective,
    NgxMacHeightDirective,
    NgxMacWidthDirective,
    NgxMacBoldDirective,
    NgxMacMarginDirective,
    NgxMacPaddingDirective,
    NgxMacHorizontalAlignmentDirective,
    NgxMacVerticalAlignmentDirective,
    NgxMacOsClassDirective,
    NgxMacMouseoverDirective,
    NgxMacFocusDirective,
    NgxMacMousedownDirective,
    NgxMacWindowBlurDirective,
    StyleValuePipe,
    TitleBarComponent,
    ProgressCircleComponent,
    ToolbarComponent,
    ToolbarNavComponent,
    ToolbarNavItemComponent,
    NavPaneComponent,
    NavPaneItemComponent,
    SearchFieldComponent,
    NgxMacLayoutDirective,
  ],
  imports: [
    FormsModule,
    CommonModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  exports: [
    NgxMacComponent,
    CheckboxComponent,
    ButtonComponent,
    BoxComponent,
    LabelComponent,
    RadioComponent,
    TextInputComponent,
    SegmentedControlComponent,
    SegmentedControlItemComponent,
    TextComponent,
    WindowComponent,
    ViewComponent,
    NgxMacSizeDirective,
    NgxMacHeightDirective,
    NgxMacWidthDirective,
    NgxMacBoldDirective,
    NgxMacMarginDirective,
    NgxMacPaddingDirective,
    NgxMacHorizontalAlignmentDirective,
    NgxMacVerticalAlignmentDirective,
    NgxMacOsClassDirective,
    NgxMacMouseoverDirective,
    NgxMacFocusDirective,
    NgxMacMousedownDirective,
    NgxMacWindowBlurDirective,
    StyleValuePipe,
    TitleBarComponent,
    ProgressCircleComponent,
    ToolbarComponent,
    ToolbarNavComponent,
    ToolbarNavItemComponent,
    NavPaneComponent,
    NavPaneItemComponent,
    SearchFieldComponent,
    NgxMacLayoutDirective,
  ]
})
export class NgxMacModule {
  static forRoot(os: OsTypes = 'auto'): ModuleWithProviders {
    return {
      ngModule: NgxMacModule,
      providers: [{
        provide: OS_TOKEN,
        useValue: os
      }]
    };
  }
}
