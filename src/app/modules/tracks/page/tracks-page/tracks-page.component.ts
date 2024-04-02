import { Component, OnDestroy, OnInit } from '@angular/core';
import * as dataRaw from '../../../../data/tracks.json'
import { TrackModel } from '@core/models/tracks.model';
import { TrackService } from '@modules/tracks/services/track.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tracks-page',
  templateUrl: './tracks-page.component.html',
  styleUrls: ['./tracks-page.component.css']
})
export class TracksPageComponent implements OnInit, OnDestroy {
  tracksTrendingData: Array<TrackModel> = []
  tracksRandomData: Array<TrackModel> = []

  observerList$: Subscription[] = []

  constructor(private _trackService: TrackService) { }

  ngOnInit(): void {
    this.getTracks()
    this.getTracksRandom()
    /* const { data }: any = (dataRaw as any).default
    this.mockTrackList = data */
    /*     const observerDataTracksTrending$ = this._trackService.dataTracksTrending$.subscribe(res => {
          this.tracksTrendingData = res
        })
    
        const observerDataTracksRandom$ = this._trackService.dataTracksRandom$.subscribe(res => {
          this.tracksRandomData = res
        })
    
        this.observerList$.push(observerDataTracksTrending$, observerDataTracksRandom$) */
  }

  getTracks() {
    this._trackService.getAllTRacks$().subscribe({
      next: (res: TrackModel[]) => {
        console.log(res);
        this.tracksTrendingData = res
      }/* ,
      error: (err) => {
        console.log("Error ❌❌❌ ", err);
      },
      complete: () => {
        console.log("Completado");
      } */
    })
  }

  getTracksRandom() {
    this._trackService.getAllTRacks$().subscribe({
      next: (res: TrackModel[]) => {
        console.log(res);
        this.tracksRandomData = res.reverse()
      }/* ,
      error: (error) => {
        console.log("Error ❌❌❌ ", error);
      },
      complete: () => {
        console.log("Completado");
      } */
    })
    //end subscribe
  }

  ngOnDestroy(): void {
    /*   this.observerList$.forEach(obj => {
        obj.unsubscribe();
      }) */
  }

}
