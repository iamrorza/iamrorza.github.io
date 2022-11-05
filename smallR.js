function SmallRAnimation(){
    let POffset = -60
    let oOffset = 60
    let jOffset = 145
    let eOffset = 230
    let cOffset = 315
    let tOffset = 400
    let sOffset = 485

  
    let resumeLetters = ['P','o','j','e','c','t','s']
    let pcDivided = 0.11
    if(millis() < clickedOnTime + r.animationTime){
        let percent = (millis()-clickedOnTime)/r.animationTime
        for(var i = 1; i <=resumeLetters.length; ++i){
            if(percent > (i-1) * pcDivided && percent < i * pcDivided)fill(0, 255 * (percent%pcDivided)/pcDivided)
            else if(percent > (i-1) * pcDivided )fill(0)
            else noFill()
            let y
            
            if(i === 1)y = -60
            else y = 85 * (i-1) - 25
            text(resumeLetters[i-1],r.x, r.y + y)
        }
    }
    else{
        text("P", r.x, r.y + POffset)
        text("o", r.x, r.y + oOffset)
        text("j", r.x, r.y + jOffset)
        text("e", r.x, r.y + eOffset)
        text("c", r.x, r.y + cOffset)
        text("t", r.x, r.y + tOffset)
        text("s", r.x, r.y + sOffset)
    }
}