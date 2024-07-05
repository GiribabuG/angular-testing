import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(iteams: any[], search: string): any {
    if(!iteams) return [];

    if(!search) return iteams;

    search = search.toLowerCase();

    return iteams.filter((it)=>{
      return it.toLowerCase().includes(search)
    });
  }

}
