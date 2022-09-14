import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'attachcontent'
})
export class AttachcontentPipe implements PipeTransform {

  transform(value: unknown, secparam: any, thirdparam: any): string {
    console.log(value, secparam, thirdparam);
    
    return value + "kumar";
  }

}
