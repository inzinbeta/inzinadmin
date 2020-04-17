import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'availabilityDistricts'
})
export class AvailabilityDistrictsPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value.map(({name})=>name).join(",");
  }

}
