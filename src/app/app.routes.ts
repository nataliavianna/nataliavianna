import { Routes } from '@angular/router';
import { Homepage } from './pages/homepage/homepage';
import { Projects } from './pages/projects/projects';
import { About } from './pages/about/about';

export const routes: Routes = [
  { path: '', component: Homepage, title: 'Início | Natalia Vianna' },
  { path: 'projects', component: Projects, title: 'Projetos | Natalia Vianna' },
  { path: 'about', component: About, title: 'Sobre | Natalia Vianna' },
  { path: '**', redirectTo: '' }
];
