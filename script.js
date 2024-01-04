const email = document.getElementById("emailarea");
const password = document.getElementById("passwordarea");

enterBTN.onclick = function () {
  console.log(email.value);
  console.log(password.value);
};

resetBTN.onclick = function () {
  email.value = "";
  password.value = "";
};
