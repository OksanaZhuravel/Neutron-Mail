let account = document.querySelector('.header__account');
let link = account.querySelectorAll('.header__items');
// link.forEach(function (value) {
//   console.log(value);
// });
let linkElem = null;
let elem = function (evt) {
  evt.preventDefault();
  console.log('click');

  if (linkElem) {
    linkElem.classList.contains('header__items--hover');
  }
  linkElem = evt.currentTarget;
  linkElem.classList.toggle('header__items--hover');
};
for (i = 0; i < link.length; i++) {
  link[i].addEventListener('click', elem);
}
