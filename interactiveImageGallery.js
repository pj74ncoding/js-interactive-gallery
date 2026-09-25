const gallerySection = document.getElementById("gallery-section");
const addImageButton = document.getElementById("Add-image-button");

addImageButton.addEventListener("click", () => {
  const urlInput = document.getElementById("url-input-field");
  let urladdress = urlInput.value;
  console.log(urladdress);

  if (!urlInput.value) {
    alert("Please Enter an URL");
  } else {
    urlInput.value = "";

    const galleryDiv = document.createElement("div");
    galleryDiv.classList.add("galleryDiv");

    const image = document.createElement("img");
    image.classList.add("gallery-image");
    image.src = urladdress;

    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove Image";
    removeButton.classList.add("remove-button");
    removeButton.onclick = () => removeImage();
    
    gallerySection.appendChild(galleryDiv);
    galleryDiv.appendChild(image);
    galleryDiv.appendChild(removeButton);
  }
});

function removeImage() {
  gallerySection.innerHTML = "";
}
