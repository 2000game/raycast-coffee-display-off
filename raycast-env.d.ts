/// <reference types="@raycast/api">

/* 🚧 🚧 🚧
 * This file is auto-generated from the extension's manifest.
 * Do not modify manually. Instead, update the `package.json` file.
 * 🚧 🚧 🚧 */

/* eslint-disable @typescript-eslint/ban-types */

type ExtensionPreferences = {
  /** Options - Prevent the display from sleeping */
  "preventDisplay": boolean,
  /** undefined - Prevent the system from sleeping */
  "preventSystem": boolean,
  /** undefined - Prevent the disk from sleeping */
  "preventDisk": boolean,
  /** Menu Bar Icon - Select icon set for Menu Bar */
  "icon": "pot" | "mug" | "cup" | "paper-cup"
}

/** Preferences accessible in all the extension's commands */
declare type Preferences = ExtensionPreferences

declare namespace Preferences {
  /** Preferences accessible in the `caffeinate` command */
  export type Caffeinate = ExtensionPreferences & {}
  /** Preferences accessible in the `decaffeinate` command */
  export type Decaffeinate = ExtensionPreferences & {}
  /** Preferences accessible in the `caffeinateWhile` command */
  export type CaffeinateWhile = ExtensionPreferences & {}
  /** Preferences accessible in the `index` command */
  export type Index = ExtensionPreferences & {
  /** When Decaffeinated - Hide the icon when decaffeinated */
  "hidenWhenDecaffeinated": boolean
}
  /** Preferences accessible in the `caffeinateToggle` command */
  export type CaffeinateToggle = ExtensionPreferences & {}
  /** Preferences accessible in the `caffeinateFor` command */
  export type CaffeinateFor = ExtensionPreferences & {}
  /** Preferences accessible in the `caffeinateDisplayOff` command */
  export type CaffeinateDisplayOff = ExtensionPreferences & {}
  /** Preferences accessible in the `caffeinateUntil` command */
  export type CaffeinateUntil = ExtensionPreferences & {}
  /** Preferences accessible in the `addSchedule` command */
  export type AddSchedule = ExtensionPreferences & {}
  /** Preferences accessible in the `status` command */
  export type Status = ExtensionPreferences & {}
}

declare namespace Arguments {
  /** Arguments passed to the `caffeinate` command */
  export type Caffeinate = {}
  /** Arguments passed to the `decaffeinate` command */
  export type Decaffeinate = {}
  /** Arguments passed to the `caffeinateWhile` command */
  export type CaffeinateWhile = {}
  /** Arguments passed to the `index` command */
  export type Index = {}
  /** Arguments passed to the `caffeinateToggle` command */
  export type CaffeinateToggle = {}
  /** Arguments passed to the `caffeinateFor` command */
  export type CaffeinateFor = {
  /** Hours */
  "hours": string,
  /** Minutes */
  "minutes": string,
  /** Seconds */
  "seconds": string
}
  /** Arguments passed to the `caffeinateDisplayOff` command */
  export type CaffeinateDisplayOff = {
  /** Hours */
  "hours": string,
  /** Minutes */
  "minutes": string,
  /** Seconds */
  "seconds": string
}
  /** Arguments passed to the `caffeinateUntil` command */
  export type CaffeinateUntil = {
  /** Time */
  "time": string
}
  /** Arguments passed to the `addSchedule` command */
  export type AddSchedule = {}
  /** Arguments passed to the `status` command */
  export type Status = {}
}

