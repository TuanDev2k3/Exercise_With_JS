let productBox = document.getElementById("productBox")
let frontImg = document.getElementById("frontImg")
let backImg = document.getElementById("backImg")

function flipRight(){
    productBox.style.transform = "rotateY(180deg)"
    frontImg.style.left = "650px"
    backImg.style.left = "20px"
    frontImg.style.transform = "rotate(-30deg)"
    backImg.style.transform = "rotate(0)"
}
function flipLeft(){
    productBox.style.transform = "rotateY(0)"
    frontImg.style.left = "20px"
    backImg.style.left = "-650px"
    frontImg.style.transform = "rotate(0)"
    backImg.style.transform = "rotate(-30deg)"
}