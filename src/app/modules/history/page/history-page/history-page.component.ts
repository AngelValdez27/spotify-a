import { Component, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { SearchService } from '@modules/history/services/search.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-history-page',
  templateUrl: './history-page.component.html',
  styleUrls: ['./history-page.component.css']
})
export class HistoryPageComponent implements OnInit {
  listResults$: Observable<any> = of([])
  constructor(private _searchService: SearchService) { }

  ngOnInit(): void {
  }

  //recibe la data del coponente hijo SEARCH para hacer la busqueda del item 
  receiveData(data: string) {
    this.listResults$ = this._searchService.searchTracks$(data)
    /* this._searchService.searchTracks$(data).subscribe({
      next: ({ data }) => {
        this.listResults$ = data
        console.log(data);

      },
      error: (err) => {
        console.log("Error... ", err);

      }
    })*/
  }

}
