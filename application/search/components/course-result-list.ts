import { Component, Input } from "@angular/core";

import { Course } from '../../data/models/course';
import { CourseService } from '../../data/services/course-service';

@Component({
  selector: "course-result-list",
  styles: [
    require("./course-result-list.scss")
  ],
  template: `
    <a class="course-result" *ngFor="let course of courses" routerLink="/search/{{ course.subject.abbreviation }}/{{ course.number }}">
      <h3 class="course-name">{{ course.name }}</h3>

      <div class="course-vitae">
        {{ course.subject.abbreviation }} {{ course.number}} • {{ course.units }} units
      </div>
    </a>
  `
})
export class CourseResultListComponent {
  @Input() courses: Course[];
  @Input() detail: Course
}
