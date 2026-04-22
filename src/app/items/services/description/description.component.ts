import { CommonModule } from '@angular/common';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-description',
  imports: [CommonModule],
  templateUrl: './description.component.html',
  styleUrl: './description.component.css'
})
export class DescriptionComponent implements OnInit{
  
  @Input() titleDescription!:string;
  @Input() description!:string;
  @Input() image!:string;
  @Input() subTitleDescription!:string;
  @Input() subDescription!:string;
  @Input() features?: {Icon: string, Title: string, Text: string}[];
  @Input() videoUrl!: string;

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

  ngOnInit(): void {
  }

}
