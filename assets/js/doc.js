const accordianItems = document.querySelectorAll(".tab");

accordianItems.forEach(function (item) {
    item.addEventListener("click", function () {
        const isItemOpen = item.classList.contains("active"); //returns false
        accordianItems.forEach(function (item) { item.classList.remove("active") });
        if (!isItemOpen) //returns true
        {
            item.classList.add("active");
        }
    })
});


