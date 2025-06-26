export type IconsId =
  | "youtube"
  | "twitter"
  | "instagram"
  | "facebook"
  | "down"
  | "dollar";

export type IconsKey =
  | "Youtube"
  | "Twitter"
  | "Instagram"
  | "Facebook"
  | "Down"
  | "Dollar";

export enum Icons {
  Youtube = "youtube",
  Twitter = "twitter",
  Instagram = "instagram",
  Facebook = "facebook",
  Down = "down",
  Dollar = "dollar",
}

export const ICONS_CODEPOINTS: { [key in Icons]: string } = {
  [Icons.Youtube]: "61697",
  [Icons.Twitter]: "61698",
  [Icons.Instagram]: "61699",
  [Icons.Facebook]: "61700",
  [Icons.Down]: "61701",
  [Icons.Dollar]: "61702",
};
