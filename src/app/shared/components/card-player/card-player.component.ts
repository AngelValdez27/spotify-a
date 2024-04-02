import { Component, Input, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { MultimediaService } from '@shared/services/multimedia.service';

@Component({
  selector: 'app-card-player',
  templateUrl: './card-player.component.html',
  styleUrls: ['./card-player.component.css']
})
export class CardPlayerComponent implements OnInit {
  @Input() mode: "small" | "big" = "big";
  @Input() track!: TrackModel;
  constructor(private _multimediaService: MultimediaService) { }

  ngOnInit(): void {
  }

  sendDataPlay(track: TrackModel) {
    //enviar cancion a reproducir en componente externo
    //this._multimediaService.callback.emit(track)
    this._multimediaService.trackInfo$.next(track)
  }

}
