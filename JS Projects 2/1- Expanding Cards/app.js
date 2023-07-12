const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
    panel.addEventListener("click", () => {
        resetAll();
        panel.classList.add("active");
    });
});

function resetAll() {
    panels.forEach((panel) => {
        panel.classList.remove("active");
    });
};
