const right = document.querySelector(".right")
const left = document.querySelector(".left")
const slider = document.querySelector(".slider")
const images = document.querySelectorAll(".image")
const bottom = document.querySelector(".bottom")

let imgNumber = 1
const length = images.length 

const nextSlide = ()=>{
    slider.style.transform = `translateX(-${imgNumber * 300}px)`;
    imgNumber++;
   pointIndeChanging()
}
const prevSlide = ()=>{
    slider.style.transform = `translateX(-${(imgNumber-2) * 300}px)`;
    imgNumber--;
   pointIndeChanging()
}

const firstSlide = ()=>{
    slider.style.transform = `translateX(-0px)`;
    imgNumber = 1
   pointIndeChanging()
}
const lastSlide = ()=>{
    slider.style.transform = `translateX(-${(length -1) * 300 }px)`;
    imgNumber = length
   pointIndeChanging()
}
right.addEventListener("click", ()=>{
 imgNumber < length ? nextSlide() : firstSlide()
}) ;

left.addEventListener("click", ()=>{
    imgNumber > 1 ?  prevSlide() : lastSlide()
})

for(let i = 0 ; i < length; i++){
   const div =  document.createElement('div')
   div.className = "button"
   bottom.appendChild(div)
}

const buttons  = document.querySelectorAll(".button")
buttons[0].style.backgroundColor = "white"


const resetBg = () => {
    buttons.forEach((button) =>{
        button.style.backgroundColor = "transparent"
    })
}

const pointIndeChanging = () =>{
    resetBg()
    buttons[imgNumber-1].style.backgroundColor = "white"
}

buttons.forEach((button, i)=> {
    button.addEventListener("click", ()=>{
        slider.style.transform = `translateX(-${i * 300}px)`;
        imgNumber = i+1
        pointIndeChanging()
    })
})