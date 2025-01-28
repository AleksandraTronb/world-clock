function ChangeName() {
  let name = prompt("What is your name?");
  console.log(name);
  let changetitle = document.querySelector("#title-name");
  changetitle.innerHTML = `Hello ${name}`;
}
let ChangeButton = document.querySelector("#button-name");
ChangeButton.addEventListener("click", ChangeName);
