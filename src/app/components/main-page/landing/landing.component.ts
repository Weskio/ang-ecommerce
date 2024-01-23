import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [NgIf],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {

  isNewsletterShown= true

  toggleNewsletter() {
    this.isNewsletterShown = false
  }

}
