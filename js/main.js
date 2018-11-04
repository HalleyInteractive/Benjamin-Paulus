const objects = {
    scroll_btn: document.getElementById('scroll-down-btn')
}

function getScrollPercent() {
    return (document.documentElement.scrollTop || document.body.scrollTop) / ((document.documentElement.scrollHeight || document.body.scrollHeight) - document.documentElement.clientHeight);
}

function setScrollButtonOpacity () {
    objects.scroll_btn.style.opacity = 1 - getScrollPercent();
}

document.addEventListener("scroll", setScrollButtonOpacity);
objects.scroll_btn.addEventListener('click', () => {
    window.scroll({
        top: (document.documentElement.scrollHeight || document.body.scrollHeight),
        behavior: 'smooth'
      });
});

setScrollButtonOpacity();