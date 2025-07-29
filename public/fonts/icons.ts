export type IconsId =
  | "youtube"
  | "twitter"
  | "schedule"
  | "instagram"
  | "forward"
  | "facebook"
  | "down"
  | "dollar"
  | "arrow-up";

export type IconsKey =
  | "Youtube"
  | "Twitter"
  | "Schedule"
  | "Instagram"
  | "Forward"
  | "Facebook"
  | "Down"
  | "Dollar"
  | "ArrowUp";

export enum Icons {
  Youtube = "youtube",
  Twitter = "twitter",
  Schedule = "schedule",
  Instagram = "instagram",
  Forward = "forward",
  Facebook = "facebook",
  Down = "down",
  Dollar = "dollar",
  ArrowUp = "arrow-up",
}

export const ICONS_CODEPOINTS: { [key in Icons]: string } = {
  [Icons.Youtube]: "61697",
  [Icons.Twitter]: "61698",
  [Icons.Schedule]: "61699",
  [Icons.Instagram]: "61700",
  [Icons.Forward]: "61701",
  [Icons.Facebook]: "61702",
  [Icons.Down]: "61703",
  [Icons.Dollar]: "61704",
  [Icons.ArrowUp]: "61705",
};
