var scrollDownButton = document.getElementById('scroll-down-button');
var socialIconsTop = document.getElementById("social-media-top");
var socialIconsFooter = document.getElementById("social-media-footer");
var feather = document.getElementById("feather");
var animationInterval = [];
var docElm = document.documentElement;
var pos = ( document.body.scrollTop || docElm.scrollTop || docElm.scrollTop) / ( docElm.scrollHeight - (docElm.clientHeight + 50) );

var hammertime = new Hammer(scrollDownButton);
hammertime.on('tap', clickHandler);

window.addEventListener('scroll', scrollHandler);

function clickHandler(e) {
    animationInterval.push(setInterval(scrollToBottom, 5));
}

function scrollToBottom() {
    pos = ( document.body.scrollTop || docElm.scrollTop || docElm.scrollTop) / ( docElm.scrollHeight - (docElm.clientHeight + 50) );
    if (pos >= 1) {
    for(var i = 0; i < animationInterval.length; i++) {
        clearInterval(animationInterval[i]);
    }
    } else {
    document.body.scrollTop += 10;
    }
}

function scrollHandler() {
    pos = ( document.body.scrollTop || docElm.scrollTop || docElm.scrollTop) / ( docElm.scrollHeight - (docElm.clientHeight + 50) );
    socialIconsTop.style.opacity = 1 - pos;
    socialIconsFooter.style.opacity = pos;
    scrollDownButton.style.opacity = 1 - pos;
    feather.style.top = (30 + (pos * 5)).toString() + "%";
    feather.style.left = (20 - (pos * 2)).toString() + "%";
    feather.style.transform = "rotate(" + (-15 + (15 * pos)).toString() + "deg)";
}

socialIconsTop.style.opacity = 1 - pos;
socialIconsFooter.style.opacity = pos;