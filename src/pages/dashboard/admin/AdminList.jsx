import React, { useState } from "react";
import { GETADMINUSERS, GETADMINUSERSCOUNT } from "./data/query";
import UserTable from "./component/UserTable";
import { useQuery } from "@apollo/client";

const AdminList = () => {
  const [page, setPage] = useState(0);
  const [itemPerPage, setItemPerPage] = useState(5);
  const { data, loading } = useQuery(GETADMINUSERS, {
    fetchPolicy: "network-only",
    variables: {
      limit: itemPerPage,
      offset: page * itemPerPage,
    },
  });

  const { data: totalCount } = useQuery(GETADMINUSERSCOUNT, {
    fetchPolicy: "network-only",
  });

  return (
    <>
      <UserTable
        data={data}
        loading={loading}
        GETUSERS={GETADMINUSERS}
        setPage={setPage}
        page={page}
        itemPerPage={itemPerPage}
        totalCount={totalCount?.users_aggregate?.count}
      />
    </>
  );
};

export default AdminList;
