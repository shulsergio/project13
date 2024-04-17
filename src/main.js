function ModalOpen() {
  document.querySelector('.backdrop').classList.add('is-open');
  document.body.style.overflow = 'hidden';
}
function ModalClose() {
  document.querySelector('.backdrop').classList.remove('is-open');
  document.body.style.overflow = '';
}
document.querySelector('.btn-one').onclick = () => ModalOpen();
document.querySelector('.close-btn').onclick = () => ModalClose();
document.querySelector('.close-big-btn').onclick = () => ModalClose();
document.querySelector('.navigation-list').onclick = () => ModalClose();
document.querySelector('.btn-two').onclick = () => ModalOpen();
document.querySelector('.menu-btn-shop').onclick = () => ModalClose();
