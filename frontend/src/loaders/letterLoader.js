import {
  getBirthday,
  getFatherHood,
  getGoodMorning,
  getGoodNight,
  getLoveLetters,
  getMotherHood,
  getMotivation,
  getPoems,
} from "@/services/AllLetters";
import { defer } from "react-router-dom";

export const goodMorningLoader = () => {
  const goodMorning = getGoodMorning();
  return defer({ goodMorning });
};

export const goodNightLoader = () => {
  const goodNight = getGoodNight();
  return defer({ goodNight });
};

export const loveLettersLoader = () => {
  const loveLetters = getLoveLetters();
  return defer({ loveLetters });
};

export const motivationalLoader = () => {
  const motivational = getMotivation();
  return defer({ motivational });
};

export const poemsLoader = () => {
  const poems = getPoems();
  return defer({ poems });
};

export const motherHoodLoader = () => {
  const motherHood = getMotherHood();
  return defer({ motherHood });
};

export const fatherHoodLoader = () => {
  const fatherHood = getFatherHood();
  return defer({ fatherHood });
};

export const birthdayLoader = () => {
  const birthday = getBirthday();
  return defer({ birthday });
};
