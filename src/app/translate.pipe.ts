import {Pipe, PipeTransform} from '@angular/core';
import {messagesRu} from "./messagesRu";

@Pipe({
  name: 'translate'
})
export class TranslatePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    if (localStorage.getItem('locale') === 'ru') {
      // @ts-ignore
      return messagesRu[value];
    } else return value

  }

}
