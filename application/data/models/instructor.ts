import { Map, Record } from "immutable";

export interface Instructor {
  name: string,
  x500: string
}

export const InstructorRecord = Record({
  name: null,
  x500: null
});
