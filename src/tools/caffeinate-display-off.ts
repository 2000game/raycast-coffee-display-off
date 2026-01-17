import { startCaffeinateDisplayOff } from "../utils";

type Input = {
  /**
   * Number of hours (optional). Must be a non-negative integer.
   */
  hours?: number;
  /**
   * Number of minutes (optional). Must be a non-negative integer.
   */
  minutes?: number;
  /**
   * Number of seconds (optional). Must be a non-negative integer.
   */
  seconds?: number;
};

/**
 * Keeps system awake but allows display to sleep for downloads, uploads, or background tasks
 */
export default async function (input: Input) {
  const { hours = 0, minutes = 0, seconds = 0 } = input;

  // If no time specified, caffeinate indefinitely with display off
  if (hours === 0 && minutes === 0 && seconds === 0) {
    await startCaffeinateDisplayOff({ menubar: true, status: true }, undefined, "");
    return "Mac will stay awake (display can sleep) until you manually disable it";
  }

  const totalSeconds = hours * 3600 + minutes * 60 + seconds;
  const formattedTime = `${hours ? `${hours}h` : ""}${minutes ? `${minutes}m` : ""}${seconds ? `${seconds}s` : ""}`;

  await startCaffeinateDisplayOff({ menubar: true, status: true }, undefined, `-t ${totalSeconds}`);

  return `Mac will stay awake (display can sleep) for ${formattedTime}`;
}
