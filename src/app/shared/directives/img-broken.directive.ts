import { Element } from '@angular/compiler';
import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  //con img olo afecta a lo elementos de ese tipo
  selector: 'img[appImgBroken]'
})
export class ImgBrokenDirective {
  //escucha el evento error del elemento para sustituir img en caso de no encontrarla
  @HostListener('error') errorHandler(): void {
    const elementNative = this.elementRef.nativeElement
    elementNative.src = '../../../assets/images/descargar.png'
  }

  constructor(private elementRef: ElementRef) { }

}
