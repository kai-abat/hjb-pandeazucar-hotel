import { HiOutlineSquares2X2, HiOutlineTableCells } from "react-icons/hi2";

export const PAGE_SIZE = 10;

export const DEVICE_SCREEN = {
  mobileS: { min: 0, max: 375 },
  mobileM: { min: 375, max: 425 },
  mobileM2: { min: 425, max: 500 },
  mobileL: { min: 425, max: 768 },
  tablet: { min: 768, max: 1024 },
  laptop: { min: 1025, max: 4000 },
};

// export const DEVICE_MAX_W = {
//   mobileS: `(max-width: ${size.at(0).max})`,
//   mobileM: `(max-width: ${size.at(1).max})`,
//   mobileL: `(max-width: ${size.at(2).max})`,
//   tablet: `(max-width:  ${size.at(3).max})`,
//   laptop: `(max-width:  ${size.at(4).max})`,
// };

export const DEVICE_MAX_W = {
  mobileS: `(max-width: ${DEVICE_SCREEN.mobileS.max}px)`,
  mobileM: `(max-width: ${DEVICE_SCREEN.mobileM.max}px)`,
  mobileM2: `(max-width: ${DEVICE_SCREEN.mobileM2.max}px)`,
  mobileL: `(max-width: ${DEVICE_SCREEN.mobileL.max}px)`,
  tablet: `(max-width:  ${DEVICE_SCREEN.tablet.max}px)`,
  laptop: `(max-width:  ${DEVICE_SCREEN.laptop.max}px)`,
};

export const DEVICE_MIN_W = {
  mobileS: `(min-width: ${DEVICE_SCREEN.mobileS.min}px)`,
  mobileM: `(min-width: ${DEVICE_SCREEN.mobileM.min}px)`,
  mobileM2: `(min-width: ${DEVICE_SCREEN.mobileM2.min}px)`,
  mobileL: `(min-width: ${DEVICE_SCREEN.mobileL.min}px)`,
  tablet: `(min-width:  ${DEVICE_SCREEN.tablet.min}px)`,
  laptop: `(min-width:  ${DEVICE_SCREEN.laptop.max}px)`,
};

export const ANON_USER = {
  id: "none",
  aud: "anon",
  role: "anon",
  email: "guest@gmail.com",
  user_metadata: {
    fullName: "Guest",
    avatar: "default-user.jpg",
  },
};

export const DISPLAY_MODE = {
  modeField: "display",
  options: [
    { value: "table", icon: HiOutlineTableCells },
    { value: "card", icon: HiOutlineSquares2X2 },
  ],
};

export const DISPLAY_MODE_M = {
  modeField: "display",
  options: [
    { value: "card", icon: HiOutlineSquares2X2 },
    { value: "table", icon: HiOutlineTableCells },
  ],
};
