import Section from "../components/Section";
import StaffList from "./StaffList";

export default function StaffSection() {
  // TODO: Write the tsx code to render a Section component
  // Inside the Section, render the StaffList component
  return (
    <Section title="Staff List" subtitle="List of all staff.">
      <StaffList />
    </Section>
  );
}
