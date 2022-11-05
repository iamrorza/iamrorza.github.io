function RAnimation(){
    let e1Offset = 85
    let sOffset = 170
    let uOffset = 255
    let mOffset = 340
    let e2Offset = 425

    let resumeLetters = ['e','s','u','m','e']
    let pcDivided = 0.16

    let textsize = 100 * (windowWidth / 1080)

    if(millis() < clickedOnTime + R.animationTime * 0.75){
        let percent = (millis()-clickedOnTime)/(R.animationTime * 0.75)
        for(var i = 1; i <=resumeLetters.length; ++i){
            if(percent > (i-1) * pcDivided && percent < i * pcDivided)fill(0, 255 * (percent%pcDivided)/pcDivided)
            else if(percent > (i-1) * pcDivided )fill(0)
            else noFill()
            text(resumeLetters[i-1],R.x, R.y + 85 * i)
        }
    }
    else if(millis() < clickedOnTime + R.animationTime){
        let percent = (millis()-clickedOnTime)/R.animationTime
        let current = percent - 0.75
        let currentLetter = letters.length - floor(current/0.05)
        for(var i = 1; i <= resumeLetters.length; ++i){
            if(i === currentLetter +1){
                textSize(textsize * 1.3)
            } else {
                textSize(textsize)
            }
            text(resumeLetters[i-1],R.x, R.y + 85 * i)
        }
    }
    else{
        text("e", R.x, R.y + e1Offset)
        text("s", R.x, R.y + sOffset)
        text("u", R.x, R.y + uOffset)
        text("m", R.x, R.y + mOffset)
        text("e", R.x, R.y + e2Offset)
    }
}
