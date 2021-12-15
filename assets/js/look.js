const productContents = document.querySelectorAll(".look__product__wrapper");
const uiuxContents = document.querySelectorAll(".look__uiux__wrapper");

const productSnsButton = document.querySelector(".look__icon__snsBtn");

let selectedProductSnsButton = document.querySelector(
  ".typeicon.selected__large--btn"
);

let selectedProductFlatButton = document.querySelector(
  ".product__contents .look__icon__defaultBtn.selected__large--btn"
);

let selectedProductIconButton = document.querySelector(
  ".secondSNS.selected__large--btn"
);

let icons = document.querySelectorAll(".typeicon");
let flats = document.querySelectorAll(".typeflat");
let icons2 = document.querySelectorAll(".secondSNS");

const snsImg = document.querySelector(".sns__img");
const flatImg = document.querySelector(".button__img");
const iconImg = document.querySelector(".icon__img");

/* PRoduct */
let sketchSrc = [
  "./assets/images/bulb1.jpg",
  "./assets/images/bulb2.jpg",
];
let designSrc = [
  "./assets/images/chair1.jpg",
  "./assets/images/chair2.jpg",
];
let productSrc = [
  "./assets/images/notebook1.jpg",
  "./assets/images/notebook2.jpg",
];

/* UIUX */

let iconSrc = [
  "./assets/images/look_sns_icon.png",
  "./assets/images/look_default_icon.png",
];
let btnSrc = [
  "./assets/images/flat_btns.png",
  "./assets/images/solide_btns.png",
];
let lastIconSrc = [
  "./assets/images/web_layout.png",
  "./assets/images/mobile_layout.png",
];

let selectedFirst = sketchSrc;
let selectedSecond = designSrc;
let selectedThird = productSrc;

const initialize = () => {
  let selectedButton = document.querySelector(".selected__look--btn");
  const lookButtons = document.querySelectorAll(".look--btn");

  let selectedFilter;

  if (lookButtons) {
    lookButtons.forEach((button) => {
      button.addEventListener("click", function () {
        selectedButton.classList.remove("selected__look--btn");
        this.classList.add("selected__look--btn");
        selectedButton = this;
        selectedFilter = this.value;

        const value = this.value;
        console.log(value);

        if (value === "product") {
          selectedFirst = sketchSrc;
          selectedSecond = designSrc;
          selectedThird = productSrc;
        } else {
          selectedFirst = iconSrc;
          selectedSecond = btnSrc;
          selectedThird = lastIconSrc;
        }

        console.log(`selectedFirst:`, selectedFirst);
        console.log(`selectedSecond:`, selectedSecond);
        console.log(`selectedThird:`, selectedThird);

        hideAndShow(selectedFilter);
      });
    });
  }

  /* ICON */
  if (icons) {
    icons.forEach((item) => {
      item.addEventListener("click", function () {
        removeSelect(selectedProductSnsButton);
        addSelect(this);
        selectedProductSnsButton = this;

        const value = this.value;
        const child = this.parentElement.parentElement.firstElementChild;
        if (value === "snsicon") {
          child.src = selectedFirst[0];
        } else {
          child.src = selectedFirst[1];
        }

        console.log(selectedFirst);
      });
    });
  }

  if (flats) {
    flats.forEach((item) => {
      item.addEventListener("click", function () {
        removeSelect(selectedProductFlatButton);

        addSelect(this);
        selectedProductFlatButton = this;
        const value = this.value;
        const child = this.parentElement.parentElement.firstElementChild;
        if (value === "flatbutton") {
          child.src = selectedSecond[0];
        } else {
          child.src = selectedSecond[1];
        }

        console.log(selectedSecond);
      });
    });
  }

  if (icons2) {
    icons2.forEach((item) => {
      item.addEventListener("click", function () {
        removeSelect(selectedProductIconButton);
        addSelect(this);
        selectedProductIconButton = this;
        const value = this.value;
        const child = this.parentElement.parentElement.firstElementChild;
        if (value === "snsicon") {
          child.src = selectedThird[0];
        } else {
          child.src = selectedThird[1];
        }

        console.log(selectedThird);
      });
    });
  }
};

function removeSelect(dom) {
  dom.classList.remove("selected__large--btn");
}

function addSelect(dom) {
  dom.classList.add("selected__large--btn");
}

function hideAndShow(filter) {
  if (filter === "product") {
    selectedProductSnsButton = document.querySelector(
      ".product__contents .look__icon__snsBtn"
    );
    selectedProductFlatButton = document.querySelector(
      ".product__contents .look__icon__defaultBtn.selected__large--btn"
    );
    selectedProductIconButton = document.querySelector(
      ".product__contents .look__icon__iconDefaultBtn"
    );
    productContents.forEach((item) => {
      item.classList.remove("hidden");
      item.classList.add("show");

      item.lastElementChild.classList.remove("hidden");
      item.lastElementChild.classList.add("show");
    });
    uiuxContents.forEach((item) => {
      item.classList.remove("show");
      item.classList.add("hidden");

      item.lastElementChild.classList.remove("show");
      item.lastElementChild.classList.add("hidden");
    });
  } else {
    selectedProductSnsButton = document.querySelector(
      ".uiux__contents .look__icon__snsBtn"
    );
    selectedProductFlatButton = document.querySelector(
      ".uiux__contents  .look__icon__defaultBtn.selected__large--btn"
    );
    selectedProductIconButton = document.querySelector(
      ".uiux__contents .look__icon__iconDefaultBtn"
    );

    uiuxContents.forEach((item) => {
      item.classList.remove("hidden");
      item.classList.add("show");

      item.lastElementChild.classList.remove("hidden");
      item.lastElementChild.classList.add("show");
    });

    productContents.forEach((item) => {
      item.classList.add("hidden");
      item.classList.remove("show");

      item.lastElementChild.classList.remove("show");
      item.lastElementChild.classList.add("hidden");
    });
  }
}

initialize();
