import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [MatIconModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="experience" class="py-24 px-6 md:px-12 lg:px-24 bg-ide-surface/30 border-y border-ide-border relative">
      <div class="max-w-5xl mx-auto">
        <div class="flex items-center gap-4 mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-white font-mono">
             <span class="text-java-orange">extends</span> ExperienceTimeline
          </h2>
          <div class="h-px bg-ide-border flex-grow"></div>
        </div>

        <div class="relative border-l-2 border-ide-border ml-4 md:ml-6 space-y-12">
          
          <!-- Experience 1 -->
          <div class="relative pl-8 md:pl-12">
            <!-- Timeline dot -->
            <div class="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-spring-green border-4 border-ide-bg z-10 shadow-[0_0_10px_rgba(35,134,54,0.5)]"></div>
            
            <div class="flex flex-col md:flex-row md:items-center justify-between mb-2">
              <h3 class="text-xl font-bold text-white">Java Developer</h3>
              <div class="font-mono text-sm text-spring-green bg-spring-green/10 px-3 py-1 rounded w-fit mt-2 md:mt-0">
                Dec 2024 – Present
              </div>
            </div>
            
            <div class="text-lg font-mono text-neon-blue mb-4">Aspire Systems <span class="text-text-secondary text-sm ml-2">| Chennai, India</span></div>
            
            <ul class="space-y-3 text-text-secondary">
              <li class="flex items-start gap-3">
                <mat-icon class="text-java-orange text-sm mt-1 shrink-0">chevron_right</mat-icon>
                <span>Building and maintaining enterprise backend applications using modern Java.</span>
              </li>
              <li class="flex items-start gap-3">
                <mat-icon class="text-java-orange text-sm mt-1 shrink-0">chevron_right</mat-icon>
                <span>Working extensively with <strong class="text-text-primary">Spring Boot</strong> and <strong class="text-text-primary">Spring Data</strong> to design scalable RESTful APIs.</span>
              </li>
              <li class="flex items-start gap-3">
                <mat-icon class="text-java-orange text-sm mt-1 shrink-0">chevron_right</mat-icon>
                <span>Implementing secure backend systems, adhering to enterprise security standards.</span>
              </li>
            </ul>
          </div>

          <!-- Experience 2 -->
          <div class="relative pl-8 md:pl-12 group">
            <div class="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-ide-border border-4 border-ide-bg z-10 group-hover:bg-neon-blue transition-colors"></div>
            
            <div class="flex flex-col md:flex-row md:items-center justify-between mb-2">
              <h3 class="text-xl font-bold text-text-primary group-hover:text-white group-active:text-white transition-colors">Process Retail Associate</h3>
              <div class="font-mono text-sm text-text-secondary bg-ide-surface border border-ide-border px-3 py-1 rounded w-fit mt-2 md:mt-0">
                Sep 2023 – Feb 2024
              </div>
            </div>
            
            <div class="text-lg font-mono text-text-secondary mb-4">Amazon <span class="text-text-secondary/60 text-sm ml-2">| Chennai, India</span></div>
            
            <ul class="space-y-3 text-text-secondary">
              <li class="flex items-start gap-3">
                <mat-icon class="text-ide-border text-sm mt-1 shrink-0 group-hover:text-neon-blue group-active:text-neon-blue transition-colors">chevron_right</mat-icon>
                <span>Demonstrated analytical thinking and operational excellence.</span>
              </li>
              <li class="flex items-start gap-3">
                <mat-icon class="text-ide-border text-sm mt-1 shrink-0 group-hover:text-neon-blue group-active:text-neon-blue transition-colors">chevron_right</mat-icon>
                <span>Contributed to process optimization within standard retail operations.</span>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  `
})
export class ExperienceComponent {}
