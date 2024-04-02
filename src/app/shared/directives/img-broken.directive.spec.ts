import { ElementRef } from '@angular/core';
import { ImgBrokenDirective } from './img-broken.directive';

describe('ImgBrokenDirective', () => {

  //TODO: debería instancia correctamente, ya que segun el  test con Jasmín, se espera un elementRef en el constrcutor
  it('should create an instance', () => {
    //adding variable
    const mockEl = new ElementRef('')
    const directive = new ImgBrokenDirective(mockEl);
    expect(directive).toBeTruthy();
  });
});
