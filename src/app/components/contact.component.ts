import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="contact" class="py-24 px-6 md:px-12 lg:px-24 bg-ide-surface/30 border-y border-ide-border relative overflow-hidden">
      <div class="absolute inset-0 bg-[linear-gradient(to_right,#30363D_1px,transparent_1px),linear-gradient(to_bottom,#30363D_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20"></div>
      
      <div class="max-w-3xl mx-auto text-center relative z-10">
        <div class="inline-block px-4 py-1.5 border border-ide-border bg-ide-bg rounded-full text-text-secondary font-mono text-sm mb-6">
          <span class="text-java-orange">import</span> java.net.Contact;
        </div>
        
        <h2 class="text-4xl md:text-5xl font-bold text-white mb-6">Get In Touch</h2>
        <p class="text-text-secondary text-lg mb-12 max-w-xl mx-auto">
          Currently open for new opportunities. Whether you have a question or just want to say hi, my inbox is always open! You can also use the terminal at the bottom of the page to send me a message directly.
        </p>

        <!-- Links Card -->
        <div class="border border-ide-border bg-ide-bg rounded-xl overflow-hidden text-left mb-12 shadow-2xl">
          <div class="p-6 md:p-8 font-mono text-sm flex flex-col">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <a href="mailto:ak.hari.coder@gmail.com" class="flex items-center gap-3 p-4 border border-ide-border rounded active:border-neon-blue active:bg-neon-blue/5 hover:border-neon-blue hover:bg-neon-blue/5 transition-all active:scale-[0.98] text-text-primary group">
                <mat-icon class="text-ide-border group-hover:text-neon-blue group-active:text-neon-blue transition-colors">email</mat-icon>
                <span>Email Me</span>
              </a>
              <a href="https://linkedin.com/in/kh10" target="_blank" rel="noopener noreferrer" class="flex items-center gap-3 p-4 border border-ide-border rounded active:border-spring-green active:bg-spring-green/5 hover:border-spring-green hover:bg-spring-green/5 transition-all active:scale-[0.98] text-text-primary group">
                <mat-icon class="text-ide-border group-hover:text-spring-green group-active:text-spring-green transition-colors">work</mat-icon>
                <span>LinkedIn</span>
              </a>
              <a href="https://github.com/ak-hariharan" target="_blank" rel="noopener noreferrer" class="flex items-center gap-3 p-4 border border-ide-border rounded active:border-text-primary active:bg-ide-surface hover:border-text-primary hover:bg-ide-surface transition-all active:scale-[0.98] text-text-primary group">
                <mat-icon class="text-ide-border group-hover:text-text-primary group-active:text-text-primary transition-colors">code</mat-icon>
                <span>GitHub</span>
              </a>
              <a href="https://leetcode.com/u/karuppasamyhariharan/" target="_blank" rel="noopener noreferrer" class="flex items-center gap-3 p-4 border border-ide-border rounded active:border-java-orange active:bg-java-orange/5 hover:border-java-orange hover:bg-java-orange/5 transition-all active:scale-[0.98] text-text-primary group">
                 <mat-icon class="text-ide-border group-hover:text-java-orange group-active:text-java-orange transition-colors">terminal</mat-icon>
                <span>LeetCode</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class ContactComponent {
}