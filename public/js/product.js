let productName = new URL(window.location.href).searchParams.get("id");
let itemsNumber = 0;
let product = products.find(element => productName == element.name);
let pageLink = document.getElementById("langageLink")
pageLink.setAttribute("href", "./en/product?id=" + productName);


displayProduct();
createCarousel();

function displayProduct() {
    document.getElementById("productName").textContent = "MODELE " + product.name;
    document.getElementById("productSizes").textContent ="Tailles disponibles : " + product.size;
    document.getElementById("productComposition").textContent = "Composition : " + product.composition;
    document.getElementById("productWholesalePrice").textContent = "Wholesale price : " + product.wholesalePrice;
    document.getElementById("productRetailPrice").textContent = "Retail price : " + product.retailPrice;
    document.getElementById("productImage").setAttribute("src", "./img/" + product.name + "/" + product.colors[0] + ".png");
    document.getElementById("productImage").setAttribute("alt", "veste bombers " + product.name + " couleur " + product.colors[0]);
}

function createCarousel() {
    let owlStageOuterCarousel = document.getElementById("owlStage");
    itemsNumber = product.colors.length;
    for (let color of product.colors) {
        let owlItem = document.createElement("div");
        owlItem.setAttribute("class", "owl-item");
        owlStageOuterCarousel.appendChild(owlItem);
        let itemContainer = document.createElement("a");
        itemContainer.setAttribute("id", "itemContainer");
        itemContainer.setAttribute("href", "./product?id=" + productName)
        owlItem.appendChild(itemContainer);
        let item = document.createElement("img");
        let itemAttributes = [
            ["class", "item img-fluid"],
            ["src", "./img/" + product.name +"/" + color + ".png"],
            ["alt", product.description + "couleur " + color]
        ];
        setAttributes(item, itemAttributes);
        itemContainer.appendChild(item);
        let imageTitle = document.createElement("p");
        imageTitle.setAttribute("class", "text-center");
        imageTitle.textContent = color;
        itemContainer.appendChild(imageTitle);
    }
}

function setAttributes(element, attributes) {
    for (let attribute of attributes) {
        element.setAttribute(attribute[0], attribute[1]);
    }
}

$(function() {
    $('#product-carousel').owlCarousel({
        loop: false,
        dots: false, 
        margin: 10,
        nav: false,
        mouseDrag: false,
        touchDrag: true,
        responsiveClass: true,
        navText:["<div class='nav-btn prev-slide'><i class='fa-solid fa-chevron-left'></i></div>","<div class='nav-btn next-slide'><i class='fa-solid fa-chevron-right'></i></div>"],
        items: 1,
        onInitialize: function(event) {
            if (itemsNumber <= 3) {
                this.options.navText = false;
            }
            else {
                this.settings.navText = true;
            }
        },
        responsive: {
            0: {
            items: 2,
            },
            600: {
            items: 3,
            },
            1000: {
            items: 4,
            margin: 20
            },
            1100: {
                items: 4,
                margin: 20
            }

        }
    });
});

$("#product-carousel").click(function(event) {
    if (event.target.hasAttribute("src")) {
        event.preventDefault();
        const newMainProductPath = event.target.getAttribute("src");
        document.getElementById("productImage").setAttribute("src", newMainProductPath);
    }
});

    
