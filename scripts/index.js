//import changeCard from "./helpers";

window.addEventListener("DOMContentLoaded", () => {
  let reloadBtn = document.querySelector(".renew-btn");
  let card = document.querySelector(".card");
  console.log(reloadBtn, card);
  reloadBtn.addEventListener("click", () => {
    changeCard(card);
  });
});

const changeCard = (cardElement) => {
  cardElement.innerText = getRandomAffirmation();
  cardElement.style.backgroundColor = getRandomRgbaColor(); // todo
};

const getRandomAffirmation = () => {
  const randomAffirmation =
    affirmations[Math.floor(Math.random() * affirmations.length)];
  return randomAffirmation;
};

const getRandomRgbaColor = () => {
  const randomChannelValue = () => Math.floor(Math.random() * 256);
  return `rgba(${randomChannelValue()},${randomChannelValue()} ,${randomChannelValue()} , 0.2)`;
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

const affirmations = [
  "Все будет замечательно. Твоя жизнь будет полна славных солнечных деньков и нежных котусеничек.",
  "Котусенички самые лучшие на свете!",
  "Быть котусеничкой - это очень здорово!",
  "Котусенички радуются каждому денёчку!",
];
