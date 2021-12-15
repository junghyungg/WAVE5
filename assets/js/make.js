const initialize = () => {
  const slideArray = ["로고 만들기", "아이콘 만들기", "컬러/폰트 지정하기"];
  const swiper = new Swiper(".page3__slide", {
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return (
          '<span class="' + className + '">' + `${slideArray[index]}</span>`
        );
      },
    },
    autoplay: false,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
};

initialize();
