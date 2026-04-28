import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

type Project = {
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
};

type ProcessStep = {
  title: string;
  content: string;
};

@Component({
  selector: 'app-portfolio-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app-portfolio-home.html',
})
export class PortfolioHomeComponent {
  navLinks = ['Projects', 'Process', 'Services', 'Contact'];
  isMobileMenuOpen = false;

  projects: Project[] = [
    {
      title: 'E-Commerce Redesign',
      category: 'UX/UI Design',
      description:
        'Editorial commerce experience focused on clarity, conversion, and reduced visual noise.',
      image:
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=80',
      tags: ['UX', 'UI', 'Design System'],
    },
    {
      title: 'Finance Dashboard',
      category: 'Product Design',
      description:
        'A structured analytics interface using high-contrast hierarchy and modular information blocks.',
      image:
        'https://images.unsplash.com/photo-1551281044-8b7e1c8dfc4d?auto=format&fit=crop&w=1400&q=80',
      tags: ['Dashboard', 'Data', 'Prototyping'],
    },
    {
      title: 'Brand Portfolio Site',
      category: 'Web Design',
      description:
        'Minimal portfolio architecture with strong typography and deliberate whitespace rhythm.',
      image:
        'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1400&q=80',
      tags: ['Web', 'Brand', 'Frontend'],
    },
    {
      title: 'SaaS Onboarding',
      category: 'Experience Design',
      description:
        'Onboarding flow redesign for better activation through progressive disclosure and copy hierarchy.',
      image:
        'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1400&q=80',
      tags: ['SaaS', 'Flow', 'Research'],
    },
  ];

  processSteps: ProcessStep[] = [
    {
      title: 'Discover',
      content:
        'Context mapping, stakeholder interviews, and product audits to identify constraints, risks, and opportunities.',
    },
    {
      title: 'Define',
      content:
        'Clear problem framing, information architecture, and success metrics aligned with business and user goals.',
    },
    {
      title: 'Design',
      content:
        'High-fidelity UI with systematic typography, spacing, and interaction patterns built for consistency.',
    },
    {
      title: 'Deliver',
      content:
        'Production-ready handoff, QA support, and iterative refinements based on usage data and feedback loops.',
    },
  ];

  services = [
    'UX Strategy',
    'Product UI Design',
    'Design Systems',
    'Responsive Web Design',
    'Interaction Design',
    'Frontend Collaboration',
  ];

  tools = ['Figma', 'FigJam', 'Framer', 'React', 'Tailwind CSS', 'Notion'];

  openIndex = 0;

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen = false;
  }

  toggleAccordion(index: number): void {
    this.openIndex = this.openIndex === index ? -1 : index;
  }
}