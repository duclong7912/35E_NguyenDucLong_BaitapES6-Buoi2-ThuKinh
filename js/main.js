
let dataGlasses = [
    { id: "G1", src: "./img/g1.jpg", virtualImg: "./img/v1.png", brand: "Armani Exchange", name: "Bamboo wood", color: "Brown", price: 150, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ea voluptates officiis? " },
    { id: "G2", src: "./img/g2.jpg", virtualImg: "./img/v2.png", brand: "Arnette", name: "American flag", color: "American flag", price: 150, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In assumenda earum eaque doloremque, tempore distinctio." },
    { id: "G3", src: "./img/g3.jpg", virtualImg: "./img/v3.png", brand: "Burberry", name: "Belt of Hippolyte", color: "Blue", price: 100, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit." },
    { id: "G4", src: "./img/g4.jpg", virtualImg: "./img/v4.png", brand: "Coarch", name: "Cretan Bull", color: "Red", price: 100, description: "In assumenda earum eaque doloremque, tempore distinctio." },
    { id: "G5", src: "./img/g5.jpg", virtualImg: "./img/v5.png", brand: "D&G", name: "JOYRIDE", color: "Gold", price: 180, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error odio minima sit labore optio officia?" },
    { id: "G6", src: "./img/g6.jpg", virtualImg: "./img/v6.png", brand: "Polo", name: "NATTY ICE", color: "Blue, White", price: 120, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit." },
    { id: "G7", src: "./img/g7.jpg", virtualImg: "./img/v7.png", brand: "Ralph", name: "TORTOISE", color: "Black, Yellow", price: 120, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sint nobis incidunt non voluptate quibusdam." },
    { id: "G8", src: "./img/g8.jpg", virtualImg: "./img/v8.png", brand: "Polo", name: "NATTY ICE", color: "Red, Black", price: 120, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, unde enim." },
    { id: "G9", src: "./img/g9.jpg", virtualImg: "./img/v9.png", brand: "Coarch", name: "MIDNIGHT VIXEN REMIX", color: "Blue, Black", price: 120, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit consequatur soluta ad aut laborum amet." }
];

let showGlasses = () => {
    let content = ``;
    for(let i = 0; i < dataGlasses.length; i++) {
        content += `
        <img class="col-4" src=${dataGlasses[i].src}>
        `
    }

    document.querySelector("#vglassesList").innerHTML = content
}
showGlasses();

let getGlasses = () => {
    let glasses = document.querySelectorAll("#vglassesList .col-4");
    for (let i = 0; i < glasses.length; i++) {
        glasses[i].addEventListener("click", () => {
            let listGlasses = [...dataGlasses];
            renderAvatarGlasses(listGlasses[i].virtualImg);
            renderInfoGlasses(listGlasses[i].name, listGlasses[i].brand, listGlasses[i].color, listGlasses[i].price, listGlasses[i].description)
        })
    }
}
getGlasses();

function renderAvatarGlasses(img) {
    let content = ``;
    content += `
        <img src= ${img}>
    `
    document.querySelector(".vglasses__model").innerHTML = content;
}

function renderInfoGlasses(name, brand, color, price, info) {
    let content = ``;

    content += `
        <div class="glasses__head">
            <span>${name} - </span>
            <span>${brand} </span>
            <span>(${color})</span>
        </div>
        <div class="glasses__body d-flex align-items-center pb-2">
            <div class="glasses__price">
                <h6 class="mb-0">${price}$</h6>
            </div>
            <div class="glasses__text">
                <span class="ml-3 text-success">Stocking</span>
            </div>
        </div>
        <div class="glasses__footer">
            <p class="mb-0">${info}</p>
        </div>
    `
    document.querySelector(".vglasses__info").style.maxHeight = "400px";
    document.querySelector(".vglasses__info").style.padding = "20px";
    document.querySelector(".vglasses__info").innerHTML = content;
}

