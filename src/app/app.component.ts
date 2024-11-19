import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { Inject, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'portafolio';

  constructor(private router: Router, @Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      this.router.events.subscribe(event => {
        if (event instanceof NavigationEnd) {
          window.scrollTo(0, 0); // Asegúrate de que esto solo se ejecute en el navegador
        }
      });
    }
  }
  

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      // Todo el código relacionado con 'document' debe ir aquí

      const menuToggle = document.getElementById('menu-toggle') as HTMLInputElement;
      const mainContent = document.getElementById('main-content') as HTMLElement;

      if (menuToggle && mainContent) {
        menuToggle.addEventListener('change', () => {
          if (menuToggle.checked) {
            mainContent.style.marginTop = '400px'; // Ajusta el valor según la altura de tu menú desplegable
          } else {
            mainContent.style.marginTop = '0';
          }
        });
      }

      const navLinks = document.querySelectorAll('.nav-links a');
      navLinks.forEach(link => {
        link.addEventListener('click', () => {
          if (menuToggle) {
            menuToggle.checked = false;
            mainContent.style.marginTop = '0';
          }
        });
      });
    }
  }
}