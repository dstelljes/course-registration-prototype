import { Map, Record } from "immutable";

import { Attribute } from './attribute';
import { Campus } from './campus';
import { Career } from './career';
import { Institution } from './institution';
import { Subject } from './subject';
import { Term } from './term';

export interface Course extends Map<string, any> {
  attributes: Attribute[],
  campus: Campus,
  career: Career,
  description: string,
  institution: Institution,
  requirements: string,
  subject: Subject,
  term: Term,
  units: number
}

export const CourseRecord = Record({
  attributes: [],
  campus: null,
  career: null,
  description: null,
  institution: null,
  requirements: null,
  subject: null,
  term: null,
  units: null
});
