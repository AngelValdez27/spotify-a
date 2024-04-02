import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Output() callbackData: EventEmitter<any> = new EventEmitter()
  src: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  callSearch(term: string): void {
    //Si la longitud es mayor o ugual a 3 envia la data al componente padre
    if (term.length >= 3) {
      this.callbackData.emit(term)
    }
  }

}
