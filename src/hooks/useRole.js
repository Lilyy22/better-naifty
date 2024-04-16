import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";

export const useRole = () => {
  const { isInstructor, isSuperUser } = useContext(AuthContext);

  const isStudent =
    (isInstructor === "false" || isInstructor === false) &&
    (isSuperUser === "false" || isSuperUser === false || isSuperUser === null);

  const [userRole, setUserRole] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const [isAStudent, setIsStudent] = useState(false);
  const [isAInstructor, setIsInstructor] = useState(false);

  useEffect(() => {
    if (isInstructor === "true" || isInstructor === true) {
      setUserRole("Instructor");
      setIsInstructor(true);
    } else if (isStudent) {
      setUserRole("Student");
      setIsStudent(true);
    } else if (isSuperUser === "true" || isSuperUser === true) {
      setUserRole("Admin");
      setIsAdmin(true);
    }
  }, [isInstructor, isSuperUser]);

  return { userRole, isAdmin, isAInstructor, isAStudent };
};
