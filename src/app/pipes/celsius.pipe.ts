import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'celsius',
  standalone: true
})
export class CelsiusPipe implements PipeTransform {
  transform(value: number | undefined, ...args: unknown[]): string {
    return value ? value + ' °C' : '';
  }
}
