export const isStudentEnrolled = (list, userId, admin) => {
  if (admin) {
    return true;
  } else {
    if (Array.isArray(list)) {
      if (list.length === 0) {
        return false;
      } else {
        return list.some(
          ({ student, status }) => student.id === userId && status === "SUCCESS"
        );
      }
    } else {
      return false;
    }
  }
};
