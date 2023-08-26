import { Component } from '@angular/core';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { faCodeBranch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {

  info = faCircleInfo;
  gitSquare = faGithubSquare;
  gitBranch = faCodeBranch;
  newWindow = faArrowUpRightFromSquare;

  selectedProject: any;

  openModal(project: any) {
    this.selectedProject = project;
  }

  projects = [
    {
      title: 'Donut Clicker App',
      description: 'A Javascript clicker game (that never ends) inspired by the famous Cookie Clicker app.',
      details: "Bootstrapped completely with sprinkles of custom CSS and Javascript functions to handle all the button presses, timing, and variables.",
      tags: ["JavaScript Game", "Clicker Game", "Bootstrap", "Front-end Development"],
      imagePath: "assets/projects/doughnuts.png",
      imageLink: "assets/projectDetails/donut.html",
      infoProjectLink:  "assets/projectDetails/donut.html",
      infoGitLink: null,
    },
    {
      title: 'This Website',
      description: 'Yet another iteration of my personal portfolio.',
      details: "An Angular project with Bootstrap holding most things together. I wanted a more minimal and clean website this time around compared to my <a href='https://github.com/tastyCanOfMalk/tastyCanOfMalk.github.io' target='_blank'>previous iteration.</a> Adding projects became far easier this time around utilizing <code>*ngFor</code> arguments.",
      tags: ["Angular Portfolio", "Web Development", "Bootstrap", "Single Page App"],
      imagePath: "assets/projects/website.png",
      imageLink: null,
      infoProjectLink:  null,
      infoGitLink: "https://github.com/tastyCanOfMalk/ng-edyucom",

    },
    {
      title: 'Virtual Pet Game',
      description: 'A simple command-line Tomogatchi-like game built in Java. Try to keep the Robot Dogs alive!',
      details: "A simple project built prioritizing learning of Test Driven Development and Object Oriented Programming.",
      tags: ["Java Game", "Command-Line Game", "Object-Oriented Programming"],
      imagePath: "assets/projects/vintage-blue-robot-with-a-shadow.png",
      imageLink: "https://github.com/tastyCanOfMalk/virtual-pet-tastyCanOfMalk",
      infoProjectLink:  null,
      infoGitLink: "https://github.com/tastyCanOfMalk/virtual-pet-tastyCanOfMalk",
    },
    {
      title: 'Community Detection',
      description: 'Inspired by the "Butterfly Effect" podcast, this collaborative project visualized trends in user-generated tags on videos hosted by a major adult video website.',
      details: "A corpus of 3 million video URLs were scraped using the scrapy Python library and then cleaned and transformed for analysis.<br><br>Angle-based outlier detection was using to view the top 50 anomolous metadata tags.<br><br> Detected and visualized communities using both Louvain and Leiden clustering algorithms, presenting said visualizations using RMD and D3 via AWS. ",
      tags: ["Data Visualization", "R Programming", "Python Scraping", "Community Analysis"],
      imagePath: "assets/projects/nsfw.png",
      imageLink: "assets/projectDetails/Leiden_D3.html",
      infoProjectLink: "assets/projectDetails/Leiden_D3.html",
      infoGitLink: null,
    },
    {
      title: 'Force-directed Graph',
      description: 'Experimenting with D3',
      details: "An interactive node/edge plot built using D3.js, using toy data to experiment with node behaviours such as dragging, pinning, and click-events",
      tags: ["D3.js", "Data Visualization", "Network Graph", "Interactive Plot"],
      imagePath: "assets/projects/boardGame_nodes.png",
      imageLink: "assets/projectDetails/boardGameNodes.html",
      infoProjectLink:  "assets/projectDetails/boardGameNodes.html",
      infoGitLink: null,
    },
    {
      title: 'Boardgame Popularity',
      description: 'More D3 experimentation',
      details: "An interactive Choropleth map built using D3.js, mapping average boardgame ratings by country.",
      tags: ["D3.js", "Data Visualization", "Choropleth Map", "Boardgame Ratings"],
      imagePath: "assets/projects/choropleth_boardgames.png",
      imageLink: "assets/projectDetails/boardGameChoropleth.html",
      infoProjectLink:  "assets/projectDetails/boardGameChoropleth.html",
      infoGitLink: null,
    },
    {
      title: 'Defects Analysis',
      description: 'A financial analysis of foundry products over time',
      details: "For a particular subset of product, metrics for performance comparison over time were needed to make financial decisions. This was the beginning stage of building a dashboard.",
      tags: ["Financial Analysis", "RMD Reports", "Plotly", "Performance Metrics"],
      imagePath: "assets/projects/foundry-filter.png",
      imageLink: "assets/projectDetails/BESummary.html",
      infoProjectLink:  "assets/projectDetails/donut.html",
      infoGitLink: null,
    },
    {
      title: 'Customer Segmentation Analysis',
      description: 'An exercise in dividing customers into groups based on financial impact whereby additional services could be rendered based on financial benefit.',
      details: "This involved heavy data joining and cleaning of multiple datasets. Exploration sought to visualize customer groups based on sales and profit. Finally, the analysis recommends a classification system based on distribution of overall gross profit.",
      tags: ["Customer Segmentation", "Data Analysis", "Plotly", "Sales Classification"],
      imagePath: "assets/projects/gold-silver-bronze.png",
      imageLink: "assets/projectDetails/customerSegmentation.html",
      infoProjectLink:  "assets/projectDetails/customerSegmentation.html",
      infoGitLink: null,
    },
    {
      title: 'Foundry Data Cleaning',
      description: 'Data Cleaning',
      details: "A data cleaning exercise with surface level analysis.",
      tags: ["Data Cleaning", "Data Analysis", "RMD Reports"],
      imagePath: "assets/projects/molten-metal.png",
      imageLink: "assets/projectDetails/historicalMAL.html",
      infoProjectLink:  "assets/projectDetails/historicalMAL.html",
      infoGitLink: null,
    },
    {
      title: 'Bakery Transaction Analysis',
      description: 'An analysis of nearly 6 months of bakery sales data with ultimate suggestions to increase revenue',
      details: "EDA accompanied by a market basket analysis to determine which items were frequently sought together. Combined with transactions data over time, recommendations were made to bundle some items together for lunch specials, among other things.",
      tags: ["Sales Analysis", "Market Basket Analysis", "EDA", "Revenue Optimization"],
      imagePath: "assets/projects/macarons-on-display-at-bakery.png",
      imageLink: "assets/projectDetails/bakerySales.html",
      infoProjectLink:  "assets/projectDetails/bakerySales.html",
      infoGitLink: null,
    }
  ];
}
