import { TestBed } from '@angular/core/testing';
import { ExperienceComponent } from './experience.component';

describe('ExperienceComponent', () => {
  it('renders its content', async () => {
    await TestBed.configureTestingModule({ imports: [ExperienceComponent] }).compileComponents();
    const fixture = TestBed.createComponent(ExperienceComponent);
    fixture.detectChanges();
    expect(fixture.nativeElement.textContent.trim().length).toBeGreaterThan(0);
  });
});
