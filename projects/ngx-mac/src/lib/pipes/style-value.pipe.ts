import {Injectable, Pipe, PipeTransform} from "@angular/core";
import {NgxMacService} from "../ngx-mac.service";

@Pipe({
  name: 'styleValue',
  pure: true
})
@Injectable({
  providedIn: 'root'
})
export class StyleValuePipe implements PipeTransform {

  constructor() {}

  transform(value: StyleValueTypes | boolean, ...args: any[]): any {
    if (typeof value === 'number') {
      return `${value}px`;
    } else if (typeof value === 'boolean') {
      return args[0] && value ? args[0] : 'no-set';
    } else if (value) {
      return value;
    }
    return args[0] ? args[0] : 'no-set';
  }
}

export type StyleValueTypes = string | number;
