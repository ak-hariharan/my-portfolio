import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [MatIconModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="skills" class="py-24 px-6 md:px-12 lg:px-24">
      <div class="max-w-5xl mx-auto">
        <div class="flex items-center gap-4 mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-white font-mono">
            <span class="text-java-orange">import</span> TechStack.*
          </h2>
          <div class="h-px bg-ide-border flex-grow"></div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Backend Matrix -->
          <div class="border border-ide-border bg-ide-surface/50 rounded-xl p-6 hover:border-spring-green/50 active:border-spring-green/50 hover:bg-ide-surface active:bg-ide-surface transition-all group">
            <h3 class="text-xl font-mono text-neon-blue mb-6 flex items-center gap-3">
              <span class="p-2 bg-neon-blue/10 rounded-lg"><mat-icon class="text-neon-blue text-sm">dns</mat-icon></span> Backend & Core
            </h3>
            <div class="space-y-4">
              @for (skill of backendSkills; track skill.name) {
                <div>
                  <div class="flex justify-between text-sm font-mono mb-1">
                    <span class="text-text-primary">{{ skill.name }}</span>
                    <span class="text-text-secondary">{{ skill.level }}%</span>
                  </div>
                  <div class="h-1.5 bg-ide-bg rounded-full overflow-hidden">
                    <div class="h-full bg-neon-blue group-hover:bg-spring-green group-active:bg-spring-green transition-colors duration-500" [style.width.%]="skill.level"></div>
                  </div>
                </div>
              }
            </div>
          </div>

          <!-- Frameworks & Arch -->
          <div class="border border-ide-border bg-ide-surface/50 rounded-xl p-6 hover:border-spring-green/50 active:border-spring-green/50 hover:bg-ide-surface active:bg-ide-surface transition-all group">
            <h3 class="text-xl font-mono text-java-orange mb-6 flex items-center gap-3">
              <span class="p-2 bg-java-orange/10 rounded-lg"><mat-icon class="text-java-orange text-sm">architecture</mat-icon></span> Architecture
            </h3>
            <div class="flex flex-wrap gap-2">
              @for (tag of archSkills; track tag) {
                <span class="px-3 py-1 bg-ide-bg border border-ide-border rounded text-sm font-mono text-text-primary hover:border-java-orange active:border-java-orange transition-colors">
                  {{ tag }}
                </span>
              }
            </div>
          </div>

          <!-- Frontend & Tools -->
          <div class="border border-ide-border bg-ide-surface/50 rounded-xl p-6 hover:border-spring-green/50 active:border-spring-green/50 hover:bg-ide-surface active:bg-ide-surface transition-all group">
            <h3 class="text-xl font-mono text-spring-green mb-6 flex items-center gap-3">
              <span class="p-2 bg-spring-green/10 rounded-lg"><mat-icon class="text-spring-green text-sm">code</mat-icon></span> Frontend & DB
            </h3>
            <div class="space-y-4">
              @for (skill of frontendSkills; track skill.name) {
                <div>
                  <div class="flex justify-between text-sm font-mono mb-1">
                    <span class="text-text-primary">{{ skill.name }}</span>
                  </div>
                  <div class="h-1.5 bg-ide-bg rounded-full overflow-hidden">
                    <div class="h-full bg-spring-green" [style.width.%]="skill.level"></div>
                  </div>
                </div>
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class SkillsComponent {
  backendSkills = [
    { name: 'Java', level: 95 },
    { name: 'Spring Boot', level: 90 },
    { name: 'Spring Security', level: 85 },
    { name: 'REST APIs', level: 90 },
  ];

  archSkills = [
    'Microservices', 'Spring Cloud', 'Eureka', 'API Gateway', 
    'JWT Auth', 'Design Patterns', 'JDBC', 'Unit Testing', 'Clean Architecture'
  ];

  frontendSkills = [
    { name: 'MySQL', level: 85 },
    { name: 'AngularJS / React.js', level: 75 },
    { name: 'HTML5 / CSS3', level: 85 },
    { name: 'PyTorch / AI', level: 60 }
  ];
}
