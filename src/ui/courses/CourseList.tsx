import { courses } from "@/src/data/courses";
import { StyleSheet, View } from "react-native";
import CourseCard from "./CourseCard";

export default function CourseList() {
  // Optional TODO: Sort courses by code before rendering by copying the courses array and sorting the copy
  /*const sorted = [...courses].sort((a, b) => {
    const byCode = a.courseCode.localeCompare(b.courseCode);
    if(byCode !== 0)
    return byCode;
  return a.courseTitle.localeCompare(b.courseTitle);
  });*/

  // TODO: Write the tsx code to render a list of CourseCard components
  // The root component should be a View for the list, and inside of the view we should map over the courses array
  // For each course, render a CourseCard component, passing the course as a prop
  // Remember to set a key prop on each CourseCard, using the course id (this allows React to track each component efficiently)
  return (
    <View style={styles.list}>
      {courses.map((course) => (
        <CourseCard course={course} key={course.id} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  list: {
    gap: 10,
  },
});
