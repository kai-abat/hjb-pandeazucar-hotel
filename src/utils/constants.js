export const PAGE_SIZE = 10;

const deviceScreen = {
  mobileS: { min: "320px", max: "375px" },
  mobileM: { min: "375px", max: "425px" },
  mobileM2: { min: "425px", max: "500px" },
  mobileL: { min: "425px", max: "768px" },
  tablet: { min: "768px", max: "1024px" },
  laptop: { min: "1025px", max: "1440px" },
};

// export const DEVICE_MAX_W = {
//   mobileS: `(max-width: ${size.at(0).max})`,
//   mobileM: `(max-width: ${size.at(1).max})`,
//   mobileL: `(max-width: ${size.at(2).max})`,
//   tablet: `(max-width:  ${size.at(3).max})`,
//   laptop: `(max-width:  ${size.at(4).max})`,
// };

export const DEVICE_MAX_W = {
  mobileS: `(max-width: ${deviceScreen.mobileS.max})`,
  mobileM: `(max-width: ${deviceScreen.mobileM.max})`,
  mobileM2: `(max-width: ${deviceScreen.mobileM2.max})`,
  mobileL: `(max-width: ${deviceScreen.mobileL.max})`,
  tablet: `(max-width:  ${deviceScreen.tablet.max})`,
  laptop: `(max-width:  ${deviceScreen.laptop.max})`,
};

export const ANON_USER = {
  id: "none",
  aud: "anon",
  role: "anon",
  email: "guest@gmail.com",
  user_metadata: {
    fullName: "Anonymous",
    avatar: "default-user.jpg",
  },
};
