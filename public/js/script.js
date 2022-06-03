
$(document).ready(function() {
    $('#products-carousel, #embroidery-carousel').each(function(){
        $(this).owlCarousel({
            loop: true,
            margin: 10,
            nav: false,
            autoplay:true,
            autoplayTimeout:3000,
            autoplayHoverPause:true,
            responsiveClass: true,
            center: true,
            items: 1,
            responsive: {
                0: {
                items: 1,
                },
                600: {
                items: 2,
                },
                1000: {
                items: 3,
                margin: 20
                },
                1100: {
                    items: 4,
                    margin: 20
                }
    
            }
        }); 
    });
});

createEmbroideryCarousel();
createProductsCarousel();

function createEmbroideryCarousel() {
    let owlStageOuterCarousel = document.getElementById("owlStage");
    for (let embroidery of embroideries) { 
        let owlItem = document.createElement("div");
        owlItem.setAttribute("class", "owl-item");
        owlStageOuterCarousel.appendChild(owlItem);
        let item = document.createElement("img");
        let itemAttributes = [
            ["style", "height: 300px; object-fit: contain"],
            ["class", "img-fluid "],
            ["src", "../img/embroidery/" + embroidery.url],
            ["alt", embroidery.description]
        ];
        setAttributes(item, itemAttributes);
        owlItem.appendChild(item);
        let imageTitle = document.createElement("p");
        imageTitle.setAttribute("class", "text-center black pt-3");
        imageTitle.textContent = embroidery.description;
        owlItem.appendChild(imageTitle);
    }
}

function createProductsCarousel() {
    let owlStageOuterCarousel = document.getElementById("owlStageProducts");
    for (let product of products) {
        let owlItem = document.createElement("div");
        owlItem.setAttribute("class", "owl-item");
        owlStageOuterCarousel.appendChild(owlItem);
        let itemContainer = document.createElement("a");
        itemContainer.setAttribute("href", "./product?id=" + product.name)
        owlItem.appendChild(itemContainer);
        let item = document.createElement("img");
        let itemAttributes = [
            ["class", "item img-fluid"],
            ["src", "../img/" + product.name +"/" + product.colors[0] + ".png"],
            ["alt", product.description + "couleur " + product.colors[0]]
        ];
        setAttributes(item, itemAttributes);
        itemContainer.appendChild(item);
        let imageTitle = document.createElement("p");
        imageTitle.setAttribute("class", "text-center black");
        imageTitle.textContent = product.colors[0];
        itemContainer.appendChild(imageTitle);
    }
}


function setAttributes(element, attributes) {
    for (let attribute of attributes) {
        element.setAttribute(attribute[0], attribute[1]);
    }
}