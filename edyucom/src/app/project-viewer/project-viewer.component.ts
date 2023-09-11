// project-viewer.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { projects } from '../projects/projects-data'; // Import your projects data
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-project-viewer',
  templateUrl: './project-viewer.component.html',
  styleUrls: ['./project-viewer.component.scss']
})
export class ProjectViewerComponent implements OnInit {
  project: any; // Define the project variable
  safeUrl: SafeResourceUrl | null = null;

  constructor(
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer // Inject DomSanitizer
  ) {}

  ngOnInit(): void {
    const projectIdParam = this.route.snapshot.paramMap.get('id'); // Get the parameter as string
    console.log('projectIdParam:', projectIdParam);

    if (projectIdParam !== null) {
      const projectId = +projectIdParam; // Convert to number if not null
      console.log('projectId:', projectId);
      const project = projects[projectId];
      console.log('projectUrl:', project.imageLink);
      console.log('title:', project.title);

    if (!isNaN(projectId)) {
      const project = projects[projectId];

      if (project && project.imageLink) {
        // Sanitize the URL using DomSanitizer
        this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(project.imageLink);
      }
    }

    }
  }
}
