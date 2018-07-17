import { Directive, ElementRef, Renderer2, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appDate]'
})
export class DateDirective {

  @Input()
  date: Date;
  private paragraph;
  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.paragraph = renderer.createElement('p');
   }

  @HostListener('mouseenter')
  mouseenter(eventDate: Event) {
    this.paragraph.innerHTML = this.date.toLocaleDateString();
    this.renderer.appendChild(this.el.nativeElement, this.paragraph);
  }

  @HostListener('mouseleave')
  mouseleave(eventDate: Event) {
    this.renderer.removeChild(this.el.nativeElement, this.paragraph);
  }
}
