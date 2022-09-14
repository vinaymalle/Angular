import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'attachpipe'
})
export class AttachpipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    console.log(value);
    return value + "boyina";
  }

}
