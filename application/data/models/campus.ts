import { Map, Record } from "immutable";

import { Institution } from './institution';

export interface Campus extends Map<string, any> {
  institution: Institution,
  name: string
}

export const CampusRecord = Record({
  institution: null,
  name: null
});
