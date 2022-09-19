import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appViewChange]'
})
export class ViewChangeDirective {

  constructor(private ref: ElementRef<HTMLElement>) { 
    this.ref.nativeElement.style.backgroundColor = "green";
    this.ref.nativeElement.innerText = "Welcome to my home..."
  }

}
