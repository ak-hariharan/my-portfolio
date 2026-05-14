import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { url } from 'inspector';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatIconModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="projects" class="py-24 px-6 md:px-12 lg:px-24">
      <div class="max-w-6xl mx-auto">
        <div class="flex items-center gap-4 mb-8">
          <h2 class="text-3xl md:text-4xl font-bold text-white font-mono">
             <span class="text-java-orange">List&lt;Project&gt;</span> getFeaturedProjects()
          </h2>
          <div class="h-px bg-ide-border flex-grow"></div>
        </div>

        <p class="text-text-secondary font-mono text-sm mb-12 border-l-2 border-spring-green pl-4">
          // Focus: Enterprise Architecture, Microservices, and AI
        </p>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          @for (project of projects; track project.title) {
            <div class="flex flex-col border border-ide-border rounded-xl bg-ide-surface/30 overflow-hidden hover:border-neon-blue/50 active:scale-[0.98] transition-all duration-300 group relative">
              <!-- Accent Top Border -->
              <div class="h-1 w-full" [class]="project.accentClass"></div>
              
              <div class="p-8 flex flex-col flex-grow">
                <div class="flex justify-between items-start mb-6">
                  <div>
                    <h3 class="text-2xl font-bold text-white group-hover:text-neon-blue group-active:text-neon-blue transition-colors mb-2">{{ project.title }}</h3>
                    <p class="font-mono text-sm" [class]="project.textAccentClass">{{ project.type }}</p>
                  </div>
                  <a [attr.href]="project.url" target="_blank" rel="noopener noreferrer" class="bg-ide-bg p-2 rounded border border-ide-border flex items-center justify-center transition-colors" [class.cursor-not-allowed]="!project.url" [class.hover:bg-ide-border]="project.url">
                    <mat-icon class="text-text-primary text-xl">open_in_new</mat-icon>
                  </a>
                </div>

                <p class="text-text-secondary mb-8 flex-grow leading-relaxed">
                  {{ project.description }}
                </p>

                <!-- Highlights -->
                <div class="mb-8">
                  <div class="text-sm font-mono text-text-primary mb-3">// Key Architecture</div>
                  <ul class="space-y-2">
                    @for (highlight of project.highlights; track highlight) {
                      <li class="flex items-center gap-2 text-sm text-text-secondary">
                        <mat-icon class="text-xs text-spring-green" style="font-size: 14px; width: 14px; height: 14px;">check_circle</mat-icon>
                        {{ highlight }}
                      </li>
                    }
                  </ul>
                </div>

                <!-- Tech Stack -->
                <div class="flex flex-wrap gap-2 mt-auto pt-6 border-t border-ide-border">
                  @for (tech of project.tech; track tech) {
                    <span class="px-2.5 py-1 bg-ide-bg text-text-primary text-xs font-mono rounded border border-ide-border">
                      {{ tech }}
                    </span>
                  }
                </div>
              </div>
            </div>
          }
        </div>
      </div>
    </section>
  `
})
export class ProjectsComponent {
  projects = [
    {
      title: 'SouthernWaveBank (SWBank)',
      type: 'Enterprise Banking Application',
      description: 'A full-stack banking application designed for secure account management, transactions, and user administration. Engineered for high reliability and secure operations.',
      highlights: [
        'Role-based access control (RBAC)',
        'Secure transaction handling',
        'Real-time operations',
        'Enterprise-grade architecture'
      ],
      tech: ['Spring Boot', 'Spring Security', 'AngularJS', 'MySQL', 'REST APIs'],
      accentClass: 'bg-java-orange',
      textAccentClass: 'text-java-orange',
      url: 'https://github.com/ak-hariharan/southernwave-bank'
    },
    {
      title: 'Dynamic Development Academy',
      type: 'Education Platform',
      description: 'A developer training platform for interactive courses, hands-on labs, and progress tracking. Designed to support learners with modern curriculum delivery and practical skill-building.',
      highlights: [
        'Course catalog and enrollment',
        'Interactive coding labs',
        'User progress tracking',
        'Secure authentication and role access'
      ],
      tech: ['Angular', 'Node.js', 'Express', 'MongoDB', 'REST APIs'],
      accentClass: 'bg-neon-blue',
      textAccentClass: 'text-neon-blue',
      url: 'https://github.com/Dynamicdev2024/Dynamic_Development_Academy'
    },
    {
      title: 'Brain Tumor Classification CNN',
      type: 'AI / Machine Learning',
      description: 'Analyzed and compared architectures like ResNet50, AlexNet, and VGG16 for MRI classification, evaluating accuracy and model performance.',
      highlights: [
        'Medical image analysis',
        'Deep learning experimentation',
        'Model accuracy comparison'
      ],
      tech: ['PyTorch', 'Deep Learning', 'CNN', 'Jupyter'],
      accentClass: 'bg-spring-green',
      textAccentClass: 'text-spring-green',
      url: 'https://github.com/ak-hariharan/Prediction-of-Brain-tumor-using-Deep-learning-techniques'
    },
    {
      title: 'Crossword TNPSC',
      type: 'AI based crossword solver (Under Development)',
      description: 'A TNPSC crossword assistant using AI to suggest answers and speed up solving. Active development is focused on smarter clue parsing and faster results.',
      highlights: [
        'AI-powered clue interpretation',
        'Crossword answer suggestion engine',
        'Exam preparation focused UX',
        'Under active development'
      ],
      tech: ['Angular', 'AI/ML', 'Natural Language Processing', 'Responsive Design'],
      accentClass: 'bg-ide-border',
      textAccentClass: 'text-text-primary',
      url: null
    }
  ];
}
