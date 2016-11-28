import { Component, Input } from "@angular/core";

import { Attribute } from '../../data/models/attribute';
import { Campus } from '../../data/models/campus';
import { CourseService } from '../../data/services/course-service';
import { SearchCriteria } from '../models/search-criteria';
import { Subject } from '../../data/models/subject';
import { Term } from '../../data/models/term';

@Component({
  selector: "course-result-filter",
  styles: [
    require("./course-result-filter.scss")
  ],
  template: `
    <div class="course-result-filter">
      <div class="grid-container">
        <div class="form-group">
          <label class="field-label">Campus</label>
          <select class="select-field" [(ngModel)]="filter.campus">
            <option></option>
            <option *ngFor="let campus of campuses" [value]="campus">
              {{ campus.name }}
            </option>
          </select>
        </div>

        <div class="form-group">
          <label class="field-label">Term</label>
          <select class="select-field" [(ngModel)]="filter.term">
            <option></option>
            <option *ngFor="let term of terms" [value]="term">
              <span [ngSwitch]="term.season">
                <span *ngSwitchCase="0">Fall</span>
                <span *ngSwitchCase="1">Spring</span>
                <span *ngSwitchCase="2">Summer</span>
              </span>

              {{ term.year }}
            </option>
          </select>
        </div>

        <div class="form-group">
          <label class="field-label">Course Attribute</label>
          <select class="select-field" [(ngModel)]="filter.attribute">
            <option></option>
            <option *ngFor="let attribute of attributes" [value]="attribute">
              {{ attribute.name }}
            </option>
          </select>
        </div>

        <div class="form-group">
          <label class="field-label">Subject</label>
          <select class="select-field" [(ngModel)]="filter.subject">
            <option></option>
            <option *ngFor="let subject of subjects" [value]="subject">
              {{ subject.name }}
            </option>
          </select>
        </div>

        <div class="form-group">
          <label class="field-label">Name</label>
          <input class="text-field" type="text" [(ngModel)]="filter.name" />
        </div>
      </div>
    </div>
  `
})
export class CourseResultFilterComponent {
  @Input() filter: SearchCriteria;

  attributes: Attribute[];
  campuses: Campus[];
  subjects: Subject[];
  terms: Term[];

  constructor(public data: CourseService) {
    this.attributes = data.getAllAttributes();
    this.campuses = data.getAllCampuses();
    this.subjects = data.getAllSubjects();
    this.terms = data.getAllTerms();
  }
}
