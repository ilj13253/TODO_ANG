import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CityComponent } from './city/city.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CityComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'favorite-city';
}
