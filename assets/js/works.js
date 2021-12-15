let filterCards = document.querySelectorAll(".filter__card");

const initialize = () => {
  const swiper = new Swiper(".freemode__container", {
    slidesPerView: 5,
    spaceBetween: 50,
    freeMode: true,
    pagination: false,
    autoplay: {
      delay: 1800,
      disableOnInteraction: false,
    },
    loop: true,
  });

  let selectedButton = document.querySelector(".filter__selected");
  const filterBtns = document.querySelectorAll(".filter__btn");

  let selectedFilter;

  if (filterBtns) {
    filterBtns.forEach((button) => {
      button.addEventListener("click", function () {
        selectedButton.classList.remove("filter__selected");

        this.classList.add("filter__selected");
        selectedButton = this;

        selectedFilter = this.value;

        selectedButton.classList.value;
        filteredCard(selectedFilter);
      });
    });
  }
};

function filteredCard(filterType) {
  switch (filterType) {
    case "all":
      showCollections(filterCards);
      break;
    case "product":
      const productDoms = document.querySelectorAll(".filter__card--product");
      showCollections(productDoms);
      break;
    case "uiux":
      const uiuxDoms = document.querySelectorAll(".filter__card--uiux");
      showCollections(uiuxDoms);
      break;
  }
}

function showCollections(doms) {
  filterCards.forEach((item) => {
    item.classList.remove("show");
    item.classList.add("hidden");
  });

  doms.forEach((item, i) => {
    item.classList.add("show");
    item.classList.remove("hidden");
  });
}

initialize();
