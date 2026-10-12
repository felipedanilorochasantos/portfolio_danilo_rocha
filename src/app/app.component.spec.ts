import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
describe('Portfolio', () => {
  it('renders the root, sections and resume download', async () => {
    await TestBed.configureTestingModule({ imports: [AppComponent] }).compileComponents();
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const page: HTMLElement = fixture.nativeElement;
    expect(page.querySelector('h1')?.textContent).toContain('Angular');
    expect(page.querySelector('#sobre')?.textContent).toContain('pai de três filhos');
    expect(page.querySelectorAll('.project').length).toBe(4);
    expect(page.querySelector('a[download]')?.getAttribute('href')).toBe('Profile.pdf');
    expect(page.querySelector('.job-date')).toBeNull();
  });
});
