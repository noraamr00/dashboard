let icons = document.querySelectorAll(".delete")


function deleteone() {
    icons.forEach(icon => {
        icon.addEventListener("click", (e) => {
            icon.parentElement.remove()
        })
    });
}
deleteone()