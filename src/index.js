import { registerImage } from "./lazy.js";
import { createImageNodes } from "./utils.js";


//Cargar imagenes default

const allImages = document.querySelectorAll("img[data-src]")
console.log(allImages)
allImages.forEach(registerImage)

// Agregar nuevas imagenes
const imageContainer = document.querySelector("#images");
const button = document.querySelector("button[type='submit']");
button.addEventListener("click", () => {
  const [node, image] = createImageNodes();
  registerImage(image);
  imageContainer.append(node);
});


//borrar

const clean = document.querySelector("button[type='reset']")
clean.addEventListener("click", () => {
  imageContainer.innerHTML = "";
});



const removeButton = document.querySelector('#Remove')
removeButton.className = 'text-white px-3 py-2 rounded-lg bg-red-900 focus:outline-none';

const removeImage = () => {
        const lastImage = imageContainer.lastChild;
        imageContainer.removeChild(lastImage);

}

removeButton.addEventListener('click', removeImage);