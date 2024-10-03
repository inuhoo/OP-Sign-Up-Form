document.addEventListener("DOMContentLoaded", (event) => {
  const inputs = document.querySelectorAll(".password");
  const matchMessage = document.querySelector("#matchmessage");
  const submitbtn = document.querySelector(".submitbtn");

  function passwordMatch() {
    if (inputs[0].value === inputs[1].value) {
      matchMessage.textContent = "";
      submitbtn.disabled = false;
    } else {
      matchMessage.textContent = "* Passwords do not match";
      submitbtn.disabled = true;

    }
  }

  inputs[0].addEventListener("input", passwordMatch);
  inputs[1].addEventListener("input", passwordMatch);
});
