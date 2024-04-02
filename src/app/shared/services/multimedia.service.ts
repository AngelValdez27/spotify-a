import { Injectable, EventEmitter } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { BehaviorSubject, Observable, min } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MultimediaService {

  observable1$: Observable<any> = new Observable()

  //dato que emite eventos
  callback: EventEmitter<any> = new EventEmitter<any>;

  public audio!: HTMLAudioElement
  public trackInfo$: BehaviorSubject<any> = new BehaviorSubject(undefined)
  public timeElapsed$: BehaviorSubject<any> = new BehaviorSubject("00:00")
  public timeRemaining$: BehaviorSubject<any> = new BehaviorSubject("-00:00")
  public playerStatus$: BehaviorSubject<any> = new BehaviorSubject("pause")
  public playerPercent$: BehaviorSubject<any> = new BehaviorSubject(0)

  constructor() {
    //inicializa el elemento hmtl de audio
    this.audio = new Audio()
    //se captira el evento disparado tambien en el servicio
    this.trackInfo$.subscribe(r => {
      //Si la respuesta no es undefined, asi esta inicializado el subjecbehaviour
      if (r) {
        console.log("Info en el servicio válida");
        this.setAudio(r)
      }
    })

    this.listenAllEvent()
  }

  listenAllEvent(): void {
    this.audio.addEventListener('timeupdate', this.timeCaculated, false)
    this.audio.addEventListener('playing', this.setPlayerStatus, false)
    this.audio.addEventListener('play', this.setPlayerStatus, false)
    this.audio.addEventListener('pause', this.setPlayerStatus, false)
    this.audio.addEventListener('ended', this.setPlayerStatus, false)

  }

  private timeCaculated = () => {
    const { duration, currentTime } = this.audio
    //console.log([duration, currentTime]);
    //setear el tiempo transcurrido
    this.setTimeElapsed(currentTime)
    this.setTimeRemaining(currentTime, duration)
    this.setPercent(currentTime, duration)
  }

  //STATUS DE LA CANCIÓN
  private setPlayerStatus = (state: any) => {
    // console.log("state ", state);
    switch (state.type) {
      case 'play':
        this.playerStatus$.next("play")
        break;
      case 'playing':
        this.playerStatus$.next("playing")
        break;
      case 'ended':
        this.playerStatus$.next("ended")
        break;
      default:
        this.playerStatus$.next("pause")
        break;
    }

  }

  //BARRA DE PROGRESO DE LA CANCIÓN
  private setPercent(currentTime: number, duration: number) {
    //TODO: currentTime * 100 / duration
    let percent = (currentTime * 100) / duration
    this.playerPercent$.next(percent)
  }

  setTimeElapsed(currentTime: number) {
    // console.log("current time ", currentTime);

    let seconds = Math.floor(currentTime % 60)
    let minutes = Math.floor((currentTime / 60) % 60)
    // console.table([minutes, seconds]);
    //Muestra lo segundos asi -> "01:20" en caso de ser menor a 10
    const displaySeconds = (seconds < 10) ? `0${seconds}` : seconds
    const displayMinutes = (seconds < 10) ? `0${minutes}` : minutes
    const displayFormat = `${displayMinutes}:${displaySeconds}`
    this.timeElapsed$.next(displayFormat)
  }

  setTimeRemaining(currentTime: number, duration: number) {
    let timeLeft = duration - currentTime
    let seconds = Math.floor(timeLeft % 60)
    let minutes = Math.floor((timeLeft / 60) % 60)
    const displaySeconds = (seconds < 10) ? `0${seconds}` : seconds
    const displayMinutes = (seconds < 10) ? `0${minutes}` : minutes
    const displayFormat = `-${displayMinutes}:${displaySeconds}`
    this.timeRemaining$.next(displayFormat)
  }

  //TOdO: public functions
  //setea el audio al elemento html en su src
  public setAudio(track: TrackModel) {
    console.log("Reproduciendo ", track);
    this.audio.src = track.url
    this.audio.play()
  }

  public togglePlayer() {
    (this.audio.paused) ? this.audio.play() : this.audio.pause()
  }

  public seekAudio(percent: number) {
    const { duration } = this.audio
    console.log(" duration audio ", duration)
    console.log("percent revceived ", percent);
    //TODO: 100% = duration(200s)
    //TODO: 70% = s?

    const percentToSecond = (percent * duration) / 100
    //equivale añ segundo
    console.log("segundo: ", percentToSecond);
    this.audio.currentTime = percentToSecond


  }

}
