import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'label'
})
export class LabelPipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {
     // adding space between strings
     if (typeof value !== 'string') {
      value = "" + value + "";
    }
    return value.replace(/([A-Z])/g,' $1');
  }

}
