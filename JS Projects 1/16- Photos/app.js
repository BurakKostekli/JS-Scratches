const count = 15;
const apiKey = "eNfrP8Y4bWfpkW-vARw6EdAebYhihWsegW9GhjZ2XC8";
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;
const imageContainer = document.getElementById("imageDiv");
const loader = document.getElementById("loading");

let isDownloaded = false;

let imagesLoaded = 0;
let totalImages = 0;


let imagesArray = []
getImages();
async function getImages() {
    try {
        const response = await fetch(apiUrl);
        imagesArray = await response.json();
        displayImages();
    }

    catch(error) {

    }
}

function setAttributes(element,attributes) {
    for (const key in attributes) {
        element.setAttribute(key, attributes[key]);
    }
}


function displayImages() {
    imagesLoaded = 0;
    totalImages = imagesArray.length;

    imagesArray.forEach((image) => {
        const item =document.createElement("a");
        // item.setAttribute("href", image.urls.small);
        setAttributes(item, {href: image.urls.small});

        const img = document.createElement("img");
        // img.setAttribute("src",image.urls.small);
        // img.setAttribute("alt",image.alt_description);
        setAttributes(img, {
            src: image.urls.small,
            alt: image.alt_description
        })
        
        img.addEventListener("load",imageLoaded);

        item.appendChild(img);
        imageContainer.appendChild(item);
    })
}


function imageLoaded(){
    imagesLoaded++;
    if(imagesLoaded === totalImages){
        isDownloaded = true;
        loader.hidden = true;
    }
}




window.addEventListener("scroll",()=> {
    console.log("tetiklendi");

    if(window.innerHeight + window.scrollY > document.body.offsetHeight-1000 && isDownloaded){
        getImages();
    }
})
