import { Component, ElementRef, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements AfterViewInit, OnDestroy {
  @ViewChild('texto', { static: false }) textoElement!: ElementRef;

  private textos: string[] = ['backend', 'frontend', 'fullstack'];
  private index: number = 0;
  private intervalId?: number;

  ngAfterViewInit(): void {
    this.iniciarPintarTexto();
  }

  private pintarTexto(): void {
    if (this.textoElement) {
      this.textoElement.nativeElement.innerText = this.textos[this.index];
      this.index = (this.index + 1) % this.textos.length;
    }
  }

  private iniciarPintarTexto(): void {
    // Verificar si estamos en un entorno de navegador
    if (typeof window !== 'undefined') {
      this.intervalId = window.setInterval(() => this.pintarTexto(), 2000);
    }
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  constructor(private router: Router) { }

  goToAbout() {
    this.router.navigate(['/about']);
  }
}
