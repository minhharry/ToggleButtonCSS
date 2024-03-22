const body = document.body;
const button = document.getElementById("check");

button.addEventListener("change", (e) => {
    if (e.target.checked) {
        body.style.background = "#0C090A";
    } else {
        body.style.background = "white";
    }
})
