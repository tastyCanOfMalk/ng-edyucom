import { Component } from '@angular/core';

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
      imagePath: 'path/to/image1.jpg',
    },
    {
      title: 'Project 2',
      description: 'This is the description of Project 2.',
      imagePath: 'path/to/image2.jpg',
    },
    // Add more project objects as needed
  ];
}
