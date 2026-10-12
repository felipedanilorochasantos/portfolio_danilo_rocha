import { Component } from '@angular/core';
import { skills, certificates } from '../../data/portfolio.data';

@Component({
  selector: 'app-skills',
  standalone: true,
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  readonly skills = skills; readonly certificates = certificates;
}
