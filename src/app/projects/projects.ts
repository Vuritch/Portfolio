import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
}

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with user authentication, payment processing, and admin dashboard.',
      image: 'images/owl.png',
      technologies: ['MVC', 'Sql Server', 'React', '.NET Core'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/Vuritch/LATESTMVC'
    },

    {
      title: 'Resort',
description: 'A full-featured hotel booking system with dynamic room selection, price calculation, admin dashboard, and responsive design using Flask and MySQL.',
      image: 'images/resort.png',
      technologies: ['Flask', 'Python', 'MySql', 'CSS3'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/Vuritch/Flask/tree/Omar'
    },
    {
      title: 'Pepsico',
      description: ' responsive web design implementation for PepsiCo, built as part of a Forage training program. Its main focus is to replicate PepsiCo’s brand ',
      image: 'images/peps.png',
      technologies: ['Python', 'Bable', 'Flask', 'MySql Server'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/Vuritch/Pepsico'
    }
  ];
}

