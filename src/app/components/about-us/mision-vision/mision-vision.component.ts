import { Component, Input, AfterViewInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-mision-vision',
  imports: [],
  templateUrl: './mision-vision.component.html',
  styleUrl: './mision-vision.component.css'
})
export class MisionVisionComponent implements AfterViewInit, OnDestroy {

  @Input() videoUrl!: string;
  @Input() misionTitle!: string;
  @Input() misionText!: string;
  @Input() visionTitle!: string;
  @Input() visionText!: string;

  @ViewChild('videoWrapper') videoWrapper!: ElementRef;
  @ViewChild('videoIframe') videoIframe!: ElementRef;

  safeVideoUrl!: SafeResourceUrl;
  private observer!: IntersectionObserver;
  private videoStarted = false;

  constructor(private sanitizer: DomSanitizer) {}

  ngAfterViewInit(): void {
    this.safeVideoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.videoUrl);

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !this.videoStarted) {
            const iframe = this.videoIframe.nativeElement as HTMLIFrameElement;
            iframe.src = `${this.videoUrl}?autoplay=1&mute=1`;
            this.videoStarted = true;
            this.observer.disconnect();
          }
        });
      },
      { threshold: 0.5 }
    );

    this.observer.observe(this.videoWrapper.nativeElement);
  }

  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}
