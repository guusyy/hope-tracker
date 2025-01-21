export const formatTimestamp = (timestamp: number): string => {
  const date = new Date(timestamp);
  const hours = date.getHours(); // Use local time
  const minutes = date.getMinutes(); // Use local time
  const seconds = date.getSeconds(); // Use local time

  return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
    2,
    "0"
  )}:${String(seconds).padStart(2, "0")}`;
};
