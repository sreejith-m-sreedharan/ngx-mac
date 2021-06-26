# NgxMac

support angular version [9.0.x - 9.1.5)

Angular UI Components for macOS High Sierra and Windows 10.

The included components are as follows

* button (support mac or windows)
* checkbox (support mac or windows)
* text (support mac or windows)
* label (support mac or windows)
* text-input (support mac or windows)
* radio (support mac or windows)
* view (support mac or windows)
* window (support mac or windows)
* title-bar (support mac or windows)
* toolbar (support mac)
* toolbar-nav / toolbar-item (support mac)
* segmented-control / segmented-control-item (support mac)
* nav-pane / nav-pane (support windows) (developing)
* pin (support mac) (developing)
* list-view (support mac) (developing)


[https://www.npmjs.com/package/react-desktop](https://www.npmjs.com/package/react-desktop)


## Install
````
npm i ngx-mac -s
````

## Usage

### import module

```
import {NgxMacModule} from "ngx-mac";

@NgModule({
  imports: [
    NgxMacModule.forRoot(),
    ...
  ],
  ...
})
export class AppModule { }
```

