gsap.to("#nav",{
    backgroundColor: "#000",
    duration: 1,
    paddingTop: "40px",
    height: "100px",
    scrollTrigger:{
        trigger: "#nav",
        scroll:"body",
        start:"top -10%",
        end:"top -7%",
        scrub: 1
    }
})

gsap.to(".back",{
    backgroundColor: "#000",
    scrollTrigger:{
        trigger:".back",
        scroller:"body",
        start:"top -25%",
        end: "top -70%",
        scrub: 2
    }
})

gsap.from(".main,.NextInfo",{
    y:70,
    opacity:0,
    duration:1,
    stagger:0.6,
    scrollTrigger:{
        trigger:".main,.NextInfo",
        scroller:"body",
        start:"top 60%",
        end:"top 58%",
        scrub:2
    }
})

gsap.from("#colon1",{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        start:"top 55%",
        end:"top 45%",
        scrub:4
    }
})

gsap.from("#colon2",{
    y:70,
    x:70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        start:"top 55%",
        end:"top 45%",
        scrub:4
    }
})
