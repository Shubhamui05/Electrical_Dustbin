import { Component } from '@angular/core';
import { CardsComponent } from './cards/cards.component';
import { ChartsComponent } from './charts/charts.component';
import { ColorPaletteComponentComponent } from './color-palette-component/color-palette-component.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProjectsComponent } from './projects/projects.component';
import { RevenueSourcesComponent } from './revenue-sources/revenue-sources.component';
import { SidebarComponent } from './sidebar/sidebar.component';


@Component({
  selector: 'app-dashboard',
  standalone : true,
  imports: [CardsComponent,ChartsComponent,ColorPaletteComponentComponent,NavbarComponent,ProjectsComponent,RevenueSourcesComponent,SidebarComponent],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent { }
