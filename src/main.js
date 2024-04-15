const a = 10000;
const b = 20000;
const c = a + b;
console.log(c);
// const result = document.querySelector('.hero-text').innerHTML;
const OpenModalMob = document.querySelector('.btn-one');
const modal = document.querySelector('.backdrop');
const CloseMob = document.querySelector('.close-btn');
OpenModalMob.onclick = function () {
  modal.classList.add('is-open');
};
CloseMob.onclick = function () {
  modal.classList.remove('is-open');
};

const OpenModalTab = document.querySelector('.btn-two');
const CloseTab = document.querySelector('.close-big-btn');
OpenModalTab.onclick = function () {
  modal.classList.add('is-open');
};
CloseTab.onclick = function () {
  modal.classList.remove('is-open');
};
const Closeall = document.querySelector('.navigation-list');
Closeall.onclick = function () {
  modal.classList.remove('is-open');
};
