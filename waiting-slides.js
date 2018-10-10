curSlide = 0;
frames = null;
timer  = null;

document.body.onload = initSlides;

function initSlides()
{
    for (var i = 0; i < slides.length; i++) {
        frame = document.createElement("iframe");
        frame.src = slides[i];
        frame.frameBorder = "0";
        document.querySelector("body").appendChild(frame);
    }

    frames = document.querySelectorAll("iframe");
    timer  = document.querySelector(".timer");

    frames[0].classList.add("slideIn");
    timer.addEventListener("animationiteration", progressSlides, false);
}

function progressSlides()
{
    frames[curSlide].classList.remove("slideIn");
    frames[curSlide].classList.add("slideOut");

    curSlide = (curSlide + 1) % slides.length;

    frames[curSlide].classList.add("slideIn");
}