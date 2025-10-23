import { format, isToday, isYesterday } from "date-fns";
import { enUS } from "date-fns/locale";

export function formatTransactionDate(dateString: string) {
  const date = new Date(dateString);

  if (isToday(date)) {
    return `Today, ${format(date, "p", { locale: enUS })}`;
  } else if (isYesterday(date)) {
    return `Yesterday, ${format(date, "p", { locale: enUS })}`;
  } else {
    return format(date, "MMM d, yyyy, p", { locale: enUS });
  }
}
