import { Component } from '@angular/core';
import { jobs, earlier } from '../../data/portfolio.data';

@Component({
  selector: 'app-experience',
  standalone: true,
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {
  readonly jobs = jobs; readonly earlier = earlier;
}
