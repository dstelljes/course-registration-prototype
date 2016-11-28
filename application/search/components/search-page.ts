import { Component } from "@angular/core";

import { Course } from '../../data/models/course';
import { CourseService } from '../../data/services/course-service';

@Component({
  selector: "search-page",
  styles: [
    require("./search-page.scss")
  ],
  template: `
    <section class="search-page">
      <div class="pane filter-pane">

      </div>

      <div class="pane result-pane">
        <course-result-list [courses]="courses"></course-result-list>
      </div>

      <div class="pane detail-pane">
      </div>
    </section>
  `
})
export class SearchPageComponent {
  courses: Course[];

  constructor(public data: CourseService) {
    this.courses = data.getAllCourses();
  }
}
