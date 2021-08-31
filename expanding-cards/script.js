const panels = document.querySelectorAll(".panel"); //=> Node list

/*
1. Loop through all cards
2. Remove active class from another cards
3. Add active class to the card just clicked
*/

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeActiveClasses();
    panel.classList.add("active");
  });
});

function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}
