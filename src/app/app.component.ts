import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // Corregido 'styleUrl' a 'styleUrls'
})
export class AppComponent implements OnInit {
  title = 'portafolio';

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0); // Esto asegura que el scroll regrese al tope
      }
    });
  }

  ngOnInit() {
    // Obtener el elemento del menú toggle y el contenido
    const menuToggle = document.getElementById('menu-toggle') as HTMLInputElement;
    const mainContent = document.getElementById('main-content') as HTMLElement;

    // Verificar si el menú toggle existe y manejar el cambio de estado
    if (menuToggle && mainContent) {
      menuToggle.addEventListener('change', () => {
        if (menuToggle.checked) {
          mainContent.style.marginTop = '400px'; // Ajusta el valor según la altura de tu menú desplegable
        } else {
          mainContent.style.marginTop = '0';
        }
      });
    }

    // Cerrar el menú al hacer clic en un enlace de navegación
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (menuToggle) {
          menuToggle.checked = false; // Desmarcar el checkbox para cerrar el menú
          mainContent.style.marginTop = '0'; // Opcional: restablecer el margen superior
        }
      });
    });
  }
}
