import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-my-portfolio',
  templateUrl: './my-portfolio.component.html',
  styleUrls: ['./my-portfolio.component.css']
})
export class MyPortfolioComponent {
  projects = [
    {
      title: 'SonoCure',
      type:'computer Vision,Machine learning, Web dev',
      videoUrl: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/j8v0CO1eVp0'),
      description: 'This web platform integrates advanced artificial intelligence models to facilitate the non-invasive detection and treatment of tumors using ultrasound waves. Designed specifically for medical professionals, the platform offers a cutting-edge solution that eliminates the need for biopsies. By leveraging AI-driven algorithms, it enhances the accuracy and efficiency of tumor diagnosis and management, providing a state-of-the-art tool for improving patient outcomes through advanced, non-invasive techniques.'
    ,
    Tools: [
      { name: 'Angular', imageUrl: './assets/Angular.png' },
      { name: 'FLask', imageUrl: './assets/Flask.png' },
      {name: 'Opencv', imageUrl: './assets/opencv.png'}
     
    ],githubLink: ''
    }
  ];

  selectedProject: any = null;

  constructor(private sanitizer: DomSanitizer) {}

  openModal(project: any) {
    this.selectedProject = project;
  }

  closeModal() {
    this.selectedProject = null;
  }
  
  }
