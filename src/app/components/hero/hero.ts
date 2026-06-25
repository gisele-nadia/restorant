import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.html',
  styleUrls: ['./hero.css'],
})
export class Hero {
  backgroundImage = '/assets/images/products/img1.png';
  title = 'Saveurs authentiques du Cameroun';
  subtitle = '15 ans de tradition culinaire à Douala';
}
