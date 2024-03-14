export const isStudentEnrolled = (list, userId) => {
  if (Array.isArray(list)) {
    if (list.length === 0) {
      return false;
    } else {
      return list.some(({ student }) => student.id === userId);
    }
  } else {
    return false;
  }
};
