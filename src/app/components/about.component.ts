import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="about" class="py-24 px-6 md:px-12 lg:px-24 bg-ide-surface/30 border-y border-ide-border relative">
      <div class="max-w-5xl mx-auto">
        <div class="flex items-center gap-4 mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-white font-mono">
            <span class="text-java-orange">@Service</span> AboutMe
          </h2>
          <div class="h-px bg-ide-border flex-grow"></div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:items-start">
          <div class="lg:col-span-7 flex flex-col gap-6 text-text-secondary leading-relaxed text-lg">
            <p>
              I am a passionate <strong class="text-white">Java Backend Developer</strong> crafting scalable and resilient enterprise applications. With a strong foundation in the <strong class="text-neon-blue">Spring ecosystem</strong>, I specialize in designing microservices architectures and building secure RESTful APIs.
            </p>
            <p>
              My engineering philosophy revolves around <span class="text-spring-green">clean architecture</span> and problem-solving. Whether it's optimizing database queries, implementing robust authentication, or setting up service discovery, I focus on delivering production-grade software that scales.
            </p>
            <p>
              Currently, I'm contributing to enterprise backend systems at <strong class="text-white">Aspire Systems</strong>, leveraging modern Java features to drive backend performance and reliability.
            </p>
          </div>

          <div class="lg:col-span-5 relative group w-full self-start mt-2 lg:mt-0">
            <!-- Offset Frame Shadow -->
            <div class="absolute inset-0 bg-ide-border/50 rounded-xl transform translate-x-3 translate-y-3 transition-transform group-hover:translate-x-2 group-hover:translate-y-2 group-active:translate-x-2 group-active:translate-y-2 cursor-pointer"></div>
            
            <div class="rounded-xl overflow-hidden border border-ide-border relative bg-ide-bg z-10 shadow-2xl cursor-pointer">
              <!-- Frame Header -->
              <div class="flex items-center px-4 py-3 border-b border-ide-border bg-ide-surface shrink-0">
                <div class="flex gap-2">
                  <div class="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                  <div class="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                  <div class="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                </div>
                <div class="mx-auto text-xs font-mono text-text-secondary">profile.png</div>
              </div>
              
              <!-- Image Container -->
              <div class="relative bg-ide-surface p-2 lg:p-4">
                <div class="absolute inset-0 bg-java-orange/10 mix-blend-overlay group-hover:opacity-0 group-active:opacity-0 transition-opacity duration-500 z-10 pointer-events-none rounded-b-xl"></div>
                <!-- object-cover with a nice aspect ratio to keep it uniformly filled and fully responsive -->
                <img src="/profile.png" alt="Karuppasamyhariharan" class="w-full aspect-[4/5] object-cover object-top rounded filter grayscale group-hover:grayscale-0 group-active:grayscale-0 transition-all duration-500 relative z-20 shadow-md" referrerpolicy="no-referrer" onerror="this.src='https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop';" />
              </div>

              <!-- Frame Footer -->
              <div class="bg-ide-bg p-3 border-t border-ide-border shrink-0">
                <div class="font-mono text-xs text-text-secondary mb-1">$ ./get_status.sh</div>
                <div class="font-mono text-xs text-spring-green flex items-center gap-2">
                  <span class="w-2 h-2 rounded-full bg-spring-green animate-pulse inline-block"></span>
                  Building robust APIs...
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class AboutComponent {}
