import { OrderListPipe } from './order-list.pipe';
import * as mockRaw from '../../data/tracks.json'
import { TrackModel } from '@core/models/tracks.model';
import { last } from 'rxjs';

describe('OrderListPipe', () => {
  it('create an instance', () => {
    const pipe = new OrderListPipe();
    expect(pipe).toBeTruthy();
  });

  it('Probando entrada y salida de valores', () => {
    //TODO: arrange
    const pipe = new OrderListPipe();
    const { data }: any = (mockRaw as any).default

    //TODO: ACT
    const result: TrackModel[] = pipe.transform(data)
    //TODO: assert
    expect(result).toEqual(data)
  })

  it('Probar si se ordena de manera asc', () => {
    //arrage
    const pipe = new OrderListPipe();
    const { data }: any = (mockRaw as any).default
    const firstValue = data.find((i: any) => i._id == 7)
    const lastValue = data.find((i: any) => i._id == 6)

    //act
    const result: TrackModel[] = pipe.transform(data, 'name', 'asc')
    const firstResult = result[0]
    const lastResult = result[result.length - 1]

    //assert
    expect(firstResult).toEqual(firstValue)
    expect(lastResult).toEqual(lastValue)
  })

  it('Probar si se ordena de manera desc', () => {
    //arrage
    const pipe = new OrderListPipe();
    const { data }: any = (mockRaw as any).default
    const firstValue = data.find((i: any) => i._id == 7)
    const lastValue = data.find((i: any) => i._id == 6)

    //act
    const result: TrackModel[] = pipe.transform(data, 'name', 'desc')
    const firstResult = result[0]
    const lastResult = result[result.length - 1]

    //assert
    expect(firstResult).toEqual(lastValue)
    expect(lastResult).toEqual(firstValue)
  })


});
