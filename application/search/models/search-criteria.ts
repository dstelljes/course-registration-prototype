import { Attribute } from "../../data/models/attribute";
import { Campus } from "../../data/models/campus";
import { Subject } from "../../data/models/subject";
import { Term } from "../../data/models/term";

export interface SearchCriteria {
  attribute: Attribute,
  campus: Campus,
  name: string,
  subject: Subject,
  term: Term
}
