import { Pipe, PipeTransform } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';

@Pipe({
  name: 'orderList'
})
export class OrderListPipe implements PipeTransform {
  /* Recibe un string (titulo) o un null -> args: string | null = null */
  /* Segundo argumento recibe otro string o usa el valor por default */
  transform(value: Array<any>, args: string | null = null, sort: string = 'asc'): TrackModel[] {
    try {
      if (args === null) {
        return value;
      } else {
        const tmpList = value.sort((a, b) => {
          if (a[args] < b[args]) {
            return -1
          }
          else if (a[args] == b[args]) {
            return 0
          }
          else if (a[args] > b[args]) {
            return 1
          }
          return 1;
        });
        return (sort == 'asc') ? tmpList : tmpList.reverse();
      }
    } catch (e) {
      console.log("Algo salió mal", e);
      return value;
    }
  }

}
