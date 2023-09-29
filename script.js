gsap.to("#nav",{
    backgroundColor: "#000",
    duration: 1,
    paddingTop: "40px",
    height: "100px",
    scrollTrigger:{
        trigger: "#nav",
        scroll:"body",
        markers:true,
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
        markers: true,
        start:"top -100vh",
        end: "top -100%",
        scrub: 2
    }
})