const list = document.querySelectorAll(".tab");
function activeLink() {
  list.forEach((item) => item.classList.remove("active"));
  this.classList.add("active");
}
list.forEach((item) => item.addEventListener("click", activeLink));

function setupTabs() {
  document.querySelectorAll(".tabs_button").forEach((button) => {
    button.addEventListener("click", () => {
      const tabsContainer = document.querySelector(".pages");
      const tabNumber = button.dataset.forTab;
      const tabToActivate = tabsContainer.querySelector(
        `.page[data-page="${tabNumber}"]`
      );

      tabsContainer.querySelectorAll(".page").forEach((page) => {
        page.classList.remove("is-active");
      });

      tabToActivate.classList.add("is-active");
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  setupTabs();
});
