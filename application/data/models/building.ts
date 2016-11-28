import { Map, Record } from "immutable";

import { Campus } from './campus';

export interface Building extends Map<string, any> {
  campus: Campus,
  name: string
}

export const BuildingRecord = Record({
  campus: null,
  name: null
});
