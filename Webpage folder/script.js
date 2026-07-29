// 1. CLOCK
function updateClock() {
    document.getElementById("clock").innerHTML = new Date().toLocaleTimeString();
}
setInterval(updateClock, 1000);
updateClock();

// 2. BUTTON
document.getElementById("specialBtn").onclick = function () {
    document.getElementById("specialText").innerHTML = "Today's Special: Chicken Tikka Biryani with Raita!";
};

function upDate(previewPic) {
    let imageDiv = document.getElementById("image");

    imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
    imageDiv.style.backgroundSize = "cover";
    imageDiv.style.backgroundPosition = "center";
    imageDiv.innerHTML = previewPic.alt;
}

function unDo() {
    let imageDiv = document.getElementById("image");

    imageDiv.style.backgroundImage = "";
    imageDiv.innerHTML = "Hover over a food image to display it here.";
}



// 4. TAB INDEX - SIRF YE CHAHIYE
function addTabIndex() {
    var images = document.getElementsByClassName("preview");
    for (var i = 0; i < images.length; i++) {
        images[i].setAttribute("tabindex", "0");
    }
    console.log("Tabindex Added");
}

// TAB KE LIYE NAYA CODE
const links = document.querySelectorAll(".preview-link");

links.forEach(link => {
    // Jab Tab se focus aaye
    link.onfocus = function () {
        let img = this.querySelector(".preview");
        upDate(img);
    }

    // Jab focus hat jaye
    link.onblur = function () {
        unDo();
    }

    // Click karne se page upar na jaye
    link.onclick = function (e) {
        e.preventDefault();
    }
});

// Page load hone ke baad function chalega
window.onload = addTabIndex;

const buttons = document.querySelectorAll(".food-btn");
const bigBox = document.getElementById("image");

buttons.forEach(btn => {
    btn.addEventListener("focus", function () {
        let img = this.querySelector("img");
        bigBox.innerHTML = img.alt;
        bigBox.style.backgroundImage = "url('" + img.src + "')";
    });

    btn.addEventListener("blur", function () {
        bigBox.innerHTML = "Tab daba kar image select karo";
        bigBox.style.backgroundImage = "";
    });
});