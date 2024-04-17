var timer = 0;
var timeInfo = setInterval(()=>{
    timer++;
    console.log(timer);
}, 1000)


var tl = gsap.timeline();

gsap.to(".ray", {rotate: -180, duration: 3, repeat:(4), delay: 0, onComplete(){
    console.log("Finish", timer);
    clearInterval(timeInfo);
}})

tl.to(".logo", {opacity: 1, delay: 0.2})
tl.to(".model", {opacity: 1, delay: -0.1})
tl.to(".frame1_copy1", {left: 0, ease: "back.out(0.8)"})
tl.to(".frame1_copy2", {left: 0, ease: "back.out(0.8)", delay: -0.2})
tl.to(".cta", {left: 0, delay: -0.2})
tl.to(".frame1_copy1, .frame1_copy2", {opacity: 0, delay: 2})
tl.to(".frame1_copy2_1", {scale: 1, opacity: 1})
tl.to(".model, .frame1_copy1, .frame1_copy2, .frame1_copy2_1, .bg2", {opacity: 0, delay: 2})
tl.to(".bg3, .circle_2, .teeth", {opacity: 1, delay: -0.5})
tl.to(".frame2_copy1", {scale: 1, opacity: 1})
tl.to(".frame2_copy1", { opacity: 0, delay: 1})
tl.to(".expert_white", {scale: 1, opacity: 1})
tl.to(".teeth", {opacity: 0, delay: -0.2})
tl.to(".packshot", {left: 0, duration: 0.2})