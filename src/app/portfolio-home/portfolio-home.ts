import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsSectionComponent } from './projects-section/projects-section';
import { ContactSectionComponent } from './contact-section/contact-section';
import { OverviewSectionComponent } from "./overview-section/overview-section";

type NavLink = {
  label: string;
  href: string;
};

type IconLink = {
  label: string;
  href: string;
  iconPath: string;
};

type ServiceCard = {
  title: string;
  description: string;
  iconPath: string;
};

type ProjectCard = {
  title: string;
  description: string;
};

type Stat = {
  value: string;
  label: string;
};

type Skill = {
  name: string;
  level: number;
};

type SidebarItem = {
  key: string;
  label: string;
};

@Component({
  selector: 'portfolio-home',
  standalone: true,
  imports: [CommonModule, ProjectsSectionComponent, ContactSectionComponent, OverviewSectionComponent],
  templateUrl: './portfolio-home.html',
  styleUrl: './portfolio-home.css',
})
export class PortfolioHomeComponent {
  currentYear = new Date().getFullYear();

  navLinks: NavLink[] = [
    { label: 'Home', href: '#home' },
    { label: 'Portfolio', href: '#projects' },
  ];

  sidebarItems: SidebarItem[] = [
    { key: 'overview', label: 'Overview' },
    { key: 'projects', label: 'Projects' },
    { key: 'contact', label: 'Contact' },
  ];
  activeSidebarSection: SidebarItem['key'] = 'overview';

  stats: Stat[] = [
    { value: '3+', label: 'Years of experience' },
    { value: '10+', label: 'Completed projects' },
    { value: '99%', label: 'Client satisfaction' },
  ];

  skills: Skill[] = [
    { name: 'JavaScript', level: 82 },
    { name: 'Angular', level: 76 },
    { name: 'CSS', level: 74 },
    { name: 'Laravel', level: 88 },
  ];

  socialLinks: IconLink[] = [
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/dimitrije-savatic/',
      iconPath:
        'M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4V9h4v2a4 4 0 0 1 2-3z',
    },
    {
      label: 'GitHub',
      href: 'https://github.com/dimitrije-savatic',
      iconPath:
        'M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22',
    },
    {
      label: 'Email',
      href: 'mailto:dimitrije.savatic@gmail.com',
      iconPath: 'M4 4h16v16H4V4zm16 4-8 5-8-5',
    },
  ];

  serviceCards: ServiceCard[] = [
    {
      title: 'Front-end development',
      description: 'Lorem ipsum dolor amet, consec adipiscing elit, eiusmod tempor incididunt ut en labore.',
      iconPath: 'M4 6h16M4 10h10M4 14h16M4 18h10',
    },
    {
      title: 'Backend development',
      description: 'Lorem ipsum dolor amet, consec adipiscing elit, eiusmod tempor incididunt ut en labore.',
      iconPath: 'M12 3v18m9-9H3',
    },
    {
      title: 'UI/UX design',
      description: 'Lorem ipsum dolor amet, consec adipiscing elit, eiusmod tempor incididunt ut en labore.',
      iconPath: 'M4 7h16M7 4v16',
    },
  ];

  projectCards: ProjectCard[] = [
    {
      title: 'E-Commerce Redesign',
      description: 'Redesigned the storefront UX and component structure for better conversion and faster page flow.',
    },
    {
      title: 'Finance Dashboard',
      description: 'Built a modular analytics dashboard with clean data hierarchy, filtering, and responsive behavior.',
    },
    {
      title: 'Portfolio Platform',
      description: 'Implemented a scalable portfolio architecture with reusable sections and dynamic content blocks.',
    },
    {
      title: 'Portfolio Platform',
      description: 'Implemented a scalable portfolio architecture with reusable sections and dynamic content blocks.',
    },
    {
      title: 'Portfolio Platform',
      description: 'Implemented a scalable portfolio architecture with reusable sections and dynamic content blocks.',
    },
    {
      title: 'Portfolio Platform',
      description: 'Implemented a scalable portfolio architecture with reusable sections and dynamic content blocks.',
    }
  ];

  isMobileMenuOpen = false;

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen = false;
  }

  setActiveSection(section: SidebarItem['key']): void {
    this.activeSidebarSection = section;
  }
}
