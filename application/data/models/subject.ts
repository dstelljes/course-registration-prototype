import { Map, Record } from "immutable";

export interface Subject extends Map<string, any> {
  abbreviation: string,
  name: string
}

export const SubjectRecord = Record({
  abbreviation: null,
  name: null
});
