import { showToast, Toast } from "@raycast/api";
import { startCaffeinate } from "./utils";

interface Arguments {
  time: string;
}

export default async function Command(props: { arguments: Arguments }) {
  const { time } = props.arguments;

  // Parse the time input
  const timeRegex = /^([0-1]?[0-9]|2[0-3]):([0-5][0-9])$/;
  const match = time.match(timeRegex);

  if (!match) {
    await showToast(Toast.Style.Failure, "Invalid time format. Please use HH:MM (24-hour format)");
    return;
  }

  const [hours, minutes] = match.slice(1).map(Number);
  const now = new Date();
  const targetTime = new Date();
  targetTime.setHours(hours, minutes, 0, 0);

  // If the target time is earlier today, assume it's for tomorrow
  if (targetTime <= now) {
    targetTime.setDate(targetTime.getDate() + 1);
  }

  const secondsUntil = Math.floor((targetTime.getTime() - now.getTime()) / 1000);
  const formattedTime = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`;

  await startCaffeinate(
    { menubar: true, status: true },
    `Caffeinating your Mac until ${formattedTime}`,
    `-t ${secondsUntil}`,
  );
}
