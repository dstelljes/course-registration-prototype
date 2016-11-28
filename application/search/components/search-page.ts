import { Component } from "@angular/core";

import { Course } from "../../data/models/course";
import { CourseService } from "../../data/services/course-service";
import {SearchCriteria } from "../models/search-criteria";

@Component({
  styles: [
    require("./search-page.scss")
  ],
  template: `
    <section class="search-page">
      <div class="pane filter-pane">
        <course-result-filter [filter]="filter"></course-result-filter>
      </div>

      <div class="pane result-pane">
        <course-result-list [courses]="courses | criteria:filter" [detail]="detail"></course-result-list>
      </div>

      <div class="pane detail-pane">
        <router-outlet></router-outlet>
      </div>
    </section>
  `
})
export class SearchPageComponent {
  courses: Course[];
  filter: SearchCriteria;

  constructor(public data: CourseService) {
    this.courses = data.getAllCourses();

    this.filter = {
      attribute: null,
      campus: null,
      name: "",
      subject: null,
      term: null
    };
  }
}
