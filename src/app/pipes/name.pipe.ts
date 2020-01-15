import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'name'
})
export class NamePipe implements PipeTransform {

  transform(movieName: string, certificate: string): any {
    return movieName + ' - ' + certificate;
  }

}
