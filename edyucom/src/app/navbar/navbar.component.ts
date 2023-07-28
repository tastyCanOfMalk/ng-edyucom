import { Component } from '@angular/core';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from'@fortawesome/free-brands-svg-icons';
import { faAt } from'@fortawesome/free-solid-svg-icons';
import { faFileLines } from'@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  faLinkedinIn = faLinkedinIn;
  faGithub = faGithub;
  faAt = faAt;
  faFileLines = faFileLines;
}
