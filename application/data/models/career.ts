import { Map, Record } from "immutable";

import { Institution } from './institution';

export interface Career extends Map<string, any> {
  institution: Institution,
  name: string
}

export const CareerRecord = Record({
  institution: null,
  name: null
});
