import "./style.css";
import { initPaletteCards } from "./js/dom-helpers";
import {
  handlePaletteSubmit,
  handleDeletePalette,
  handleColorHexCopy,
  handleBorderControlButton,
} from "./js/event-handlers";

const main = () => {
  initPaletteCards();

  // form submission
  document
    .querySelector("#palette-form")
    .addEventListener("submit", handlePaletteSubmit);

  // palette deletion
  document
    .querySelector("#palettes-list")
    .addEventListener("click", handleDeletePalette);

  // color hex copying
  document
    .querySelector("#palettes-list")
    .addEventListener("click", handleColorHexCopy);

  // change the color of the sample border
  document
    .querySelector("#palettes-list")
    .addEventListener("click", handleBorderControlButton);
};

main();
