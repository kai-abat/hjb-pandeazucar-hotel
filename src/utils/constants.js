export const PAGE_SIZE = 10;

const size = [
  { name: "mobileS", min: "320px", max: "374px" },
  { name: "mobileM", min: "375px", max: "424px" },
  { name: "mobileL", min: "425px", max: "767px" },
  { name: "tablet", min: "768px", max: "1023" },
  { name: "laptop", min: "1024px", max: "1439px" },
];

export const DEVICE_MAX_W = {
  mobileS: `(max-width: ${size.at(0).max})`,
  mobileM: `(max-width: ${size.at(1).max})`,
  mobileL: `(max-width: ${size.at(2).max})`,
  tablet: `(max-width: ${size.at(3).max})`,
  laptop: `(max-width: ${size.at(4).max})`,
};
