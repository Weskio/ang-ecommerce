import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
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

  isNewsletterShown= true

  toggleNewsletter() {
    this.isNewsletterShown = false
  }

}
