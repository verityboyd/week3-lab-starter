import { School } from "./common";

// TODO: Create a type for resource ids, which should be strings
type ResourceId = string;
// TODO: Create a type for the resource category, which can be either "Student Support" or "Staff Resources", "Tech Support",
// "Academic Help", "Wellness" , or "Campus Services"
type ResourceCategory =
  | "Student Support"
  | "Staff Resources"
  | "Tech Support"
  | "Academic Help"
  | "Wellness"
  | "Campus Services";

// TODO: Create an interface for campus resources
// The interface should include the following properties:
// an id (hint: use the ResourceId type created above)
// a name
// a category (hint: use the ResourceCategory type created above)
// an option school (use school) (some resources might be school - specific)
// an optional location
// an optional email
// an optional phone
// an optional hour (string is fine)
// an optional website (string is fine)
// an array of tags
// an optional note

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
