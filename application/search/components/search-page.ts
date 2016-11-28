import { Component } from "@angular/core";

import { CourseService } from '../../data/services/course-service';

@Component({
  selector: "search-page",
  template: `
    <section class="search-page">
    </section>
  `
})
export class SearchPageComponent {
  constructor(public data: CourseService) {
    
  }
}
