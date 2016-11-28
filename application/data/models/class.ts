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
  hour: number,
  minute: number
}

export type ClassMeeting = {
  day: ClassMeetingDay,
  end: ClassMeetingTime,
  start: ClassMeetingTime
}

export interface Class extends Map<string, any> {
  course: Course,
  enrollmentCapacity: number,
  enrollmentTotal: number,
  instructor: Instructor,
  number: number,
  room: Room,
  section: number,
  times: ClassMeeting[],
  type: ClassType,
  waitlistCapacity: number,
  waitlistTotal: number
}

export const ClassRecord = Record({
  course: null,
  enrollmentCapacity: null,
  enrollmentTotal: null,
  instructor: null,
  number: null,
  room: null,
  section: null,
  times: [],
  type: null,
  waitlistCapacity: null,
  waitlistTotal: null
});
