import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Hero } from './components/hero/hero';
import { Temoignages } from './components/temoignages/temoignages';
import { Menu } from './components/menu/menu';
import { Horaires } from './components/horaires/horaires';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Hero, Header, Temoignages, Menu, Horaires, Footer],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('devoir_2');
}
