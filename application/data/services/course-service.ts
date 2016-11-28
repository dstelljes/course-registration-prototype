import { Injectable } from "@angular/core";

import { Attribute, AttributeRecord } from '../models/attribute';
import { Building, BuildingRecord } from '../models/building';
import { Campus, CampusRecord } from '../models/campus';
import { Career, CareerRecord } from '../models/career';
import { Class, ClassRecord } from '../models/class';
import { Course, CourseRecord } from '../models/course';
import { Institution, InstitutionRecord } from '../models/institution';
import { Instructor, InstructorRecord } from '../models/instructor';
import { Room, RoomRecord } from '../models/room';
import { Subject, SubjectRecord } from '../models/subject';
import { Term, TermRecord } from '../models/term';

const ATTRIBUTE_FIXTURES: any[] = require("../fixtures/attributes.json");
const BUILDING_FIXTURES: any[] = require("../fixtures/buildings.json");
const CAMPUS_FIXTURES: any[] = require("../fixtures/campuses.json");
const CAREER_FIXTURES: any[] = require("../fixtures/careers.json");
const CLASS_FIXTURES: any[] = require("../fixtures/classes.json");
const COURSE_FIXTURES: any[] = require("../fixtures/courses.json");
const INSTITUTION_FIXTURES: any[] = require("../fixtures/institutions.json");
const INSTRUCTOR_FIXTURES: any[] = require("../fixtures/instructors.json");
const ROOM_FIXTURES: any[] = require("../fixtures/rooms.json");
const SUBJECT_FIXTURES: any[] = require("../fixtures/subjects.json");
const TERM_FIXTURES: any[] = require("../fixtures/terms.json");

const attributes = new Map<string, Attribute>();
const buildings = new Map<string, Building>();
const campuses = new Map<string, Campus>();
const careers = new Map<string, Career>();
const classes = new Map<string, Class>();
const courses = new Map<string, Course>();
const institutions = new Map<string, Institution>();
const instructors = new Map<string, Instructor>();
const rooms = new Map<string, Room>();
const subjects = new Map<string, Subject>();
const terms = new Map<string, Term>();

for (let fixture of INSTITUTION_FIXTURES) {
  institutions.set(fixture.id, new InstitutionRecord({
    name: fixture.name
  }) as Institution);
}

for (let fixture of ATTRIBUTE_FIXTURES) {
  attributes.set(fixture.id, new AttributeRecord({
    institution: institutions.get(fixture.institution),
    name: fixture.name
  }) as Attribute);
}

for (let fixture of CAMPUS_FIXTURES) {
  campuses.set(fixture.id, new CampusRecord({
    institution: institutions.get(fixture.institution),
    name: fixture.name
  }) as Campus);
}

for (let fixture of BUILDING_FIXTURES) {
  buildings.set(fixture.id, new BuildingRecord({
    campus: campuses.get(fixture.campus),
    name: fixture.name
  }) as Building);
}

for (let fixture of CAREER_FIXTURES) {
  careers.set(fixture.id, new CareerRecord({
    institution: institutions.get(fixture.institution),
    name: fixture.name
  }) as Career);
}

for (let fixture of SUBJECT_FIXTURES) {
  subjects.set(fixture.id, new SubjectRecord({
    abbreviation: fixture.abbreviation,
    name: fixture.name
  }) as Subject);
}

for (let fixture of TERM_FIXTURES) {
  terms.set(fixture.id, new TermRecord({
    season: fixture.season,
    year: fixture.year
  }) as Term);
}

for (let fixture of COURSE_FIXTURES) {
  courses.set(fixture.id, new CourseRecord({
    attributes: fixture.attributes.map((attribute) => attributes.get(attribute)),
    campus: campuses.get(fixture.campus),
    career: careers.get(fixture.career),
    description: fixture.description,
    institution: institutions.get(fixture.institution),
    name: fixture.name,
    number: fixture.number,
    requirements: fixture.requirements,
    subject: subjects.get(fixture.subject),
    term: terms.get(fixture.term),
    units: fixture.units
  }) as Course);
}

for (let fixture of INSTRUCTOR_FIXTURES) {
  instructors.set(fixture.id, new InstructorRecord({
    name: fixture.name,
    x500: fixture.x500
  }) as Instructor);
}

for (let fixture of ROOM_FIXTURES) {
  rooms.set(fixture.id, new RoomRecord({
    building: buildings.get(fixture.building),
    nickname: fixture.nickname,
    number: fixture.number
  }) as Room);
}

for (let fixture of CLASS_FIXTURES) {
  classes.set(fixture.id, new ClassRecord({
    course: courses.get(fixture.course),
    enrollmentCapacity: fixture.enrollmentCapacity,
    enrollmentTotal: fixture.enrollmentTotal,
    instructor: instructors.get(fixture.instructor),
    number: fixture.number,
    room: rooms.get(fixture.room),
    section: fixture.section,
    times: fixture.times,
    type: fixture.type,
    waitlistCapacity: fixture.waitlistCapacity,
    waitlistTotal: fixture.waitlistTotal
  }) as Class);
}

@Injectable()
export class CourseService {
  getAllCourses(): Course[] {
    return Array.from(courses.values());
  }

  getClassesForCourse(course: Course): Class[] {
    return Array.from(classes.values())
      .filter((element) => element.course == course);
  }
}
