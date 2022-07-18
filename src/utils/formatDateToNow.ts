import { formatDistanceToNow } from "date-fns";

export const formatDateToNow = (date: Date) => {
  return formatDistanceToNow(date, {
    addSuffix: true,
  });
};
