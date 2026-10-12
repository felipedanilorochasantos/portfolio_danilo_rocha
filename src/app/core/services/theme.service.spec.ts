import { ThemeService } from './theme.service';
describe('ThemeService', () => {
  afterEach(() => localStorage.removeItem('portfolio-theme'));
  it('restores and toggles the saved theme', () => {
    localStorage.setItem('portfolio-theme', 'dark');
    const service = new ThemeService();
    expect(service.dark()).toBeTrue();
    expect(document.documentElement.dataset['theme']).toBe('dark');
    service.toggle();
    expect(document.documentElement.dataset['theme']).toBe('light');
    expect(localStorage.getItem('portfolio-theme')).toBe('light');
  });
});
