import { School } from "./common";

type ResourceId = string;

type ResourceCategory =
  | "Student Support"
  | "Tech Support"
  | "Academic Help"
  | "Wellness"
  | "Campus Services";
//has to exactly match one of these options to be a valid resourcecat

export interface CampusResource {
  id: ResourceId;
  name: string;
  category: ResourceCategory;
  school?: School;
  location?: string;
  email?: string;
  phone?: string;
  hours?: string;
  website?: string;
  tags: string[];
  note?: string;
}
