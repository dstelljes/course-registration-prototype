import { Map, Record } from "immutable";

import { Institution } from './institution';

export interface Attribute extends Map<string, any> {
  institution: Institution,
  name: string
}

export const AttributeRecord = Record({
  institution: null,
  name: null
});
