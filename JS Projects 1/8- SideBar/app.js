const bars = document.querySelector(".fa-bars");
const sidebar = document.querySelector(".sidebar");
const closeButton = document.querySelector(".fa-xmark")

bars.addEventListener("click", ()=> {
    sidebar.classList.toggle("showSidebar")
})

closeButton.addEventListener("click", ()=> {
    sidebar.classList.remove("showSidebar");
})

