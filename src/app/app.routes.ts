import { Routes } from '@angular/router';
import { About } from './pages/about/about';
import { Projects } from './pages/projects/projects';
import { Homepage } from './pages/homepage/homepage';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/homepage' },
  { path: 'homepage', component: Homepage },
  { path: 'about', component: About },
  { path: 'projects', component: Projects },
  // { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.routes').then(m => m.WELCOME_ROUTES) }
];
