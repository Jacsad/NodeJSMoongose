$("#sign-in-form").validate({
  rules: {
    email: {
      required: true,
      email: true
    },
    password: {
      required: true,
      minlength: 4,
      maxlength: 15
    }
  }
});

$("#sign-up-form").validate({
  rules: {
    firstName: {
      required: true,
      minlength: 2,
      maxlength: 70
    },
    lastName: {
      required: true,
      minlength: 2,
      maxlength: 70
    },    
    email: {
      required: true,
      email: true
    },
    password: {
      required: true,
      minlength: 4,
      maxlength: 15
    }
  }
});