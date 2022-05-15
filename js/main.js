//get data
const nameInput = document.querySelector("#name");
const email = document.querySelector("#email");
const message = document.querySelector("#message");
const success = document.querySelector("#success");
const errorNodes = document.querySelectorAll(".error");
const formm = document.querySelector("#form");
const inputs = document.querySelectorAll(".form-input");
const errors = document.querySelectorAll(".error");
const submit = document.querySelector(".form-submit");
const formSubtitle = document.querySelector(".subtitle-form");
const mess = document.getElementById("message");
const em = document.getElementById("email");
const nam = document.getElementById("name");

//validate form inputs
function validateForm() {
  clearMessages();
  let errorFlag = false;

  if (nameInput.value.length < 1) {
    errorNodes[0].innerText = "This field is required.";
    nameInput.classList.add("error-border");
    errorFlag = true;
  }
  if (email.value.length < 1) {
    errorNodes[1].innerText = "This field is required.";
    email.classList.add("error-border");
    errorFlag = true;
  } else if (!emailIsInvalid(email.value)) {
    errorNodes[1].innerText = "Invalid email.";
    email.classList.add("error-border");
    errorFlag = true;
  }
  if (message.value.length < 1) {
    errorNodes[2].innerText = "This field is required.";
    message.classList.add("error-border");
    errorFlag = true;
  }
  if (!errorFlag) {
    disappearEmailContent();
  }
}

//disappear form content on submit and display check
const disappearEmailContent = function () {
  //disappearing form inputs
  inputs.forEach((input) => input.classList.add("hiddens"));
  errors.forEach((error) => error.classList.add("hiddens"));
  submit.classList.add("hiddens");

  formSubtitle?.classList.add("hiddens");

  //clearing values of inputs
  em.value = "";
  mess.value = "";
  nam.value = "";

  //creating message to add
  const successMessage = document.createElement("div");
  successMessage.classList.add("successMessage");
  successMessage.innerHTML =
    "<div class='successEmail'><p class='success'><i class='fa-solid fa-circle-check fa-2x'></i> Thank you for your message!</p></div>";
  formm.prepend(successMessage);

  //adding everything back
  setTimeout(() => {
    //add them back
    successMessage.classList.add("hidden");

    inputs.forEach((input) => input.classList.remove("hiddens"));
    errors.forEach((error) => error.classList.remove("hiddens"));
    submit.classList.remove("hiddens");
    formSubtitle?.classList.remove("hiddens");
  }, 4000);
};

//clear error messages when submit is clicked
function clearMessages() {
  for (let i = 0; i < errorNodes.length; i++) {
    errorNodes[i].innerText = "";
  }
  nameInput.classList.remove("error-border");
  email.classList.remove("error-border");
  message.classList.remove("error-border");
}

//test if email pattern matches
function emailIsInvalid(email) {
  let pattern = /\S+@\S+\.\S+/;
  return pattern.test(email);
}

// function clearForm() {
// }

$(".count").each(function () {
  $(this)
    .prop("Counter", 0)
    .animate(
      {
        Counter: $(this).text(),
      },
      {
        duration: 4000,
        easing: "swing",
        step: function (now) {
          $(this).text(Math.ceil(now));
        },
      }
    );
});

//slider
$(function () {
  $("#slider-range").slider({
    range: true,
    min: 0,
    max: 5000000,
    values: [100000, 3000000],
    slide: function (event, ui) {
      $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
    },
  });
  $("#amount").val(
    "$" +
      $("#slider-range").slider("values", 0) +
      " - $" +
      $("#slider-range").slider("values", 1)
  );
});

//read more - read less property details
function readMoreFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}

// document.querySelector('.postform1').options[document.querySelector('.postform1').selectedIndex].text

//filters
const filter1 = document.querySelector(".postform1");
const filter2 = document.querySelector(".postform2");
const filter3 = document.querySelector(".postform3");
const properties = document.querySelectorAll(".prop");

filter1.addEventListener("change", function () {
  //for each property, check if it contains the selected filter
  //if it does, display it, if not remove it
  properties.forEach((prop) => {
    if (
      prop.classList.contains(
        String(filter1.options[filter1.selectedIndex].text)
          .toUpperCase()
          .split(" ")
          .join("")
      )
    )
      prop.classList.remove("hidden");
    else prop.classList.add("hidden");
  });
});

filter2.addEventListener("change", function () {
  //for each property, check if it contains the selected filter
  //if it does, display it, if not remove it
  properties.forEach((prop) => {
    if (
      prop.classList.contains(
        String(filter2.options[filter2.selectedIndex].text)
          .toUpperCase()
          .split(" ")
          .join("")
      )
    )
      prop.classList.remove("hidden");
    else prop.classList.add("hidden");
  });
});

filter3.addEventListener("change", function () {
  //for each property, check if it contains the selected filter
  //if it does, display it, if not remove it
  properties.forEach((prop) => {
    if (
      prop.classList.contains(
        String(filter3.options[filter3.selectedIndex].text)
          .toUpperCase()
          .split(" ")
          .join("")
      )
    )
      prop.classList.remove("hidden");
    else prop.classList.add("hidden");
  });
});
