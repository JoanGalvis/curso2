import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'username'
})
export class UsernamePipe implements PipeTransform {

  transform(value: string, args?: any): any {
    if (!value) {
      return null;
    }

    const argumentos = (args || '').split(',') || [];

    if (argumentos.includes('lowerCase')) {
      value = value.toLowerCase();
    }

    if (argumentos.includes('simbolos')) {
      value = value.replace(/[^a-z0-9 ]/g, '');
    }

    if (argumentos.includes('espacios')) {
      value = value.replace(/ /g, '');
    }

    // Elimine espacios en blanco
    // Convierta de mayusculas a minusculas
    // Elimine los simbolos
    // value = value.replace(/[^a-z0-9]/g, '');

    return value;
  }

}
