import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';

@Component({
  selector: 'app-header',
  imports: [RouterLink, NzLayoutModule, NzMenuModule],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {

}
