import { useEffect, useState } from "react";

const useCourses = () => {
  const [courses, setCourses] = useState();
  useEffect(() => {
    fetch("./courses_data.JSON")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  return courses;
};
export default useCourses;
