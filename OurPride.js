function init() {
    gsap.registerPlugin(ScrollTrigger);
    const locoScroll = new LocomotiveScroll({
        el: document.querySelector(".main"),
        smooth: true
    });
    locoScroll.on("scroll", ScrollTrigger.update);
    ScrollTrigger.scrollerProxy(".main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
    });
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();
}

init()

var cur = document.querySelector(".cursor")
var main = document.querySelector(".main")
main.addEventListener("mousemove",function(e){
    cur.style.left = e.x + "px"
    cur.style.top = e.y + "px"
})

var tl1 = gsap.timeline({
    scrollTrigger: {
        trigger: ".page1 h1",
        scroller: ".main",
        start: "top 30%",
        end: "top 0%",
        scrub: 2
    }
})

tl1.to(".page1 h1", {
    x: -70,
},"a")

tl1.to(".page1 h2",{
    x: 70
},"a")

tl1.to(".page1 img",{
    width: "90%"
},"a")

var tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".page1 h1",
        scroller: ".main",
        start: "top -150%",
        end: "top 130%",
        scrub: 3
    }
})

tl2.to(".main",{
    backgroundColor: "#C3BCB2"
})

const lerp = (x, y, a) => x * (1 - a) + y * a;

var f = document.querySelector(".f");

f.addEventListener("mousemove", function(dets){

    var dims = f.getBoundingClientRect();
    var xstart = dims.x;
    var xend = dims.x + dims.width;

    var zeroone = gsap.utils.mapRange(xstart, xend, 0, 1, dets.clientX);

gsap.to(cur,{
    scale: 8,
    duration: 0.5
})

gsap.to(".f",{
    x: lerp(-50, -50, zeroone),
    duration: .5
})

})

f.addEventListener("mouseleave", function(dets){
    gsap.to(cur,{
        scale:1
    })
    gsap.to(".f",{
        x:0,
        duration:.5
    })
})



var f1 = document.querySelector(".f1");

f1.addEventListener("mousemove", function(dets){

    var dims1 = f1.getBoundingClientRect();
    var xstart1 = dims1.x;
    var xend1 = dims1.x + dims1.width;

    var zeroone1 = gsap.utils.mapRange(xstart1, xend1, 0, 1, dets.clientX);

gsap.to(cur,{
    scale: 8,
    duration: 0.5
})

gsap.to(".f1",{
    x: lerp(-50, -50, zeroone1),
    duration: .5
})

})

f1.addEventListener("mouseleave", function(dets){
    gsap.to(cur,{
        scale:1
    })
    gsap.to(".f1",{
        x:0,
        duration:.5
    })
})




var f2 = document.querySelector(".f2");

f2.addEventListener("mousemove", function(dets){

    var dims2 = f2.getBoundingClientRect();
    var xstart2 = dims2.x;
    var xend2 = dims2.x + dims2.width;

    var zeroone2 = gsap.utils.mapRange(xstart2, xend2, 0, 1, dets.clientX);

gsap.to(cur,{
    scale: 8,
    duration: 0.5
})

gsap.to(".f2",{
    x: lerp(-50, -50, zeroone2),
    duration: .5
})

})

f2.addEventListener("mouseleave", function(dets){
    gsap.to(cur,{
        scale:1
    })
    gsap.to(".f2",{
        x:0,
        duration:.5
    })
})


function Wiki(){
    window.open("https://en.wikipedia.org/wiki/Culture_of_India");
}

function Sand(){
    window.open("https://www.scienceandnonduality.com/");
}

function Iskcon(){
    window.open("https://www.iskcon.org/");
}

