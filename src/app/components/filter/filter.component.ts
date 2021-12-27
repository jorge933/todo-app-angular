import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'todo-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent {
  constructor(private hostElement: ElementRef) {}

  activeElement(event: Event) {
    [...this.hostElement.nativeElement.children].forEach(
      (element: HTMLLabelElement) => {
        element.classList.remove('active');
      }
    );
    (event.target as HTMLLabelElement).classList.add('active');
  }
}
