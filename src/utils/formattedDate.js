export const formattedDate = (updated_at) => {
  const date = new Date(updated_at);

  if (isNaN(date)) {
    // Return a default value or handle the invalid date case
    return "Invalid Date";
  }

  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};
