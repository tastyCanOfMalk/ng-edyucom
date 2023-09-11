import { Component, OnInit } from '@angular/core';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { faCodeBranch } from '@fortawesome/free-solid-svg-icons';
import { Project } from '../projects/project.model';
import { projects } from '../projects/projects-data'; // Import your projects data
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})

export class ProjectsComponent implements OnInit{

  info = faCircleInfo;
  gitSquare = faGithubSquare;
  gitBranch = faCodeBranch;
  newWindow = faArrowUpRightFromSquare;

  selectedProject: any;
  projects: Project[] = projects;

  project: any; // Define the project variable
  safeUrl: SafeResourceUrl | null = null;

  constructor(
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer // Inject DomSanitizer
  ) {
    // Assign the IDs
    projects.forEach((project, index) => {
      project.id = index;
    });
  }

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

  openModal(project: any) {
    this.selectedProject = project;
    this.selectedProject.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(project.imageLink);
  }





}
