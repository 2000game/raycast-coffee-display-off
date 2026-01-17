import { showToast, Toast } from "@raycast/api";
import { startCaffeinateDisplayOff } from "./utils";

interface Arguments {
  hours: string;
  minutes: string;
  seconds: string;
}

export default async function Command(props: { arguments: Arguments }) {
  const { hours, minutes, seconds } = props.arguments;
  const hasValue = hours || minutes || seconds;

  if (!hasValue) {
    // If no time specified, caffeinate indefinitely with display off
    await startCaffeinateDisplayOff(
      { menubar: true, status: true },
      "Caffeinating (display off, system on)"
    );
    return;
  }

  const validInput =
    (!hours || (Number.isInteger(Number(hours)) && Number(hours) >= 0)) &&
    (!minutes || (Number.isInteger(Number(minutes)) && Number(minutes) >= 0)) &&
    (!seconds || (Number.isInteger(Number(seconds)) && Number(seconds) >= 0));

  if (!validInput) {
    await showToast(Toast.Style.Failure, "Please ensure all arguments are whole numbers");
    return;
  }

  const totalSeconds = Number(hours) * 3600 + Number(minutes) * 60 + Number(seconds);
  const formattedTime = `${hours ? `${hours}h` : ""}${minutes ? `${minutes}m` : ""}${seconds ? `${seconds}s` : ""}`;

  await startCaffeinateDisplayOff(
    { menubar: true, status: true },
    `Caffeinating (display off) for ${formattedTime}`,
    `-t ${totalSeconds}`,
  );
}
