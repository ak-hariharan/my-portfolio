import { ChangeDetectionStrategy, Component, OnInit, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-hero',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="min-h-screen flex flex-col justify-center relative px-6 md:px-12 lg:px-24 pt-20 overflow-hidden">
      <!-- Background particles / glow -->
      <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-blue/10 rounded-full blur-3xl -z-10 animate-pulse"></div>
      <div class="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-java-orange/5 rounded-full blur-3xl -z-10"></div>

      <div class="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        <!-- Text Content -->
        <div class="flex flex-col gap-6 lg:col-span-7">
          <div class="font-mono text-xs sm:text-sm md:text-base text-spring-green border border-spring-green/20 bg-spring-green/5 px-4 py-1.5 rounded-full w-fit whitespace-nowrap">
            > System.out.println("Hello, Sightseer!");
          </div>
          
          <h1 class="text-5xl md:text-7xl font-bold tracking-tight text-white mb-2">
            <span class="block text-text-secondary text-2xl md:text-3xl font-mono mb-3">public class</span>
            Karuppasamy <br />
            <span class="text-java-orange">Hariharan A</span>
          </h1>

          <div class="h-12 md:h-16 relative">
            <div class="font-mono text-xl md:text-2xl text-text-primary absolute top-0 left-0">
               <span class="text-neon-blue">implements</span> {{ displayedRole() }}<span class="animate-pulse">_</span>
            </div>
          </div>

          <p class="text-text-secondary text-lg leading-relaxed max-w-lg mt-2 font-sans">
            Ardent Java Developer building scalable backend systems with Spring Boot and Microservices. Focused on enterprise architecture and secure APIs.
          </p>

          <div class="flex flex-wrap gap-4 mt-6">
            <a href="#projects" class="bg-java-orange hover:bg-java-orange/90 text-ide-bg font-semibold px-8 py-3 rounded-lg transition-all active:scale-[0.98] flex items-center gap-2">
              <mat-icon class="text-lg">code</mat-icon> View Projects
            </a>
            <a href="https://github.com/ak-hariharan" target="_blank" rel="noopener noreferrer" class="bg-ide-surface hover:bg-ide-border border border-ide-border text-white px-8 py-3 rounded-lg transition-all active:scale-[0.98] flex items-center gap-2 font-mono text-sm">
              <svg viewBox="0 0 24 24" class="w-5 h-5 fill-current"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              GitHub
            </a>
          </div>
        </div>

        <!-- Code Block Visual -->
        <div class="relative w-full rounded-xl overflow-hidden border border-ide-border bg-ide-surface/80 backdrop-blur shadow-2xl lg:col-span-5 lg:ml-12 mb-24 lg:mb-0">
          <div class="flex items-center px-4 py-3 border-b border-ide-border bg-ide-surface/90">
            <div class="flex gap-2">
              <div class="w-3 h-3 rounded-full bg-red-500/80"></div>
              <div class="w-3 h-3 rounded-full bg-yellow-500/80"></div>
              <div class="w-3 h-3 rounded-full bg-green-500/80"></div>
            </div>
            <div class="mx-auto text-xs font-mono text-text-secondary">Developer.java</div>
          </div>
          <pre class="p-4 md:p-6 text-[11px] md:text-xs font-mono overflow-x-auto whitespace-pre">
<span class="text-neon-blue">public class</span> <span class="text-yellow-200">Developer</span> {{ "{" }}
  <span class="text-neon-blue">String</span> name = <span class="text-spring-green">"Karuppasamyhariharan"</span>;
  <span class="text-neon-blue">String</span> role = <span class="text-spring-green">"Java Backend Developer"</span>;
  <span class="text-neon-blue">String</span> location = <span class="text-spring-green">"Chennai, India"</span>;
  
  <span class="text-neon-blue">List</span>&lt;<span class="text-neon-blue">String</span>&gt; techStack = <span class="text-neon-blue">List</span>.of(
    <span class="text-spring-green">"Java"</span>, <span class="text-spring-green">"Spring Boot"</span>, 
    <span class="text-spring-green">"Microservices"</span>, <span class="text-spring-green">"MySQL"</span>
  );

  <span class="text-neon-blue">public void</span> <span class="text-yellow-200">buildScalableSystems</span>() {{ "{" }}
    <span class="text-java-orange">while</span> (true) {{ "{" }}
      System.out.<span class="text-neon-blue">println</span>(<span class="text-spring-green">"Refactoring for scale..."</span>);
    {{ "}" }}
  {{ "}" }}
{{ "}" }}</pre>
        </div>
      </div>
    </section>
  `,
  imports: [MatIconModule]
})
export class HeroComponent implements OnInit {
  displayedRole = signal('');
  roles = ['Backend Engineer', 'Java Developer', 'Microservices Expert'];
  currentRoleIndex = 0;
  currentCharIndex = 0;
  isDeleting = false;

  ngOnInit() {
    this.typewriterEffect();
  }

  typewriterEffect() {
    const currentWord = this.roles[this.currentRoleIndex];
    let typeSpeed = this.isDeleting ? 50 : 100;

    if (this.isDeleting) {
      this.currentCharIndex--;
      this.displayedRole.set(currentWord.substring(0, this.currentCharIndex));
    } else {
      this.currentCharIndex++;
      this.displayedRole.set(currentWord.substring(0, this.currentCharIndex));
    }

    if (!this.isDeleting && this.currentCharIndex === currentWord.length) {
      typeSpeed = 2000;
      this.isDeleting = true;
    } else if (this.isDeleting && this.currentCharIndex === 0) {
      this.isDeleting = false;
      this.currentRoleIndex = (this.currentRoleIndex + 1) % this.roles.length;
      typeSpeed = 500;
    }

    setTimeout(() => this.typewriterEffect(), typeSpeed);
  }
}
