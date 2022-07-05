const collapsible = document.querySelectorAll(".collapse");
collapsible.forEach((item) =>
    item.addEventListener("click", function () {
        this.classList.toggle("collapse-expand");
    })
    
);