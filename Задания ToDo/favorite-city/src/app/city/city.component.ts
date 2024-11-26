import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-city',
  standalone: true,
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css'],
  imports: [CommonModule]
})
export class CityComponent {
  city = 'Tokyo';
  description = 'Tokyo, the bustling capital of Japan.';
  attractions = ['Tokyo Tower', 'Meiji Shrine', 'Asakusa Temple'];
  today = new Date();
  population = 14000000;
  imgUrl = 'https://upload.wikimedia.org/wikipedia/commons/5/5b/Tokyo_Skyline_view.jpg';

  toggleAttractions = true;

  toggleList() {
    this.toggleAttractions = !this.toggleAttractions;
  }
}

