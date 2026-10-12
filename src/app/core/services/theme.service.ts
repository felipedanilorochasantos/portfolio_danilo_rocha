import { Injectable, signal } from '@angular/core';
@Injectable({ providedIn: 'root' })
export class ThemeService {
  readonly dark = signal(false);
  constructor() {
    let saved: string | null = null;
    try { saved = localStorage.getItem('portfolio-theme'); } catch {}
    this.dark.set(saved ? saved === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches);
    this.apply();
  }
  toggle(): void {
    this.dark.update(value => !value);
    this.apply();
    try { localStorage.setItem('portfolio-theme', this.dark() ? 'dark' : 'light'); } catch {}
  }
  private apply(): void {
    document.documentElement.dataset['theme'] = this.dark() ? 'dark' : 'light';
  }
}
