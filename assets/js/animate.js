$(window).scroll(function(){
    var wScroll = $(this).scrollTop();
    console.log(wScroll);
});


var titleSlider = document.querySelector(".services .title h2");
var productSlider = document.querySelector(".cssbuttons-io-button");
var downloadSlider = document.querySelector(".download-button");

var chairBg = document.querySelector(".chair-bg");

var textContent = document.querySelector(".text-content");

var roomBg = document.querySelector(".room-bg")

var caption = document.querySelector(".main-banner .caption");
caption.classList.add("animate__animated", "animate__fadeInUp");
caption.style.setProperty("--animate-duration", "2s");

var navBar = document.querySelector(".main-nav");
navBar.classList.add("animate__animated", "animate__fadeInDown")
navBar.style.setProperty("--animate-duration", "2s");




// SCROLL DOWN
window.addEventListener("scroll", function(){
    let currentScrollPos = this.window.pageYOffset;
    if(currentScrollPos > 800){
        titleSlider.classList.add("animate__animated", "animate__fadeInUpBig");
        titleSlider.style.setProperty("--animate-duration", "1s");
        titleSlider.style.opacity = "1";
    }

    if(currentScrollPos > 1300){
        productSlider.classList.add("animate__animated", "animate__fadeInUpBig");
        productSlider.style.setProperty("--animate-duration", "1s");
        productSlider.style.opacity = "1";
    }

    if(currentScrollPos > 1500){
        downloadSlider.classList.add("animate__animated", "animate__fadeInUpBig");
        downloadSlider.style.setProperty("--animate-duration", "1s");
        downloadSlider.style.opacity = "1";
    }
    if(currentScrollPos > 2100){
        chairBg.classList.add("animate__animated", "animate__fadeInUpBig");
        chairBg.style.setProperty("--animate-duration", "1s");
        chairBg.style.opacity = "1";
    }


    if(currentScrollPos > 3200){

        textContent.classList.add("animate__animated", "animate__fadeInUpBig")
        textContent.style.setProperty("--animate-duration", "1s");
        textContent.style.opacity = "1";

    }
    if(currentScrollPos > 3800){
        roomBg.classList.add("animate__animated", "animate__fadeInUpBig")
        roomBg.style.setProperty("--animate-duration", "1s");
        roomBg.style.opacity = "1";

    }


});