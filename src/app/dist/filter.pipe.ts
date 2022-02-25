import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[],filtext:string,prop:string): any[] {
    const result :any[]=[];
    if(!value || filtext==='' || prop===''){
      return value;
    }
    value.forEach((a:any)=>{
    if((a[prop].trim().toLowerCase())===(filtext.toLowerCase())){
      result.push(a);
    };

    })
    return result;
  }

}
