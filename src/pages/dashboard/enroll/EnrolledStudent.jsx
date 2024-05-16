import React from "react";
import { TableLoader } from "../../../components/Loader";
import { TD, Table } from "../../../components/table/Table";
import { formattedDate } from "../../../utils/formattedDate";
import DataNotFound from "../../../components/DataNotFound";
import { BigToolTip } from "../../../components/ToolTip";

export const EnrolledStudent = ({ enrollment, loading }) => {
  const thead = [{ head: "Profile" }, { head: "Email" }, { head: "Joined On" }];
  return (
    <>
      {loading && <TableLoader />}
      <Table title="Enrolled Students" data={thead} noCrud={true}>
        {enrollment?.map(({ id, student, created_at }, index) => {
          return (
            <tr key={id} className="relative">
              <TD>{index + 1}</TD>
              <TD>
                <div className="flex gap-2 group">
                  <BigToolTip
                    text={student?.studentprofile?.bio ?? "--"}
                    img={
                      student?.studentprofile?.profile_picture
                        ? `https://api.naifty.academy/media/${student?.studentprofile?.profile_picture}`
                        : "https://static.vecteezy.com/system/resources/previews/019/896/008/original/male-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png"
                    }
                  />
                  <div className="rounded-full w-8 h-8 border-b inline-block my-auto">
                    <img
                      className="w-full h-full object-cover rounded-full"
                      src={
                        student?.studentprofile?.profile_picture
                          ? `https://api.naifty.academy/media/${student?.studentprofile?.profile_picture}`
                          : "https://static.vecteezy.com/system/resources/previews/019/896/008/original/male-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png"
                      }
                      alt="profile"
                    />
                  </div>
                  <div className="text-xs leading-none my-auto">
                    <p>{student?.studentprofile?.first_name ?? "--"}</p>
                    <p>{student?.studentprofile?.last_name ?? "--"}</p>
                  </div>
                </div>
              </TD>
              <TD text={student?.email} />
              <TD text={formattedDate(created_at)} />
              {/* <Action /> */}
            </tr>
          );
        })}
      </Table>
    </>
  );
};
