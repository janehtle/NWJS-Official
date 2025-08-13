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
            <h4 class="price">$${product.price.toFixed(2)}</h4>`;
            container.appendChild(productDiv); //will take its place in productDiv and display on DOM
        });
        }

        console.log(data); //inspected console in the browser, Response object present

    })
    .catch(error => console.error("Error loading products:", error)); //display error if Response object not found or data not fetched




