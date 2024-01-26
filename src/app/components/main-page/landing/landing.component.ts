import { NgIf } from '@angular/common';
import { Component, ElementRef, Input } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
    selector: 'app-landing',
    standalone: true,
    templateUrl: './landing.component.html',
    styleUrl: './landing.component.css',
    imports: [NgIf, HeaderComponent, FooterComponent]
})
export class LandingComponent {

  @Input() youtubeId?: string ;

  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    const videoElement: HTMLVideoElement = this.el.nativeElement;
    const videoUrl = `https://www.youtube.com/embed/${this.youtubeId}?autoplay=1&loop=1&playlist=${this.youtubeId}`;
    videoElement.src = videoUrl;
  }

  isNewsletterShown= true

  toggleNewsletter() {
    this.isNewsletterShown = false
  }

}
