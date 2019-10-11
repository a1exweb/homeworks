$('#brif-form').validate({
  rules: {
    username: {
      required: true,
      minlength: 2,
      maxlength: 15
    },
    phone: {
      required: true
    },
    usermail: {
      required: true,
      email: true
    },
  },
  errorClass: "invalid",
  errorElement: "div",
  messages: {
    username: {
      required: "Укажите имя",
      minlength: jQuery.validator.format("Минимальная длинна имени 2 символа"),
      maxlength: jQuery.validator.format("Максимальная длинна имени 15 символов")
    },
    phone: {
      required: "Укажите телефон",
    },
    usermail: {
      email: "Введите корректный email",
      required: "Укажите email"
    } 
  },
}, );

$('#offer-form').validate({
  rules: {
    username: {
      required: true,
      minlength: 2,
      maxlength: 15
    },
    phone: {
      required: true
    }
  },
  errorClass: "invalid-offer",
  errorElement: "div",
  messages: {
    username: {
      required: "Укажите имя",
      minlength: jQuery.validator.format("Минимальная длинна имени 2 символа"),
      maxlength: jQuery.validator.format("Максимальная длинна имени 15 символов")
    },
    phone: {
      required: "Укажите телефон",
    }
  }
});

$('#modal-form').validate({
  rules: {
    username: {
      required: true,
      minlength: 2,
      maxlength: 15
    },
    phone: {
      required: true
    }
  },
  errorClass: "invalid",
  errorElement: "div",
  messages: {
    username: {
      required: "Укажите имя",
      minlength: jQuery.validator.format("Минимальная длинна имени 2 символа"),
      maxlength: jQuery.validator.format("Максимальная длинна имени 15 символов")
    },
    phone: {
      required: "Укажите телефон",
    },
  }
});

// mask input

$('input[type="tel"]').mask('+7 (999) 999-99-99');