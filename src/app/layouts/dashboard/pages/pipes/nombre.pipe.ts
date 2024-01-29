import { Pipe, PipeTransform } from '@angular/core';
import { last } from 'rxjs';
import { FullNamePipe } from '../../../../shared/full-name.pipe';

@Pipe({
  name: 'nombrePipe'
})
export class NombrePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    let nombre = value.toLowerCase()

    return nombre.charAt(0).toUpperCase() +nombre.slice(1)  ;


  }
}
