import {
    Directive,
    ElementRef,
    Input,
    OnChanges,
    Renderer2,
    SimpleChanges,
  } from '@angular/core';
  import { UserPipe } from './full-name.pipe';
  
  @Directive({
    selector: '[appResaltado2]',
  })
  export class ResaltadoDirective2 implements OnChanges {
    @Input()
    color = 'blue';
  
    @Input()
    user: UserPipe | null = null;
  
    constructor(private elementRef: ElementRef, private renderer: Renderer2) {
      console.log('Se instancio la directiva appResaltado 2', this.elementRef);
      this.renderColor();
    }
  
    ngOnChanges(changes: SimpleChanges): void {
 
  
      if (changes['color']) {
        this.renderColor();
      }
    }
  
    renderColor(): void {
      this.renderer.setStyle(
        this.elementRef.nativeElement,
        'background-color',
        this.color
      );
    }
  }