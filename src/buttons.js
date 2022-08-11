import { ICONS } from "./constants";

function toggleHighlighted(icon, show) {
  document
    .querySelector(`.${ICONS[icon]}-icon`)
    .classList.toggle("highlighted", show); // toggle into a one way-only
  // toggle(token, force)
  // force: true just add, do not remove / force: false just remove, do not add
}

export default function initButtons(handleUserAction) {
  let selectedIcon = 0;

  function buttonClick({ target }) {
    if (target.classList.contains("left-btn")) {
      toggleHighlighted(selectedIcon, false); // Remove highlighted class from previous icon
      // backward item index = (max index + current item index) % array.length
      selectedIcon = (ICONS.length - 1 + selectedIcon) % ICONS.length;
      toggleHighlighted(selectedIcon, true); // Add highlighted class to new icon
    } else if (target.classList.contains("right-btn")) {
      toggleHighlighted(selectedIcon, false);
      // forward item index = (1 + current item index) % array.length
      selectedIcon = (1 + selectedIcon) % ICONS.length;
      toggleHighlighted(selectedIcon, true);
    } else {
      handleUserAction(ICONS[selectedIcon]);
    }
  }

  document.querySelector(".buttons").addEventListener("click", buttonClick);
}
