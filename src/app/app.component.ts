import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from './login/login.component';

@Component({
    selector: 'app-root',
    standalone: true, // No need to import child components here
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    imports: [RouterOutlet, HomeComponent,LoginComponent]
})
export class AppComponent {
  title = 'Electric_Dustbin';
}
