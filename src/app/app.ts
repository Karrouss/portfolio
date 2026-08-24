import { Component } from '@angular/core';
import { Navbar } from './components/navbar/navbar';
import { Hero } from './components/hero/hero';
import { Skills } from './components/skills/skills';
import { Experience } from './components/experience/experience';
import { Education } from './components/education/education';
import { Certifications } from './components/certifications/certifications';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Navbar, Hero, Skills, Experience, Education, Certifications, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
