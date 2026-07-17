// const modal = document.getElementById("newsletter-modal");
// console.log(window.location.pathname);
// console.log(localStorage.getItem("newsletterSeen"));

// if (
//     window.location.pathname.endsWith("/") ||
//     window.location.pathname.endsWith("index.html")
// ) {
//     console.log("Homepage detected");

//     if (!localStorage.getItem("newsletterSeen")) {
//         console.log("Showing popup");

//         setTimeout(() => {
//             modal.classList.remove("hidden");
//         }, 2500);
//     }
// }
// console.log("script loaded xddddddd");
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