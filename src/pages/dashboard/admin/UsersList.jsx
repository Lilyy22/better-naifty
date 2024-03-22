import React from "react";
import { TD, Table } from "../../../components/table/Table";
import { TableLoader } from "../../../components/Loader";
import { useQuery } from "@apollo/client";
import { GETUSERS } from "./data/query";

const UsersList = ({ instructor }) => {
  const { data, loading } = useQuery(GETUSERS, {
    variables: {
      role: instructor ? "True" : "False",
    },
  });
  const thead = [
    { head: "Name" },
    { head: "Email" },
    { head: "Role" },
    { head: "Status" },
    // { head: "Action" },
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
                    <TD>
                      <div className="flex gap-2">
                        <div className="rounded-full w-8 h-8 border-b inline-block my-auto">
                          <img
                            className="w-full h-full object-cover rounded-full"
                            src={
                              studentprofile?.profile_picture
                                ? `https://naifty.abelayalew.dev/media/${studentprofile?.profile_picture}`
                                : "https://static.vecteezy.com/system/resources/previews/019/896/008/original/male-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png"
                            }
                            alt="course thumbnail"
                          />
                        </div>
                        <div className="text-xs leading-none my-auto">
                          <p>{studentprofile?.first_name ?? "--"}</p>
                          <p>{studentprofile?.last_name ?? "--"}</p>
                        </div>
                      </div>
                    </TD>
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
                    {/* <Action /> */}
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
