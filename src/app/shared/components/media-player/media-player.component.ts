import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { MultimediaService } from '@shared/services/multimedia.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css']
})
export class MediaPlayerComponent implements OnInit, OnDestroy {
  @ViewChild('progressBar') 'progressBar': ElementRef = new ElementRef('')
  //mockCover!: TrackModel
  observerList: Array<Subscription> = []
  state: string = 'paused'

  constructor(public _multimediaService: MultimediaService) { }

  ngOnInit(): void {
    //El servicio de miltimediaService se usa en la pantilla pra dinamismo, volviendo a este público
    /*  const observer1: Subscription = this._multimediaService.callback.subscribe((r: TrackModel) => {
       console.log(r);
     })
     //crea una lista de subscripciones en caso de tener mas de una
     this.observerList.push(observer1)
     console.log("✔Observers list ", this.observerList);
 
 
     const observable1 = this._multimediaService.observable1$ */

    /* this._multimediaService.trackInfo$.subscribe(r => {
      console.log("Reproduce: ", r);

    }) */
    const observer1$ = this._multimediaService.playerStatus$.subscribe(status => this.state = status)
    this.observerList.push(observer1$)

  }

  ngOnDestroy(): void {
    this.observerList.forEach(b => {
      b.unsubscribe()
    })
  }

  //manejador de posición en la barra de la cancion
  handlePoition(event: MouseEvent) {
    const elNative: HTMLElement = this.progressBar.nativeElement
    const { clientX } = event
    //extrae propiedades de dimension dek elemento al que se le da click
    const { x, width } = elNative.getBoundingClientRect()
    const clickX = clientX - x //TODO resta del total del ancho "clientX" el total del elemnto clickeado "x" ej: 1050 - x

    const percentFromX = (clickX * 100) / width
    console.log(`click (X) ${clickX}, width: ${width},  width Initial: ${x}`);
    console.log("porcentaje en la barra ", percentFromX);
    this._multimediaService.seekAudio(percentFromX)

  }

}
