//fetch content in json file and will return a Promise - either a Response object with the content in json file or error if it can't
fetch("products.json")
    .then(response => response.json()) //once fetched, response object written in json format, which will turn into usable js materials
    .then(data => { //use data for..
        for (const category in data) { //category: discography, fashion, bunini, loop through each category
        const categoryName = category.toLowerCase(); //category name need to match the ID on HTML
        const container = document.getElementById(`${categoryName}Products`); //match discographyProducts, fashionProducts, buniniProducts

        if (!container) continue; //continue if container/ID not found in HTML

        data[category].forEach(product => { //iterate through every product in category
            const productDiv = document.createElement("div"); //will create a new div - productDiv
            productDiv.classList.add("product"); //adds product class to the div

            //this is what I commented out on my HTML, so JS should display this in its place again
            productDiv.innerHTML = 
            `<img src="${product.image}" alt="${product.alt}">
            <p class="productName">${product.name}</p>
            <p class="description">${product.description}</p>
            <h4 class="price">$${product.price.toFixed(2)}</h4>
            <div>
                <button class="removeCartBtn">-</button>
                <button class="addCartBtn">+</button>
            </div>`;
            container.appendChild(productDiv); //will take its place in productDiv and display on DOM
        });
        }

        console.log(data); //inspected console in the browser, Response object present

        //addeventlistener for filter by price
        const priceRadios = document.querySelectorAll('input[name="price"]');
        priceRadios.forEach(radio => {
            radio.addEventListener("change", sortByPrice);
        });

        //addeventlistener for filter by product
        const productCheckboxes = document.querySelectorAll('input[name="product-type"]');
        productCheckboxes.forEach(checkbox => {
            checkbox.addEventListener("change", sortByProduct);
        });

    })
    .catch(error => console.error("Error loading products:", error)); //display error if Response object not found or data not fetched

//filter by price
function sortByPrice() {
    const selected = document.querySelector('input[name="price"]:checked')?.value;
    if (!selected) return;

    const categories = ["discography", "fashion", "bunini"];

    categories.forEach(category => {
        const container = document.getElementById(`${category}Products`);
        const productsArray = Array.from(container.querySelectorAll(".product"));

        productsArray.sort((a, b) => {
            const priceA = parseFloat(a.querySelector(".price").textContent.replace("$", ""));
            const priceB = parseFloat(b.querySelector(".price").textContent.replace("$", ""));
            return selected === "low-to-high" ? priceA - priceB : priceB - priceA;
        });

        productsArray.forEach(product => container.appendChild(product));
    });
}

//filter by product
function sortByProduct() {
    const selectedTypes = Array.from(document.querySelectorAll('input[name="product-type"]:checked'))
        .map(cb => cb.value);

    const allSections = ["discography", "fashion", "bunini"];

    allSections.forEach(type => {
        const section = document.getElementById(type);
        if (!section) return;

        //if no checkboxes selected, show all products
        if (selectedTypes.length === 0) {
            section.style.display = "block";
        } else {
            //show products if it's one of the selected types, otherwise hide it
            section.style.display = selectedTypes.includes(type) ? "block" : "none"; //conditional exp
        }
    });
}

function displaySidebar() {
    const sidebar = document.querySelector(".sidebar");

    sidebar.style.display = "flex";
}

function hideSidebar() {
    const sidebar = document.querySelector(".sidebar");

    sidebar.style.display = "none";
}




