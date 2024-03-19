import React, { useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";
import Student from "./section/Student";
import Instructor from "./section/Instructor";
import Admin from "./section/Admin";

const Dashboard = () => {
  const { isInstructor, isSuperUser } = useContext(AuthContext);

  const instructor = isInstructor === "true" || isInstructor === true;
  const admin = isSuperUser === "true" || isSuperUser === true;
  const isStudent =
    (isInstructor === "false" || isInstructor === false) &&
    (isSuperUser === "false" || isSuperUser === false || isSuperUser === null);

  return (
    <>
      {isStudent && <Student />}
      {instructor && <Instructor />}
      {admin && <Admin />}
    </>
  );
};

export default Dashboard;
