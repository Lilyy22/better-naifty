import React from "react";
import { Action, TD, Table } from "../../../components/table/Table";
import { TableLoader } from "../../../components/Loader";
import { useQuery } from "@apollo/client";
import { GETUSERS } from "./data/query";

const UsersList = () => {
  const { data, loading } = useQuery(GETUSERS);
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
        <>
          <Table title="Users" data={thead}>
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
                      <TD text={is_instructor ? "Instructor" : "Student"} />
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
          <nav className="float-right" aria-label="Page navigation">
            <ul className="inline-flex -space-x-px text-sm">
              <li>
                <a
                  href="#"
                  className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700"
                >
                  Previous
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
                >
                  1
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
                >
                  2
                </a>
              </li>
              <li>
                <a
                  href="#"
                  aria-current="page"
                  className="flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700"
                >
                  3
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
                >
                  4
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
                >
                  5
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700"
                >
                  Next
                </a>
              </li>
            </ul>
          </nav>
        </>
      )}
    </>
  );
};

export default UsersList;
