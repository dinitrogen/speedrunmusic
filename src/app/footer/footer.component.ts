import { Component } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faBandcamp, faInstagram, faYoutube, faApple, faAmazon, faSpotify } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  faYoutube = faYoutube;
  faBandcamp = faBandcamp;
  faInstagram = faInstagram;
  faApple = faApple;
  faAmazon = faAmazon;
  faSpotify = faSpotify;
}
