const switchLanguages = document.querySelector(".switch-languages");
const language = document.querySelector(".language");
const showSvg = document.querySelector(".show-svg");
const buttonChild = document.querySelector(".button-child");
const buttonTeen = document.querySelector(".button-teen");
const buttonAdult = document.querySelector(".button-adult");
const buttonElder = document.querySelector(".button-elder");
const illustraties = document.querySelector(".illustraties");
const listSVG = document.querySelectorAll(
   ".main-container .illustraties .show-svg img"
);
const buttonExplore = document.querySelector(
   ".main-container .content .button-explore"
);
const logo = document.querySelector(".logo");
switchLanguages.addEventListener("click", SwitchLanguagesFunction);
const buttonMy = document.getElementById('button-my')
const bodyContent = document.querySelector('.body-content')
const title = document.querySelector('.title')
window.addEventListener("resize", () => {
   listSVG.forEach((value) => {
      value.style.width = illustraties.offsetWidth + "px";
   });
});

function SwitchLanguagesFunction() {
   if (language.textContent == "EN") {
      language.textContent = "VN";
      bodyContent.innerHTML = 'You only live once so do what makes you happy so do it at...'
      title.innerHTML = 'Circle of life company'
      buttonMy.innerHTML = 'Lets explore with us'
   } else {
      language.textContent = "EN";
      bodyContent.innerHTML = 'Mỗi người chỉ sống được một lần duy nhất vì vậy hãy làm những điều khiến mình hạnh phúc vì thế làm điều đó tại...'
      title.innerHTML = 'Công ty Circle of life'
      buttonMy.innerHTML = 'Hãy khám phá cùng chúng tôi'
   }
}

buttonChild.addEventListener("click", () => {
   if (!showSvg.classList.contains("child")) {
      showSvg.classList.forEach((value) => {
         if (value != "show-svg" && value != "child")
            showSvg.classList.remove(value);
      });
      showSvg.classList.add("child");
      buttonExplore.style.background = "var(--color-child)";
      logo.style.color = "var(--color-child)";
   }
});

buttonTeen.addEventListener("click", () => {
   if (!showSvg.classList.contains("teen")) {
      showSvg.classList.forEach((value) => {
         if (value != "show-svg" && value != "teen")
            showSvg.classList.remove(value);
      });
      showSvg.classList.add("teen");
      buttonExplore.style.background = "var(--color-teen)";
      logo.style.color = "var(--color-teen)";
   }
});

buttonAdult.addEventListener("click", () => {
   if (!showSvg.classList.contains("adult")) {
      showSvg.classList.forEach((value) => {
         if (value != "show-svg" && value != "adult")
            showSvg.classList.remove(value);
      });
      showSvg.classList.add("adult");
      buttonExplore.style.background = "var(--color-adult)";
      logo.style.color = "var(--color-adult)";
   }
});

buttonElder.addEventListener("click", () => {
   if (!showSvg.classList.contains("elder")) {
      showSvg.classList.forEach((value) => {
         if (value != "show-svg" && value != "elder")
            showSvg.classList.remove(value);
      });
      showSvg.classList.add("elder");
      buttonExplore.style.background = "var(--color-elder)";
      logo.style.color = "var(--color-elder)";
   }
});
