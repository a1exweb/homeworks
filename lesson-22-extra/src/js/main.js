// Переменные для двух видов модальных окон
let button = document.querySelector('#button');
let modal = document.querySelector('#modal');
let close = document.querySelector('#close');
let modalDialog = document.querySelector('.modal-dialog');

// Модальное окно, закрывается желчком ЛКМ по кнопке в виде X
button.addEventListener('click', function() {
  modal.classList.toggle('modal_active');
  modalDialog.classList.toggle('modal-dialog_active');
  document.body.style.overflow = "hidden";
});

close.addEventListener('click', function() {
  modal.classList.toggle('modal_active');
  modalDialog.classList.toggle('modal-dialog_active');
  document.body.style.overflow = "auto";
});

window.addEventListener('click', function(event) {
  if (event.target == modal) {
    modal.classList.toggle('modal_active');
    modalDialog.classList.toggle('modal-dialog_active');
    document.body.style.overflow = "auto";
  }
});

// Автоматическое закрытие модального окна через 5 секунд
/*
function closeModal() {
  modal.classList.remove('modal_active');
}

button.addEventListener('click', function() {
  modal.classList.add('modal_active');
  setTimeout(closeModal, 5000);
});
*/