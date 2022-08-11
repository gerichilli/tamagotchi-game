export const TICK_RATE = 3000;
export const ICONS = ["fish", "poop", "weather"];
export const RAIN_CHANGE = 0.5;
export const SCENES = ["day", "rain"];
export const DAY_LENGTH = 60;
export const NIGHT_LENGTH = 3;

export const getNextHungerTime = function getNextHungerTime(clock) {
  return Math.floor(Math.random() * 3) + 5 + clock;
};

export const getNextDieTime = function getNextDieTime(clock) {
  return Math.floor(Math.random() * 2) + 3 + clock;
};

export const getNextPoopTime = function getNextPoopTime(clock) {
  return Math.floor(Math.random() * 3) + 4 + clock;
};
