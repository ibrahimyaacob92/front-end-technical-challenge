import { format, formatDistanceToNow } from "date-fns";

enum DurationFormat {
  HMS = "hms", // hours, minutes, seconds
  HM = "hm", // hours, minutes
  H = "h", // hours
}

export function formatDuration(
  start: Date,
  end: Date,
  format = DurationFormat.HMS
): string {
  const duration = end.getTime() - start.getTime();

  const hours = Math.floor(duration / 3600000); // 1 hour = 3600000 milliseconds
  const minutes = Math.floor((duration % 3600000) / 60000); // 1 minute = 60000 milliseconds
  const seconds = Math.floor((duration % 60000) / 1000); // 1 second = 1000 milliseconds

  let formattedDuration = "";

  switch (format) {
    case DurationFormat.HMS:
      if (hours > 0) formattedDuration += `${hours}h `;
      if (hours > 0 || minutes > 0) formattedDuration += `${minutes}m `;
      formattedDuration += `${seconds}s`;
      break;
    case DurationFormat.HM:
      if (hours > 0) formattedDuration += `${hours}h `;
      formattedDuration += `${minutes}m`;
      break;
    case DurationFormat.H:
      formattedDuration += `${hours}h`;
      break;
    default:
      if (hours > 0) formattedDuration += `${hours}h `;
      if (hours > 0 || minutes > 0) formattedDuration += `${minutes}m `;
      formattedDuration += `${seconds}s`;
  }

  return formattedDuration.trim();
}

export function getRelativeDate(date: Date): string {
  const currentDate = new Date();
  const formattedDate = formatDistanceToNow(date, { addSuffix: true });

  if (
    Math.abs(currentDate.getTime() - date.getTime()) >
    5 * 24 * 60 * 60 * 1000
  ) {
    // If the date is more than 5 days ago, format it as "day month"
    return format(date, "d MMM");
  }

  return formattedDate;
}
