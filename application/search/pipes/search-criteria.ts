import { Pipe, PipeTransform } from '@angular/core';

import { Course } from "../../data/models/course";
import { SearchCriteria } from "../models/search-criteria";

@Pipe({
  name: 'criteria',
  pure: false
})
export class SearchCriteriaPipe implements PipeTransform {
  transform(value: Course[], criteria: SearchCriteria) {
    let result = value;

    if (criteria.attribute)
      result = result.filter((course) =>
        course.attributes.some((attribute) =>
          // I'm not proud of this.
          String(attribute) == String(criteria.attribute)
        )
      );

    if (criteria.campus)
      result = result.filter((course) => 
        course.campus == criteria.campus
      );

    if (criteria.name.length)
      result = result.filter((course) =>
        course.name.toLowerCase().indexOf(criteria.name.toLowerCase()) > -1 
      );

    if (criteria.subject)
      result = result.filter((course) =>
        course.subject == criteria.subject
      );

    if (criteria.term)
      result = result.filter((course) =>
        course.term == criteria.term
      );

    return result;
  }
}
