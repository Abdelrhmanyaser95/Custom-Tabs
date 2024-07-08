const tabcontainer = document.querySelector(".navigation");
const tabBuutton = document.querySelectorAll(".tab-buttons");
const tabContent = document.querySelectorAll(".content");

tabcontainer.addEventListener("click", (event) => {
  // console.log(event.target.dataset);
  const currentId = event.target.dataset.id;

  if (currentId) {
    tabBuutton.forEach((btn) => {
      btn.classList.remove("active");
    });
    event.target.classList.add("active");

    tabContent.forEach((content) => {
      content.classList.remove("active");
    });
    const currentElement = document.getElementById(currentId);
    currentElement.classList.add("active");
  }
});
