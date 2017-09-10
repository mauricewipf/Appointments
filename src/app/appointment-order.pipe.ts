import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'appointmentOrder'
})
export class AppointmentOrderPipe implements PipeTransform {

  transform(items: any[], field: any, value: any): any[] {
    if (!items) {
      return [];
    } else {
      return items.sort(function(a, b){
        return new Date(a.day).getDate() - new Date(b.day).getDate();
      });
    }
  }

}


