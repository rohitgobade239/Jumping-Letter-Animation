const container = document.querySelectorAll("span"); // Select all <span> elements
console.log(container);

container.forEach((item) => { // Loop through each span
    item.addEventListener("click", () => { // Add click event listener to each span
        item.classList.toggle("active"); // Toggle "active" class on click
    });
});


// Array.forEach((item,index)=>{
