import {
  ChangeDetectionStrategy,
  Component,
  signal,
  ViewChild,
  ElementRef,
  AfterViewChecked,
  OnInit,
  OnDestroy,
} from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatIconModule } from "@angular/material/icon";
import { HeroComponent } from "./components/hero.component";
import { AboutComponent } from "./components/about.component";
import { SkillsComponent } from "./components/skills.component";
import { ExperienceComponent } from "./components/experience.component";
import { ProjectsComponent } from "./components/projects.component";
import { StatsComponent } from "./components/stats.component";
import { EducationComponent } from "./components/education.component";
import { ContactComponent } from "./components/contact.component";

export interface TerminalLine {
  text: string;
  type: "cmd" | "sys" | "error" | "success" | "prompt";
}

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: "app-root",
  imports: [
    CommonModule,
    MatIconModule,
    HeroComponent,
    AboutComponent,
    SkillsComponent,
    ExperienceComponent,
    ProjectsComponent,
    StatsComponent,
    EducationComponent,
    ContactComponent,
  ],
  template: `
    <div
      class="h-screen w-full flex flex-col bg-ide-bg text-text-primary font-sans overflow-hidden"
    >
      <!-- Top Header -->
      <header
        class="h-10 border-b border-ide-border flex items-center justify-between px-4 bg-ide-surface shrink-0 z-50"
      >
        <div class="flex items-center gap-2">
          <div class="w-3 h-3 rounded-full bg-red-500"></div>
          <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div class="w-3 h-3 rounded-full bg-green-500"></div>
          <span
            class="ml-4 text-xs font-mono text-text-secondary hide-on-mobile"
            >IntelliJ IDEA &mdash; portfolio [~/karuppasamyhariharan]</span
          >
          <span class="ml-4 text-xs font-mono text-text-secondary md:hidden"
            >IDE</span
          >
        </div>
        <div
          class="flex gap-4 text-xs font-mono text-text-secondary items-center"
        >
          <mat-icon
            class="cursor-pointer hover:text-white active:text-white transition-colors text-[16px] w-[16px] h-[16px]"
            (click)="toggleTheme()"
          >
            {{ isLightMode() ? "dark_mode" : "light_mode" }}
          </mat-icon>
          <span class="hidden sm:inline">Git: main*</span>
          <span class="hidden sm:inline">UTF-8</span>
          <span
            class="bg-ide-border/50 px-2 py-0.5 rounded text-white font-bold tracking-tight"
            >KHA</span
          >
        </div>
      </header>

      <div class="flex-1 flex overflow-hidden">
        <!-- Sidebar (Project Explorer) -->
        <aside
          class="hidden md:flex flex-col border-r border-ide-border bg-ide-surface text-sm shrink-0 z-40 transition-all duration-300"
          [class.w-64]="isSidebarOpen()"
          [class.w-10]="!isSidebarOpen()"
        >
          <div
            class="h-10 border-b border-ide-border font-bold text-xs uppercase tracking-wider flex items-center cursor-pointer hover:bg-ide-border/50 text-text-primary select-none shrink-0"
            [class.justify-between]="isSidebarOpen()"
            [class.px-3]="isSidebarOpen()"
            [class.justify-center]="!isSidebarOpen()"
            (click)="toggleSidebar()"
          >
            <span [class.hidden]="!isSidebarOpen()">Project</span>
            <span class="text-text-secondary font-mono text-base font-bold">{{
              isSidebarOpen() ? "<" : ">"
            }}</span>
          </div>

          <div
            class="flex-1 overflow-hidden flex flex-col whitespace-nowrap transition-all duration-300"
            [class.hidden]="!isSidebarOpen()"
          >
            <div
              class="p-2 space-y-1 font-mono text-[11px] opacity-80 overflow-y-auto flex-1 custom-scrollbar"
            >
              <div class="flex items-center gap-2 text-text-primary">
                <span class="text-neon-blue">▼</span> 📂 src/main/java
              </div>
              <div class="flex items-center gap-2 ml-4 text-text-primary">
                <span class="text-neon-blue">▼</span> 📂 com.hariharan
              </div>

              <a
                href="#about"
                class="flex items-center gap-2 ml-8 italic text-neon-blue hover:text-white active:text-white cursor-pointer select-none transition-colors"
                >© AboutMe.java</a
              >
              <a
                href="#skills"
                class="flex items-center gap-2 ml-8 italic text-text-secondary hover:text-white active:text-white cursor-pointer select-none transition-colors"
                >© TechStack.java</a
              >
              <a
                href="#experience"
                class="flex items-center gap-2 ml-8 italic text-text-secondary hover:text-white active:text-white cursor-pointer select-none transition-colors"
                >© Experience.java</a
              >

              <div class="flex items-center gap-2 mt-4 text-text-primary">
                <span class="text-spring-green">▶</span> 📂 projects
              </div>
              <a
                href="#projects"
                class="flex items-center gap-2 ml-4 italic text-text-secondary hover:text-white active:text-white cursor-pointer select-none transition-colors"
                >© SWBank.java</a
              >
              <a
                href="#projects"
                class="flex items-center gap-2 ml-4 italic text-text-secondary hover:text-white active:text-white cursor-pointer select-none transition-colors"
                >© Microservices.java</a
              >
              <a
                href="#projects"
                class="flex items-center gap-2 ml-4 italic text-text-secondary hover:text-white active:text-white cursor-pointer select-none transition-colors"
                >© AI_CNN.py</a
              >

              <div class="mt-6 text-text-secondary">📂 target</div>
              <div class="text-text-secondary ml-4">pom.xml</div>
              <div class="text-text-secondary ml-4">application.yml</div>
            </div>
            <div
              class="mt-auto p-4 border-t border-ide-border bg-ide-bg flex flex-col shrink-0"
            >
              <div
                class="text-[10px] uppercase font-bold text-text-secondary mb-2 flex items-center justify-between cursor-pointer select-none"
                (click)="toggleConnect()"
              >
                <span>Connect</span>
                <mat-icon
                  class="text-[14px] w-[14px] h-[14px] transition-transform duration-300"
                  [class.-rotate-90]="!isConnectOpen()"
                  >keyboard_arrow_down</mat-icon
                >
              </div>
              <div
                class="space-y-2 overflow-hidden transition-all duration-300"
                [class.max-h-0]="!isConnectOpen()"
                [class.opacity-0]="!isConnectOpen()"
                [class.max-h-32]="isConnectOpen()"
                [class.mt-0]="!isConnectOpen()"
              >
                <a
                  href="https://github.com/ak-hariharan"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="flex items-center gap-2 text-xs hover:text-white active:text-white transition-colors"
                  ><span>🔗</span> GitHub</a
                >
                <a
                  href="https://leetcode.com/u/karuppasamyhariharan/"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="flex items-center gap-2 text-xs hover:text-white active:text-white transition-colors"
                  ><span>🔗</span> LeetCode</a
                >
                <a
                  href="#"
                  (click)="openContactTerminal($event)"
                  class="flex items-center gap-2 text-xs hover:text-white active:text-white transition-colors"
                  ><span>🔗</span> Contact Me</a
                >
              </div>
            </div>
          </div>

          @if (!isSidebarOpen()) {
            <div
              class="flex-1 py-4 flex flex-col items-center overflow-hidden cursor-pointer hover:bg-ide-border/50 text-text-primary transition-colors"
              (click)="toggleSidebar()"
            >
              <div
                style="writing-mode: vertical-rl; transform: rotate(180deg);"
                class="text-text-secondary text-[10px] uppercase tracking-widest font-bold whitespace-nowrap select-none"
              >
                Project Explorer
              </div>
            </div>
          }
        </aside>

        <!-- Main Editor View -->
        <main
          class="flex-1 flex flex-col min-w-0 bg-ide-bg relative overflow-hidden"
        >
          <!-- Editor Tabs -->
          <div
            class="h-9 border-b border-ide-border flex bg-ide-surface shrink-0 overflow-x-auto no-scrollbar z-30"
          >
            <div
              class="px-4 flex items-center text-xs font-mono border-t-2 border-t-java-orange bg-ide-bg border-r border-ide-border whitespace-nowrap"
            >
              Portfolio.java
              <span class="ml-2 text-[8px] cursor-pointer hover:text-white active:text-white"
                >×</span
              >
            </div>
            <a
              href="#skills"
              class="px-4 flex items-center text-xs font-mono text-text-secondary border-r border-ide-border hover:bg-ide-bg cursor-pointer transition-colors whitespace-nowrap"
            >
              application.yml
              <span class="ml-2 text-[8px] hover:text-white active:text-white">×</span>
            </a>
            <a
              href="#contact"
              class="px-4 flex items-center text-xs font-mono text-text-secondary border-r border-ide-border hover:bg-ide-bg cursor-pointer transition-colors whitespace-nowrap"
            >
              pom.xml <span class="ml-2 text-[8px] hover:text-white active:text-white">×</span>
            </a>
          </div>

          <!-- Scrollable Application Content -->
          <div
            class="flex-1 overflow-y-auto overflow-x-hidden relative scroll-smooth custom-scrollbar pb-16"
          >
            <!-- IDE Background Watermark -->
            <div
              class="absolute top-20 right-10 opacity-[0.02] pointer-events-none font-mono text-6xl lg:text-[120px] font-bold overflow-hidden uppercase leading-none text-right whitespace-pre-line z-0 select-none"
            >
              JAVA<br />SPRING<br />MICRO<br />SERVICES
            </div>

            <div
              class="relative z-10 w-full max-w-5xl mx-auto flex flex-col gap-0 md:gap-4 px-0 md:px-6"
            >
              <app-hero></app-hero>
              <app-about></app-about>
              <app-skills></app-skills>
              <app-experience></app-experience>
              <app-projects></app-projects>
              <app-stats></app-stats>
              <app-education></app-education>
              <app-contact></app-contact>
            </div>
          </div>
        </main>
      </div>

      <!-- Footer Terminal Area -->
      <footer
        class="border-t border-ide-border bg-ide-bg flex flex-col font-mono text-[11px] shrink-0 z-50 transition-all duration-300"
        [class.h-8]="!isTerminalOpen()"
        [class.h-64]="isTerminalOpen()"
      >
        <!-- Terminal Header / Toggle -->
        <div
          class="h-8 border-b border-ide-border flex items-center justify-between px-4 cursor-pointer hover:bg-ide-surface transition-colors shrink-0"
          (click)="toggleTerminal()"
        >
          <div class="flex items-center gap-2 text-text-secondary">
            <mat-icon
              class="text-xs"
              style="font-size: 14px; width: 14px; height: 14px;"
              >terminal</mat-icon
            >
            <span>Terminal</span>
          </div>
          <div class="flex items-center gap-2">
            <mat-icon
              class="text-xs text-text-secondary"
              style="font-size: 14px; width: 14px; height: 14px;"
            >
              {{ isTerminalOpen() ? "expand_more" : "expand_less" }}
            </mat-icon>
          </div>
        </div>

        <div
          class="flex flex-1 overflow-hidden transition-all duration-300"
          [class.opacity-0]="!isTerminalOpen()"
          [class.opacity-100]="isTerminalOpen()"
        >
          <div class="flex-1 flex flex-col bg-[#0d1117]">
            <div
              class="flex items-center flex-wrap gap-4 p-2 border-b border-ide-border/50 bg-[#161b22] shrink-0"
            >
              <span class="text-spring-green font-bold">[BUILD SUCCESS]</span>
              <span class="text-text-secondary">Finished in 1.42s</span>
              <span class="hidden sm:inline text-text-secondary"
                >Memory: 512MB/1024MB</span
              >
            </div>
            <!-- Interactive Terminal Body -->
            <div
              #terminalBody
              class="flex-grow py-3 overflow-y-auto custom-scrollbar text-xs"
              (click)="focusInput()"
            >
              <div class="flex mb-1.5 px-3 md:pl-0">
                <div
                  class="w-12 shrink-0 text-right pr-4 text-text-secondary opacity-40 select-none hidden md:block"
                >
                  1
                </div>
                <div
                  class="flex-1 opacity-80 leading-relaxed font-mono text-text-secondary break-words whitespace-pre-wrap"
                >
                  <span class="text-neon-blue">System</span>.out.<span
                    class="text-neon-blue"
                    >println</span
                  >(<span class="text-yellow-200"
                    >"Welcome to my page"</span
                  >);
                </div>
              </div>

              <div class="flex mb-4 px-3 md:pl-0">
                <div
                  class="w-12 shrink-0 text-right pr-4 text-text-secondary opacity-40 select-none hidden md:block"
                >
                  2
                </div>
                <div
                  class="flex-1 opacity-80 leading-relaxed font-mono text-text-secondary break-words whitespace-pre-wrap"
                >
                  <span class="text-spring-green">logger</span>.info(<span
                    class="text-yellow-200"
                    >"To connect with me provide yes/y below: "</span
                  >);
                </div>
              </div>

              <!-- History -->
              @for (line of history(); track $index) {
                <div class="flex mb-1.5 px-3 md:pl-0">
                  <div
                    class="w-12 shrink-0 text-right pr-4 text-text-secondary opacity-40 select-none hidden md:block"
                  >
                    {{ $index + 3 }}
                  </div>
                  <div
                    [ngClass]="{
                      'text-text-secondary': line.type === 'cmd',
                      'text-neon-blue': line.type === 'sys',
                      'text-red-400': line.type === 'error',
                      'text-spring-green font-bold': line.type === 'success',
                      'text-yellow-200': line.type === 'prompt',
                    }"
                    class="flex-1 break-words whitespace-pre-wrap"
                  >
                    {{ line.text }}
                  </div>
                </div>
              }

              <!-- Input Line -->
              @if (!isInputDisabled()) {
                <div class="flex mb-1.5 px-3 md:pl-0 relative">
                  <div
                    class="w-12 shrink-0 text-right pr-4 text-text-secondary opacity-40 select-none hidden md:block"
                  >
                    {{ history().length + 3 }}
                  </div>
                  <div
                    class="flex-1 flex items-center text-text-primary flex-wrap"
                  >
                    <span class="text-white mr-2 shrink-0">&gt;</span>
                    <input
                      #terminalInput
                      type="text"
                      class="bg-transparent border-none outline-none flex-1 text-text-primary font-mono min-w-[200px]"
                      style="caret-shape: block;"
                      (keyup.enter)="handleInput($event)"
                      (keydown)="handleKeyDown($event)"
                      autocomplete="off"
                      spellcheck="false"
                      autofocus
                    />
                  </div>
                </div>
              }
            </div>
          </div>

          <div
            class="w-48 hidden lg:flex border-l border-ide-border p-3 flex-col justify-center gap-1 shrink-0 bg-ide-surface"
          >
            <div class="flex items-center gap-2">
              <div class="w-2 h-2 rounded-full bg-spring-green"></div>
              <span
                class="text-[10px] uppercase font-bold text-white tracking-widest"
                >Live Env</span
              >
            </div>
            <div class="text-[10px] opacity-60 font-mono whitespace-nowrap">IST: {{ currentTime() }}</div>
            <div class="text-[9px] mt-1 opacity-40 whitespace-nowrap">
              &copy; {{ currentYear }} KHA. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  `,
})
export class App implements AfterViewChecked, OnInit, OnDestroy {
  currentYear = new Date().getFullYear();
  currentTime = signal<string>('');
  private timeInterval: any;
  
