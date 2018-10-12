curSlide = 0;
frames = [];
fileToFrame = {};
timer  = null;

document.body.onload = initSlides;

function initSlides()
{
    for (var i = 0; i < slides.length; i++) {
        if (slides.indexOf(slides[i]) === i)
        {
            frame = document.createElement("iframe");
            frame.src = slides[i];
            frame.frameBorder = "0";
            document.querySelector("body").appendChild(frame);

            j = frames.push(frame) - 1;
            fileToFrame[slides[i]] = j;
        }
        else
        {
            frames.push(frames[fileToFrame[slides[i]]]);
        }
    }

    timer  = document.querySelector("#timer");

    timer.addEventListener("animationiteration", progressSlides, false);

    frames[0].onload = function()
    {
        timer.classList.add("timer");
        timer.parentElement.classList.add("slideUp");
        frames[0].classList.add("slideIn");
        document.querySelector(".loading").classList.add("slideOut");
    };
}

function progressSlides()
{
    frames[curSlide].classList.remove("slideIn");
    frames[curSlide].classList.add("slideOut");

    curSlide = (curSlide + 1) % frames.length;

    frames[curSlide].classList.add("slideIn");
}