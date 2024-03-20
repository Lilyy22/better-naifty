import React from "react";
import { Action, TD, Table } from "../../../components/table/Table";
import { TableLoader } from "../../../components/Loader";
import { useQuery } from "@apollo/client";
import { GETUSERS } from "./data/query";

const UsersList = ({ role }) => {
  const { data, loading } = useQuery(GETUSERS, {
    variables: {
      role: role ? "True" : "False",
    },
  });
  const thead = [
    { head: "Email" },
    { head: "Role" },
    { head: "Status" },
    { head: "Action" },
  ];
  return (
    <>
      {loading ? (
        <TableLoader />
      ) : (
        <Table title="Users" data={thead} noCrud={true}>
          {data?.users?.map(
            (
              { id, email, is_active, is_instructor, studentprofile },
              index
            ) => {
              return (
                <>
                  <tr className="border p-1" key={id}>
                    <TD>{index + 1}</TD>
                    <TD text={email} />
                    <TD>
                      <span className="bg-purple-100/50 text-purple-800 text-xs px-2 py-1 rounded-xl">
                        {is_instructor ? "Instructor" : "Student"}
                      </span>
                    </TD>
                    <TD>
                      {is_active ? (
                        <span className="text-green-500 text-xs">
                          {`○ ${is_active}`}
                        </span>
                      ) : (
                        <span className="text-red-500 text-xs">
                          {`○ ${is_active}`}
                        </span>
                      )}
                    </TD>
                    <Action />
                  </tr>
                </>
              );
            }
          )}
        </Table>
      )}
    </>
  );
};

export default UsersList;
