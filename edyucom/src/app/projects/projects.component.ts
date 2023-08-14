import { Component } from '@angular/core';
import { imageOverlay } from 'leaflet';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Project 1',
      description: 'This is the description of Project 1.',
      imagePath: "https://picsum.photos/id/1020/250/250"
    },
    {
      title: 'Project 2',
      description: 'This is the description of Project 2.',
      imagePath: "https://picsum.photos/id/598/250/250"
    },
    // Add more project objects as needed

  ];
}
