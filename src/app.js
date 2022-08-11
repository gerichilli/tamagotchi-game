import game, { handleUserAction } from "./gameState";
import { TICK_RATE } from "./constants";
import initButtons from "./buttons";

async function init() {
  initButtons(handleUserAction);

  let nextTimeToTick = Date.now();

  // check to see if it's been 3 seconds.
  // If it has, call tick.
  // If not, chill and wait for the next frame.
  function nextAnimationFrame() {
    const now = Date.now();

    if (nextTimeToTick <= now) {
      game.tick();
      nextTimeToTick = now + TICK_RATE;
    }

    requestAnimationFrame(nextAnimationFrame);
  }

  nextAnimationFrame();
}

init();
