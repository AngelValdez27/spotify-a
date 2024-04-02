import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private readonly url = environment.api_url

  constructor(private http: HttpClient) { }

  searchTracks$(term: string): Observable<any> {
    return this.http.get(`${this.url}/tracks?src=${term}`).pipe(
      //el pipe funciona para mandar lo que tenga en su clave 'data' del objeto que viene como respuesta
      //ya que el que recibe la info es una variable observable
      map((dataRaw: any) => dataRaw.data)
    )
  }

}
