import { makePaletteCard } from "./dom-helpers";
import { v4 as uuidv4 } from "uuid";
import {
  setLocalStorageKey,
  getLocalStorageKey,
} from "./local-storage-helpers";

export const handlePaletteSubmit = (event) => {
  event.preventDefault();

  const form = event.target;

  const title = form.paletteName.value;
  const colors = [
    form.colorOneHex.value,
    form.colorTwoHex.value,
    form.colorThreeHex.value,
  ];
  const temperature = form.colorTemp.value;
  const uuid = uuidv4();

  // my first solution for making the title a required field
  // // will not create palette or reset form if no title is provided
  // if (!title) {
  //   return;
  // }

  const paletteData = { title, colors, temperature, uuid };

  makePaletteCard(paletteData);

  // add the new palette to the local storage
  const palettes = getLocalStorageKey("palettes");
  palettes.push(paletteData);
  setLocalStorageKey("palettes", palettes);

  form.reset();

  // for fun
  const createButton = document.querySelector("#palette-form button");
  createButton.textContent = "Created a palette!!!";
  createButton.style.color = "white";
  createButton.style.backgroundColor = "green";
  setTimeout(() => {
    createButton.textContent = `Create a palette`;
    createButton.style.color = "black";
    createButton.style.backgroundColor = "#afafaf";
  }, 1250);
};

export const handleDeletePalette = (event) => {
  if (!event.target.matches(".delete-button")) {
    return;
  }

  const currentPaletteLI = event.target.closest("li");

  const palettes = getLocalStorageKey("palettes");
  const indexToRemove = palettes.findIndex(
    (palette) => palette.uuid === currentPaletteLI.dataset.uuid
  );
  palettes.splice(indexToRemove, 1);

  setLocalStorageKey("palettes", palettes);

  currentPaletteLI.remove();

  // for fun
  const createButton = document.querySelector("#palette-form button");
  createButton.textContent = "Deleted a palette.";
  createButton.style.color = "white";
  createButton.style.backgroundColor = "red";
  setTimeout(() => {
    createButton.textContent = `Create a palette`;
    createButton.style.color = "black";
    createButton.style.backgroundColor = "#afafaf";
  }, 1750);
};

export const handleColorHexCopy = (event) => {
  if (!event.target.matches(".copy-button")) {
    return;
  }

  if (!navigator.clipboard) {
    // Clipboard API is not available
    return;
  }

  const currentCopyButton = event.target.closest("button");
  const colorHex = currentCopyButton.dataset.colorHex;

  try {
    navigator.clipboard.writeText(colorHex);
    currentCopyButton.textContent = "Copied hex!";
    setTimeout(
      () => (currentCopyButton.textContent = `Copy ${colorHex}`),
      1000
    );
  } catch (err) {
    console.error("Failed to copy.", err);
    currentCopyButton.textContent = "Failed to copy.";
    setTimeout(
      () => (currentCopyButton.textContent = `Copy ${colorHex}`),
      1000
    );
  }
};

// for fun
export const handleBorderControlButton = (event) => {
  if (!event.target.matches(".border-control")) {
    return;
  }

  const currentBorderChangeButton = event.target.closest("button");
  const borderColor = currentBorderChangeButton.dataset.borderColor;

  const sampleContainersToChange = event.target
    .closest("li")
    .querySelectorAll(".grid-2-x-3 > div");

  // change the border to be completely white
  if (borderColor === "white") {
    if (sampleContainersToChange[0].dataset.borderColor === "black") {
      sampleContainersToChange.forEach((e) => {
        e.dataset.borderColor = borderColor;
        e.style.borderColor = borderColor;
      });
    }

    if (
      sampleContainersToChange[0].dataset.borderColor ===
      "white black black white"
    ) {
      sampleContainersToChange.forEach((e) => {
        e.dataset.borderColor = borderColor;
        e.style.borderColor = borderColor;
      });
    }
  }
  // -------------------------------------------

  // change the border to be mixed
  if (borderColor === "white black black white") {
    if (sampleContainersToChange[0].dataset.borderColor === "white") {
      sampleContainersToChange.forEach((e) => {
        e.dataset.borderColor = borderColor;
        e.style.borderColor = borderColor;
      });
    }

    if (sampleContainersToChange[0].dataset.borderColor === "black") {
      sampleContainersToChange.forEach((e) => {
        e.dataset.borderColor = borderColor;
        e.style.borderColor = borderColor;
      });
    }
  }
  // -------------------------------------------

  // change the border to be completely black
  if (borderColor === "black") {
    if (sampleContainersToChange[0].dataset.borderColor === "white") {
      sampleContainersToChange.forEach((e) => {
        e.dataset.borderColor = borderColor;
        e.style.borderColor = borderColor;
      });
    }

    if (
      sampleContainersToChange[0].dataset.borderColor ===
      "white black black white"
    ) {
      sampleContainersToChange.forEach((e) => {
        e.dataset.borderColor = borderColor;
        e.style.borderColor = borderColor;
      });
    }
  }
  // -------------------------------------------
};
