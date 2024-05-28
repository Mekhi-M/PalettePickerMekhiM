import palettesFromJSON from "../../palettes.json";
import {
  setLocalStorageKey,
  getLocalStorageKey,
  deleteLocalStorageKey,
} from "./local-storage-helpers";

export const makePaletteCard = (paletteObj) => {
  const { title, colors, temperature, uuid } = paletteObj;
  // console.log({ title, colors, temperature });

  // create elements
  const cardLi = document.createElement("li");
  const titleH = document.createElement("h3");
  const paletteContainer = document.createElement("div");

  const color1SampleContainer = document.createElement("div");
  const color1PWhite = document.createElement("p");
  const color1PBlack = document.createElement("p");
  const color1Button = document.createElement("button");

  const color2SampleContainer = document.createElement("div");
  const color2PWhite = document.createElement("p");
  const color2PBlack = document.createElement("p");
  const color2Button = document.createElement("button");

  const color3SampleContainer = document.createElement("div");
  const color3PWhite = document.createElement("p");
  const color3PBlack = document.createElement("p");
  const color3Button = document.createElement("button");

  const borderControlContainer = document.createElement("div");
  const whiteBorderButton = document.createElement("button");
  const mixedBorderButton = document.createElement("button");
  const blackBorderButton = document.createElement("button");

  const deleteButton = document.createElement("button");

  const temperatureP = document.createElement("p");
  const temperatureContainer = document.createElement("div");

  //structure elements
  color1SampleContainer.append(color1PWhite, color1PBlack);
  color2SampleContainer.append(color2PWhite, color2PBlack);
  color3SampleContainer.append(color3PWhite, color3PBlack);

  paletteContainer.append(
    color1SampleContainer,
    color1Button,
    color2SampleContainer,
    color2Button,
    color3SampleContainer,
    color3Button
  );

  borderControlContainer.append(
    whiteBorderButton,
    mixedBorderButton,
    blackBorderButton
  );

  temperatureContainer.append(temperatureP);

  cardLi.append(
    titleH,
    paletteContainer,
    borderControlContainer,
    deleteButton,
    temperatureContainer
  );

  // attribute setting (classes, datasets) and some dynamic styling
  cardLi.classList.add("column-flex-box", "dark-gray-bg");
  cardLi.dataset.uuid = uuid;

  paletteContainer.classList.add("grid-2-x-3");

  // first color elements
  color1SampleContainer.classList.add("flex-box", "white-black-border");
  color1SampleContainer.dataset.borderColor = "white black black white";
  color1SampleContainer.style.backgroundColor = `${colors[0]}`;

  color1PWhite.style.color = "white";
  color1PBlack.style.color = "black";

  color1Button.classList.add("copy-button");
  color1Button.dataset.colorHex = colors[0];
  // ---------------------------------------

  // second color elements
  color2SampleContainer.classList.add("flex-box", "white-black-border");
  color2SampleContainer.dataset.borderColor = "white black black white";
  color2SampleContainer.style.backgroundColor = `${colors[1]}`;

  color2PWhite.style.color = "white";
  color2PBlack.style.color = "black";

  color2Button.classList.add("copy-button");
  color2Button.dataset.colorHex = colors[1];
  // ---------------------------------------

  // 3rd color elements
  color3SampleContainer.classList.add("flex-box", "white-black-border");
  color3SampleContainer.dataset.borderColor = "white black black white";
  color3SampleContainer.style.backgroundColor = `${colors[2]}`;

  color3PWhite.style.color = "white";
  color3PBlack.style.color = "black";

  color3Button.classList.add("copy-button");
  color3Button.dataset.colorHex = colors[2];
  // ---------------------------------------

  borderControlContainer.classList.add("flex-box");

  whiteBorderButton.classList.add("border-control");
  whiteBorderButton.dataset.borderColor = "white";
  mixedBorderButton.classList.add("border-control");
  mixedBorderButton.dataset.borderColor = "white black black white";
  blackBorderButton.classList.add("border-control");
  blackBorderButton.dataset.borderColor = "black";

  deleteButton.classList.add("delete-button");

  temperatureContainer.classList.add("flex-box");
  if (temperature === "cool")
    temperatureContainer.style.backgroundColor = "blue";
  if (temperature === "neutral")
    temperatureContainer.style.backgroundColor = "gray";
  if (temperature === "warm")
    temperatureContainer.style.backgroundColor = "red";

  // content
  titleH.textContent = title;

  color1PWhite.textContent = "White";
  color1PBlack.textContent = "Black";
  color1Button.textContent = `Copy ${colors[0]}`;

  color2PWhite.textContent = "White";
  color2PBlack.textContent = "Black";
  color2Button.textContent = `Copy ${colors[1]}`;

  color3PWhite.textContent = "White";
  color3PBlack.textContent = "Black";
  color3Button.textContent = `Copy ${colors[2]}`;

  whiteBorderButton.textContent = "White";
  mixedBorderButton.textContent = "W + B";
  blackBorderButton.textContent = "Black";

  deleteButton.textContent = "Delete This Palette";

  temperatureP.textContent = temperature;

  // append completed card to ul
  document.querySelector("#palettes-list").append(cardLi);
};

export const initPaletteCards = () => {
  // checks if there the palettes key from localStorage is empty
  // if (getLocalStorageKey("palettes").length === 0) {
  //   console.log(
  //     "The stored palette list was empty. Initializing standard palette list"
  //   );
  //   // deletes the key right before localStorage is checked for the palettes key
  //   deleteLocalStorageKey("palettes");
  // }

  // will set palettes from localStorage to the default palette set from the JSON
  if (!getLocalStorageKey("palettes")) {
    setLocalStorageKey("palettes", palettesFromJSON);
  }

  getLocalStorageKey("palettes").forEach(makePaletteCard);
};
