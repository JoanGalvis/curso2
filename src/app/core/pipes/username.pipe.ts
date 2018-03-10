import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'username'
})
export class UsernamePipe implements PipeTransform {

  transform(value: string, lowerCase?: boolean, symbols?: boolean, whiteSpaces?: boolean): any {
    if (!value) {
      return null;
    }

    // Elimine espacios en blanco
    // Convierta de mayusculas a minusculas
    // Elimine los simbolos

    if (lowerCase) {
      value = value.toLowerCase();
    }

    if (symbols) {
      value = value.replace(/[^a-z0-9 ]/g, '');
    }

    if (whiteSpaces) {
      value = value.replace(/ /g, '');
    }

    // value = value.replace(/[^a-z0-9]/g, '');

    return value;
  }

}
