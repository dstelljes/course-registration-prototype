import { Map, Record } from "immutable";

export interface Institution extends Map<string, any> {
  name: string
}

export const InstitutionRecord = Record({
  name: null
});