  isTerminalOpen = signal(true);
  isSidebarOpen = signal(true);
  isConnectOpen = signal(true);

  @ViewChild("terminalBody") terminalBody!: ElementRef;
  @ViewChild("terminalInput") terminalInput!: ElementRef;

  history = signal<TerminalLine[]>([]);

  step = signal<"init" | "name" | "email" | "subject" | "message" | "done">(
    "init",
  );

  formData = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };

  isInputDisabled = signal(false);
  isLightMode = signal(false);
  isAnimatingMatrix = signal(false);

  ngOnInit() {
    this.updateTime();
    this.timeInterval = setInterval(() => this.updateTime(), 1000);
  }

  ngOnDestroy() {
    if (this.timeInterval) {
      clearInterval(this.timeInterval);
    }
  }

  private updateTime() {
    const formatter = new Intl.DateTimeFormat('en-IN', {
      timeZone: 'Asia/Kolkata',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    });
    this.currentTime.set(formatter.format(new Date()));
  }

  toggleTheme() {
    if (this.isAnimatingMatrix()) return;
    this.isAnimatingMatrix.set(true);

    const isLightState = !this.isLightMode();

    const canvas = document.createElement("canvas");
    canvas.style.position = "fixed";
    canvas.style.top = "0";
    canvas.style.left = "0";
    canvas.style.width = "100vw";
    canvas.style.height = "100vh";
    canvas.style.zIndex = "9999";
    canvas.style.pointerEvents = "none";
    document.body.appendChild(canvas);

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const ctx = canvas.getContext("2d")!;

    const fontSize = 16;
    const columns = Math.ceil(canvas.width / fontSize) + 1;
    // We will start drops above the canvas
    const drops: number[] = new Array(columns)
      .fill(0)
      .map(() => -Math.floor(Math.random() * 50));

    let frameId: number;
    let phase = 0; // 0: sweep in, 1: sweep out
    let sweepProgress = 0; // 0 to 1

    const draw = () => {
      sweepProgress += 0.02; // Adjust speed as necessary
      if (sweepProgress >= 1 && phase === 0) {
        phase = 1;
        sweepProgress = 0;
        this.isLightMode.set(isLightState);
        if (isLightState) {
          document.body.classList.add("light-mode");
        } else {
          document.body.classList.remove("light-mode");
        }
      }

      if (phase === 0) {
        // Drawing over with solid color with small opacity to create trails
        ctx.fillStyle = isLightState
          ? "rgba(255, 255, 255, 0.2)"
          : "rgba(13, 17, 23, 0.2)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      } else {
        // In sweep out phase, we fade canvas to transparent or background color
        ctx.fillStyle = isLightState
          ? "rgba(240, 244, 248, 0.2)"
          : "rgba(13, 17, 23, 0.2)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }

      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const colPercent = isLightState ? i / columns : 1 - i / columns;

        let isActive = false;
        if (phase === 0 && sweepProgress * 1.5 > colPercent) isActive = true;
        if (phase === 1 && sweepProgress * 1.5 < colPercent) isActive = true;

        if (isActive) {
          const char = Math.random() > 0.5 ? "1" : "0";
          ctx.fillStyle = isLightState ? "#15803d" : "#238636"; // Spring green

          ctx.fillText(char, i * fontSize, drops[i] * fontSize);

          if (drops[i] * fontSize > canvas.height && Math.random() > 0.95) {
            drops[i] = 0;
          }
          drops[i] += 1;
        }
      }

      if (phase === 1 && sweepProgress >= 1) {
        cancelAnimationFrame(frameId);
        canvas.style.transition = "opacity 0.5s ease-out";
        canvas.style.opacity = "0";
        setTimeout(() => {
          document.body.removeChild(canvas);
          this.isAnimatingMatrix.set(false);
        }, 500);
      } else {
        frameId = requestAnimationFrame(draw);
      }
    };

    frameId = requestAnimationFrame(draw);
  }

  toggleTerminal() {
    this.isTerminalOpen.update((v) => !v);
    if (this.isTerminalOpen()) {
      setTimeout(() => this.focusInput(), 300);
    }
  }

  toggleSidebar() {
    this.isSidebarOpen.update((v) => !v);
  }

  toggleConnect() {
    this.isConnectOpen.update((v) => !v);
  }

  openContactTerminal(event: Event) {
    event.preventDefault();
    if (!this.isTerminalOpen()) {
      this.isTerminalOpen.set(true);
    }
    setTimeout(() => this.focusInput(), 300);
  }

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  scrollToBottom() {
    try {
      if (this.terminalBody) {
        this.terminalBody.nativeElement.scrollTop =
          this.terminalBody.nativeElement.scrollHeight;
      }
    } catch (err) {}
  }

  focusInput() {
    if (!this.isInputDisabled() && this.isTerminalOpen()) {
      setTimeout(() => {
        this.terminalInput?.nativeElement?.focus();
      }, 0);
    }
  }

  handleInput(event: any) {
    const value = event.target.value.trim();
    if (!value) return;

    const lines = this.history();
    lines.push({ text: `> ${value}`, type: "cmd" });
    this.history.set([...lines]);

    event.target.value = "";

    this.processStep(value);
  }

  handleKeyDown(event: KeyboardEvent) {
    if (event.ctrlKey && event.key === "c") {
      this.resetTerminal();
      event.preventDefault();
    }
  }

  resetTerminal() {
    this.history.set([]);
    this.step.set("init");
    this.isInputDisabled.set(false);
    this.formData = { name: "", email: "", subject: "", message: "" };
    if (this.terminalInput) {
      this.terminalInput.nativeElement.value = "";
    }
    setTimeout(() => this.focusInput(), 50);
  }

  private processStep(value: string) {
    const lines = this.history();
    const st = this.step();

    if (st === "init") {
      const lower = value.toLowerCase();
      if (lower === "y" || lower === "yes") {
        this.step.set("name");
        lines.push({ text: "Please enter your name:", type: "prompt" });
      } else if (lower === "n" || lower === "no") {
        lines.push({ text: "Connection aborted by user.", type: "error" });
        lines.push({
          text: 'If you change your mind, type "y" to reconnect:',
          type: "sys",
        });
      } else {
        lines.push({
          text: "Unrecognized input. Are you sure you want to connect? (y/n):",
          type: "prompt",
        });
      }
    } else if (st === "name") {
      if (value.length < 2) {
        lines.push({
          text: "[ERROR] Name must be at least 2 characters.",
          type: "error",
        });
        lines.push({ text: "Please enter your name:", type: "prompt" });
      } else {
        this.formData.name = value;
        this.step.set("email");
        lines.push({
          text: "Please enter your email address:",
          type: "prompt",
        });
      }
    } else if (st === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        lines.push({ text: "[ERROR] Invalid email format.", type: "error" });
        lines.push({
          text: "Please enter a valid email address:",
          type: "prompt",
        });
      } else {
        this.formData.email = value;
        this.step.set("subject");
        lines.push({
          text: "Please enter the subject (max 100 characters):",
          type: "prompt",
        });
      }
    } else if (st === "subject") {
      if (value.length < 2 || value.length > 100) {
        lines.push({
          text: "[ERROR] Subject must be between 2 and 100 characters.",
          type: "error",
        });
        lines.push({
          text: "Please enter the subject (max 100 characters):",
          type: "prompt",
        });
      } else {
        this.formData.subject = value;
        this.step.set("message");
        lines.push({
          text: "Please enter your message (max 2000 characters):",
          type: "prompt",
        });
      }
    } else if (st === "message") {
      if (value.length < 10 || value.length > 2000) {
        lines.push({
          text: "[ERROR] Message must be between 10 and 2000 characters.",
          type: "error",
        });
        lines.push({
          text: "Please enter your message (max 2000 characters):",
          type: "prompt",
        });
      } else {
        this.formData.message = value;
        this.sendMessage();
      }
    }

    this.history.set([...lines]);
  }

  private async sendMessage() {
    this.isInputDisabled.set(true);
    const lines = this.history();
    lines.push({
      text: "Encrypting payload and transmitting data...",
      type: "sys",
    });
    this.history.set([...lines]);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.formData),
      });

      const linesUpdated = this.history();
      if (response.ok) {
        const result = await response.json();
        linesUpdated.push({
          text: `[LOGGER] ${result.message.toUpperCase()}`,
          type: "success",
        });
        linesUpdated.push({
          text: "Connection closed successfully. I will reach out to you via email.",
          type: "sys",
        });
        this.step.set("done");
      } else {
        const errorData = await response.json();
        linesUpdated.push({
          text: `[ERROR] Failed to send: ${errorData.error || "Unknown error"}`,
          type: "error",
        });
        this.isInputDisabled.set(false);
      }
      this.history.set([...linesUpdated]);
    } catch (e) {
      const linesUpdated = this.history();
      linesUpdated.push({
        text: "[ERROR] Network exception. Terminal offline.",
        type: "error",
      });
      this.history.set([...linesUpdated]);
      this.isInputDisabled.set(false);
    }
  }
}
