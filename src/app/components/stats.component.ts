import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-stats',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="py-24 px-6 md:px-12 lg:px-24 bg-ide-surface/30 border-y border-ide-border relative">
      <div class="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        <!-- GitHub Stats -->
        <div>
          <div class="flex items-center gap-3 mb-8">
            <svg viewBox="0 0 24 24" class="w-8 h-8 fill-white"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            <h2 class="text-3xl font-bold text-white font-mono">GitHub</h2>
          </div>
          
          <div class="bg-ide-bg border border-ide-border rounded-xl p-6 relative overflow-hidden group">
            <div class="absolute inset-0 bg-gradient-to-br from-ide-border/20 to-transparent"></div>
            
            <div class="grid grid-cols-2 gap-4 relative z-10 font-mono">
              <div class="bg-ide-surface border border-ide-border p-4 rounded-lg text-center hover:border-spring-green/50 transition-colors active:scale-[0.98] cursor-default">
                <div class="text-sm text-text-secondary mb-1">Contributions</div>
                <div class="text-3xl font-bold text-spring-green">450+</div>
              </div>
              <div class="bg-ide-surface border border-ide-border p-4 rounded-lg text-center hover:border-neon-blue/50 transition-colors active:scale-[0.98] cursor-default">
                <div class="text-sm text-text-secondary mb-1">Repositories</div>
                <div class="text-3xl font-bold text-neon-blue">20+</div>
              </div>
              <div class="col-span-2 bg-ide-surface border border-ide-border p-4 rounded-lg cursor-default h-32 flex flex-col justify-center">
                <div class="text-sm text-text-secondary mb-2">Activity Map Placeholder</div>
                <!-- Mock Contribution Graph -->
                <div class="flex gap-1 flex-wrap overflow-hidden h-12">
                  @for(i of mockGraph; track i) {
                    <div class="w-3 h-3 rounded-sm" [class]="i"></div>
                  }
                </div>
              </div>
            </div>
            
            <a href="https://github.com/ak-hariharan" target="_blank" rel="noopener noreferrer" class="mt-6 flex items-center justify-center gap-2 text-sm text-white font-mono bg-ide-surface hover:bg-ide-border border border-ide-border py-3 rounded-lg transition-colors active:scale-[0.98] relative z-10">
              View Profile
            </a>
          </div>
        </div>

        <!-- LeetCode Stats -->
        <div>
          <div class="flex items-center gap-3 mb-8">
            <svg viewBox="0 0 24 24" class="w-8 h-8 fill-java-orange"><path d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.824-.662l-4.332-4.363c-.467-.467-.702-1.15-.702-1.863s.235-1.357.702-1.824l4.319-4.38c.467-.467 1.125-.645 1.838-.645s1.371.196 1.823.662l2.697 2.606c.514.515 1.365.497 1.9-.038.535-.536.553-1.387.039-1.901l-2.609-2.636a5.055 5.055 0 0 0-2.445-1.337l2.467-2.503c.516-.514.498-1.366-.037-1.901-.535-.535-1.387-.552-1.902-.038l-10.1 10.101c-.981.982-1.469 2.384-1.469 3.797s.488 2.815 1.469 3.797l10.1 10.1c.515.515 1.367.497 1.902-.038.535-.535.552-1.387.037-1.902l-2.467-2.49c.895-.23 1.748-.718 2.445-1.336l2.609-2.636c.514-.514.496-1.365-.039-1.9-.535-.535-1.386-.553-1.9-.038zM12.562 10.85H5.808c-.732 0-1.325.592-1.325 1.324s.593 1.324 1.325 1.324h6.754c.732 0 1.325-.592 1.325-1.324s-.593-1.324-1.325-1.324z"/></svg>
            <h2 class="text-3xl font-bold text-white font-mono">LeetCode</h2>
          </div>
          
          <div class="bg-ide-bg border border-ide-border rounded-xl p-6 relative overflow-hidden">
            <div class="absolute right-0 top-0 w-32 h-32 bg-java-orange/5 blur-3xl absolute"></div>
            
            <div class="flex items-center gap-6 mb-8 relative z-10">
              <div class="relative w-24 h-24 flex items-center justify-center">
                <!-- Mock SVG Ring -->
                <svg class="w-full h-full -rotate-90">
                  <circle cx="48" cy="48" r="40" stroke="currentColor" fill="transparent" class="text-ide-surface" stroke-width="8" />
                  <circle cx="48" cy="48" r="40" stroke="currentColor" fill="transparent" class="text-java-orange" stroke-width="8" stroke-dasharray="250" stroke-dashoffset="60" />
                </svg>
                <div class="absolute font-mono text-xl text-white font-bold">150+</div>
              </div>
              <div class="font-mono">
                <div class="text-text-secondary text-sm mb-1">Total Solved</div>
                <div class="text-2xl text-white font-bold">Problems</div>
                <div class="text-xs text-spring-green mt-2 px-2 py-1 bg-spring-green/10 rounded-sm inline-block">Top 15% Rating</div>
              </div>
            </div>

            <div class="space-y-3 relative z-10">
              <div>
                <div class="flex justify-between text-xs font-mono mb-1 text-text-primary">
                  <span>Easy</span> <span>45%</span>
                </div>
                <div class="h-1.5 bg-ide-surface rounded overflow-hidden"><div class="h-full bg-spring-green w-[45%]"></div></div>
              </div>
              <div>
                <div class="flex justify-between text-xs font-mono mb-1 text-text-primary">
                  <span>Medium</span> <span>40%</span>
                </div>
                <div class="h-1.5 bg-ide-surface rounded overflow-hidden"><div class="h-full bg-java-orange w-[40%]"></div></div>
              </div>
              <div>
                <div class="flex justify-between text-xs font-mono mb-1 text-text-primary">
                  <span>Hard</span> <span>15%</span>
                </div>
                <div class="h-1.5 bg-ide-surface rounded overflow-hidden"><div class="h-full bg-red-500 w-[15%]"></div></div>
              </div>
            </div>

            <a href="https://leetcode.com/u/karuppasamyhariharan/" target="_blank" rel="noopener noreferrer" class="mt-6 flex items-center justify-center gap-2 text-sm text-white font-mono bg-ide-surface hover:bg-ide-border border border-ide-border py-3 rounded-lg transition-colors active:scale-[0.98] relative z-10 w-full">
              View Profile
            </a>
          </div>
        </div>
        
      </div>
    </section>
  `
})
export class StatsComponent {
  // Generate random classes for mock github graph
  mockGraph = Array.from({length: 120}).map(() => {
    const v = Math.random();
    if (v > 0.9) return 'bg-spring-green';
    if (v > 0.6) return 'bg-spring-green/60';
    if (v > 0.3) return 'bg-spring-green/30';
    return 'bg-ide-surface border border-ide-border';
  });
}
