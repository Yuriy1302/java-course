const tabLinks = document.querySelectorAll(".modules-tablinks");
const tabContent = document.querySelectorAll(".tabcontent");

tabLinks.forEach(function(el) {
  el.addEventListener("click", openTabs);
});

function openTabs(el) {
  const btnTarget = el.currentTarget;
  const module = btnTarget.dataset.module;

  tabContent.forEach(function(el) {
    el.classList.remove("tabcontent-active");
  });

  tabLinks.forEach(function(el) {
      el.classList.remove("modules-tablinks-active");
  });

  document.querySelector("#" + module).classList.add("tabcontent-active");
  
  btnTarget.classList.add("modules-tablinks-active");
}
