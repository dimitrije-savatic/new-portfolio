import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-contact-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact-section.html',
})
export class ContactSectionComponent {
  @Input({ required: true }) socialLinks: Array<{ label: string; href: string; iconPath: string }> = [];
  @Input({ required: true }) currentYear = new Date().getFullYear();
}
