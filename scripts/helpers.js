import affirmations from "./affirmations";

const changeCard = (cardElement) => {
  cardElement.innerText = getRandomAffirmation();
  cardElement.style.color = getRandomRgbaColor(); // todo
};

const getRandomAffirmation = () => {
  return affirmations[Math.floor(Math.random * affirmations.length)];
};

const getRandomRgbaColor = () => {
  const randomChannelValue = () => Math.floor(Math.random * 256);
  return `rgba(${randomChannelValue()},${randomChannelValue()} ,${randomChannelValue()} , 0.5)`;
};

const setTheme = (bodyElement, theme) => {
  if (theme === "light") {
    bodyElement.removeClass("dark-theme");
  } else if (theme === "dark") {
    bodyElement.addClass("dark-theme");
  } else {
    throw new Error("Theme name must be either light or dark!");
  }
};

export default changeCard;
export { setTheme };
