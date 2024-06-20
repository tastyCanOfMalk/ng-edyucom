import { Component } from '@angular/core';

@Component({
  selector: 'app-secret',
  templateUrl: './secret.component.html',
  styleUrls: ['./secret.component.scss']
})
export class SecretComponent {

  secrets = [

    {
      title: "Headshots",
      link: "assets/projectDetails/hshots.html"
    },
    {
      title: "Photos",
      link: "assets/projectDetails/photos.html"
    },
  ]

}
