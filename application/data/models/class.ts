import { Map, Record } from "immutable";

import { Course } from './course';
import { Instructor } from './instructor';
import { Room } from './room';

export enum ClassType {
  Discussion,
  ExtraCredit,
  FieldWork,
  IndependentStudy,
  Laboratory,
  Lecture,
  Rotation
}

export enum ClassMeetingDay {
  Sunday,
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday
}

export type ClassMeetingTime = {
  day: ClassMeetingDay,
  end: number,
  start: number
}

export interface Class extends Map<string, any> {
  enrollmentCapacity: number,
  enrollmentTotal: number,
  course: Course,
  instructor: Instructor,
  name: string,
  number: number,
  room: Room,
  section: number,
  times: ClassMeetingTime[],
  type: ClassType,
  waitlistCapacity: number,
  waitlistTotal: number
}
