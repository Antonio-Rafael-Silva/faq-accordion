const questions = document.querySelectorAll(".question");

questions.forEach((question) => {
  const answer = question.nextElementSibling;
  const icon = question.querySelector("img");

  question.addEventListener("click", () => {
    const isInactive = answer.classList.contains("inactive");

    question.setAttribute("aria-expanded", isInactive ? "true" : "false");
    icon.src = isInactive
      ? "assets/img/icon-minus.svg"
      : "assets/img/icon-plus.svg";

    answer.classList.toggle("inactive");
  });
});

