import React from "react";
import { TableLoader } from "../../../components/Loader";
import { TD, Table } from "../../../components/table/Table";
import { formattedDate } from "../../../utils/formattedDate";
import DataNotFound from "../../../components/DataNotFound";

export const EnrolledStudent = ({ enrollment, loading }) => {
  const thead = [{ head: "Profile" }, { head: "Email" }, { head: "Joined On" }];
  return (
    <>
      {loading && <TableLoader />}
      {enrollment?.length === 0 && (
        <DataNotFound text="No students enrolled yet." />
      )}
      {enrollment?.map(({ id, studentprofile, student, created_at }, index) => {
        return (
          <>
            <Table title="Students" data={thead} noCrud={true}>
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
                        alt="profile"
                      />
                    </div>
                    <div className="text-xs leading-none my-auto">
                      <p>{studentprofile?.first_name ?? "--"}</p>
                      <p>{studentprofile?.last_name ?? "--"}</p>
                    </div>
                  </div>
                </TD>
                <TD text={student?.email} />
                <TD text={formattedDate(created_at)} />
                {/* <Action /> */}
              </tr>
            </Table>
          </>
        );
      })}
    </>
  );
};
