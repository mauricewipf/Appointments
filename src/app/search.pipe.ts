import { Pipe, PipeTransform } from '@angular/core';

import { Appointment } from './appointment';

@Pipe({
  name: 'search',
  pure: false
})

export class SearchPipe implements PipeTransform {
  transform(items: any[], field: string, value: string): any[] {
    if (!items) {
      return [];
    } else if (!field || !value) {
      return items;
    } else {
      return items.filter(singleItem => singleItem[field].toLowerCase().includes(value.toLowerCase()));
    }
  }

}
