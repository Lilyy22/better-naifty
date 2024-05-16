import React from "react";
import Student from "./section/Student";
import Instructor from "./section/Instructor";
import Admin from "./section/Admin";
import { useRole } from "../../../hooks/useRole";

const Dashboard = () => {
  const { isAInstructor, isAStudent, isAdmin } = useRole();

  return (
    <>
      {isAStudent && <Student />}
      {isAInstructor && <Instructor />}
      {isAdmin && <Admin />}
    </>
  );
};

export default Dashboard;
