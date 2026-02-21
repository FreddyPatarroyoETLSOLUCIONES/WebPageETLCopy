import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  @ViewChild('counter1', { static: false }) counter1!: ElementRef;
  @ViewChild('counter2', { static: false }) counter2!: ElementRef;
  @ViewChild('counter3', { static: false }) counter3!: ElementRef;
  @ViewChild('counter4', { static: false }) counter4!: ElementRef;

  private observer!: IntersectionObserver;
  private counters = [
    { element: 'counter1', target: 100, duration: 1500, addPlus: true },
    { element: 'counter2', target: 700000, duration: 1500, addPlus: false },
    { element: 'counter3', target: 9, duration: 1500, addPlus: true },
    { element: 'counter4', target: 45, duration: 1800, addPlus: true }
  ];

  ngAfterViewInit() {
    this.initializeObserver();
  }

  private initializeObserver() {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.startCounters();
          this.observer.disconnect();
        }
      });
    }, options);

    this.observer.observe(this.counter1.nativeElement);
  }

  private startCounters() {
    this.counters.forEach(counter => {
      const elementRef = this[counter.element as keyof this] as ElementRef;
      this.animateCounter(elementRef.nativeElement, counter.target, counter.duration, counter.addPlus);
    });
  }

  private animateCounter(
    element: HTMLElement,
    target: number,
    duration: number,
    addPlus: boolean = false
  ) {
    let start = 0;
    const increment = Math.ceil(target / (duration / 16));

    const updateCounter = () => {
      start += increment;
      if (start >= target) {
        start = target;
        element.innerText = addPlus
          ? start.toLocaleString() + '+'
          : start.toLocaleString();
      } else {
        element.innerText = addPlus
          ? start.toLocaleString() + '+'
          : start.toLocaleString();
        requestAnimationFrame(updateCounter);
      }
    };

    updateCounter();
  }
}
