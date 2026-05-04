import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-projects-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects-section.html',
  styleUrl: './projects-section.css',
})
export class ProjectsSectionComponent {
  @Input({ required: true }) stats: Array<{ value: string; label: string }> = [];
  @Input({ required: true }) serviceCards: Array<{ title: string; description: string; iconPath: string }> = [];
  @Input({ required: true }) projectCards: Array<{ title: string; description: string }> = [];
  @Input({ required: true }) skills: Array<{ name: string; level: number }> = [];
}
