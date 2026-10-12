import { TestBed } from '@angular/core/testing';
import { SkillsComponent } from './skills.component';

describe('SkillsComponent', () => {
  it('renders its content', async () => {
    await TestBed.configureTestingModule({ imports: [SkillsComponent] }).compileComponents();
    const fixture = TestBed.createComponent(SkillsComponent);
    fixture.detectChanges();
    expect(fixture.nativeElement.textContent.trim().length).toBeGreaterThan(0);
  });
});
