const filters = document.querySelectorAll(".filter");
const cards = document.querySelectorAll(".project-card");

filters.forEach(filter => {
    filter.addEventListener("click", () => {
        const category = filter.getAttribute("data-filter");

        filters.forEach(f => f.classList.remove("active"));
        filter.classList.add("active");

        cards.forEach(card => {
            const categories = card.getAttribute("data-category").split(" ");
            if (category === "all" || categories.includes(category)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    });
});
