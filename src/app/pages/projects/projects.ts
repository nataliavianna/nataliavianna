import { Component } from '@angular/core';
import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';

@Component({
  selector: 'app-projects',
  imports: [Header, Footer],
  templateUrl: './projects.html',
  styleUrl: './projects.scss'
})
export class Projects {

}
