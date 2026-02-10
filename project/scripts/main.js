const topics = [
    { name: "HTML", description: "Structure of web pages" },
    { name: "CSS", description: "Styling and layout" },
    { name: "JavaScript", description: "Interactivity and logic" }
];

function displayTopics() {
    const list = document.querySelector("#topics");

    if (list) {
        list.innerHTML = topics
            .map(topic => `<li>${topic.name}: ${topic.description}</li>`)
            .join("");
    }
}

function handleForm(event) {
    event.preventDefault();

    const name = document.querySelector("#name").value;
    const issue = document.querySelector("#issue").value;
    const message = document.querySelector("#message");

    if (name && issue) {
        const request = {
            user: name,
            problem: issue
        };

        localStorage.setItem("supportRequest", JSON.stringify(request));

        message.textContent = `Thank you, ${name}. Your ${issue} issue has been saved.`;
    }
}

document.addEventListener("DOMContentLoaded", () => {
    displayTopics();

    const form = document.querySelector("#supportForm");
    if (form) {
        form.addEventListener("submit", handleForm);
    }
});
