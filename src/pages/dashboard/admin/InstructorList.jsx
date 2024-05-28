import React, { useState } from "react";
import { GETINSTRUCTORUSERS, GETINSTRUCTORUSERSCOUNT } from "./data/query";
import UserTable from "./component/UserTable";
import { useQuery } from "@apollo/client";

const InstructorList = () => {
  const [page, setPage] = useState(0);
  const [itemPerPage, setItemPerPage] = useState(5);
  const { data, loading } = useQuery(GETINSTRUCTORUSERS, {
    fetchPolicy: "network-only",
    variables: {
      limit: itemPerPage,
      offset: page * itemPerPage,
    },
  });

  const { data: totalCount } = useQuery(GETINSTRUCTORUSERSCOUNT, {
    fetchPolicy: "network-only",
  });

  return (
    <>
      <UserTable
        data={data}
        loading={loading}
        GETUSERS={GETINSTRUCTORUSERS}
        setPage={setPage}
        page={page}
        itemPerPage={itemPerPage}
        totalCount={totalCount}
      />
    </>
  );
};

export default InstructorList;
