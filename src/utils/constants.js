export const PAGE_SIZE = 10;

const size = [
  { name: "mobileS", min: "320px", max: "375px" },
  { name: "mobileM", min: "375px", max: "425px" },
  { name: "mobileL", min: "425px", max: "768px" },
  { name: "tablet", min: "768px", max: "1024px" },
  { name: "laptop", min: "1025px", max: "1440px" },
];

export const DEVICE_MAX_W = {
  mobileS: `(max-width: ${size.at(0).max})`,
  mobileM: `(max-width: ${size.at(1).max})`,
  mobileL: `(max-width: ${size.at(2).max})`,
  tablet: `(max-width: ${size.at(3).max})`,
  laptop: `(max-width: ${size.at(4).max})`,
};
