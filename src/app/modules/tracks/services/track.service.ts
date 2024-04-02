import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { Observable, map, observable, of, catchError } from 'rxjs';
import { environment } from 'src/environments/environment';
//import * as dataRaw from '../../../data/tracks.json'

@Injectable({
  providedIn: 'root'
})
export class TrackService {

  private readonly url = environment.api_url

  //valores que son observables llevan comunmente un $ al final de la variable
  dataTracksTrending$: Observable<TrackModel[]> = of([]);
  dataTracksRandom$: Observable<TrackModel[]> = of([]);


  constructor(private httpClient: HttpClient) {
    //destrctura en data la data de tracks.json
    /*  const { data }: any = (dataRaw as any).default;
     this.dataTracksTrending$ = of(data)
 
     this.dataTracksRandom$ = new Observable((observable) => {
       observable.next(data)
     }) */
  }

  getAllTRacks$(): Observable<any> {
    return this.httpClient.get(`${this.url}/tracks`).pipe(
      map(({ data }: any) => {
        return data
      }),
      catchError((err) => {
        const { status, statusCode } = err
        console.log("Error al realizar la petición❌❌❌ ", status, statusCode);
        return of([])
      })
    )
  }

  getAllTRacksRandom$(): Observable<any> {
    return this.httpClient.get(`${this.url}/tracks`).pipe(
      map(({ data }: any) => {
        return data
      }),
      catchError((err) => {
        const { status, statusCode } = err
        console.log("Error al realizar la petición❌❌❌ ", status, statusCode);
        return of([])
      })
    )
  }

}
