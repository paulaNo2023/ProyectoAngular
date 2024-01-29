import { ElementRef } from '@angular/core';
import { FuenteDirective } from './fuente.directive';

describe('FuenteDirective', () => {
  elemento: ElementRef
  it('should create an instance', () => {
    const directive = new FuenteDirective();
    expect(directive).toBeTruthy();
  });
});
