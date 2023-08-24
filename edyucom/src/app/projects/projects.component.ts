import { Component, AfterViewInit } from '@angular/core';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
  }

  info = faCircleInfo;
  newWindow = faArrowUpRightFromSquare;


  selectedProject: any;

  openModal(project: any) {
    this.selectedProject = project;
  }

  projects = [
    {
      title: 'Project 1',
      description: 'This is the description of Project 1.',
      imagePath: "https://picsum.photos/id/528/250/250",
      link: "http://ed-yu.com/projects/donut.html",
      componentName: "bakery-sales"

    },
    {
      title: 'Project 2',
      description: 'This is the description of Project 2.',
      imagePath: "https://picsum.photos/id/598/250/250",
      link: "http://ed-yu.com/projects/boardGameNodes.html",
      componentName: "bakery-sales"

    },
    {
      title: 'Project 3',
      description: 'This is the description of Project 3.',
      imagePath: "https://picsum.photos/id/328/250/250",
      link: "http://ed-yu.com/projects/historicalMAL.html",
      componentName: "bakery-sales"

    },
    {
      title: 'Project 4',
      description: 'This is the description of Project 4.',
      imagePath: "https://picsum.photos/id/318/250/250",
      componentName: "bakery-sales"

    },
    {
      title: 'Project 5',
      description: 'This is the description of Project 5.',
      imagePath: "https://picsum.photos/id/321/250/250",
      componentName: "bakery-sales"

    },
    {
      title: 'Project 6',
      description: 'This is the description of Project 6.',
      imagePath: "https://picsum.photos/id/123/250/250",
      componentName: "bakery-sales"

    },
    {
      title: 'Project 7',
      description: 'This is the description of Project 7.',
      imagePath: "https://picsum.photos/id/365/250/250",
      componentName: "bakery-sales"

    },
    {
      title: 'Project 8',
      description: 'This is the description of Project 8.',
      imagePath: "https://picsum.photos/id/355/250/250",
      componentName: "bakery-sales"

    },
    // Add more project objects as needed

  ];
}
