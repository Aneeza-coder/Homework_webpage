function upDate(previewPic) {
    const image = document.getElementById("image");

    image.innerHTML = previewPic.alt;
    image.style.backgroundImage = "url('" + previewPic.src + "')";
}

function unDo() {
    const image = document.getElementById("image");

    image.innerHTML = "Hover over a food image to display it here.";
    image.style.backgroundImage = "";
}