import { Map, Record } from "immutable";

export enum TermSeason {
  Fall,
  Spring,
  Summer
}

export interface Term extends Map<string, any> {
  season: TermSeason,
  year: number
}

export const TermRecord = Record({
  season: null,
  year: null
});
