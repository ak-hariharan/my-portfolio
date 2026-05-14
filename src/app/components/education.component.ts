import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [MatIconModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="education" class="py-24 px-6 md:px-12 lg:px-24">
      <div class="max-w-5xl mx-auto">
        <div class="flex items-center gap-4 mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-white font-mono">
             <span class="text-java-orange">public interface</span> Education
          </h2>
          <div class="h-px bg-ide-border flex-grow"></div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <!-- Education Card -->
          <div class="border border-ide-border bg-ide-surface/30 p-8 rounded-xl relative group overflow-hidden">
            <div class="absolute inset-0 bg-neon-blue/5 opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity"></div>
            
            <div class="relative z-10">
              <div class="flex items-center gap-4 mb-6">
                <div class="bg-ide-bg p-3 rounded-lg border border-ide-border">
                  <mat-icon class="text-neon-blue">school</mat-icon>
                </div>
                <div>
                  <h3 class="text-xl font-bold text-white">B.Tech Computer Science</h3>
                  <div class="text-text-secondary font-mono text-sm">First Class Honours</div>
                </div>
              </div>
              
              <div class="font-mono text-text-primary text-lg mb-2">Kalasalingam University</div>
              <p class="text-text-secondary text-sm">Focus on foundational computer science principles, algorithms, and software engineering methodologies.</p>
            </div>
          </div>

          <!-- Certification Card -->
          <div class="border border-ide-border bg-ide-surface/30 p-8 rounded-xl relative group overflow-hidden">
             <div class="absolute inset-0 bg-spring-green/5 opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity"></div>
             
             <div class="relative z-10">
              <div class="flex items-center gap-4 mb-6">
                <div class="bg-ide-bg p-3 rounded-lg border border-ide-border">
                  <mat-icon class="text-spring-green">workspace_premium</mat-icon>
                </div>
                <div>
                  <h3 class="text-xl font-bold text-white">IBM Certification</h3>
                  <div class="text-text-secondary font-mono text-sm">Graduate Program</div>
                </div>
              </div>
              
              <div class="font-mono text-text-primary text-lg mb-2">Internet of Things & Smart Cities</div>
              <p class="text-text-secondary text-sm">Gained expertise in IoT architecture, sensor networks, and data analytics for smart city solutions.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  `
})
export class EducationComponent {}
