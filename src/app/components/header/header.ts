import { Component, HostListener, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrls: ['./header.css'],
})
export class Header implements OnInit {
  isMenuOpen = false;
  activeLink = 'Accueil';
  isMobile = false;

  links = ['Accueil', 'Menu', 'Temoignage', 'Horaire', 'Contact'];

  ngOnInit() {
    this.checkScreenSize(); // minuscule, et OnInit implémenté
  }

  @HostListener('window:resize')
  onResize() {
    this.checkScreenSize();
  }

  checkScreenSize() {
    this.isMobile = window.innerWidth <= 600;
    // si on passe en desktop, on ferme le menu burger
    if (!this.isMobile) {
      this.isMenuOpen = false; 
    }
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  setActive(link: string) {
    this.activeLink = link;

    const element = document.getElementById(link.toLowerCase());
    element?.scrollIntoView({ behavior: 'smooth' });

    this.isMenuOpen = false; // ferme le menu après clic
  }
}