import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { RouterLink } from '@angular/router';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';
import { NzLayoutModule } from 'ng-zorro-antd/layout';

interface Project {
  title: string;
  company: string;
  description: string;
  image: string;
  link: string;
}

@Component({
  selector: 'app-projects',
  imports: [CommonModule, NzPageHeaderModule, NzGridModule, NzCardModule, NzTagModule, NzListModule, NzButtonModule, NzLayoutModule, Header, Footer],
  templateUrl: './projects.html',
  styleUrl: './projects.scss'
})
export class Projects {
  projects: Project[] = [
    {
      title: 'Philanthropic Fund Management System & Digital Account',
      company: 'Impact Bank',
      description: `A digital account focused on social impact, providing accessible financial services and promoting inclusion through technology.`,
      image: 'https://danielfabbri.github.io/danielfabbri/assets/images/impactmap.JPG',
      link: '#'
    },
    {
      title: 'Fund Management Tool',
      company: 'Welight',
      description: `A fund management platform that connects donors and organizations, ensuring transparency and expanding social impact.`,
      image: 'https://danielfabbri.github.io/danielfabbri/assets/images/impactmap.JPG',
      link: '#'
    },
    {
      title: 'ERP Saas',
      company: 'Leadzone',
      description: `A sales management system, designed to streamline operations and boost results in the service industry.`,
      image: 'https://danielfabbri.github.io/danielfabbri/assets/images/impactmap.JPG',
      link: '#'
    }
  ];
}
