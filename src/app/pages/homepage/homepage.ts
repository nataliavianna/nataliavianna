import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzButtonModule } from 'ng-zorro-antd/button';
// import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';
import { NzLayoutModule } from 'ng-zorro-antd/layout';

@Component({
  selector: 'app-homepage',
  imports: [RouterLink, NzPageHeaderModule, NzGridModule, NzCardModule, NzTagModule, NzListModule, NzButtonModule, NzLayoutModule, Footer],
  templateUrl: './homepage.html',
  styleUrl: './homepage.scss'
})
export class Homepage {
  
  achievements = [
    { title: 'Product Manager', description: 'Lead cross-functional teams to deliver high-impact products' },
    { title: 'SaaS', description: 'Scale SaaS products from MVP to enterprise-level solutions' },
    { title: 'Fintech', description: 'Implement fintech features to enhance user experience and compliance' },
    { title: 'Social Impact', description: 'Drive social impact initiatives to improve lives and communities' }
  ];
}
