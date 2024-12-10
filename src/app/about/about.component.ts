import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

  descargarCurriculum(): void {
    const link = document.createElement('a');
    link.href = '/Curriculum Antonio J Pérez.pdf';
    link.download = 'Curriculum Antonio J Pérez.pdf';
    link.click();
  }
}
