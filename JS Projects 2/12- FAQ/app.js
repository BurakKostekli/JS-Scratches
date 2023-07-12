const faqDiv = document.querySelectorAll(".faq");

faqDiv.forEach((faqDiv) => {
    faqDiv.addEventListener("click", () => {
        faqDiv.classList.toggle("active");
    })
})


