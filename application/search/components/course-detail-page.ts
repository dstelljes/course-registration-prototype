import { Component, Input } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";

import { Class } from '../../data/models/class';
import { Course } from '../../data/models/course';
import { CourseService } from '../../data/services/course-service';

@Component({
  styles: [
    require("./course-detail-page.scss")
  ],
  template: `
    <div class="course-detail">
      <div class="grid-container">
        <h1 class="course-name">{{ course.name }}</h1>

        <div class="course-vitae">
          {{ course.subject.abbreviation }} {{ course.number}} • {{ course.units }} units
          <span *ngIf="course.attributes.length > 0">
            • {{ course.attributes[0].name }}
          </span>
        </div>

        <p class="course-description">
          {{ course.description }}
        </p>

        <table class="class-table" *ngIf="classes.length > 0">
          <thead>
            <tr>
              <th></th>
              <th>Meeting times</th>
              <th>Instructor</th>
              <th>Room</th>
              <th>Available seats</th>
            </tr>
          </thead>

          <tbody>
            <tr *ngFor="let class of classes">
              <td>{{ class.section }}</td>
              <td>
                <div *ngFor="let time of class.times">
                  <span [ngSwitch]="time.day">
                    <span *ngSwitchCase="0">Su</span>
                    <span *ngSwitchCase="1">Mo</span>
                    <span *ngSwitchCase="2">Tu</span>
                    <span *ngSwitchCase="3">We</span>
                    <span *ngSwitchCase="4">Th</span>
                    <span *ngSwitchCase="5">Fr</span>
                    <span *ngSwitchCase="6">Sa</span>
                  </span>

                  {{ time.start.hour }}:{{ time.start.minute }}-{{ time.end.hour }}:{{ time.end.minute }}
                </div>
              </td>
              <td>{{ class.instructor.name }}</td>
              <td>{{ class.room.building.name }} {{ class.room.number }}</td>
              <td>{{ class.enrollmentTotal }}/{{ class.enrollmentCapacity }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  `
})
export class CourseDetailPageComponent {
  classes: Class[];
  course: Course;

  constructor(public route: ActivatedRoute, public data: CourseService) {
    route.params.subscribe((params: Params) => {
      this.course = data.getAllCourses().find((course) =>
        course.subject.abbreviation == params["subject"] && course.number == params["number"] 
      );

      this.classes = data.getClassesForCourse(this.course);
    });
  }
}
