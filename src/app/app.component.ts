import { Component } from '@angular/core';
import {OsTypes} from "../../projects/ngx-mac/src/lib/types/types";
import {NgxMacService} from "../../projects/ngx-mac/src/lib/ngx-mac.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  autoOs: boolean = true;
  os: OsTypes = 'auto';
  title = 'ngx-mac';

  constructor() {}
}
