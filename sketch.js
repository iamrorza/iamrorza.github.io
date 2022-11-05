
let mainNameTextSize = 200
let clickedOn =''
let clickedOnTime = 0
let R, o, r, y
let letters = []

function preload(){

}
function setup(){
    createCanvas(windowWidth, windowHeight);

    let winXMin = windowWidth * 0.25
    let winXMax = windowWidth * 0.75
    let y = mainNameTextSize * 1.5

    R = new Letter('R',winXMin, y,3000)
    o = new Letter('o', winXMin + ((1/3)*(winXMax-winXMin)) ,y,2000)
    r = new Letter('r',winXMin + ((2/3)*(winXMax-winXMin)),y,2000)
    y = new Letter('y',winXMax,y,2000)

    letters.push(R, o ,r, y)
    console.log(letters)
}
function draw(){
    background(255)
    textSize(100)
    textAlign(CENTER)
    fill(0)

    lettersRory()

    if(clickedOn === 'R')RAnimation()
    if(clickedOn === 'r')SmallRAnimation()
}
function lettersRory(){
    letters.forEach((let)=>let.show())
}
function isOver(){
    let over = ''
    letters.forEach((let)=>{
        if(let.distanceToMouse() < 100){
            console.log(let.val)
            over = let.val
        }
    })
    return over
}
function mousePressed(){
    
    let over = isOver()
    if(over !== ''){
        clickedOn = over
        clickedOnTime = millis()
    } else{
        clickedOn = ''
    }
}
class Letter{
    constructor(val, x ,y, at){
        this.val = val
        this.x = x
        this.y = y
        
        this.animationTime = at
        this.fill = color(0)
    }
    distanceToMouse(){
        return(abs(dist(this.x, this.y, mouseX, mouseY)))
    }
    show(){
        fill(this.fill)
        text(this.val, this.x,this.y)
    }
}

function clickToRef(){
    location.href = "http://localhost:3000"
}