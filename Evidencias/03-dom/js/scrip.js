const redColor = document.querySelector(".red");
const blackColor = document.querySelector(".black");
const imageCard = document.querySelector(".product-image");
const feedbackBtn = document.querySelector(".feedback");
const grayColor = document.getElementsByClassName("gray");
const cartButton = document.getElementById("button");
const itemTag = document.getElementsByTagName("h3")[0];

redColor.addEventListener("click", function(){
    cartButton.style.background = "red";
    itemTag.style.backgroundColor = "red";
    imageCard.style.backgroundImage = "url('https://m.atcdn.co.uk/a/media/w480/206bdc23e920431aa15ad4c7207fd4aa.jpg')";
});

grayColor[0].addEventListener("click", function(){
    cartButton.style.background = "gray";
    itemTag.style.backgroundColor = "gray";
    imageCard.style.backgroundImage = 'url("https://vehicle-images.carscommerce.inc/ba61-110012062/4JGFD8KBXTB565548/11b746d0547843357ab8e20017a4e084.jpg")';
});

blackColor.addEventListener("click", function(){
    cartButton.style.background = "black";
    itemTag.style.backgroundColor = "black";
    imageCard.style.backgroundImage = "url('https://espaillatmotors.com/website/wp-content/uploads/2023/07/1-12-scaled.jpg')";
});

const cart = () => {
    cartButton.style.display = "none";
    feedbackBtn.style.display = "block";
};
cartButton.addEventListener("click", cart);

const feedback = () => {
    cartButton.style.display = "block";
    feedbackBtn.style.display = "none";
};
feedbackBtn.addEventListener("click", feedback);
