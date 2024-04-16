import React, { useContext } from "react";
import Breadcrumb from "../../../components/Breadcrumb";
import { CreateReply } from "../forumReply/CreateReply";
import { List } from "../forumReply/List";
import { useQuery } from "@apollo/client";
import { GETDISCUSSION } from "./data/query";
import { useParams } from "react-router-dom";
import { formattedDate } from "../../../utils/formattedDate";
import { DescriptionLoader } from "./component/Loader";
import { AuthContext } from "../../../context/AuthContext";
import { useRole } from "../../../hooks/useRole";

const ForumDescription = () => {
  const { forum_id, course_id } = useParams();
  const { isAInstructor } = useRole();
  const { data, loading } = useQuery(GETDISCUSSION, {
    variables: {
      Id: forum_id,
    },
  });

  const path = isAInstructor
    ? `/dashboard/course-list/courses-description/${course_id}`
    : `/dashboard/enrolled-courses/course/${course_id}`;

  const breadcrumbs = [
    {
      name: isAInstructor ? "Course" : "Enrolled",
      path: path,
    },
    {
      name: "Forum",
      path: "",
    },
    {
      name: "Detail",
      path: "",
    },
  ];

  return (
    <div>
      <Breadcrumb breadcrumbs={breadcrumbs} />
      {loading && <DescriptionLoader />}
      {data && (
        <div className="p-4 bg-white border rounded-lg">
          <h1 className="font-bold text-xl">
            {data?.discussion_topic[0]?.title}
          </h1>
          <span className="text-gray-500 text-xs font-medium">
            {data?.discussion_topic[0]?.user?.studentprofile?.first_name}{" "}
            {data?.discussion_topic[0]?.user?.studentprofile?.last_name}
            <span className="text-gray-500 text-xs font-normal">
              {" "}
              asked this question
            </span>
          </span>
          <div className="my-4">
            <div className="flex gap-2">
              <div className="w-7 h-7 text-white rounded-full -left-4 ring-2 ring-white border">
                <img
                  src={`https://api.naifty.academy/media/${data?.discussion_topic[0]?.user?.studentprofile?.profile_picture}`}
                  alt=""
                  className="max-w-full h-full rounded-full object-cover"
                />
              </div>
              <h3 className="flex-1 font-medium">
                {data?.discussion_topic[0]?.user?.studentprofile?.first_name}{" "}
                {data?.discussion_topic[0]?.user?.studentprofile?.last_name}{" "}
                <span className="text-gray-500 text-xs font-normal">
                  on {formattedDate(data?.discussion_topic[0]?.updated_at)}
                </span>
              </h3>
            </div>
            <div className="my-4 text-sm">
              {data?.discussion_topic[0]?.description}
            </div>
          </div>
        </div>
      )}
      <CreateReply descriptionLoading={loading} />
      <List forumId={forum_id} />
    </div>
  );
};

export default ForumDescription;
