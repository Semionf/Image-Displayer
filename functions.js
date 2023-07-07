// const webAPI =
//   "https://pixabay.com/api/?key=38029360-2f59e966099594fd5031af793&q=";
// const image_type = "&image_type=photo&pretty=true";
// function searchImages() {
//   let searchWords = "" + document.getElementById("searchBox").value;
//   let dataAPI = webAPI + searchWords.replace(/\s+/g, "+") + image_type;
//   dataAPI = webAPI + searchWords + image_type;
// }

const webAPI =
  "https://pixabay.com/api/?key=38029360-2f59e966099594fd5031af793&q=";
const image_type = "&image_type=photo&pretty=true";

function searchImages() {
  let searchWords = "" + document.getElementById("searchBox").value;
  let dataAPI = webAPI + searchWords.replace(/\s+/g, "+") + image_type;

  fetch(dataAPI)
    .then((response) => response.json())
    .then((data) => {
      if (data.hits && data.hits.length > 0) {
        const imageUrls = data.hits.map((hit) => hit.webformatURL);
        // Use the imageUrls array to display images on your HTML page
        displayImages(imageUrls);
      } else {
        // Handle the case when no images are found
        console.log("No images found");
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

function displayImages(imageUrls) {
  const gallery = document.getElementById("gallery");

  // Clear existing images
  gallery.innerHTML = "";

  // Create and append img elements with the retrieved image URLs
  imageUrls.forEach((url) => {
    const img = document.createElement("img");
    img.classList.add("my-img-card");
    img.src = url;
    gallery.appendChild(img);
  });
}
