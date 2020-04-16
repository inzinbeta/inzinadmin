import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tags'
})
export class TagsPipe implements PipeTransform {

  transform(value: any, args?: any): any {
     

    return value.map(({name})=>name).join(",");
  }

}
