import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertirAEspacio'
})
export class ConvertirAEspacioPipe implements PipeTransform {
  transform(value: string, caracterAReemplazar: string): string {
    return value.replace(caracterAReemplazar, ' ');
  }
}
