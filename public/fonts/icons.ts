export type IconsId =
  | "youtube"
  | "twitter"
  | "instagram"
  | "forward"
  | "facebook"
  | "down"
  | "dollar"
  | "arrow-up";

export type IconsKey =
  | "Youtube"
  | "Twitter"
  | "Instagram"
  | "Forward"
  | "Facebook"
  | "Down"
  | "Dollar"
  | "ArrowUp";

export enum Icons {
  Youtube = "youtube",
  Twitter = "twitter",
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
  [Icons.Instagram]: "61699",
  [Icons.Forward]: "61700",
  [Icons.Facebook]: "61701",
  [Icons.Down]: "61702",
  [Icons.Dollar]: "61703",
  [Icons.ArrowUp]: "61704",
};
