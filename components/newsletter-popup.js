const modal = document.getElementById("newsletter-modal");
if(modal){
    if (
    window.location.pathname.endsWith("/") ||
    window.location.pathname.endsWith("index.html")
) {

    if (!localStorage.getItem("newsletterSeen")) {

        setTimeout(() => {
    modal.classList.remove("hidden");
}, 2500);

    }

}

function closeModal() {

    modal.classList.add("hidden");

    localStorage.setItem("newsletterSeen", "true");

}

document
.querySelector(".modal-close")
.addEventListener("click", closeModal);

modal.addEventListener("click", e => {

    if (e.target === modal)
        closeModal();

});

document.addEventListener("keydown", e => {

    if (e.key === "Escape")
        closeModal();

});
}