import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-portfolio-projects-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio-projects-section.html',
})
export class PortfolioProjectsSectionComponent {
  @Input({ required: true }) stats: Array<{ value: string; label: string }> = [];
  @Input({ required: true }) serviceCards: Array<{ title: string; description: string; iconPath: string }> = [];
  @Input({ required: true }) projectCards: Array<{ title: string; description: string }> = [];
  @Input({ required: true }) skills: Array<{ name: string; level: number }> = [];
}
