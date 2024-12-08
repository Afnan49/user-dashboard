import { Directive, ElementRef, inject } from '@angular/core';

@Directive({
  selector: 'a[appSafeLinks]',
  host: {
    '(click)': 'onClick($event)',
  },
  standalone: true,
})
export class SafeLinks {
  private elementRef = inject(ElementRef);

  onClick(event: MouseEvent) {
    const confirm = window.confirm('Are You Sure You Want To Leave This Page');
    if (confirm) {
      return;
    }
    event.preventDefault();
  }
}
