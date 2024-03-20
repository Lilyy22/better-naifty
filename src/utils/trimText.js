export const trimText = (text, char) => {
  if (text) {
    return text.substring(0, char) + (text.length > char ? " ... " : "");
  } else {
    return "none";
  }
};
