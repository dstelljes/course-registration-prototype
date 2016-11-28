import { Map, Record } from "immutable";

import { Building } from './building';

export interface Room extends Map<string, any> {
  building: Building,
  nickname: string,
  number: string
}

export const RoomRecord = Record({
  building: null,
  nickname: null,
  number: null
});
