let headerClick = document
  .querySelectorAll('.header__items')
  .forEach(function (headerClick) {
    console.log(headerClick);
    headerClick.addEventListener('click', function () {
      if (headerClick.classList.contains('header__items--hover')) {
        headerClick.classList.toggle('header__items--hover');
      } else {
        headerClick.classList.add('header__items--hover');
      }
    });
  });
