import affirmations from "./affirmations.js";
import emojis from "./emojis.js";

// change card & icon
const changeCardAndIcon = (container, cardElement, iconElement) => {
  container.classList.remove("animation-in");
  container.classList.add("animation-out");
  setTimeout(() => {
    container.classList.remove("animation-out");
    container.classList.add("animation-in");
    cardElement.innerText = getRandomAffirmation();
    cardElement.style.backgroundColor = getRandomRgbaColor();
    iconElement.innerText = getRandomEmoji();
  }, 450);
};

const getRandomAffirmation = () => {
  const randomAffirmation =
    affirmations[Math.floor(Math.random() * affirmations.length)];
  return randomAffirmation;
};

const getRandomRgbaColor = () => {
  const randomChannelValue = () => Math.floor(Math.random() * 256);
  return `rgba(${randomChannelValue()},${randomChannelValue()} ,${randomChannelValue()} , 0.1)`;
};

const getRandomEmoji = () => {
  const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
  return randomEmoji;
};

// TODO
const setTheme = (bodyElement, theme) => {
  if (theme === "light") {
    bodyElement.classList.remove("dark-theme");
  } else if (theme === "dark") {
    bodyElement.classList.add("dark-theme");
  } else {
    throw new Error("Theme name must be either light or dark!");
  }
};

export default changeCardAndIcon;
export { setTheme };
