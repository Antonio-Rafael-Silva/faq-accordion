function toggleAnswer(questionId, answerId) {
    const question = document.getElementById(questionId);
    const answer = document.getElementById(answerId);
    const img = question.querySelector("img");


    question.addEventListener("click", () => {
        const isInactive = answer.classList.contains("inactive");
        answer.classList.toggle("inactive");

        console.log(answerId);

        img.src = isInactive ? "assets/img/icon-minus.svg" : "assets/img/icon-plus.svg";

    })
}

toggleAnswer("question-01", "answer-01");
toggleAnswer("question-02", "answer-02");
toggleAnswer("question-03", "answer-03");
toggleAnswer("question-04", "answer-04");

