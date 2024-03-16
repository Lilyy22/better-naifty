import React, { useContext } from "react";
import { CourseCardLoader } from "./loader/CardLoader";
import { CourseCard } from "./Card";
import DataNotFound from "../../../../components/DataNotFound";
import { isStudentEnrolled } from "../../../../utils/isStudentEnrolled";
import { AuthContext } from "../../../../context/AuthContext";

const CourseList = ({ data, loading }) => {
  const { userId } = useContext(AuthContext);
  const array = [1, 2, 3, 4, 5, 6];

  return (
    <div className="flex flex-wrap gap-4">
      {loading && array.map((item) => <CourseCardLoader key={item} />)}
      {data?.course?.length === 0 && <DataNotFound text="Course Not Found." />}
      {data?.course?.map(
        ({
          id,
          name,
          description,
          thumbnail,
          instructor,
          updated_at,
          category,
          enrollments,
        }) => {
          return (
            <CourseCard
              thumbnail={thumbnail}
              updated_at={updated_at}
              instructorName={`${instructor?.studentprofile?.first_name} ${instructor?.studentprofile?.last_name}`}
              instructorPhoto={
                instructor?.studentprofile?.profile_picture ??
                "https://static.vecteezy.com/system/resources/previews/019/896/008/original/male-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png"
              }
              title={name}
              description={description}
              category={category}
              id={id}
              enrolled={isStudentEnrolled(enrollments, userId)}
              key={id}
            />
          );
        }
      )}
    </div>
  );
};

export default CourseList;
