import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Skill {
  name: string;
  level: number;
}

@Component({
  selector: 'app-skills',
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrl: './skills.css'
})
export class SkillsComponent {
  frontendSkills: Skill[] = [
    { name: 'Angular', level: 90 },
    { name: 'React', level: 85 },
    { name: 'TypeScript', level: 88 },
    { name: 'JavaScript', level: 92 },
    { name: 'HTML/CSS', level: 95 },
    { name: 'BootStrap/Tailwind.cs', level: 85 }
  ];

  backendSkills: Skill[] = [
    { name: 'Node.js', level: 80 },
    { name: 'Python', level: 75 },
    { name: 'Express.js', level: 78 },
    { name: 'MongoDB', level: 70 },
    { name: 'PostgreSQL', level: 72 },
    { name: 'REST APIs', level: 85 }
  ];

  toolsSkills: Skill[] = [
    { name: 'Git', level: 90 },
    { name: 'Docker', level: 65 },
    { name: 'AWS', level: 60 },
    { name: 'Figma', level: 75 },
    { name: 'VS Code', level: 95 },
    { name: 'Webpack', level: 70 }
  ];
}

