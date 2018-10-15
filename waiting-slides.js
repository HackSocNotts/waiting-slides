curSlide = 0;
frames = [];
fileToFrame = {};
timer  = null;

document.body.onload = initSlides;
document.onkeypress = handleKeypress;

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

    timer           = document.querySelector("#timer");
    transitionback  = document.querySelector(".transition.back");
    transitionfront = document.querySelector(".transition.front")

    timer.addEventListener("animationiteration", progressSlides, false);
    transitionback.addEventListener("animationend", clearTransitionClasses, false);

    frames[0].onload = function()
    {
        timer.classList.add("timer");
        timer.parentElement.classList.add("slideUp");

        curSlide = frames.length - 1;
        progressSlides();
    };
}

function progressSlides()
{
    transitionback.classList.add("slide");
    transitionfront.classList.add("slide");

    setTimeout(function() {
        frames[curSlide].style.display = "none";
        curSlide = (curSlide + 1) % frames.length;
        frames[curSlide].style.display = "block";
    }, 1000);
}

function clearTransitionClasses(e)
{
    if (e.animationName === "slideout")
    {
        transitionback.classList.remove("slide");
        transitionfront.classList.remove("slide");
    }
}

function handleKeypress(e)
{
    if (e.key == " ")
    {
        if (document.querySelector("#timer").classList.contains("timer"))
        {
            document.querySelector("#timer").classList.remove("timer");
        }
        else
        {
            document.querySelector("#timer").classList.add("timer");
        }
    }
    else if (e.key == "Enter")
    {
        document.querySelector("#timer").classList.remove("timer");
        progressSlides();

        setTimeout(function() {
                document.querySelector("#timer").classList.add("timer");
            }, 10);
    }
}