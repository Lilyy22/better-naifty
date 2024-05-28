import React, { useState } from "react";
import { GETSTUDENTUSERS, GETSTUDENTUSERSCOUNT } from "./data/query";
import UserTable from "./component/UserTable";
import { useQuery } from "@apollo/client";

const StudentList = () => {
  const [page, setPage] = useState(0);
  const [itemPerPage, setItemPerPage] = useState(5);
  const { data, loading } = useQuery(GETSTUDENTUSERS, {
    fetchPolicy: "network-only",
    variables: {
      limit: itemPerPage,
      offset: page * itemPerPage,
    },
  });

  const { data: totalCount } = useQuery(GETSTUDENTUSERSCOUNT, {
    fetchPolicy: "network-only",
  });

  return (
    <>
      <UserTable
        data={data}
        loading={loading}
        GETUSERS={GETSTUDENTUSERS}
        setPage={setPage}
        page={page}
        itemPerPage={itemPerPage}
        totalCount={totalCount?.users_aggregate?.count}
      />
    </>
  );
};

export default StudentList;
