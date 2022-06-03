createDropDownMenu();

function createDropDownMenu() {
    let dropdownMenu = document.getElementById("dropdownMenu");
    for (let product of products) {
        let dropdownItem = document.createElement("a");
        let dropDownItemattributes = [
            ["class", "dropdown-item"],
            ["href", "./product?id=" + product.name]
        ]
        setAttributes(dropdownItem, dropDownItemattributes);
        dropdownMenu.appendChild(dropdownItem)
        let item = document.createElement("div");
        item.setAttribute("class", "d-flex justify-content-start align-items-center");
        dropdownItem.appendChild(item);
        let image = document.createElement("img");
        let imageAttributes = [
            ["src", "../img/" + product.name +"/" + product.colors[1] + ".png"],
            ["alt", product.description + "couleur " + product.colors[1]],
            ["style", "width: 25px;"],
        ]
        setAttributes(image, imageAttributes);
        item.appendChild(image);
        let description = document.createElement("p");
        description.setAttribute("class", "my-auto px-5");
        description.textContent = product.name;
        item.appendChild(description);
    }
}

function setAttributes(element, attributes) {
    for (let attribute of attributes) {
        element.setAttribute(attribute[0], attribute[1]);
    }
}
