import { CommonModule } from '@angular/common';
import { Component, VERSION } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-neo',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './neo.component.html',
  styleUrl: './neo.component.css'
})
export class NeoComponent {
  angular = 'Angular: ' + VERSION.full;
  name = '+name+';
  condition: boolean = true;
  toggleCondition() { this.condition = !this.condition }
  state = true;
  toggleState() { this.state = !this.state }
  items = ['Tom', 'Bob', 'Sam', 'Bill'];
  today = new Date;
  PI = Math.PI;
  imgUrl =
  'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/240px-Angular_full_color_logo.svg.png';
}
