import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ResumeComponent } from './resume/resume.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
    { path: '', component: HomeComponent }, // Página de inicio
    { path: 'about', component: AboutComponent }, // Página sobre mí
    { path: 'resume', component: ResumeComponent }, // Página de currículum
    { path: 'skills', component: SkillsComponent }, // Página de habilidades
    { path: 'projects', component: ProjectsComponent }, // Página de proyectos
    { path: 'contact', component: ContactComponent } // Página de contacto
];
