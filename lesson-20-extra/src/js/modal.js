$(function(){
  let button = $('#button');
  let modal = $('#modal');
  let modalDialog = $('.modal-dialog');
  let close = $('#close');
  let body = $('body');
  
  button.on('click', function() {
    modal.toggleClass('modal_active');
    modalDialog.toggleClass('modal-dialog_active');
    body.css('overflow', 'hidden');
  });

  close.on('click', function() {
    modal.toggleClass('modal_active');
    modalDialog.toggleClass('modal-dialog_active');
    body.css('overflow', 'auto');
  });

  $(window).on('click', function(event) {
    if (event.target == modal[0]) {
      modal.toggleClass('modal_active');
      modalDialog.toggleClass('modal-dialog_active');
      body.css('overflow', 'auto');
    }
  });

  // modal[0] получаем нулевой элемент из jQuery Object. jQuery Object - оболочка вокруг элемента HTML, которая включает в себя дополнительные свойства и методы этом можно посмотреть с помощью console.log(modal) внутри функции jQuery или просто $(function) {console.log(modal)} console.log(modal[0]) - выводит нужный нам элемент
});