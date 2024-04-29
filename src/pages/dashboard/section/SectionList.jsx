import { useQuery } from "@apollo/client";
import React from "react";
import { GETCOURSESECTION } from "./data/query";
import { SectionDropDown } from "./component/List";

const SectionList = ({ courseId, enrolled }) => {
  const { data } = useQuery(GETCOURSESECTION, {
    variables: {
      courseId: courseId,
    },
  });
  return data?.course[0]?.sections?.map(({ title, id, episodes }) => {
    return (
      <ul key={id}>
        <SectionDropDown
          key={id}
          courseId={courseId}
          section={title}
          episodes={episodes}
          enrolled={enrolled}
        />
      </ul>
    );
  });
};

export default SectionList;
