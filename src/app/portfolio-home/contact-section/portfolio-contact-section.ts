import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-portfolio-contact-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio-contact-section.html',
})
export class PortfolioContactSectionComponent {
  @Input({ required: true }) socialLinks: Array<{ label: string; href: string; iconPath: string }> = [];
  @Input({ required: true }) currentYear = new Date().getFullYear();
}
