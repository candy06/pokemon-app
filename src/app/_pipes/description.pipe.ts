import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'description'
})
export class DescriptionPipe implements PipeTransform {

  transform(value: string, args?: any): any {
    if (value.includes('dex')) {
      return value.substring(0, value.indexOf('dex')).concat('dex');
    } else {
      return value;
    }
  }

}
